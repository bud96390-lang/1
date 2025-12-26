import { motion } from 'motion/react';
import { ElementParticles } from '../components/ElementParticles';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Home, Headphones, Play } from 'lucide-react';

interface Podcast {
  id: string;
  title: string;
  url: string;
  gradient: string;
}

interface PodcastCategory {
  id: string;
  title: string;
  podcasts: Podcast[];
  gradient: string;
}

const podcastCategories: PodcastCategory[] = [
  {
    id: 'personality',
    title: 'Личность и трансформация',
    gradient: 'from-fuchsia-500/20 via-purple-400/20 to-pink-500/20',
    podcasts: [
      {
        id: '1',
        title: 'Трансформация боли от необходимости изменений',
        url: 'https://t.me/c/2747530184/21',
        gradient: 'from-purple-500/20 via-fuchsia-500/20 to-purple-600/20'
      },
      {
        id: '2',
        title: 'Мысли и чувства. Их влияние на результаты в жизни',
        url: 'https://t.me/c/2747530184/42',
        gradient: 'from-fuchsia-500/20 via-pink-500/20 to-fuchsia-600/20'
      },
      {
        id: '3',
        title: 'Уровни мышления и субличности',
        url: 'https://t.me/c/2747530184/112',
        gradient: 'from-pink-500/20 via-purple-500/20 to-pink-600/20'
      }
    ]
  },
  {
    id: 'money-business',
    title: 'Деньги и бизнес',
    gradient: 'from-emerald-500/20 via-teal-400/20 to-cyan-500/20',
    podcasts: [
      {
        id: '4',
        title: 'Подкаст-портал в деньги для фрилансера',
        url: 'https://t.me/c/2747530184/39',
        gradient: 'from-emerald-500/20 via-teal-500/20 to-emerald-600/20'
      },
      {
        id: '5',
        title: 'Бизнес минусит. Неочевидные причины',
        url: 'https://t.me/c/2747530184/38',
        gradient: 'from-teal-500/20 via-cyan-500/20 to-teal-600/20'
      },
      {
        id: '6',
        title: 'Внутренние и внешние долги. Очередность закрытия долгов',
        url: 'https://t.me/c/2747530184/46',
        gradient: 'from-cyan-500/20 via-emerald-500/20 to-cyan-600/20'
      }
    ]
  },
  {
    id: 'relationships',
    title: 'Отношения и семья',
    gradient: 'from-pink-500/20 via-rose-400/20 to-purple-500/20',
    podcasts: [
      {
        id: '7',
        title: 'Помогатор умер, потому что помогал. Почему помощь людям становится не даром, а проклятьем',
        url: 'https://t.me/c/2747530184/42',
        gradient: 'from-pink-500/20 via-rose-500/20 to-pink-600/20'
      },
      {
        id: '8',
        title: 'Треугольник Карпмана',
        url: 'https://t.me/c/2747530184/113',
        gradient: 'from-rose-500/20 via-pink-500/20 to-rose-600/20'
      },
      {
        id: '9',
        title: 'Семейная система',
        url: 'https://t.me/c/2747530184/114',
        gradient: 'from-pink-500/20 via-purple-500/20 to-pink-600/20'
      },
      {
        id: '10',
        title: 'Отношения с родителями',
        url: 'https://t.me/c/2747530184/115',
        gradient: 'from-rose-500/20 via-purple-500/20 to-rose-600/20'
      },
      {
        id: '11',
        title: 'Отношения с партнером и роль знакомства',
        url: 'https://t.me/c/2747530184/114',
        gradient: 'from-purple-500/20 via-pink-500/20 to-purple-600/20'
      }
    ]
  },
  {
    id: 'purpose',
    title: 'Предназначение и манифестация',
    gradient: 'from-amber-500/20 via-yellow-400/20 to-orange-500/20',
    podcasts: [
      {
        id: '12',
        title: 'Божественное расписание и предназначение',
        url: 'https://t.me/c/2747530184/23',
        gradient: 'from-amber-500/20 via-yellow-500/20 to-amber-600/20'
      },
      {
        id: '13',
        title: 'Просьба как часть манифеста',
        url: 'https://t.me/c/2747530184/43',
        gradient: 'from-yellow-500/20 via-orange-500/20 to-yellow-600/20'
      }
    ]
  }
];

