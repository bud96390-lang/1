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
    category: 'Интенсивы',
    icon: Zap,
    gradient: 'from-cyan-500/20 via-teal-500/20 to-cyan-600/20',
    events: [
      {
        id: 'intensive-1',
        title: 'Техники работы над собой',
        date: '5 января',
        time: '11:00 - 18:00',
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
      },
      {
        id: 'review-2',
        title: 'Разборы для помогающих специалистов: коучей, эзотериков различных направлений, психологов, наставников «Точка роста»',
        date: '12 января',
        time: '12:00 (время Москва)',
        description: 'необходимо присутствие на эфире',
        gradient: 'from-pink-500/20 via-rose-500/20 to-pink-600/20'
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
                {section.events.map((event, eventIndex) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: 0.1 * eventIndex,
                      ease: [0.16, 1, 0.3, 1]
                    }}
                    whileHover={{ scale: 1.02, y: -4 }}
                    className={`relative group overflow-hidden rounded-3xl p-6 sm:p-8
                      backdrop-blur-xl bg-gradient-to-br ${event.gradient}
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
                      {/* Title */}
                      <h3 className="text-xl sm:text-2xl mb-4 text-white leading-relaxed" style={{ fontWeight: 300 }}>
                        {event.title}
                      </h3>

                      {/* Description */}
                      {event.description && (
                        <p className="text-base text-white/80 mb-4 font-light">
                          {event.description}
                        </p>
                      )}

                      {/* Date and Time */}
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-white/70">
                          <Calendar className="w-4 h-4" strokeWidth={1.5} />
                          <span className="text-sm font-light">{event.date}</span>
                        </div>
                        <div className="flex items-center gap-2 text-white/70">
                          <Clock className="w-4 h-4" strokeWidth={1.5} />
                          <span className="text-sm font-light">{event.time}</span>
                        </div>
                      </div>

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
                          delay: eventIndex * 0.3
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
              Добавьте событие в свой календарь
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}