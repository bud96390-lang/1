import { motion } from 'motion/react';
import { Link } from 'react-router';

interface SphereCardProps {
  id: string;
  name: string;
  icon: string;
  gradient: string;
  description: string;
  lawsCount: number;
  index: number;
}

export function SphereCard({ id, name, icon, gradient, description, lawsCount, index }: SphereCardProps) {
  // Define color variations for each card
  const colorVariants = [
    { from: 'rgba(139,92,246,0.15)', via: 'rgba(167,139,250,0.1)', glow: 'rgba(139,92,246,0.3)' }, // Purple
    { from: 'rgba(236,72,153,0.15)', via: 'rgba(244,114,182,0.1)', glow: 'rgba(236,72,153,0.3)' }, // Pink
    { from: 'rgba(6,182,212,0.15)', via: 'rgba(34,211,238,0.1)', glow: 'rgba(6,182,212,0.3)' }, // Cyan
    { from: 'rgba(245,158,11,0.15)', via: 'rgba(251,191,36,0.1)', glow: 'rgba(245,158,11,0.3)' }, // Amber
    { from: 'rgba(34,211,238,0.15)', via: 'rgba(6,182,212,0.1)', glow: 'rgba(34,211,238,0.3)' }, // Light cyan
    { from: 'rgba(167,139,250,0.15)', via: 'rgba(139,92,246,0.1)', glow: 'rgba(167,139,250,0.3)' }, // Light purple
  ];
  
  const colors = colorVariants[index % colorVariants.length];
  
  return (
    <Link to={`/sphere/${id}`} className="block">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          delay: index * 0.1,
          ease: [0.16, 1, 0.3, 1]
        }}
        whileHover={{ scale: 1.03, y: -8 }}
        whileTap={{ scale: 0.97 }}
        className="group relative overflow-hidden rounded-3xl backdrop-blur-xl p-6 sm:p-8 shadow-lg hover:shadow-[0_20px_80px_rgba(172,198,239,0.4)] border-2 border-white/30 hover:border-white/60 transition-all duration-500 h-full"
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
          style={{ top: '20%', left: '10%' }}
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
          initial={false}
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
        
        {/* Content */}
        <div className="relative z-10 flex flex-col h-full">
          <motion.div
            className="text-5xl sm:text-6xl mb-4 relative"
            whileHover={{ scale: 1.15, rotate: [0, -8, 8, 0] }}
            transition={{ duration: 0.6 }}
          >
            <motion.span 
              className="inline-block text-[#ACC6EF]"
              style={{
                filter: 'drop-shadow(0 0 12px rgba(172,198,239,0.5))'
              }}
              animate={{
                filter: [
                  'drop-shadow(0 0 12px rgba(172,198,239,0.5))',
                  'drop-shadow(0 0 20px rgba(172,198,239,0.8))',
                  'drop-shadow(0 0 12px rgba(172,198,239,0.5))',
                ]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {icon}
            </motion.span>
          </motion.div>
          
          <h2 className="text-xl sm:text-2xl mb-2 text-[#1D1D1B] font-light tracking-wide">
            {name}
          </h2>
          
          <div className="flex items-center justify-between pt-4 border-t border-[#ACC6EF]/30 group-hover:border-[#ACC6EF]/60 transition-colors duration-300 mt-auto">
            <motion.span
              className="text-sm text-[#1D1D1B] font-medium"
              whileHover={{ x: 3 }}
            >
              Перейти к знакомству
            </motion.span>
            <motion.span
              className="text-lg text-[#ACC6EF]"
              animate={{
                x: [0, 4, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              →
            </motion.span>
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
    </Link>
  );
}