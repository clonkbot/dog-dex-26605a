import { motion } from 'framer-motion';
import { categories } from '../data/dogs';

interface FilterTabsProps {
  active: string;
  onChange: (category: string) => void;
}

export function FilterTabs({ active, onChange }: FilterTabsProps) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="relative"
    >
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0 md:flex-wrap">
        {categories.map((category, index) => (
          <motion.button
            key={category.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.05 }}
            onClick={() => onChange(category.id)}
            className={`
              flex-shrink-0 flex items-center gap-1.5 md:gap-2 px-3 py-2 md:px-4 md:py-2.5 rounded-xl md:rounded-full
              font-body text-xs md:text-sm font-medium transition-all duration-200
              min-w-max
              ${active === category.id
                ? 'bg-amber-500 text-white shadow-md'
                : 'bg-white text-brown-600 border-2 border-brown-100 hover:border-amber-200 hover:bg-amber-50'
              }
            `}
          >
            <span className="text-sm md:text-base">{category.emoji}</span>
            <span>{category.label}</span>
          </motion.button>
        ))}
      </div>

      {/* Fade edges on mobile */}
      <div className="absolute right-0 top-0 bottom-2 w-8 bg-gradient-to-l from-cream to-transparent pointer-events-none md:hidden" />
      <div className="absolute left-0 top-0 bottom-2 w-4 bg-gradient-to-r from-cream to-transparent pointer-events-none md:hidden" />
    </motion.div>
  );
}
