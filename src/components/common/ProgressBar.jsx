import React from 'react';
import { motion } from 'framer-motion';

export const ProgressBar = ({
  value,
  max = 100,
  showLabel = true,
  variant = 'primary',
  size = 'md',
  className = ''
}) => {
  const percentage = Math.round((value / max) * 100);

  const variants = {
    primary: 'bg-blue-600',
    success: 'bg-green-600',
    warning: 'bg-yellow-600',
    danger: 'bg-red-600'
  };

  const sizes = {
    sm: 'h-1.5',
    md: 'h-2.5',
    lg: 'h-4'
  };

  return (
    <div className={className}>
      {showLabel && (
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
            Progress
          </span>
          <span className="text-sm font-bold text-slate-700 dark:text-slate-300">
            {percentage}%
          </span>
        </div>
      )}
      <div className={`
        w-full bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden
        ${sizes[size]}
      `}>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className={`${sizes[size]} ${variants[variant]} rounded-full`}
        />
      </div>
    </div>
  );
};
