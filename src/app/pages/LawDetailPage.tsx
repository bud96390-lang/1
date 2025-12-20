import { motion } from 'motion/react';
import { useParams, Link } from 'react-router';
import { spheres } from '../data/spheres';
import { ElementParticles } from '../components/ElementParticles';
import { ArrowLeft, Play, Home } from 'lucide-react';
import { useState } from 'react';

export default function LawDetailPage() {
  const { sphereId, lawId } = useParams<{ sphereId: string; lawId: string }>();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPracticing, setIsPracticing] = useState(false);

  const sphere = spheres.find(s => s.id === sphereId);
  const law = sphere?.laws.find(l => l.id === lawId);

  if (!sphere || !law) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#2E5C8A] via-[#4A90E2] to-[#5B9BD5]">
        <p className="text-white/80">Закон не найден</p>
      </div>
    );
  }

  const handlePlayAudio = () => {
    setIsPlaying(!isPlaying);
    // Mock audio functionality
    if (!isPlaying) {
      setTimeout(() => setIsPlaying(false), 3000);
    }
  };

  const handlePractice = () => {
    setIsPracticing(!isPracticing);
    // Mock practice functionality
    if (!isPracticing) {
      setTimeout(() => setIsPracticing(false), 3000);
    }
  };

  const getElementSymbol = () => {
    switch (law.element) {
      case 'water': return '◦';
      case 'air': return '○';
      case 'earth': return '●';
      case 'fire': return '✦';
      default: return '•';
    }
  };

  const getElementName = () => {
    switch (law.element) {
      case 'water': return 'Вода';
      case 'air': return 'Воздух';
      case 'earth': return 'Земля';
      case 'fire': return 'Огонь';
      default: return '';
    }
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
            'radial-gradient(circle at 30% 40%, rgba(139,92,246,0.3) 0%, transparent 50%), radial-gradient(circle at 70% 60%, rgba(236,72,153,0.25) 0%, transparent 50%)',
            'radial-gradient(circle at 70% 30%, rgba(6,182,212,0.3) 0%, transparent 50%), radial-gradient(circle at 30% 70%, rgba(245,158,11,0.25) 0%, transparent 50%)',
            'radial-gradient(circle at 30% 40%, rgba(139,92,246,0.3) 0%, transparent 50%), radial-gradient(circle at 70% 60%, rgba(236,72,153,0.25) 0%, transparent 50%)',
          ]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Floating shapes */}
      <motion.div
        className="absolute top-32 right-16 w-72 h-72"
        style={{
          background: 'linear-gradient(135deg, rgba(236,72,153,0.25), rgba(244,114,182,0.15))',
          filter: 'blur(45px)',
          borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
        }}
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
          scale: [1, 1.2, 1],
          rotate: [0, 90, 180, 270, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute bottom-32 left-16 w-96 h-96 rounded-full"
        style={{
          background: 'linear-gradient(135deg, rgba(6,182,212,0.3), rgba(34,211,238,0.2))',
          filter: 'blur(50px)',
        }}
        animate={{
          x: [0, -40, 0],
          y: [0, 40, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Element-specific particles */}
      <ElementParticles element={law.element} count={8} />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16 relative z-10">
        {/* Back buttons */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex flex-wrap gap-3"
        >
          <Link
            to="/"
            className="inline-flex items-center text-white/70 hover:text-white transition-colors backdrop-blur-sm bg-white/10 px-4 py-2 rounded-full hover:bg-white/20"
          >
            <Home className="w-5 h-5 mr-2" />
            <span className="text-sm font-light">В клуб</span>
          </Link>
          <Link
            to="/energy-laws"
            className="inline-flex items-center text-white/70 hover:text-white transition-colors backdrop-blur-sm bg-white/10 px-4 py-2 rounded-full hover:bg-white/20"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            <span className="text-sm font-light">К сферам</span>
          </Link>
          <Link
            to={`/sphere/${sphereId}`}
            className="inline-flex items-center text-white/70 hover:text-white transition-colors backdrop-blur-sm bg-white/10 px-4 py-2 rounded-full"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            <span className="text-sm font-light">К списку законов</span>
          </Link>
        </motion.div>

        {/* Header with icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12 backdrop-blur-xl bg-white/90 rounded-3xl p-8 border-2 border-white/40"
        >
          <motion.div
            className="text-7xl mb-6 inline-block"
            style={{
              filter: 'drop-shadow(0 0 25px rgba(139,92,246,0.6))'
            }}
            animate={{
              scale: [1, 1.1, 1],
              filter: [
                'drop-shadow(0 0 25px rgba(139,92,246,0.6))',
                'drop-shadow(0 0 35px rgba(236,72,153,0.7))',
                'drop-shadow(0 0 25px rgba(6,182,212,0.6))',
                'drop-shadow(0 0 25px rgba(139,92,246,0.6))',
              ]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {sphere.icon}
          </motion.div>
          <h1 className="text-3xl sm:text-4xl text-[#1D1D1B] mb-3 font-light tracking-wide">
            {law.title}
          </h1>
          <p className="text-base sm:text-lg text-[#808181] font-light">
            {law.shortDesc}
          </p>
          
          {/* Colorful accent line */}
          <motion.div
            className="h-1 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 mt-6"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            style={{ transformOrigin: 'left' }}
          />
        </motion.div>

        {/* Main content */}
        <div className="space-y-8">
          {/* Description */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/80 backdrop-blur-sm border-2 border-[#ACC6EF]/30 rounded-3xl p-6 sm:p-8 shadow-lg"
          >
            <div className="h-1 rounded-full bg-[#ACC6EF] mb-6" />
            <p className="text-[#808181] leading-relaxed text-base sm:text-lg font-light">
              {law.description}
            </p>
          </motion.section>

          {/* Audio player */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white/80 backdrop-blur-sm border-2 border-[#ACC6EF]/30 rounded-3xl p-6 sm:p-8 shadow-lg"
          >
            <h2 className="text-xl mb-4 text-[#1D1D1B] font-light tracking-wide">
              Комментарий к закону
            </h2>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.96 }}
              onClick={handlePlayAudio}
              className="relative overflow-hidden w-full flex items-center justify-center space-x-3 py-4 rounded-2xl bg-[#ACC6EF] text-white transition-all duration-300 shadow-lg hover:shadow-[0_10px_40px_rgba(172,198,239,0.4)] font-light"
            >
              {/* Glassmorphism ripple effect */}
              {isPlaying && (
                <motion.div
                  className="absolute inset-0 bg-white/30"
                  initial={{ scale: 0, opacity: 1 }}
                  animate={{ scale: 2, opacity: 0 }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              )}
              <Play className={`w-5 h-5 relative z-10 ${isPlaying ? 'animate-pulse' : ''}`} />
              <span className="relative z-10">{isPlaying ? 'Воспроизведение...' : 'Прослушать комментарий'}</span>
            </motion.button>
          </motion.section>

          {/* Practice */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white/80 backdrop-blur-sm border-2 border-[#ACC6EF]/30 rounded-3xl p-6 sm:p-8 shadow-lg"
          >
            <h2 className="text-xl mb-4 text-[#1D1D1B] font-light tracking-wide">
              Практическое упражнение
            </h2>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.96 }}
              onClick={handlePractice}
              className="relative overflow-hidden w-full flex items-center justify-center space-x-3 py-4 rounded-2xl bg-[#ACC6EF] text-white transition-all duration-300 shadow-lg hover:shadow-[0_10px_40px_rgba(172,198,239,0.4)] font-light"
            >
              {/* Glassmorphism ripple effect */}
              {isPracticing && (
                <motion.div
                  className="absolute inset-0 bg-white/30"
                  initial={{ scale: 0, opacity: 1 }}
                  animate={{ scale: 2, opacity: 0 }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              )}
              <span className="relative z-10">{isPracticing ? 'Выполняется...' : 'Выполнить'}</span>
            </motion.button>
          </motion.section>
        </div>
      </div>
    </div>
  );
}