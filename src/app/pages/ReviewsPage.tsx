import { motion } from 'motion/react';
import { ElementParticles } from '../components/ElementParticles';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Home, MessageSquare, Clock, AlertCircle, ExternalLink, List } from 'lucide-react';

interface Review {
  id: string;
  title: string;
  date: string;
  note?: string;
  gradient: string;
  link?: string;
  timecodes?: string[];
}

const mockReviews: Review[] = [
  {
    id: '1',
    title: 'Активирующее действие для результата и перехода на другую ветку вероятности',
    date: '24 декабря',
    note: 'необходимо присутствие на эфире',
    gradient: 'from-amber-500/20 via-yellow-500/20 to-amber-600/20',
    link: 'https://t.me/your_telegram_channel',
    timecodes: [
      '00:00 Понимание кризиса и отсутствие желаний как запрос к изменениям',
      '03:32 Кризис и отрицание реальности: как избежать разрыва с собой',
      '07:02 Чужая реальность и самость: как не раствориться в другом',
      '10:34 Формула кармы и выход из ситуации без потерь',
      '14:03 Формула понимания корня ситуации и изменения реальности',
      '17:35 Понимание первопричины и работа с матрицей реальности',
      '21:06 Понимание и работа с матрицей: ключевые элементы и переход',
      '24:37 Понимание пути и определение своей потребности',
      '28:09 Связь желания с самостоятельностью и выражением себя',
      '31:39 Сценарий, вкладывание и страх не успеть в жизни',
      '35:11 Понимание сценариев и масштабов в жизни',
      '38:41 Страх потери контроля: сценарии и спонтанность',
      '42:13 Трансформация: сброс сценария и работа с неизвестностью',
      '45:43 Перепрограммирование: как изменить реальность и создать новый сценарий',
      '49:15 Работа с потоком неопределённости и техники доверия процессу',
      '52:45 Неоформленная реальность: как адаптироваться к изменениям',
      '56:17 Открытость новому и работа с телесными практиками',
      '59:47 Осознанное проживание процесса и выход из контроля',
      '01:03:19 Остановка внутреннего диалога и доверие потоку',
      '01:06:49 Освобождение контроля и вопросы по запросам',
      '01:10:19 Ребёнок, отношения и ответственность в личных запросах',
      '01:13:48 Партнёр и осознанность: работа над отношениями',
      '01:17:17 Самоценность и осознанность в отношениях',
      '01:20:48 Многослойность жизни: как управлять процессами одновременно',
      '01:24:18 Многослойность жизни: как совмещать разные процессы',
      '01:27:49 Многослойность манифестаций и развитие процессов',
      '01:31:21 Развитие манифестации в разных сферах жизни',
      '01:34:51 Методы запоминания и завершение встречи',
    ]
  },
];

