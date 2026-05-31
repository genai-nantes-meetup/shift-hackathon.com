import { useScroll, useSpring, motion } from 'motion/react';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  return (
    <motion.div style={{
      scaleX, position: 'fixed', top: 0, left: 0, right: 0,
      height: '3px', background: '#2aebf5',
      transformOrigin: '0%', zIndex: 9999,
    }} />
  );
}
