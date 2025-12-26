import { motion } from 'motion/react';
import { ElementParticles } from '../components/ElementParticles';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Home, Moon, Headphones } from 'lucide-react';

interface Meditation {
  id: string;
  title: string;
  url: string;
  gradient: string;
}

interface MeditationCategory {
  id: string;
  title: string;
  meditations: Meditation[];
  gradient: string;
}

const meditationCategories: MeditationCategory[] = [
  {
    id: 'health',
    title: 'Здоровье',
    gradient: 'from-emerald-500/20 via-green-500/20 to-teal-600/20',
    meditations: [
      {
        id: '1',
        title: 'Симптом',
        url: 'https://t.me/c/2747530184/97',
        gradient: 'from-emerald-500/20 via-green-500/20 to-emerald-600/20'
      },
      {
        id: '2',
        title: 'Исцеление',
        url: 'https://t.me/c/2747530184/98',
        gradient: 'from-teal-500/20 via-cyan-500/20 to-teal-600/20'
      }
    ]
  },
  {
    id: 'relationships',
    title: 'Отношения',
    gradient: 'from-pink-500/20 via-rose-500/20 to-pink-600/20',
    meditations: [
      {
        id: '3',
        title: 'Треугольник',
        url: 'https://t.me/c/2747530184/107',
        gradient: 'from-pink-500/20 via-rose-500/20 to-pink-600/20'
      }
    ]
  }
];

