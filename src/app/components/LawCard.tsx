import { motion } from 'motion/react';
import { Link } from 'react-router';
import { ChevronRight } from 'lucide-react';

interface LawCardProps {
  id: string;
  elementId: string;
  title: string;
  gradient: string;
  index: number;
}

export function LawCard({ id, elementId, title, gradient, index }: LawCardProps) {
  // Color variations for each law card
  const colorVariants = [
    { accent: '#8B5CF6', glow: 'rgba(139,92,246,0.2)', border: 'rgba(139,92,246,0.4)' }, // Purple
    { accent: '#EC4899', glow: 'rgba(236,72,153,0.2)', border: 'rgba(236,72,153,0.4)' }, // Pink
    { accent: '#06B6D4', glow: 'rgba(6,182,212,0.2)', border: 'rgba(6,182,212,0.4)' }, // Cyan
    { accent: '#F59E0B', glow: 'rgba(245,158,11,0.2)', border: 'rgba(245,158,11,0.4)' }, // Amber
  ];
  
  const colors = colorVariants[index % colorVariants.length];
  
  return (
    <Link to={`/sphere/${elementId}/law/${id}`} className="block mb-4">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.5,
          delay: index * 0.1,
          ease: [0.16, 1, 0.3, 1]
        }}
        whileHover={{ x: 8, scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
        className="group relative overflow-hidden rounded-2xl backdrop-blur-xl p-6 shadow-lg hover:shadow-2xl border-2 transition-all duration-300"
        style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 100%)',
          borderColor: 'rgba(255,255,255,0.4)',
        }}
      >
        {/* Animated gradient background */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              `linear-gradient(135deg, rgba(255,255,255,0.95) 0%, ${colors.glow} 100%)`,
              `linear-gradient(135deg, ${colors.glow} 0%, rgba(255,255,255,0.95) 100%)`,
              `linear-gradient(135deg, rgba(255,255,255,0.95) 0%, ${colors.glow} 100%)`,
            ]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Glow effect on hover */}
        <motion.div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at 50% 50%, ${colors.glow}, transparent 70%)`,
            filter: 'blur(20px)',
          }}
        />

        {/* Glassmorphism pulse on tap */}
        <motion.div
          className="absolute inset-0 rounded-2xl"
          style={{
            background: `linear-gradient(90deg, ${colors.glow}, ${colors.border}, ${colors.glow})`
          }}
          initial={{ opacity: 0, x: '-100%' }}
          whileTap={{ opacity: 0.3, x: '100%' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        />

        {/* Gradient accent bar */}
        <motion.div
          className="absolute left-0 top-0 bottom-0 w-1.5"
          style={{
            background: `linear-gradient(to bottom, ${colors.accent}, ${colors.border})`
          }}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
        />

        {/* Glowing orb on hover */}
        <motion.div
          className="absolute w-24 h-24 rounded-full blur-2xl opacity-0 group-hover:opacity-60"
          style={{
            background: colors.glow,
            top: '50%',
            right: '10%',
            transform: 'translateY(-50%)',
          }}
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <div className="pl-4 relative z-10">
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-lg text-[#1D1D1B] pr-4 font-light tracking-wide">
              {title}
            </h3>
            <motion.div
              animate={{
                x: [0, 4, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <ChevronRight 
                className="w-5 h-5 transition-colors flex-shrink-0 mt-0.5" 
                style={{
                  color: colors.accent
                }}
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}