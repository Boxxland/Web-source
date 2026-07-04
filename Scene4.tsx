import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Wallet, History } from 'lucide-react';

export function Scene4() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 300),
      setTimeout(() => setPhase(2), 800),
      setTimeout(() => setPhase(3), 1400),
      setTimeout(() => setPhase(4), 4200),
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  return (
    <motion.div 
      className="absolute inset-0"
      initial={{ y: '-100%' }}
      animate={{ y: 0 }}
      exit={{ scale: 0.5, opacity: 0, filter: 'blur(20px)' }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center px-[10vw]">
        
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={phase >= 1 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 15 }}
          className="flex gap-6 mb-8"
        >
          <div className="w-20 h-20 rounded-full bg-brand/20 flex items-center justify-center text-brand border border-brand/40 shadow-[0_0_30px_rgba(0,204,102,0.3)]">
            <Wallet size={40} />
          </div>
          <div className="w-20 h-20 rounded-full bg-surface-light flex items-center justify-center text-white border border-white/10">
            <History size={40} />
          </div>
        </motion.div>

        <motion.h2 
          className="text-[6vw] font-black text-center text-white leading-none tracking-tight mb-8 uppercase"
          style={{ fontFamily: 'var(--font-display)' }}
          initial={{ opacity: 0, y: 50, rotateX: -90 }}
          animate={phase >= 2 ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 50, rotateX: -90 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ transformOrigin: "bottom center" }}
        >
          Portfolio & <span className="text-brand">History</span>
        </motion.h2>

        <div className="grid grid-cols-2 gap-8 w-full max-w-[70vw]">
          <motion.div 
            className="bg-surface/60 backdrop-blur-md p-8 rounded-3xl border border-white/5"
            initial={{ opacity: 0, x: -50 }}
            animate={phase >= 3 ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h3 className="text-[2vw] font-bold text-brand mb-4" style={{ fontFamily: 'var(--font-display)' }}>PORTFOLIO</h3>
            <p className="text-[1.5vw] text-white/80" style={{ fontFamily: 'var(--font-body)' }}>
              เช็คยอดเงินและมูลค่าหุ้นในพอร์ตของคุณได้ตลอดเวลา ครบจบในคำสั่งเดียว
            </p>
          </motion.div>

          <motion.div 
            className="bg-surface/60 backdrop-blur-md p-8 rounded-3xl border border-white/5"
            initial={{ opacity: 0, x: 50 }}
            animate={phase >= 3 ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          >
            <h3 className="text-[2vw] font-bold text-white mb-4" style={{ fontFamily: 'var(--font-display)' }}>HISTORY</h3>
            <p className="text-[1.5vw] text-white/80" style={{ fontFamily: 'var(--font-body)' }}>
              ดูประวัติการทำรายการย้อนหลัง มีระบบแบ่งหน้า (Pagination) ใช้งานง่าย
            </p>
          </motion.div>
        </div>

      </div>
    </motion.div>
  );
}
