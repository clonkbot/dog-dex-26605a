import { motion } from 'framer-motion';
import type { Dog } from '../data/dogs';

interface DogCardProps {
  dog: Dog;
  isDiscovered: boolean;
  onSelect: () => void;
  onDiscover: () => void;
}

export function DogCard({ dog, isDiscovered, onSelect, onDiscover }: DogCardProps) {
  const handleClick = () => {
    if (!isDiscovered) {
      onDiscover();
    }
    onSelect();
  };

  return (
    <motion.button
      onClick={handleClick}
      className="w-full text-left"
      whileHover={{ scale: 1.03, y: -4 }}
      whileTap={{ scale: 0.98 }}
    >
      <div
        className={`
          relative overflow-hidden rounded-2xl md:rounded-3xl p-3 md:p-4 lg:p-5
          border-3 transition-all duration-300
          ${isDiscovered
            ? 'bg-white border-amber-200 shadow-card hover:shadow-card-hover'
            : 'bg-brown-100 border-brown-200 shadow-card'
          }
        `}
      >
        {/* Card Number Badge */}
        <div className="absolute top-2 right-2 md:top-3 md:right-3">
          <span className="font-display text-xs md:text-sm text-brown-400">
            #{String(dog.id).padStart(3, '0')}
          </span>
        </div>

        {/* Dog Visual */}
        <div className="relative mb-2 md:mb-3">
          <div
            className={`
              w-full aspect-square rounded-xl md:rounded-2xl flex items-center justify-center
              transition-all duration-300
              ${isDiscovered
                ? 'bg-gradient-to-br from-amber-50 to-orange-100'
                : 'bg-brown-200'
              }
            `}
            style={{
              boxShadow: isDiscovered
                ? `inset 0 -4px 12px ${dog.color}40`
                : 'none'
            }}
          >
            {isDiscovered ? (
              <motion.span
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", bounce: 0.5 }}
                className="text-4xl md:text-5xl lg:text-6xl"
              >
                {dog.emoji}
              </motion.span>
            ) : (
              <motion.span
                className="text-3xl md:text-4xl lg:text-5xl opacity-50"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                ❓
              </motion.span>
            )}
          </div>

          {/* Size Badge */}
          {isDiscovered && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute -bottom-1 -right-1 md:-bottom-2 md:-right-2"
            >
              <span
                className={`
                  inline-flex items-center justify-center w-6 h-6 md:w-8 md:h-8 rounded-full
                  text-xs font-bold uppercase border-2 border-white shadow-sm
                  ${dog.size === 'small' ? 'bg-green-400 text-green-900' :
                    dog.size === 'medium' ? 'bg-blue-400 text-blue-900' :
                    dog.size === 'large' ? 'bg-purple-400 text-purple-900' :
                    'bg-red-400 text-red-900'
                  }
                `}
              >
                {dog.size[0].toUpperCase()}
              </span>
            </motion.div>
          )}
        </div>

        {/* Dog Info */}
        <div className="space-y-1">
          <h3
            className={`
              font-display text-sm md:text-base lg:text-lg truncate
              ${isDiscovered ? 'text-brown-900' : 'text-brown-400'}
            `}
          >
            {isDiscovered ? dog.name : '???'}
          </h3>

          {isDiscovered ? (
            <div className="flex items-center gap-1 md:gap-2">
              <span className="text-xs text-brown-500 truncate">{dog.origin}</span>
              <span className="text-brown-300">•</span>
              <span
                className="text-xs font-medium capitalize px-1.5 py-0.5 md:px-2 md:py-0.5 rounded-full"
                style={{ backgroundColor: `${dog.color}30`, color: dog.color }}
              >
                {dog.category}
              </span>
            </div>
          ) : (
            <p className="text-xs text-brown-400 italic">Tap to discover!</p>
          )}
        </div>

        {/* Quick Stats Preview */}
        {isDiscovered && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="mt-2 md:mt-3 pt-2 md:pt-3 border-t border-brown-100"
          >
            <div className="grid grid-cols-3 gap-1 md:gap-2">
              <StatMini label="⚡" value={dog.stats.energy} />
              <StatMini label="💕" value={dog.stats.friendliness} />
              <StatMini label="🧠" value={dog.stats.intelligence} />
            </div>
          </motion.div>
        )}
      </div>
    </motion.button>
  );
}

function StatMini({ label, value }: { label: string; value: number }) {
  return (
    <div className="flex flex-col items-center">
      <span className="text-xs md:text-sm">{label}</span>
      <div className="w-full h-1 md:h-1.5 bg-brown-100 rounded-full overflow-hidden mt-0.5 md:mt-1">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="h-full bg-gradient-to-r from-amber-400 to-orange-500 rounded-full"
        />
      </div>
    </div>
  );
}
