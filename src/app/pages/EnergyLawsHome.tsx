import { motion } from 'motion/react';
import { spheres } from '../data/spheres';
import { SphereCard } from '../components/SphereCard';
import { ElementParticles } from '../components/ElementParticles';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Home } from 'lucide-react';

export default function EnergyLawsHome() {
  const navigate = useNavigate();
  const [activeElement, setActiveElement] = useState<'water' | 'air' | 'earth' | 'fire'>('water');

  useEffect(() => {
    const elements: Array<'water' | 'air' | 'earth' | 'fire'> = ['water', 'air', 'earth', 'fire'];
    let currentIndex = 0;

    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % elements.length;
      setActiveElement(elements[currentIndex]);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[#2E5C8A] via-[#4A90E2] to-[#5B9BD5]">
      {/* Animated grid pattern */}
      <motion.div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
        animate={{
          opacity: [0.05, 0.15, 0.05]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Dynamic gradient overlay with accent colors */}
      <motion.div 
        className="absolute inset-0"
        animate={{
          background: [
            'radial-gradient(circle at 20% 30%, rgba(139,92,246,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(236,72,153,0.2) 0%, transparent 50%), radial-gradient(circle at 50% 50%, rgba(6,182,212,0.2) 0%, transparent 60%)',
            'radial-gradient(circle at 80% 20%, rgba(34,211,238,0.3) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(167,139,250,0.2) 0%, transparent 50%), radial-gradient(circle at 60% 40%, rgba(244,114,182,0.2) 0%, transparent 60%)',
            'radial-gradient(circle at 50% 50%, rgba(236,72,153,0.2) 0%, transparent 50%), radial-gradient(circle at 30% 70%, rgba(139,92,246,0.3) 0%, transparent 50%), radial-gradient(circle at 70% 30%, rgba(6,182,212,0.2) 0%, transparent 60%)',
            'radial-gradient(circle at 20% 30%, rgba(139,92,246,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(236,72,153,0.2) 0%, transparent 50%), radial-gradient(circle at 50% 50%, rgba(6,182,212,0.2) 0%, transparent 60%)',
          ]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Geometric floating shapes with vibrant colors */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 rounded-full"
        style={{
          background: 'linear-gradient(135deg, rgba(139,92,246,0.4), rgba(167,139,250,0.3))',
          filter: 'blur(40px)',
        }}
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.3, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute top-1/4 right-20 w-96 h-96"
        style={{
          background: 'linear-gradient(135deg, rgba(236,72,153,0.3), rgba(244,114,182,0.25))',
          filter: 'blur(60px)',
          borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
        }}
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
          scale: [1, 1.4, 1],
          rotate: [0, -90, 0],
          borderRadius: [
            '30% 70% 70% 30% / 30% 30% 70% 70%',
            '70% 30% 30% 70% / 70% 70% 30% 30%',
            '30% 70% 70% 30% / 30% 30% 70% 70%',
          ]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute bottom-20 left-1/4 w-[450px] h-[450px]"
        style={{
          background: 'linear-gradient(135deg, rgba(6,182,212,0.35), rgba(34,211,238,0.25))',
          filter: 'blur(50px)',
          borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
        }}
        animate={{
          x: [0, 60, 0],
          y: [0, -40, 0],
          scale: [1, 1.2, 1],
          rotate: [0, 120, 240, 360],
          borderRadius: [
            '60% 40% 30% 70% / 60% 30% 70% 40%',
            '40% 60% 70% 30% / 40% 70% 30% 60%',
            '60% 40% 30% 70% / 60% 30% 70% 40%',
          ]
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Additional colorful blobs */}
      <motion.div
        className="absolute top-1/3 left-1/2 w-80 h-80"
        style={{
          background: 'linear-gradient(135deg, rgba(245,158,11,0.2), rgba(251,191,36,0.15))',
          filter: 'blur(55px)',
          borderRadius: '50% 50% 30% 70% / 40% 60% 30% 50%',
        }}
        animate={{
          x: [0, -50, 0],
          y: [0, 70, 0],
          scale: [1, 1.25, 1],
          rotate: [0, -180, -360],
          borderRadius: [
            '50% 50% 30% 70% / 40% 60% 30% 50%',
            '30% 70% 50% 50% / 60% 40% 50% 30%',
            '50% 50% 30% 70% / 40% 60% 30% 50%',
          ]
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Glowing particles with colors */}
      <motion.div
        className="absolute top-40 right-1/4 w-3 h-3 rounded-full bg-purple-300/70"
        animate={{
          y: [0, -100, 0],
          opacity: [0.3, 1, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-1/3 left-1/3 w-2 h-2 rounded-full bg-pink-300/60"
        animate={{
          y: [0, 80, 0],
          opacity: [0.2, 0.8, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/4 w-4 h-4 rounded-full bg-cyan-300/50"
        animate={{
          x: [0, 60, 0],
          opacity: [0.2, 0.6, 0.2],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4
        }}
      />
      <motion.div
        className="absolute top-2/3 right-1/3 w-3 h-3 rounded-full bg-amber-300/60"
        animate={{
          x: [0, -50, 0],
          y: [0, 40, 0],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      {/* Subtle animated particles */}
      <ElementParticles element={activeElement} count={12} />

      {/* Back to Club Home button */}
      <motion.button
        onClick={() => navigate('/')}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        whileHover={{ scale: 1.05, x: -4 }}
        whileTap={{ scale: 0.95 }}
        className="fixed top-6 left-6 z-50 flex items-center gap-2 px-6 py-3
          backdrop-blur-xl bg-white/10 border border-white/20 rounded-full
          text-white font-light hover:bg-white/20
          transition-all duration-300 shadow-lg hover:shadow-xl"
      >
        <Home className="w-5 h-5" strokeWidth={1.5} />
        <span className="hidden sm:inline">В клуб</span>
      </motion.button>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16 sm:mb-24"
        >
          <motion.h1 
            className="text-6xl sm:text-8xl lg:text-9xl mb-6 text-white tracking-tight relative inline-block" 
            style={{ fontWeight: 100 }}
            animate={{
              textShadow: [
                '0 0 30px rgba(255,255,255,0.5), 0 0 60px rgba(172,198,239,0.3)',
                '0 0 50px rgba(255,255,255,0.7), 0 0 80px rgba(172,198,239,0.5)',
                '0 0 30px rgba(255,255,255,0.5), 0 0 60px rgba(172,198,239,0.3)',
              ]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            2026
            {/* Decorative line under title */}
            <motion.div
              className="absolute -bottom-3 left-1/2 -translate-x-1/2 h-1 bg-gradient-to-r from-transparent via-white to-transparent"
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: '80%', opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            />
            
            {/* Glowing orbs around title */}
            <motion.div
              className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-white/30 blur-md"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute -bottom-4 -right-4 w-6 h-6 rounded-full bg-white/40 blur-md"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.4, 0.7, 0.4],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
          </motion.h1>
          <motion.p 
            className="text-xl sm:text-2xl text-white/90 font-light tracking-wide max-w-3xl mx-auto leading-relaxed mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            энергетические законы и тренды развития сфер жизни
          </motion.p>
        </motion.div>

        {/* Spheres Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {spheres.map((sphere, index) => (
            <SphereCard
              key={sphere.id}
              id={sphere.id}
              name={sphere.name}
              icon={sphere.icon}
              gradient={sphere.gradient}
              description={sphere.description}
              lawsCount={sphere.laws.length}
              index={index}
            />
          ))}
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 sm:mt-24 text-center"
        >
          <p className="text-sm text-white/70 font-light">
            Выберите сферу жизни для изучения законов
          </p>
        </motion.div>
      </div>
    </div>
  );
}