export default function MeditationsPage() {
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

      {/* Dynamic gradient overlay - Moon/spiritual theme */}
      <motion.div 
        className="absolute inset-0"
        animate={{
          background: [
            'radial-gradient(circle at 20% 30%, rgba(167,139,250,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(129,140,248,0.2) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 20%, rgba(129,140,248,0.3) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(167,139,250,0.2) 0%, transparent 50%)',
            'radial-gradient(circle at 50% 50%, rgba(139,92,246,0.25) 0%, transparent 50%), radial-gradient(circle at 60% 40%, rgba(167,139,250,0.2) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 30%, rgba(167,139,250,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(129,140,248,0.2) 0%, transparent 50%)',
          ]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Floating blobs - Purple/violet theme */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 rounded-full"
        style={{
          background: 'linear-gradient(135deg, rgba(139,92,246,0.35), rgba(167,139,250,0.25))',
          filter: 'blur(40px)',
        }}
        animate={{
          x: [0, 80, 0],
          y: [0, 60, 0],
          scale: [1, 1.25, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute bottom-32 right-20 w-96 h-96"
        style={{
          background: 'linear-gradient(135deg, rgba(129,140,248,0.3), rgba(167,139,250,0.2))',
          filter: 'blur(55px)',
          borderRadius: '50% 50% 30% 70% / 40% 60% 30% 50%',
        }}
        animate={{
          x: [0, -60, 0],
          y: [0, 50, 0],
          scale: [1, 1.3, 1],
          rotate: [0, -120, -240, -360],
          borderRadius: [
            '50% 50% 30% 70% / 40% 60% 30% 50%',
            '30% 70% 50% 50% / 60% 40% 50% 30%',
            '50% 50% 30% 70% / 40% 60% 30% 50%',
          ]
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Glowing moon-like orb */}
      <motion.div
        className="absolute top-1/3 right-1/4 w-32 h-32 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(255,255,255,0.4) 0%, rgba(167,139,250,0.2) 50%, transparent 70%)',
          filter: 'blur(20px)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 6,
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
              rotate: [0, 360],
              scale: [1, 1.05, 1],
            }}
            transition={{
              rotate: {
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              },
              scale: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          >
            <Moon className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white" strokeWidth={1.5} />
          </motion.div>

          <motion.h1 
            className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl mb-4 sm:mb-6 text-white tracking-tight px-4" 
            style={{ fontWeight: 100 }}
          >
            Медитации
          </motion.h1>
          <motion.p 
            className="text-base sm:text-xl lg:text-2xl text-white/90 font-light tracking-wide max-w-2xl mx-auto px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            практики осознанности и трансформации
          </motion.p>
        </motion.div>

        {/* Meditations by Categories */}
        <div className="space-y-10 sm:space-y-12 max-w-6xl mx-auto">
          {meditationCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.2 * categoryIndex,
                ease: [0.16, 1, 0.3, 1]
              }}
            >
              {/* Category Title */}
              <motion.h2
                className="text-2xl sm:text-3xl lg:text-4xl mb-4 sm:mb-6 text-white px-2" 
                style={{ fontWeight: 200 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 * categoryIndex + 0.1 }}
              >
                {category.title}
              </motion.h2>

              {/* Meditations in Category */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {category.meditations.map((meditation, index) => {
                  // Define color variations for each card (matching ClubHome style)
                  const colorVariants = [
                    { from: 'rgba(16,185,129,0.15)', via: 'rgba(5,150,105,0.1)', glow: 'rgba(16,185,129,0.3)' }, // Emerald
                    { from: 'rgba(6,182,212,0.15)', via: 'rgba(34,211,238,0.1)', glow: 'rgba(6,182,212,0.3)' }, // Cyan
                    { from: 'rgba(236,72,153,0.15)', via: 'rgba(244,114,182,0.1)', glow: 'rgba(236,72,153,0.3)' }, // Pink
                  ];
                  const colors = colorVariants[index % colorVariants.length];

                  return (
                    <motion.div
                      key={meditation.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.6,
                        delay: 0.2 * categoryIndex + 0.1 * (index + 1),
                        ease: [0.16, 1, 0.3, 1]
                      }}
                      whileHover={{ scale: 1.03, y: -8 }}
                      whileTap={{ scale: 0.97 }}
                      className="group relative overflow-hidden rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-lg hover:shadow-[0_20px_80px_rgba(172,198,239,0.4)] border-2 border-white/30 hover:border-white/60 transition-all duration-500"
                      style={{
                        background: `linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(216,236,250,0.8) 50%, ${colors.from} 100%)`,
                      }}
                    >
                      {/* Animated gradient background with accent color */}
                      <motion.div
                        className="absolute inset-0"
                        animate={{
                          background: [
                            `linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(216,236,250,0.8) 50%, ${colors.from} 100%)`,
                            `linear-gradient(135deg, rgba(216,236,250,0.85) 0%, ${colors.via} 50%, rgba(255,255,255,0.95) 100%)`,
                            `linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(216,236,250,0.8) 50%, ${colors.from} 100%)`,
                          ]
                        }}
                        transition={{
                          duration: 8,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />

                      {/* Glow effect on hover with accent color */}
                      <motion.div
                        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{
                          background: `radial-gradient(circle at 50% 50%, ${colors.glow}, transparent 70%)`,
                          filter: 'blur(30px)',
                        }}
                      />

                      {/* Animated orb effect with accent color */}
                      <motion.div
                        className="absolute w-32 h-32 rounded-full blur-2xl opacity-0 group-hover:opacity-100"
                        style={{
                          background: colors.glow,
                          top: '20%',
                          left: '10%'
                        }}
                        animate={{
                          x: [0, 50, 0],
                          y: [0, 30, 0],
                        }}
                        transition={{
                          duration: 6,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />

                      {/* Border glow */}
                      <motion.div
                        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{
                          boxShadow: `inset 0 0 80px ${colors.glow}, 0 0 60px ${colors.glow}`,
                        }}
                      />

                      {/* Shimmer effect */}
                      <motion.div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100"
                        animate={{
                          background: [
                            'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.8) 50%, transparent 100%)',
                            'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.8) 50%, transparent 100%)',
                          ],
                          x: ['-100%', '200%'],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          repeatDelay: 2,
                        }}
                      />

                      <div className="relative z-10 flex flex-col h-full">
                        {/* Icon */}
                        <motion.div 
                          className="mb-4 inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16
                            rounded-2xl bg-white/40 backdrop-blur-sm
                            border border-white/40
                            shadow-lg self-start"
                          whileHover={{ 
                            rotate: [0, -8, 8, 0],
                            scale: 1.1,
                          }}
                          transition={{ duration: 0.6 }}
                        >
                          <Moon className="w-7 h-7 sm:w-8 sm:h-8 text-[#ACC6EF]" strokeWidth={1.5} style={{ filter: 'drop-shadow(0 0 8px rgba(172,198,239,0.5))' }} />
                        </motion.div>

                        {/* Title */}
                        <h3 className="text-lg sm:text-xl mb-4 text-[#1D1D1B] leading-relaxed flex-grow" style={{ fontWeight: 300 }}>
                          {meditation.title}
                        </h3>

                        {/* Listen button */}
                        <motion.a
                          href={meditation.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl
                            bg-[#ACC6EF]/80 hover:bg-[#ACC6EF] backdrop-blur-sm
                            border border-[#ACC6EF]/50
                            transition-all duration-300 shadow-md hover:shadow-lg
                            self-start"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Headphones className="w-4 h-4 text-[#1D1D1B]" strokeWidth={1.5} />
                          <span className="text-sm text-[#1D1D1B] font-medium">Слушать</span>
                        </motion.a>
                      </div>

                      {/* Gradient accent line with animation */}
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#ACC6EF] via-[#D8ECFA] to-[#ACC6EF]"
                        initial={{ scaleX: 0, opacity: 0.5 }}
                        whileHover={{ scaleX: 1, opacity: 1 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      />
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Info message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-block px-8 py-4 rounded-full
            backdrop-blur-xl bg-white/10 border border-white/20">
            <p className="text-white/80 font-light">
              Новые медитации добавляются каждый месяц
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}