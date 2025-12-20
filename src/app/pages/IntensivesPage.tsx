import { motion } from 'motion/react';
import { ElementParticles } from '../components/ElementParticles';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Home, Zap, Calendar, Users } from 'lucide-react';

interface Intensive {
  id: string;
  title: string;
  description: string;
  date: string;
  status: 'upcoming' | 'ongoing' | 'completed';
  gradient: string;
}

const mockIntensives: Intensive[] = [
  {
    id: '1',
    title: 'Техники работы над собой',
    description: 'Базовый курс ThetaHealing, адаптированный под работу над собой с авторскими наработками',
    date: '5 января',
    status: 'upcoming',
    gradient: 'from-cyan-500/20 via-teal-500/20 to-cyan-600/20'
  },
];

export default function IntensivesPage() {
  const navigate = useNavigate();
  const [activeElement, setActiveElement] = useState<'water' | 'air' | 'earth' | 'fire'>('fire');

  useEffect(() => {
    const elements: Array<'water' | 'air' | 'earth' | 'fire'> = ['water', 'air', 'earth', 'fire'];
    let currentIndex = 3;

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

      {/* Dynamic gradient overlay - Cyan theme */}
      <motion.div 
        className="absolute inset-0"
        animate={{
          background: [
            'radial-gradient(circle at 20% 30%, rgba(6,182,212,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(34,211,238,0.2) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 20%, rgba(34,211,238,0.3) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(6,182,212,0.2) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 30%, rgba(6,182,212,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(34,211,238,0.2) 0%, transparent 50%)',
          ]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Floating blobs - Cyan theme */}
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

      <ElementParticles element={activeElement} count={12} />

      {/* Back to Club Home button */}
      <motion.button
        onClick={() => navigate('/')}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        whileHover={{ scale: 1.05, x: -4 }}
        whileTap={{ scale: 0.95 }}
        className="fixed top-4 left-4 sm:top-6 sm:left-6 z-50 flex items-center gap-2 px-4 py-2.5 sm:px-6 sm:py-3
          backdrop-blur-xl bg-white/10 border border-white/20 rounded-full
          text-white font-light hover:bg-white/20
          transition-all duration-300 shadow-lg hover:shadow-xl"
      >
        <Home className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={1.5} />
        <span className="hidden sm:inline">В клуб</span>
      </motion.button>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-28 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <motion.div
            className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mb-6 sm:mb-8
              rounded-3xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-2xl"
            animate={{
              rotate: [0, -10, 10, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Zap className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white" strokeWidth={1.5} />
          </motion.div>

          <motion.h1 
            className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl mb-4 sm:mb-6 text-white tracking-tight px-4" 
            style={{ fontWeight: 100 }}
          >
            Интенсивы
          </motion.h1>
          <motion.p 
            className="text-base sm:text-xl lg:text-2xl text-white/90 font-light tracking-wide max-w-2xl mx-auto px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            практики, навыки, опыт
          </motion.p>
        </motion.div>

        {/* Intensives List */}
        <div className="space-y-4 sm:space-y-6 max-w-4xl mx-auto">
          {mockIntensives.map((intensive, index) => (
            <motion.div
              key={intensive.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.1 * index,
                ease: [0.16, 1, 0.3, 1]
              }}
              whileHover={{ scale: 1.01, x: 4 }}
              className={`relative group overflow-hidden rounded-3xl p-6 sm:p-8 lg:p-10
                backdrop-blur-xl bg-gradient-to-br ${intensive.gradient}
                border border-white/20 shadow-2xl
                cursor-pointer transition-all duration-500
                hover:border-white/40 hover:shadow-[0_20px_60px_rgba(255,255,255,0.15)]`}
            >
              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100"
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
                }}
                animate={{
                  x: ['-100%', '200%'],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
              />

              <div className="relative z-10">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6">
                  <div className="flex-1">
                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl lg:text-3xl mb-2 sm:mb-3 text-white" style={{ fontWeight: 300 }}>
                      {intensive.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm sm:text-base lg:text-lg mb-3 sm:mb-4 text-white/80 font-light leading-relaxed">
                      {intensive.description}
                    </p>

                    {/* Info */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 text-white/70">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" strokeWidth={1.5} />
                        <span className="text-xs sm:text-sm font-light">{intensive.date}</span>
                      </div>
                    </div>
                  </div>

                  {/* Status badge */}
                  <div className="inline-flex items-center px-4 py-2 sm:px-6 sm:py-3 rounded-full
                    bg-white/10 backdrop-blur-sm border border-white/20 self-start sm:self-center">
                    <span className="text-xs sm:text-sm text-white/90 font-light">Скоро</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}