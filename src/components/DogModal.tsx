import { motion } from 'framer-motion';
import type { Dog } from '../data/dogs';

interface DogModalProps {
  dog: Dog;
  onClose: () => void;
  isDiscovered: boolean;
  onDiscover: () => void;
}

export function DogModal({ dog, onClose, isDiscovered, onDiscover }: DogModalProps) {
  const handleDiscoverClick = () => {
    onDiscover();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-end md:items-center justify-center p-0 md:p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-brown-900/60 backdrop-blur-sm" />

      {/* Modal */}
      <motion.div
        initial={{ y: 100, opacity: 0, scale: 0.95 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 100, opacity: 0, scale: 0.95 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="relative w-full max-w-lg bg-white rounded-t-3xl md:rounded-3xl shadow-2xl max-h-[90vh] md:max-h-[85vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drag Handle (mobile) */}
        <div className="md:hidden flex justify-center pt-3 pb-1">
          <div className="w-10 h-1 bg-brown-200 rounded-full" />
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 md:top-4 md:right-4 w-10 h-10 md:w-12 md:h-12 rounded-full bg-brown-100 hover:bg-brown-200 flex items-center justify-center transition-colors z-10"
        >
          <span className="text-brown-600 text-xl">×</span>
        </button>

        <div className="overflow-y-auto max-h-[calc(90vh-1rem)] md:max-h-[85vh]">
          {/* Header */}
          <div
            className="relative pt-6 pb-8 md:pt-8 md:pb-12 px-4 md:px-6"
            style={{
              background: `linear-gradient(135deg, ${dog.color}20 0%, ${dog.color}40 100%)`
            }}
          >
            <div className="text-center">
              {/* Number */}
              <span className="font-display text-sm md:text-base text-brown-500 mb-2 block">
                #{String(dog.id).padStart(3, '0')}
              </span>

              {/* Dog Visual */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", bounce: 0.5, delay: 0.1 }}
                className="text-6xl md:text-8xl mb-3 md:mb-4"
              >
                {isDiscovered ? dog.emoji : '❓'}
              </motion.div>

              {/* Name & Origin */}
              <motion.h2
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="font-display text-2xl md:text-3xl text-brown-900 mb-1"
              >
                {isDiscovered ? dog.name : '???'}
              </motion.h2>

              {isDiscovered && (
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="flex items-center justify-center gap-2"
                >
                  <span className="text-brown-600 text-sm md:text-base">{dog.origin}</span>
                  <span className="text-brown-300">•</span>
                  <span
                    className="text-xs md:text-sm font-medium capitalize px-2 py-1 md:px-3 md:py-1 rounded-full"
                    style={{ backgroundColor: `${dog.color}40`, color: dog.color }}
                  >
                    {dog.category}
                  </span>
                  <span
                    className="text-xs md:text-sm font-medium capitalize px-2 py-1 md:px-3 md:py-1 rounded-full bg-brown-100 text-brown-600"
                  >
                    {dog.size}
                  </span>
                </motion.div>
              )}
            </div>
          </div>

          {/* Content */}
          {isDiscovered ? (
            <div className="px-4 md:px-6 py-4 md:py-6 space-y-4 md:space-y-6">
              {/* Description */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <p className="text-brown-700 font-body leading-relaxed text-sm md:text-base">
                  {dog.description}
                </p>
              </motion.div>

              {/* Traits */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <h3 className="font-display text-base md:text-lg text-brown-900 mb-2 md:mb-3">Traits</h3>
                <div className="flex flex-wrap gap-2">
                  {dog.traits.map((trait, i) => (
                    <motion.span
                      key={trait}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                      className="px-3 py-1.5 md:px-4 md:py-2 bg-amber-50 text-amber-800 rounded-full text-xs md:text-sm font-medium border border-amber-200"
                    >
                      {trait}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <h3 className="font-display text-base md:text-lg text-brown-900 mb-3 md:mb-4">Stats</h3>
                <div className="space-y-2 md:space-y-3">
                  <StatBar label="Energy" emoji="⚡" value={dog.stats.energy} color="#F59E0B" delay={0.7} />
                  <StatBar label="Friendliness" emoji="💕" value={dog.stats.friendliness} color="#EC4899" delay={0.8} />
                  <StatBar label="Intelligence" emoji="🧠" value={dog.stats.intelligence} color="#8B5CF6" delay={0.9} />
                  <StatBar label="Grooming" emoji="✨" value={dog.stats.grooming} color="#06B6D4" delay={1.0} />
                  <StatBar label="Trainability" emoji="🎓" value={dog.stats.trainability} color="#10B981" delay={1.1} />
                </div>
              </motion.div>

              {/* Fun Fact */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl md:rounded-2xl p-3 md:p-4 border border-amber-200"
              >
                <div className="flex gap-3 items-start">
                  <span className="text-xl md:text-2xl">💡</span>
                  <div>
                    <h4 className="font-display text-sm md:text-base text-amber-900 mb-1">Fun Fact</h4>
                    <p className="text-amber-800 font-body text-xs md:text-sm leading-relaxed">
                      {dog.funFact}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          ) : (
            <div className="px-4 md:px-6 py-8 md:py-12 text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", bounce: 0.5 }}
              >
                <span className="text-5xl md:text-6xl mb-4 block">🔒</span>
                <p className="text-brown-600 font-body mb-4 md:mb-6 text-sm md:text-base">
                  This breed hasn't been discovered yet!
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleDiscoverClick}
                  className="px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-display text-base md:text-lg rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  Discover Now! 🎉
                </motion.button>
              </motion.div>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

function StatBar({ label, emoji, value, color, delay }: {
  label: string;
  emoji: string;
  value: number;
  color: string;
  delay: number;
}) {
  return (
    <div className="flex items-center gap-2 md:gap-3">
      <span className="text-base md:text-lg">{emoji}</span>
      <span className="text-xs md:text-sm text-brown-600 w-20 md:w-24 truncate">{label}</span>
      <div className="flex-1 h-2 md:h-3 bg-brown-100 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ delay, duration: 0.6, ease: "easeOut" }}
          className="h-full rounded-full"
          style={{ backgroundColor: color }}
        />
      </div>
      <span className="text-xs md:text-sm font-bold text-brown-700 w-8 text-right">{value}</span>
    </div>
  );
}