export default function ReviewsPage() {
  const navigate = useNavigate();
  const [activeElement, setActiveElement] = useState<'water' | 'air' | 'earth' | 'fire'>('earth');
  const [showTimecodes, setShowTimecodes] = useState(false);
  const [selectedTimecodes, setSelectedTimecodes] = useState<string[]>([]);

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
          {mockReviews.map((review, index) => {
            // Define color variations for each card (matching SphereCard style)
            const colorVariants = [
              { from: 'rgba(245,158,11,0.15)', via: 'rgba(251,191,36,0.1)', glow: 'rgba(245,158,11,0.3)' }, // Amber
              { from: 'rgba(139,92,246,0.15)', via: 'rgba(167,139,250,0.1)', glow: 'rgba(139,92,246,0.3)' }, // Purple
            ];
            const colors = colorVariants[index % colorVariants.length];

            return (
              <motion.div
                key={review.id}
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
                    <MessageSquare className="w-7 h-7 sm:w-8 sm:h-8 text-[#ACC6EF]" strokeWidth={1.5} style={{ filter: 'drop-shadow(0 0 8px rgba(172,198,239,0.5))' }} />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl mb-4 text-[#1D1D1B] leading-relaxed flex-grow" style={{ fontWeight: 300 }}>
                    {review.title}
                  </h3>

                  {/* Date badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/30 backdrop-blur-sm border border-white/40 mb-4 self-start">
                    <Clock className="w-3.5 h-3.5 text-[#1D1D1B]/70" strokeWidth={1.5} />
                    <span className="text-xs text-[#1D1D1B]/80 font-light">{review.date}</span>
                  </div>

                  {/* Watch Button - only show if link exists */}
                  {review.link && (
                    <div className="flex gap-3">
                      <motion.a
                        href={review.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl
                          bg-[#ACC6EF]/80 hover:bg-[#ACC6EF] backdrop-blur-sm
                          border border-[#ACC6EF]/50
                          transition-all duration-300 shadow-md hover:shadow-lg"
                      >
                        <span className="text-sm text-[#1D1D1B] font-medium">Смотреть</span>
                        <ExternalLink className="w-4 h-4 text-[#1D1D1B]" strokeWidth={1.5} />
                      </motion.a>
                      
                      {review.timecodes && (
                        <motion.button
                          onClick={() => {
                            setSelectedTimecodes(review.timecodes || []);
                            setShowTimecodes(true);
                          }}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl
                            bg-white/60 hover:bg-white/80 backdrop-blur-sm
                            border border-white/50
                            transition-all duration-300 shadow-md hover:shadow-lg"
                        >
                          <span className="text-sm text-[#1D1D1B] font-medium">Тайм-код</span>
                          <List className="w-4 h-4 text-[#1D1D1B]" strokeWidth={1.5} />
                        </motion.button>
                      )}
                    </div>
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

      {/* Timecodes Modal */}
      {showTimecodes && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
          onClick={() => setShowTimecodes(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-2xl max-h-[80vh] overflow-hidden rounded-3xl
              bg-gradient-to-br from-white/95 via-[#D8ECFA]/90 to-white/95
              backdrop-blur-xl border-2 border-white/40 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="sticky top-0 z-10 px-6 sm:px-8 py-6 bg-gradient-to-br from-white/95 to-[#D8ECFA]/80 backdrop-blur-xl border-b border-white/40">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-[#ACC6EF]/30 backdrop-blur-sm border border-[#ACC6EF]/40">
                    <List className="w-6 h-6 text-[#1D1D1B]" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl text-[#1D1D1B]" style={{ fontWeight: 300 }}>
                    Тайм-коды
                  </h3>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setShowTimecodes(false)}
                  className="p-2 rounded-full bg-white/40 hover:bg-white/60 backdrop-blur-sm
                    border border-white/40 transition-all duration-300"
                >
                  <svg className="w-5 h-5 text-[#1D1D1B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </motion.button>
              </div>
            </div>

            {/* Timecodes List */}
            <div className="overflow-y-auto max-h-[calc(80vh-120px)] px-6 sm:px-8 py-6">
              <div className="space-y-3">
                {selectedTimecodes.map((timecode, index) => {
                  const [time, ...textParts] = timecode.split(' ');
                  const text = textParts.join(' ');
                  
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.03, duration: 0.3 }}
                      whileHover={{ scale: 1.02, x: 4 }}
                      className="group flex gap-4 p-4 rounded-2xl
                        bg-white/40 hover:bg-white/60 backdrop-blur-sm
                        border border-white/40 hover:border-[#ACC6EF]/50
                        transition-all duration-300 cursor-pointer
                        hover:shadow-lg"
                    >
                      <div className="flex-shrink-0">
                        <div className="px-3 py-1.5 rounded-lg bg-[#ACC6EF]/30 backdrop-blur-sm
                          border border-[#ACC6EF]/40 group-hover:bg-[#ACC6EF]/50
                          transition-all duration-300">
                          <span className="text-sm font-mono text-[#1D1D1B]/90 font-medium">
                            {time}
                          </span>
                        </div>
                      </div>
                      <div className="flex-1 flex items-center">
                        <p className="text-sm text-[#1D1D1B]/80 leading-relaxed" style={{ fontWeight: 300 }}>
                          {text}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Gradient accent line */}
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#ACC6EF] via-[#D8ECFA] to-[#ACC6EF]"
              animate={{
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}