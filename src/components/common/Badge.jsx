import React from 'react';

export const Badge = ({
  children,
  variant = 'default',
  icon: Icon,
  className = ''
}) => {
  const variants = {
    default: 'bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-300',
    primary: 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300',
    success: 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300',
    warning: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300',
    danger: 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300',
    info: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900 dark:text-cyan-300'
  };

  return (
    <span className={`
      inline-flex items-center gap-1.5
      px-2.5 py-1 rounded-full
      text-xs font-semibold
      ${variants[variant]}
      ${className}
    `}>
      {Icon && <Icon size={12} />}
      {children}
    </span>
  );
};
