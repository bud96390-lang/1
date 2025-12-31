import { motion } from 'motion/react';
import { ElementParticles } from '../components/ElementParticles';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Home, Calendar, Clock, Sparkles, Zap, MessageSquare } from 'lucide-react';

interface ScheduleEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  description?: string;
  gradient: string;
}

interface ScheduleSection {
  category: string;
  icon: any;
  events: ScheduleEvent[];
  gradient: string;
}

const scheduleData: ScheduleSection[] = [
  {
    category: 'Энергетические законы',
    icon: Sparkles,
    gradient: 'from-purple-500/20 via-violet-500/20 to-purple-600/20',
    events: [
      {
        id: 'law-1',
        title: 'Откроется с 3 января 2026',
        date: '3 января',
        time: 'Новый раздел',
        gradient: 'from-purple-500/20 via-violet-500/20 to-purple-600/20'
      }
    ]
  },
  {
    category: 'Карта желаний',
    icon: Sparkles,
    gradient: 'from-purple-500/20 via-fuchsia-400/20 to-pink-500/20',
    events: [
      {
        id: 'karta-1',
        title: 'Карта желаний 2026',
        date: '6 января',
        time: '10:00 мск',
        description: 'Создай план на 2026 и закрепи через визуальный якорь - время для тебя и сотворчества с Душой',
        gradient: 'from-purple-500/20 via-fuchsia-400/20 to-pink-500/20'
      }
    ]
  },
  {
    category: 'Интенсивы',
    icon: Zap,
    gradient: 'from-cyan-500/20 via-teal-500/20 to-cyan-600/20',
    events: [
      {
        id: 'intensive-1',
        title: 'Техники работы над собой',
        date: '9 января',
        time: '10:00 мск',
        description: 'Базовый курс ThetaHealing, адаптированный под работу над собой с авторскими наработками',
        gradient: 'from-cyan-500/20 via-teal-500/20 to-cyan-600/20'
      }
    ]
  },
  {
    category: 'Эфиры и разборы',
    icon: MessageSquare,
    gradient: 'from-amber-500/20 via-yellow-500/20 to-amber-600/20',
    events: [
      {
        id: 'review-1',
        title: 'Активирующее действие для результата и перехода на другую ветку вероятности',
        date: '24 декабря',
        time: '10:00 (время Москва)',
        description: 'необходимо присутствие на эфире',
        gradient: 'from-amber-500/20 via-yellow-500/20 to-amber-600/20'
      }
    ]
  }
];

export default function SchedulePage() {
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

      {/* Dynamic gradient overlay */}
      <motion.div 
        className="absolute inset-0"
        animate={{
          background: [
            'radial-gradient(circle at 20% 30%, rgba(251,146,60,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(245,158,11,0.2) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 20%, rgba(245,158,11,0.3) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(251,146,60,0.2) 0%, transparent 50%)',
            'radial-gradient(circle at 50% 50%, rgba(249,115,22,0.25) 0%, transparent 50%), radial-gradient(circle at 60% 40%, rgba(251,146,60,0.2) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 30%, rgba(251,146,60,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(245,158,11,0.2) 0%, transparent 50%)',
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
          background: 'linear-gradient(135deg, rgba(251,146,60,0.35), rgba(245,158,11,0.25))',
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
          background: 'linear-gradient(135deg, rgba(249,115,22,0.3), rgba(251,146,60,0.2))',
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
          <motion.div
            className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 mb-8
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
            <Calendar className="w-10 h-10 sm:w-12 sm:h-12 text-white" strokeWidth={1.5} />
          </motion.div>

          <motion.h1 
            className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl mb-6 text-white tracking-tight" 
            style={{ fontWeight: 100 }}
          >
            Расписание
          </motion.h1>
          <motion.p 
            className="text-xl sm:text-2xl text-white/90 font-light tracking-wide max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            предстоящие события и практики
          </motion.p>
        </motion.div>

        {/* Schedule Sections */}
        <div className="space-y-12 max-w-6xl mx-auto">
          {scheduleData.map((section, sectionIndex) => (
            <motion.div
              key={section.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.2 * sectionIndex,
                ease: [0.16, 1, 0.3, 1]
              }}
            >
              {/* Section Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 rounded-2xl bg-gradient-to-br ${section.gradient} backdrop-blur-sm border border-white/20`}>
                  <section.icon className="w-6 h-6 text-white" strokeWidth={1.5} />
                </div>
                <h2 className="text-2xl sm:text-3xl text-white font-light">{section.category}</h2>
              </div>

              {/* Events Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                {section.events.map((event, eventIndex) => {
                  // Define color variations for each card (matching ClubHome style)
                  const colorVariants = [
                    { from: 'rgba(139,92,246,0.15)', via: 'rgba(167,139,250,0.1)', glow: 'rgba(139,92,246,0.3)' }, // Purple
                    { from: 'rgba(245,158,11,0.15)', via: 'rgba(251,191,36,0.1)', glow: 'rgba(245,158,11,0.3)' }, // Amber
                    { from: 'rgba(6,182,212,0.15)', via: 'rgba(34,211,238,0.1)', glow: 'rgba(6,182,212,0.3)' }, // Cyan
                    { from: 'rgba(236,72,153,0.15)', via: 'rgba(244,114,182,0.1)', glow: 'rgba(236,72,153,0.3)' }, // Pink
                  ];
                  const colors = colorVariants[eventIndex % colorVariants.length];

                  return (
                    <motion.div
                      key={event.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.6,
                        delay: 0.1 * eventIndex,
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
                          <section.icon className="w-7 h-7 sm:w-8 sm:h-8 text-[#ACC6EF]" strokeWidth={1.5} style={{ filter: 'drop-shadow(0 0 8px rgba(172,198,239,0.5))' }} />
                        </motion.div>

                        {/* Title */}
                        <h3 className="text-lg sm:text-xl mb-3 text-[#1D1D1B] leading-relaxed" style={{ fontWeight: 300 }}>
                          {event.title}
                        </h3>

                        {/* Description */}
                        {event.description && (
                          <p className="text-sm sm:text-base mb-4 text-[#1D1D1B]/70 font-light leading-relaxed flex-grow">
                            {event.description}
                          </p>
                        )}

                        {/* Date and Time badges */}
                        <div className="space-y-2">
                          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/30 backdrop-blur-sm border border-white/40">
                            <Calendar className="w-3.5 h-3.5 text-[#1D1D1B]/70" strokeWidth={1.5} />
                            <span className="text-xs text-[#1D1D1B]/80 font-light">{event.date}</span>
                          </div>
                          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/30 backdrop-blur-sm border border-white/40 ml-2">
                            <Clock className="w-3.5 h-3.5 text-[#1D1D1B]/70" strokeWidth={1.5} />
                            <span className="text-xs text-[#1D1D1B]/80 font-light">{event.time}</span>
                          </div>
                        </div>
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
              Добавьте событие в свой календарь
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}