export default function PodcastsPage() {
  const navigate = useNavigate();
  const [activeElement, setActiveElement] = useState<'water' | 'air' | 'earth' | 'fire'>('air');

  useEffect(() => {
    const elements: Array<'water' | 'air' | 'earth' | 'fire'> = ['water', 'air', 'earth', 'fire'];
    let currentIndex = 1;

    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % elements.length;
      setActiveElement(elements[currentIndex]);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const handlePodcastClick = (url: string) => {
    window.open(url, '_blank');
  };

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

      {/* Dynamic gradient overlay - Pink theme */}
      <motion.div 
        className="absolute inset-0"
        animate={{
          background: [
            'radial-gradient(circle at 20% 30%, rgba(236,72,153,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(217,70,239,0.2) 0%, transparent 50%), radial-gradient(circle at 50% 50%, rgba(245,158,11,0.2) 0%, transparent 60%)',
            'radial-gradient(circle at 80% 20%, rgba(217,70,239,0.3) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(16,185,129,0.2) 0%, transparent 50%), radial-gradient(circle at 60% 40%, rgba(236,72,153,0.2) 0%, transparent 60%)',
            'radial-gradient(circle at 50% 50%, rgba(16,185,129,0.25) 0%, transparent 50%), radial-gradient(circle at 30% 70%, rgba(245,158,11,0.3) 0%, transparent 50%), radial-gradient(circle at 70% 30%, rgba(217,70,239,0.2) 0%, transparent 60%)',
            'radial-gradient(circle at 20% 30%, rgba(236,72,153,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(217,70,239,0.2) 0%, transparent 50%), radial-gradient(circle at 50% 50%, rgba(245,158,11,0.2) 0%, transparent 60%)',
          ]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Floating blobs - Multi-color theme */}
      <motion.div
        className="absolute top-20 right-20 w-96 h-96"
        style={{
          background: 'linear-gradient(135deg, rgba(236,72,153,0.35), rgba(244,114,182,0.25))',
          filter: 'blur(60px)',
          borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
        }}
        animate={{
          x: [0, -60, 0],
          y: [0, 80, 0],
          scale: [1, 1.3, 1],
          rotate: [0, -120, 0],
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
        className="absolute bottom-20 left-20 w-80 h-80"
        style={{
          background: 'linear-gradient(135deg, rgba(16,185,129,0.3), rgba(5,150,105,0.2))',
          filter: 'blur(50px)',
          borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
        }}
        animate={{
          x: [0, 70, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
          rotate: [0, 120, 240, 360],
          borderRadius: [
            '60% 40% 30% 70% / 60% 30% 70% 40%',
            '40% 60% 70% 30% / 40% 70% 30% 60%',
            '60% 40% 30% 70% / 60% 30% 70% 40%',
          ]
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute top-1/2 left-1/3 w-72 h-72"
        style={{
          background: 'linear-gradient(135deg, rgba(245,158,11,0.25), rgba(251,191,36,0.15))',
          filter: 'blur(45px)',
          borderRadius: '50% 50% 30% 70% / 40% 60% 30% 50%',
        }}
        animate={{
          x: [0, -40, 0],
          y: [0, 60, 0],
          scale: [1, 1.15, 1],
          rotate: [0, -90, -180, -270, -360],
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
              rotate: [0, 5, -5, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Headphones className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white" strokeWidth={1.5} />
          </motion.div>

          <motion.h1 
            className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl mb-4 sm:mb-6 text-white tracking-tight px-4" 
            style={{ fontWeight: 100 }}
          >
            Подкасты
          </motion.h1>
          <motion.p 
            className="text-base sm:text-xl lg:text-2xl text-white/90 font-light tracking-wide max-w-2xl mx-auto px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            аудио-материалы по темам развития
          </motion.p>
        </motion.div>

        {/* Podcasts by Category */}
        <div className="space-y-10 sm:space-y-12 lg:space-y-16 max-w-6xl mx-auto">
          {podcastCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2 * categoryIndex,
                ease: [0.16, 1, 0.3, 1]
              }}
            >
              {/* Category Header */}
              <motion.div
                className={`inline-block mb-4 sm:mb-6 px-5 py-3 sm:px-8 sm:py-4 rounded-full
                  backdrop-blur-xl bg-gradient-to-r ${category.gradient}
                  border border-white/30 shadow-xl`}
                whileHover={{ scale: 1.05 }}
              >
                <h2 className="text-lg sm:text-2xl lg:text-3xl text-white" style={{ fontWeight: 300 }}>
                  {category.title}
                </h2>
              </motion.div>

              {/* Podcasts Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {category.podcasts.map((podcast, index) => {
                  // Define color variations for each card (matching ClubHome style)
                  const colorVariants = [
                    { from: 'rgba(236,72,153,0.15)', via: 'rgba(244,114,182,0.1)', glow: 'rgba(236,72,153,0.3)' }, // Pink
                    { from: 'rgba(16,185,129,0.15)', via: 'rgba(5,150,105,0.1)', glow: 'rgba(16,185,129,0.3)' }, // Emerald
                    { from: 'rgba(245,158,11,0.15)', via: 'rgba(251,191,36,0.1)', glow: 'rgba(245,158,11,0.3)' }, // Amber
                    { from: 'rgba(139,92,246,0.15)', via: 'rgba(167,139,250,0.1)', glow: 'rgba(139,92,246,0.3)' }, // Purple
                  ];
                  const colors = colorVariants[index % colorVariants.length];

                  return (
                    <motion.div
                      key={podcast.id}
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
                          <Headphones className="w-7 h-7 sm:w-8 sm:h-8 text-[#ACC6EF]" strokeWidth={1.5} style={{ filter: 'drop-shadow(0 0 8px rgba(172,198,239,0.5))' }} />
                        </motion.div>

                        {/* Title */}
                        <h3 className="text-lg sm:text-xl mb-4 text-[#1D1D1B] leading-relaxed flex-grow" style={{ fontWeight: 300 }}>
                          {podcast.title}
                        </h3>

                        {/* Play Button */}
                        <motion.button
                          onClick={() => handlePodcastClick(podcast.url)}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl
                            bg-[#ACC6EF]/80 hover:bg-[#ACC6EF] backdrop-blur-sm
                            border border-[#ACC6EF]/50
                            transition-all duration-300 shadow-md hover:shadow-lg
                            self-start"
                        >
                          <Play className="w-4 h-4 text-[#1D1D1B]" strokeWidth={1.5} fill="#1D1D1B" />
                          <span className="text-sm text-[#1D1D1B] font-medium">Слушать</span>
                        </motion.button>
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
          className="mt-12 sm:mt-16 text-center"
        >
          <div className="inline-block px-6 py-3 sm:px-8 sm:py-4 rounded-full
            backdrop-blur-xl bg-white/10 border border-white/20">
            <p className="text-white/80 font-light text-sm sm:text-base">
              Новые подкасты добавляются регулярно
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}