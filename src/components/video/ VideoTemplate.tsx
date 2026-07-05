import { motion, AnimatePresence } from 'framer-motion';
import { useVideoPlayer } from '@/lib/video/hooks';
import { Scene1 } from './video_scenes/Scene1';
import { Scene2 } from './video_scenes/Scene2';
import { Scene3 } from './video_scenes/Scene3';
import { Scene4 } from './video_scenes/Scene4';
import { Scene5 } from './video_scenes/Scene5';

const SCENE_DURATIONS = {
  open: 4000,
  trading: 5000,
  transfer: 5500,
  portfolio: 5000,
  close: 4500,
};

export default function VideoTemplate() {
  const { currentScene } = useVideoPlayer({ durations: SCENE_DURATIONS });

  return (
    <div className="relative w-full h-screen overflow-hidden bg-bg">
      {/* Persistent Backgrounds */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src={`${import.meta.env.BASE_URL}images/bg-texture.png`} 
          alt="texture" 
          className="w-full h-full object-cover opacity-20 mix-blend-screen"
        />
        <motion.div
          className="absolute w-[60vw] h-[60vw] rounded-full blur-[100px] opacity-30"
          style={{ background: 'radial-gradient(circle, var(--color-brand), transparent 70%)' }}
          animate={{
            x: ['-20%', '40%', '10%', '-20%'],
            y: ['10%', '-30%', '50%', '10%'],
            scale: [1, 1.2, 0.8, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute w-[40vw] h-[40vw] rounded-full blur-[80px] opacity-20 right-0 bottom-0"
          style={{ background: 'radial-gradient(circle, var(--color-brand-light), transparent 70%)' }}
          animate={{
            x: ['20%', '-50%', '0%', '20%'],
            y: ['-20%', '40%', '-10%', '-20%'],
            scale: [1.2, 0.9, 1.1, 1.2],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      {/* Persistent Midground Element */}
      <motion.div
        className="absolute z-10 w-[2px] bg-brand/50 blur-[1px]"
        animate={{
          left: ['10vw', '80vw', '15vw', '85vw', '50vw'][currentScene],
          top: ['20vh', '15vh', '70vh', '25vh', '10vh'][currentScene],
          height: ['15vh', '60vh', '20vh', '40vh', '80vh'][currentScene],
          opacity: currentScene === 4 ? 0 : 0.8,
          rotate: currentScene === 2 ? 45 : 0
        }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
      />
      
      <motion.div
        className="absolute z-10 hidden sm:block w-32 h-32 border border-brand/20 rounded-2xl"
        animate={{
          left: ['80vw', '10vw', '75vw', '10vw', '45vw'][currentScene],
          top: ['70vh', '70vh', '15vh', '65vh', '45vh'][currentScene],
          rotate: [0, 90, 180, 270, 360][currentScene],
          scale: [1, 1.5, 0.8, 1.2, 0][currentScene],
          opacity: currentScene === 4 ? 0 : 0.3,
        }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Scene Content */}
      <div className="absolute inset-0 z-20">
        <AnimatePresence mode="popLayout">
          {currentScene === 0 && <Scene1 key="open" />}
          {currentScene === 1 && <Scene2 key="trading" />}
          {currentScene === 2 && <Scene3 key="transfer" />}
          {currentScene === 3 && <Scene4 key="portfolio" />}
          {currentScene === 4 && <Scene5 key="close" />}
        </AnimatePresence>
      </div>
    </div>
  );
}
