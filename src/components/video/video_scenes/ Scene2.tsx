import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { TrendingUp, Clock } from 'lucide-react';

export function Scene2() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 300),
      setTimeout(() => setPhase(2), 800),
      setTimeout(() => setPhase(3), 1500),
      setTimeout(() => setPhase(4), 4000),
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  return (
    <motion.div 
      className="absolute inset-0"
      initial={{ opacity: 0, scale: 1.1 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ x: '-100%', opacity: 0, filter: 'blur(10px)' }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="absolute inset-0 flex items-center justify-between px-[10vw]">
        
        {/* Left Side: Content */}
        <div className="w-[45vw] z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={phase >= 1 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="w-16 h-16 rounded-2xl bg-brand/20 flex items-center justify-center text-brand mb-8 border border-brand/30"
          >
            <TrendingUp size={32} />
          </motion.div>

          <motion.h2 
            className="text-[5.5vw] font-black text-white leading-none tracking-tight mb-6"
            style={{ fontFamily: 'var(--font-display)' }}
            initial={{ opacity: 0, y: 40 }}
            animate={phase >= 2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            REAL-TIME<br/>
            <span className="text-brand">STOCK TRADING</span>
          </motion.h2>

          <motion.div 
            className="flex flex-col gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={phase >= 3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-[2.2vw] text-white" style={{ fontFamily: 'var(--font-body)' }}>
              ติดตามตลาดหุ้นแบบเรียลไทม์
            </p>
            <div className="flex items-center gap-3 text-text-muted bg-surface/50 p-4 rounded-xl border border-white/5 backdrop-blur-sm w-fit">
              <Clock className="text-brand" size={24} />
              <span className="text-[1.5vw] font-medium" style={{ fontFamily: 'var(--font-body)' }}>
                อัปเดตข่าวสารภาษาไทยทุก 5 นาที
              </span>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Image/Chart */}
        <div className="w-[45vw] h-full flex items-center justify-center relative">
          <motion.div
            className="w-[120%] absolute"
            initial={{ opacity: 0, x: 100, rotateY: -30, scale: 0.8 }}
            animate={phase >= 1 ? { opacity: 1, x: 0, rotateY: 0, scale: 1 } : { opacity: 0, x: 100, rotateY: -30, scale: 0.8 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ perspective: 1000 }}
          >
            <img 
              src={`${import.meta.env.BASE_URL}images/stock-chart.png`} 
              alt="Stock Chart" 
              className="w-full object-contain drop-shadow-[0_20px_50px_rgba(0,204,102,0.3)]"
              style={{ transformStyle: 'preserve-3d' }}
            />
          </motion.div>
        </div>

      </div>
    </motion.div>
  );
}
