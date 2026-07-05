import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Terminal, Sparkles } from 'lucide-react';

export function Scene5() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 400),
      setTimeout(() => setPhase(2), 1000),
      setTimeout(() => setPhase(3), 1800),
      setTimeout(() => setPhase(4), 3800),
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  return (
    <motion.div 
      className="absolute inset-0 flex items-center justify-center bg-bg/80 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, filter: 'blur(30px)' }}
      transition={{ duration: 1 }}
    >
      <div className="text-center w-[70vw] relative z-10">
        
        <motion.div
          className="mx-auto w-32 h-32 rounded-3xl bg-brand flex items-center justify-center shadow-[0_0_80px_rgba(0,204,102,0.5)] mb-10"
          initial={{ scale: 0, rotate: -180 }}
          animate={phase >= 1 ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
          transition={{ type: 'spring', stiffness: 200, damping: 15 }}
        >
          <Terminal size={64} className="text-bg" />
        </motion.div>

        <motion.h2 
          className="text-[7vw] font-black text-white leading-none tracking-tighter mb-8 uppercase"
          style={{ fontFamily: 'var(--font-display)' }}
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={phase >= 2 ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.9, y: 30 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          INVITE <span className="text-brand">THE BOT</span><br/>TODAY
        </motion.h2>

        <motion.div 
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-surface-light border border-white/10"
          initial={{ opacity: 0, y: 20 }}
          animate={phase >= 3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, type: 'spring' }}
        >
          <Sparkles className="text-brand" size={24} />
          <span className="text-[1.8vw] font-bold text-white tracking-wide" style={{ fontFamily: 'var(--font-body)' }}>
            ยกระดับเซิร์ฟเวอร์ของคุณได้แล้ววันนี้
          </span>
        </motion.div>

      </div>
    </motion.div>
  );
}
