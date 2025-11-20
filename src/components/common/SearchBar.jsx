import React from 'react';
import { Search, X } from 'lucide-react';

export const SearchBar = ({ value, onChange, onClear, placeholder = 'Search...' }) => {
  return (
    <div className="relative">
      <div className="absolute left-3 top-1/2 -translate-y-1/2">
        <Search size={18} className="text-slate-400" />
      </div>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="
          w-full pl-10 pr-10 py-2.5
          bg-slate-100 dark:bg-slate-800
          border border-slate-200 dark:border-slate-700
          rounded-lg
          text-slate-900 dark:text-slate-100
          placeholder-slate-400
          focus:outline-none focus:ring-2 focus:ring-blue-500
          transition-all
        "
      />
      {value && (
        <button
          onClick={onClear}
          className="absolute right-3 top-1/2 -translate-y-1/2 hover:bg-slate-200 dark:hover:bg-slate-700 rounded p-1 transition-colors"
        >
          <X size={16} className="text-slate-400" />
        </button>
      )}
    </div>
  );
};
