import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Bot } from 'lucide-react';

export function Scene1() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 200),
      setTimeout(() => setPhase(2), 600),
      setTimeout(() => setPhase(3), 1400),
      setTimeout(() => setPhase(4), 3200),
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  return (
    <motion.div 
      className="absolute inset-0 flex items-center justify-center flex-col"
      initial={{ clipPath: 'circle(0% at 50% 50%)' }}
      animate={{ clipPath: 'circle(150% at 50% 50%)' }}
      exit={{ opacity: 0, scale: 1.1, filter: 'blur(20px)' }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="absolute inset-0 w-full h-full">
        <motion.div 
          className="absolute right-[10%] top-[20%] w-[35vw] h-[35vw] opacity-80 mix-blend-screen"
          initial={{ opacity: 0, scale: 0.8, x: 50, rotateY: 45 }}
          animate={phase >= 1 ? { opacity: 1, scale: 1, x: 0, rotateY: 0 } : { opacity: 0, scale: 0.8, x: 50, rotateY: 45 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <img src={`${import.meta.env.BASE_URL}images/bot-avatar.png`} alt="Bot Avatar" className="w-full h-full object-contain drop-shadow-[0_0_40px_rgba(0,204,102,0.6)]" />
        </motion.div>
      </div>

      <div className="absolute left-[10%] top-1/2 -translate-y-1/2 w-[50vw] text-left">
        <motion.div 
          className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-brand/10 border border-brand/30 text-brand mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={phase >= 2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <Bot className="w-5 h-5" />
          <span className="text-[1.2vw] font-bold tracking-widest uppercase">DISCORD ECONOMY</span>
        </motion.div>

        <h1 className="text-[6.5vw] font-black leading-[0.9] tracking-tighter text-white mb-6 uppercase" style={{ fontFamily: 'var(--font-display)' }}>
          <span className="block overflow-hidden">
            <motion.span className="block"
              initial={{ y: '100%' }}
              animate={phase >= 2 ? { y: '0%' } : { y: '100%' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}>
              Next-Gen
            </motion.span>
          </span>
          <span className="block overflow-hidden text-brand">
            <motion.span className="block"
              initial={{ y: '100%' }}
              animate={phase >= 2 ? { y: '0%' } : { y: '100%' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}>
              Fintech Bot
            </motion.span>
          </span>
        </h1>

        <motion.p 
          className="text-[2vw] text-text-muted leading-snug"
          style={{ fontFamily: 'var(--font-body)' }}
          initial={{ opacity: 0, x: -30 }}
          animate={phase >= 3 ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          ระบบเศรษฐกิจครบวงจรในดิสคอร์ด<br/>
          เทรดหุ้น โอนเงิน พร้อมใบเสร็จสุดพรีเมียม
        </motion.p>
      </div>
    </motion.div>
  );
}
