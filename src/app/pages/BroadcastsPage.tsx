import { motion } from 'motion/react';
import { ElementParticles } from '../components/ElementParticles';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Home, Radio, Eye } from 'lucide-react';

interface Broadcast {
  id: string;
  title: string;
  gradient: string;
  url: string;
}

const mockBroadcasts: Broadcast[] = [
  {
    id: '1',
    title: 'Знакомство с 2026. Основы целеполагания',
    gradient: 'from-purple-500/20 via-violet-500/20 to-purple-600/20',
    url: 'https://t.me/c/2747530184/134'
  },
  {
    id: '2',
    title: 'Создания таблицы целей через потребности',
    gradient: 'from-indigo-500/20 via-blue-500/20 to-indigo-600/20',
    url: 'https://t.me/c/2747530184/140'
  },
  {
    id: '3',
    title: 'Практика «Исцеление от тяжелых чувств»',
    gradient: 'from-fuchsia-500/20 via-purple-500/20 to-pink-600/20',
    url: 'https://t.me/c/2747530184/145'
  },
  {
    id: '4',
    title: 'Три кита для устойчивого состояния',
    gradient: 'from-cyan-500/20 via-teal-500/20 to-blue-600/20',
    url: 'https://t.me/c/2747530184/146'
  },
];

export default function BroadcastsPage() {
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

      {/* Dynamic gradient overlay - Indigo theme */}
      <motion.div 
        className="absolute inset-0"
        animate={{
          background: [
            'radial-gradient(circle at 20% 30%, rgba(99,102,241,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(129,140,248,0.2) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 20%, rgba(129,140,248,0.3) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(99,102,241,0.2) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 30%, rgba(99,102,241,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(129,140,248,0.2) 0%, transparent 50%)',
          ]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Floating blobs - Indigo theme */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 rounded-full"
        style={{
          background: 'linear-gradient(135deg, rgba(99,102,241,0.35), rgba(129,140,248,0.25))',
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
              rotate: [0, 10, -10, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Radio className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white" strokeWidth={1.5} />
          </motion.div>

          <motion.h1 
            className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl mb-4 sm:mb-6 text-white tracking-tight px-4" 
            style={{ fontWeight: 100 }}
          >
            Эфиры
          </motion.h1>
          <motion.p 
            className="text-base sm:text-xl lg:text-2xl text-white/90 font-light tracking-wide max-w-2xl mx-auto px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            прямые трансляции и записи
          </motion.p>
        </motion.div>

        {/* Broadcasts List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {mockBroadcasts.map((broadcast, index) => {
            // Define color variations for each card (matching ClubHome style)
            const colorVariants = [
              { from: 'rgba(139,92,246,0.15)', via: 'rgba(167,139,250,0.1)', glow: 'rgba(139,92,246,0.3)' }, // Purple
              { from: 'rgba(59,130,246,0.15)', via: 'rgba(96,165,250,0.1)', glow: 'rgba(59,130,246,0.3)' }, // Blue
              { from: 'rgba(236,72,153,0.15)', via: 'rgba(244,114,182,0.1)', glow: 'rgba(236,72,153,0.3)' }, // Pink
              { from: 'rgba(6,182,212,0.15)', via: 'rgba(34,211,238,0.1)', glow: 'rgba(6,182,212,0.3)' }, // Cyan
            ];
            const colors = colorVariants[index % colorVariants.length];

            return (
              <motion.div
                key={broadcast.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.1 * index,
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
                    <Radio className="w-7 h-7 sm:w-8 sm:h-8 text-[#ACC6EF]" strokeWidth={1.5} style={{ filter: 'drop-shadow(0 0 8px rgba(172,198,239,0.5))' }} />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl mb-4 text-[#1D1D1B] leading-relaxed flex-grow" style={{ fontWeight: 300 }}>
                    {broadcast.title}
                  </h3>

                  {/* Watch button */}
                  {broadcast.url && (
                    <motion.a
                      href={broadcast.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl
                        bg-[#ACC6EF]/80 hover:bg-[#ACC6EF] backdrop-blur-sm
                        border border-[#ACC6EF]/50
                        transition-all duration-300 shadow-md hover:shadow-lg
                        self-start"
                    >
                      <Eye className="w-4 h-4 text-[#1D1D1B]" strokeWidth={1.5} />
                      <span className="text-sm text-[#1D1D1B] font-medium">Смотреть</span>
                    </motion.a>
                  )}
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
      </div>
    </div>
  );
}