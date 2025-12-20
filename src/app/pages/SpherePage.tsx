import { motion } from 'motion/react';
import { useParams, Link } from 'react-router';
import { spheres } from '../data/spheres';
import { LawCard } from '../components/LawCard';
import { ElementParticles } from '../components/ElementParticles';
import { ArrowLeft, Home } from 'lucide-react';

export default function SpherePage() {
  const { sphereId } = useParams<{ sphereId: string }>();
  const sphere = spheres.find(s => s.id === sphereId);

  if (!sphere) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#2E5C8A] via-[#4A90E2] to-[#5B9BD5]">
        <p className="text-white/80">Сфера не найдена</p>
      </div>
    );
  }

  // Определяем доминирующую стихию для анимации
  const elements = sphere.laws.map(l => l.element);
  const dominantElement = elements[0] || 'water';

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
            'radial-gradient(circle at 20% 30%, rgba(139,92,246,0.25) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(236,72,153,0.2) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 20%, rgba(34,211,238,0.25) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(167,139,250,0.2) 0%, transparent 50%)',
            'radial-gradient(circle at 50% 50%, rgba(236,72,153,0.2) 0%, transparent 50%), radial-gradient(circle at 30% 70%, rgba(139,92,246,0.25) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 30%, rgba(139,92,246,0.25) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(236,72,153,0.2) 0%, transparent 50%)',
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
        className="absolute top-20 right-20 w-64 h-64 rounded-full"
        style={{
          background: 'linear-gradient(135deg, rgba(139,92,246,0.3), rgba(167,139,250,0.2))',
          filter: 'blur(40px)',
        }}
        animate={{
          x: [0, 60, 0],
          y: [0, 40, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute bottom-40 left-20 w-80 h-80"
        style={{
          background: 'linear-gradient(135deg, rgba(6,182,212,0.3), rgba(34,211,238,0.2))',
          filter: 'blur(50px)',
          borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
        }}
        animate={{
          x: [0, -40, 0],
          y: [0, 50, 0],
          scale: [1, 1.3, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Animated particles */}
      <ElementParticles element={dominantElement} count={8} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16 relative z-10">
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
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 sm:mb-16 backdrop-blur-xl bg-white/90 rounded-3xl p-8 border-2 border-white/40"
        >
          <div className="flex items-center mb-6">
            <motion.div
              className="text-6xl sm:text-7xl mr-4 sm:mr-6"
              style={{
                filter: 'drop-shadow(0 0 20px rgba(139,92,246,0.5))'
              }}
              animate={{
                scale: [1, 1.1, 1],
                filter: [
                  'drop-shadow(0 0 20px rgba(139,92,246,0.5))',
                  'drop-shadow(0 0 30px rgba(236,72,153,0.6))',
                  'drop-shadow(0 0 20px rgba(6,182,212,0.5))',
                  'drop-shadow(0 0 20px rgba(139,92,246,0.5))',
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
            <div>
              <h1 className="text-4xl sm:text-5xl text-[#1D1D1B] mb-2 font-light tracking-wide">
                {sphere.name}
              </h1>
            </div>
          </div>

          {/* Gradient line */}
          <motion.div
            className="h-1 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            style={{ transformOrigin: 'left' }}
          />

          {/* Laws count */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-4 text-sm text-[#808181] font-light"
          >
            {sphere.laws.length} {sphere.laws.length === 1 ? 'закон' : sphere.laws.length < 5 ? 'закона' : 'законов'}
          </motion.p>
        </motion.div>

        {/* Laws list */}
        <div className="space-y-4">
          {sphere.laws.map((law, index) => (
            <LawCard
              key={law.id}
              id={law.id}
              elementId={sphere.id}
              title={law.title}
              gradient={sphere.gradient}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}