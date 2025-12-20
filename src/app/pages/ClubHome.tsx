import { motion } from 'motion/react';
import { ElementParticles } from '../components/ElementParticles';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Sparkles, Headphones, Zap, MessageSquare, Radio, Moon, Calendar, BookOpen, Bell } from 'lucide-react';

interface ClubSection {
  id: string;
  name: string;
  icon: any;
  gradient: string;
  path: string;
}

const clubSections: ClubSection[] = [
  {
    id: 'schedule',
    name: 'Расписание',
    icon: Calendar,
    gradient: 'from-amber-500/20 via-yellow-400/20 to-orange-500/20',
    path: '/schedule',
  },
  {
    id: 'energy-laws',
    name: 'Энергетические законы',
    icon: Sparkles,
    gradient: 'from-purple-500/20 via-violet-500/20 to-purple-600/20',
    path: '/energy-laws',
  },
  {
    id: 'broadcasts',
    name: 'Эфиры',
    icon: Radio,
    gradient: 'from-fuchsia-500/20 via-purple-400/20 to-pink-500/20',
    path: '/broadcasts',
  },
  {
    id: 'podcasts',
    name: 'Подкасты',
    icon: Headphones,
    gradient: 'from-pink-500/20 via-rose-400/20 to-purple-500/20',
    path: '/podcasts',
  },
  {
    id: 'intensives',
    name: 'Интенсивы',
    icon: Zap,
    gradient: 'from-emerald-500/20 via-teal-400/20 to-cyan-500/20',
    path: '/intensives',
  },
  {
    id: 'reviews',
    name: 'Разборы',
    icon: MessageSquare,
    gradient: 'from-blue-500/20 via-indigo-400/20 to-violet-500/20',
    path: '/reviews',
  },
  {
    id: 'meditations',
    name: 'Медитации',
    icon: Moon,
    gradient: 'from-violet-500/20 via-purple-500/20 to-indigo-600/20',
    path: '/meditations',
  },
  {
    id: 'materials',
    name: 'Полезные материалы',
    icon: BookOpen,
    gradient: 'from-green-500/20 via-lime-400/20 to-emerald-500/20',
    path: '/materials',
  },
];

interface NewsItem {
  id: string;
  text: string;
  title: string;
  date: string;
  gradient: string;
  path: string;
  icon: any;
}

const newsItems: NewsItem[] = [
  { 
    id: '3', 
    title: 'Активирующее действие для результата',
    text: 'необходимо присутствие на эфире',
    date: '24 декабря',
    gradient: 'from-amber-500/30 via-yellow-500/30 to-amber-600/30',
    path: '/reviews',
    icon: Bell
  },
  { 
    id: '1', 
    title: 'Энергетические законы',
    text: 'Откроется с 3 января 2026',
    date: '3 января',
    gradient: 'from-purple-500/30 via-violet-500/30 to-purple-600/30',
    path: '/energy-laws',
    icon: Sparkles
  },
  { 
    id: '2', 
    title: 'Интенсив: Техники работы над собой',
    text: 'Базовый курс ThetaHealing, адаптированный под работу над собой с авторскими наработками',
    date: '5 января',
    gradient: 'from-cyan-500/30 via-teal-500/30 to-cyan-600/30',
    path: '/intensives',
    icon: Zap
  },
  { 
    id: '4', 
    title: 'Разборы для помогающих специалистов',
    text: 'коучей, эзотериков различных направлений, психологов, наставников «Точка роста»',
    date: '12 января',
    gradient: 'from-pink-500/30 via-rose-500/30 to-pink-600/30',
    path: '/reviews',
    icon: MessageSquare
  },
];

