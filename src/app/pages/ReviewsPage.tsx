import { motion } from 'motion/react';
import { ElementParticles } from '../components/ElementParticles';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Home, MessageSquare, Clock, AlertCircle } from 'lucide-react';

interface Review {
  id: string;
  title: string;
  date: string;
  note?: string;
  gradient: string;
}

const mockReviews: Review[] = [
  {
    id: '1',
    title: 'Активирующее действие для результата и перехода на другую ветку вероятности',
    date: '24 декабря',
    note: 'необходимо присутствие на эфире',
    gradient: 'from-amber-500/20 via-yellow-500/20 to-amber-600/20'
  },
  {
    id: '2',
    title: 'Разборы для помогающих специалистов: коучей, эзотериков различных направлений, психологов, наставников «Точка роста»',
    date: '12 января',
    gradient: 'from-purple-500/20 via-violet-500/20 to-purple-600/20'
  },
];

export default function ReviewsPage() {
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

      {/* Dynamic gradient overlay - Amber theme */}
      <motion.div 
        className="absolute inset-0"
        animate={{
          background: [
            'radial-gradient(circle at 20% 30%, rgba(245,158,11,0.25) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(251,191,36,0.2) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 20%, rgba(251,191,36,0.25) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(245,158,11,0.2) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 30%, rgba(245,158,11,0.25) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(251,191,36,0.2) 0%, transparent 50%)',
          ]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Floating blobs - Amber theme */}
      <motion.div
        className="absolute top-1/3 left-1/2 w-80 h-80"
        style={{
          background: 'linear-gradient(135deg, rgba(245,158,11,0.25), rgba(251,191,36,0.2))',
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
            <MessageSquare className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white" strokeWidth={1.5} />
          </motion.div>

          <motion.h1 
            className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl mb-4 sm:mb-6 text-white tracking-tight px-4" 
            style={{ fontWeight: 100 }}
          >
            Разборы
          </motion.h1>
          <motion.p 
            className="text-base sm:text-xl lg:text-2xl text-white/90 font-light tracking-wide max-w-2xl mx-auto px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            анализ ситуаций и кейсов
          </motion.p>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {mockReviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.1 * index,
                ease: [0.16, 1, 0.3, 1]
              }}
              whileHover={{ scale: 1.02, y: -4 }}
              className={`relative group overflow-hidden rounded-3xl p-5 sm:p-6 lg:p-8
                backdrop-blur-xl bg-gradient-to-br ${review.gradient}
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
                <h3 className="text-lg sm:text-xl lg:text-2xl mb-4 sm:mb-5 lg:mb-6 text-white leading-relaxed" style={{ fontWeight: 300 }}>
                  {review.title}
                </h3>

                {/* Meta info */}
                <div className="flex flex-col gap-2 sm:gap-3 text-white/70">
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4" strokeWidth={1.5} />
                    <span className="text-xs sm:text-sm font-light">{review.date}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Info message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-12 sm:mt-16 text-center"
        >
          <div className="inline-block px-6 py-3 sm:px-8 sm:py-4 rounded-full
            backdrop-blur-xl bg-white/10 border border-white/20">
            <p className="text-white/80 font-light text-sm sm:text-base">
              Для участия в разборе необходимо присутствовать онлайн
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}