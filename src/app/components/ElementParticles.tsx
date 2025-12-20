import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  delay: number;
  duration: number;
}

interface ElementParticlesProps {
  element: 'water' | 'air' | 'earth' | 'fire';
  count?: number;
}

export function ElementParticles({ element, count = 15 }: ElementParticlesProps) {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 3 + Math.random() * 4,
    }));
    setParticles(newParticles);
  }, [count]);

  const getParticleSymbol = () => {
    switch (element) {
      case 'water':
        return '◦';
      case 'air':
        return '○';
      case 'earth':
        return '●';
      case 'fire':
        return '✦';
      default:
        return '•';
    }
  };

  const getAnimation = (particle: Particle) => {
    switch (element) {
      case 'water':
        return {
          y: [particle.y, particle.y + 20, particle.y],
          x: [particle.x, particle.x + Math.sin(particle.id) * 8, particle.x],
          opacity: [0.1, 0.4, 0.1],
          scale: [0.8, 1.2, 0.8],
        };
      case 'air':
        return {
          y: [particle.y, particle.y - 40, particle.y],
          x: [particle.x, particle.x + Math.cos(particle.id) * 15, particle.x],
          opacity: [0.2, 0.5, 0.2],
          scale: [0.6, 1, 0.6],
        };
      case 'earth':
        return {
          y: [particle.y - 20, particle.y],
          opacity: [0, 0.6, 0],
          scale: [0.5, 1.2],
        };
      case 'fire':
        return {
          y: [particle.y, particle.y - 30],
          scale: [1, 1.8, 0.3],
          opacity: [0.5, 0.8, 0],
        };
      default:
        return {};
    }
  };

  const getColor = () => {
    switch (element) {
      case 'water':
        return 'text-[#ACC6EF]';
      case 'air':
        return 'text-[#D8ECFA]';
      case 'earth':
        return 'text-[#808181]';
      case 'fire':
        return 'text-[#ACC6EF]';
      default:
        return 'text-[#ACC6EF]';
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className={`absolute text-2xl ${getColor()} opacity-30`}
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={getAnimation(particle)}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: 'easeInOut',
          }}
        >
          {getParticleSymbol()}
        </motion.div>
      ))}
    </div>
  );
}