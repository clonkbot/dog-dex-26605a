import { motion } from 'framer-motion';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="relative"
    >
      <div className="absolute inset-y-0 left-0 pl-4 md:pl-5 flex items-center pointer-events-none">
        <span className="text-lg md:text-xl">🔍</span>
      </div>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search breeds by name or origin..."
        className="w-full pl-12 md:pl-14 pr-4 py-3 md:py-4 bg-white rounded-xl md:rounded-2xl border-2 border-amber-200
                   focus:border-amber-400 focus:outline-none focus:ring-4 focus:ring-amber-100
                   text-brown-900 placeholder-brown-400 font-body text-sm md:text-base
                   shadow-card transition-all duration-200"
      />
      {value && (
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          onClick={() => onChange('')}
          className="absolute inset-y-0 right-0 pr-4 md:pr-5 flex items-center"
        >
          <span className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-brown-100 hover:bg-brown-200 flex items-center justify-center text-brown-600 transition-colors text-sm md:text-base">
            ×
          </span>
        </motion.button>
      )}
    </motion.div>
  );
}