export default function ClubHome() {
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

      {/* News Feed - Horizontal scrollable announcements */}
      <div className="fixed top-0 left-0 right-0 z-40 border-b border-white/10 backdrop-blur-xl bg-white/5">
        <div className="overflow-x-auto scrollbar-hide py-2 sm:py-3">
          <div className="flex gap-2 sm:gap-3 px-3 sm:px-4" style={{ width: 'max-content' }}>
            {newsItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => navigate(item.path)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1]
                }}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className={`flex-shrink-0 w-64 sm:w-72 md:w-80 p-2 sm:p-3 rounded-xl sm:rounded-2xl
                  backdrop-blur-xl bg-gradient-to-br ${item.gradient}
                  border border-white/30 shadow-lg
                  cursor-pointer transition-all duration-300
                  hover:border-white/50 hover:shadow-xl`}
              >
                <div className="flex items-start gap-2 h-full">
                  <div className="flex-1 w-full flex flex-col">
                    <div className="inline-flex items-center gap-1.5 px-2 py-1 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 mb-2 self-center">
                      <p className="text-[9px] sm:text-xs text-white font-medium">
                        {item.date}
                      </p>
                    </div>
                    <h3 className="font-light text-white mb-1 text-xs sm:text-sm md:text-base leading-snug text-center" style={{ fontWeight: 300 }}>
                      {item.title}
                    </h3>
                    <p className="text-[10px] sm:text-xs md:text-sm text-white/80 font-light leading-relaxed text-center">
                      {item.text}
                    </p>
                  </div>
                  <div className="w-5 h-5 flex-shrink-0">
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-48 sm:pt-52 md:pt-56 lg:pt-60 pb-12 sm:pb-16 md:pb-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12 sm:mb-16 md:mb-24"
        >
          <motion.h1 
            className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl mb-4 sm:mb-6 text-white tracking-tight px-4" 
            style={{ fontWeight: 100 }}
          >
            Масштаб Души
            {/* Decorative line under title */}
            <motion.div
              className="absolute -bottom-2 sm:-bottom-3 left-1/2 -translate-x-1/2 h-0.5 sm:h-1 bg-gradient-to-r from-transparent via-white to-transparent"
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: '80%', opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            />
            
            {/* Glowing orbs around title */}
            <motion.div
              className="absolute -top-2 sm:-top-4 -left-2 sm:-left-4 w-4 h-4 sm:w-8 sm:h-8 rounded-full bg-white/30 blur-md"
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
              className="absolute -bottom-2 sm:-bottom-4 -right-2 sm:-right-4 w-3 h-3 sm:w-6 sm:h-6 rounded-full bg-white/40 blur-md"
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
        </motion.div>

        {/* Sections Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
          {clubSections.map((section, index) => {
            const Icon = section.icon;
            return (
              <motion.button
                key={section.id}
                onClick={() => navigate(section.path)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.1 * index,
                  ease: [0.16, 1, 0.3, 1]
                }}
                whileHover={{ 
                  scale: 1.02,
                  y: -4,
                }}
                whileTap={{ scale: 0.98 }}
                className={`relative group overflow-hidden rounded-3xl p-8 sm:p-10 text-left
                  backdrop-blur-xl bg-gradient-to-br ${section.gradient}
                  border border-white/20 shadow-2xl
                  transition-all duration-500 ease-out
                  hover:border-white/40 hover:shadow-[0_20px_60px_rgba(255,255,255,0.15)]`}
              >
                {/* Animated gradient overlay on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/5 to-white/0"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                />

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
                  {/* Icon container */}
                  <motion.div 
                    className="mb-6 inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20
                      rounded-2xl bg-white/10 backdrop-blur-sm
                      border border-white/20
                      shadow-lg"
                    whileHover={{ 
                      rotate: [0, -10, 10, 0],
                      scale: 1.1,
                    }}
                    transition={{ duration: 0.4 }}
                  >
                    <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" strokeWidth={1.5} />
                  </motion.div>

                  {/* Title */}
                  <h2 className="text-2xl sm:text-3xl mb-3 text-white tracking-tight" style={{ fontWeight: 300 }}>
                    {section.name}
                  </h2>

                  {/* Decorative element */}
                  <motion.div
                    className="absolute bottom-8 right-8 w-24 h-24 rounded-full bg-white/5 blur-2xl"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.2
                    }}
                  />
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 sm:mt-24 text-center"
        >
          <p className="text-sm text-white/70 font-light">
            Выберите раздел для начала
          </p>
        </motion.div>
      </div>
    </div>
  );
}