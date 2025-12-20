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
        <div className="space-y-4 sm:space-y-6 max-w-4xl mx-auto">
          {mockBroadcasts.map((broadcast, index) => (
            <motion.div
              key={broadcast.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.1 * index,
                ease: [0.16, 1, 0.3, 1]
              }}
              whileHover={{ scale: 1.01, x: 4 }}
              className={`relative group overflow-hidden rounded-3xl p-6 sm:p-8 lg:p-10
                backdrop-blur-xl bg-gradient-to-br ${broadcast.gradient}
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
                    <h3 className="text-xl sm:text-2xl lg:text-3xl mb-3 sm:mb-4 text-white" style={{ fontWeight: 300 }}>
                      {broadcast.title}
                    </h3>
                  </div>

                  {/* Watch button for recorded broadcasts with URL */}
                  {broadcast.url && (
                    <motion.a
                      href={broadcast.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 sm:gap-3 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full
                        bg-white/20 backdrop-blur-sm border border-white/30
                        text-white font-light text-sm sm:text-base
                        hover:bg-white/30 transition-all duration-300
                        shadow-lg hover:shadow-xl self-start sm:self-center"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Eye className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={1.5} />
                      <span>Смотреть</span>
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}