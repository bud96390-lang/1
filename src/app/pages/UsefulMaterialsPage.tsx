import { motion } from 'motion/react';
import { ElementParticles } from '../components/ElementParticles';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Home, BookOpen, ExternalLink } from 'lucide-react';

interface Material {
  id: string;
  title: string;
  url: string;
  gradient: string;
}

interface MaterialCategory {
  id: string;
  title: string;
  materials: Material[];
  gradient: string;
}

const materialCategories: MaterialCategory[] = [
  {
    id: 'health',
    title: 'Здоровье',
    gradient: 'from-green-500/20 via-lime-400/20 to-emerald-500/20',
    materials: [
      {
        id: '1',
        title: 'Гайд «Работа с болезнями»',
        url: 'https://t.me/c/2747530184/96',
        gradient: 'from-emerald-500/20 via-green-500/20 to-emerald-600/20'
      },
      {
        id: '2',
        title: 'Гайд «Психосоматические причины болезней»',
        url: 'https://t.me/c/2747530184/99',
        gradient: 'from-green-500/20 via-lime-500/20 to-green-600/20'
      },
      {
        id: '3',
        title: 'Гайд «Биохакинг»',
        url: 'https://t.me/c/2747530184/100',
        gradient: 'from-lime-500/20 via-emerald-500/20 to-lime-600/20'
      },
      {
        id: '4',
        title: 'Тесты на тревожность, стресс, депрессию',
        url: 'https://t.me/c/2747530184/102',
        gradient: 'from-teal-500/20 via-green-500/20 to-teal-600/20'
      },
      {
        id: '5',
        title: 'Эфир от нутрициолога «Как повысить уровень энергии»',
        url: 'https://t.me/c/2747530184/45',
        gradient: 'from-green-500/20 via-emerald-500/20 to-green-600/20'
      },
      {
        id: '6',
        title: 'Гайд к эфиру от нутрициолога «Где моя энергия»',
        url: 'https://t.me/c/2747530184/101',
        gradient: 'from-emerald-500/20 via-teal-500/20 to-emerald-600/20'
      }
    ]
  },
  {
    id: 'personality',
    title: 'Личность',
    gradient: 'from-fuchsia-500/20 via-purple-400/20 to-pink-500/20',
    materials: [
      {
        id: '7',
        title: 'Гайд «Основы личностного роста»',
        url: 'https://t.me/c/2747530184/104',
        gradient: 'from-purple-500/20 via-fuchsia-500/20 to-purple-600/20'
      },
      {
        id: '8',
        title: 'Гайд «Самоопределение и роли»',
        url: 'https://t.me/c/2747530184/104',
        gradient: 'from-fuchsia-500/20 via-pink-500/20 to-fuchsia-600/20'
      }
    ]
  },
  {
    id: 'relationships',
    title: 'Отношения',
    gradient: 'from-pink-500/20 via-rose-400/20 to-purple-500/20',
    materials: [
      {
        id: '9',
        title: 'Треугольник Карпмана',
        url: 'https://t.me/c/2747530184/104',
        gradient: 'from-pink-500/20 via-rose-500/20 to-pink-600/20'
      },
      {
        id: '10',
        title: 'Вопросы для пары на сближение',
        url: 'https://t.me/c/2747530184/104',
        gradient: 'from-rose-500/20 via-pink-500/20 to-rose-600/20'
      },
      {
        id: '11',
        title: 'Конфликт и Я-высказывание для диалога в конфликте',
        url: 'https://t.me/c/2747530184/104',
        gradient: 'from-pink-500/20 via-purple-500/20 to-pink-600/20'
      }
    ]
  }
];

