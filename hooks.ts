import { useEffect, useState } from 'react';

export function useVideoPlayer({
  durations,
}: {
  durations: Record<string, number>;
}) {
  const sceneKeys = Object.keys(durations);
  const [currentScene, setCurrentScene] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!started) {
      setStarted(true);
      window.startRecording?.();
    }
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const duration = durations[sceneKeys[currentScene]];
    const timer = setTimeout(() => {
      if (currentScene < sceneKeys.length - 1) {
        setCurrentScene(currentScene + 1);
      } else {
        window.stopRecording?.();
        setCurrentScene(0);
      }
    }, duration);
    return () => clearTimeout(timer);
  }, [currentScene, started, durations, sceneKeys]);

  return { currentScene };
}

declare global {
  interface Window {
    startRecording?: () => void;
    stopRecording?: () => void;
  }
}
