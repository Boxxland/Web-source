import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Send, FileText } from 'lucide-react';

export function Scene3() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 200),
      setTimeout(() => setPhase(2), 600),
      setTimeout(() => setPhase(3), 1200),
      setTimeout(() => setPhase(4), 1800),
      setTimeout(() => setPhase(5), 4500),
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  return (
    <motion.div 
      className="absolute inset-0"
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ y: '100%', opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="absolute inset-0 flex flex-row-reverse items-center justify-between px-[10vw]">
        
        {/* Right Side (Content) */}
        <div className="w-[45vw] z-10 pl-[5vw]">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={phase >= 1 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="flex gap-4 mb-8"
          >
            <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-white border border-white/20">
              <Send size={32} />
            </div>
            <div className="w-16 h-16 rounded-2xl bg-brand/20 flex items-center justify-center text-brand border border-brand/30">
              <FileText size={32} />
            </div>
          </motion.div>

          <motion.h2 
            className="text-[5vw] font-black text-white leading-[1.1] tracking-tight mb-6"
            style={{ fontFamily: 'var(--font-display)' }}
            initial={{ opacity: 0, x: 40 }}
            animate={phase >= 2 ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            INSTANT <br/>TRANSFERS & <br/>
            <span className="text-brand">PRO RECEIPTS</span>
          </motion.h2>

          <motion.div 
            className="space-y-4 text-[1.8vw] text-white/80"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={phase >= 3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.5 }}
            >
              โอนเงินด้วยคำสั่ง <code className="bg-surface-light text-brand px-2 py-1 rounded font-mono text-[1.5vw]">/transfer</code>
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={phase >= 4 ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.5 }}
            >
              สร้างสลิปอัตโนมัติสวยงามด้วยฟอนต์ Itim 
            </motion.p>
          </motion.div>
        </div>

        {/* Left Side (Receipt Image) */}
        <div className="w-[45vw] h-full flex items-center justify-center relative">
          <motion.div
            className="w-full absolute"
            initial={{ opacity: 0, y: 100, rotate: -5 }}
            animate={phase >= 2 ? { opacity: 1, y: 0, rotate: 0 } : { opacity: 0, y: 100, rotate: -5 }}
            transition={{ duration: 1, type: "spring", bounce: 0.3 }}
          >
            <img 
              src={`${import.meta.env.BASE_URL}images/receipt-mockup.png`} 
              alt="Receipt" 
              className="w-full max-h-[80vh] object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
            />
          </motion.div>
        </div>

      </div>
    </motion.div>
  );
}