export default function UsefulMaterialsPage() {
  const navigate = useNavigate();
  const [activeElement, setActiveElement] = useState<'water' | 'air' | 'earth' | 'fire'>('earth');

  useEffect(() => {
    const elements: Array<'water' | 'air' | 'earth' | 'fire'> = ['water', 'air', 'earth', 'fire'];
    let currentIndex = 2;

    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % elements.length;
      setActiveElement(elements[currentIndex]);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const handleMaterialClick = (url: string) => {
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

      {/* Dynamic gradient overlay */}
      <motion.div 
        className="absolute inset-0"
        animate={{
          background: [
            'radial-gradient(circle at 20% 30%, rgba(16,185,129,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(217,70,239,0.2) 0%, transparent 50%), radial-gradient(circle at 50% 50%, rgba(236,72,153,0.2) 0%, transparent 60%)',
            'radial-gradient(circle at 80% 20%, rgba(236,72,153,0.3) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(16,185,129,0.2) 0%, transparent 50%), radial-gradient(circle at 60% 40%, rgba(217,70,239,0.2) 0%, transparent 60%)',
            'radial-gradient(circle at 50% 50%, rgba(217,70,239,0.25) 0%, transparent 50%), radial-gradient(circle at 30% 70%, rgba(16,185,129,0.3) 0%, transparent 50%), radial-gradient(circle at 70% 30%, rgba(236,72,153,0.2) 0%, transparent 60%)',
            'radial-gradient(circle at 20% 30%, rgba(16,185,129,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(217,70,239,0.2) 0%, transparent 50%), radial-gradient(circle at 50% 50%, rgba(236,72,153,0.2) 0%, transparent 60%)',
          ]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Floating blobs */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 rounded-full"
        style={{
          background: 'linear-gradient(135deg, rgba(16,185,129,0.35), rgba(5,150,105,0.25))',
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
        className="absolute top-1/3 right-20 w-96 h-96"
        style={{
          background: 'linear-gradient(135deg, rgba(217,70,239,0.3), rgba(236,72,153,0.2))',
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

      <motion.div
        className="absolute bottom-32 left-1/4 w-80 h-80"
        style={{
          background: 'linear-gradient(135deg, rgba(236,72,153,0.3), rgba(244,114,182,0.2))',
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
            <BookOpen className="w-10 h-10 sm:w-12 sm:h-12 text-white" strokeWidth={1.5} />
          </motion.div>

          <motion.h1 
            className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl mb-6 text-white tracking-tight px-4" 
            style={{ fontWeight: 100 }}
          >
            Полезные материалы
          </motion.h1>
          <motion.p 
            className="text-xl sm:text-2xl text-white/90 font-light tracking-wide max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            гайды, тесты и инструменты для роста
          </motion.p>
        </motion.div>

        {/* Materials by Category */}
        <div className="space-y-12 sm:space-y-16 max-w-6xl mx-auto">
          {materialCategories.map((category, categoryIndex) => (
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
                className={`inline-block mb-6 px-5 py-3 sm:px-8 sm:py-4 rounded-full
                  backdrop-blur-xl bg-gradient-to-r ${category.gradient}
                  border border-white/30 shadow-xl`}
                whileHover={{ scale: 1.05 }}
              >
                <h2 className="text-lg sm:text-2xl lg:text-3xl text-white" style={{ fontWeight: 300 }}>
                  {category.title}
                </h2>
              </motion.div>

              {/* Materials Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {category.materials.map((material, index) => (
                  <motion.div
                    key={material.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: 0.1 * index,
                      ease: [0.16, 1, 0.3, 1]
                    }}
                    whileHover={{ scale: 1.02, y: -4 }}
                    className={`relative group overflow-hidden rounded-3xl p-6 sm:p-8
                      backdrop-blur-xl bg-gradient-to-br ${material.gradient}
                      border border-white/20 shadow-2xl
                      transition-all duration-500
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
                      {/* Title */}
                      <h3 className="text-base sm:text-lg md:text-xl mb-4 sm:mb-5 text-white leading-snug sm:leading-relaxed min-h-[2.5rem] sm:min-h-[3rem]" 
                          style={{ fontWeight: 300 }}>
                        {material.title}
                      </h3>

                      {/* Button */}
                      <motion.button
                        onClick={() => handleMaterialClick(material.url)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-6 py-3 rounded-full
                          bg-white/20 backdrop-blur-sm border border-white/30
                          text-white font-light
                          hover:bg-white/30 transition-all duration-300"
                      >
                        <ExternalLink className="w-4 h-4" strokeWidth={1.5} />
                        <span>Смотреть</span>
                      </motion.button>

                      {/* Decorative glowing element */}
                      <motion.div
                        className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full bg-white/10 blur-2xl"
                        animate={{
                          scale: [1, 1.3, 1],
                          opacity: [0.2, 0.4, 0.2],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.3
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
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
              Новые материалы добавляются регулярно
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}