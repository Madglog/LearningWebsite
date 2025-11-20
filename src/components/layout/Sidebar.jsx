import React from 'react';
import { motion } from 'framer-motion';
import {
  X,
  Home,
  BookOpen,
  Award,
  Settings,
  BarChart3,
  Bookmark,
  GraduationCap
} from 'lucide-react';
import { useProgress } from '../../context/ProgressContext';
import { ProgressBar } from '../common/ProgressBar';

export const Sidebar = ({ isOpen, onClose, modules, activeModule, onModuleChange }) => {
  const { progress, getModuleProgress } = useProgress();

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'bookmarks', label: 'Bookmarks', icon: Bookmark },
    { id: 'progress', label: 'Progress', icon: BarChart3 },
    { id: 'achievements', label: 'Achievements', icon: Award },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
        />
      )}

      {/* Sidebar */}
      <motion.aside
        initial={false}
        animate={{ x: isOpen ? 0 : '-100%' }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className={`
          fixed lg:sticky top-0 left-0 z-50
          h-screen w-80
          bg-white dark:bg-slate-800
          border-r border-slate-200 dark:border-slate-700
          flex flex-col
          overflow-hidden
          lg:translate-x-0
        `}
      >
        {/* Header */}
        <div className="p-6 border-b border-slate-200 dark:border-slate-700 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl">
              <GraduationCap size={24} className="text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100">
                LearnHub
              </h2>
              <p className="text-xs text-slate-500">Interactive Study Platform</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="lg:hidden p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors"
          >
            <X size={20} className="text-slate-600 dark:text-slate-400" />
          </button>
        </div>

        {/* Navigation */}
        <div className="flex-1 overflow-y-auto p-4 space-y-6">
          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase mb-3 px-3">
              Quick Links
            </h3>
            <div className="space-y-1">
              {menuItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeModule === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      onModuleChange(item.id);
                      if (window.innerWidth < 1024) onClose();
                    }}
                    className={`
                      w-full flex items-center gap-3 px-4 py-3 rounded-xl
                      transition-all duration-200
                      ${isActive
                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                        : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700'
                      }
                    `}
                  >
                    <Icon size={20} />
                    <span className="font-medium">{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Modules */}
          <div>
            <h3 className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase mb-3 px-3">
              Study Modules
            </h3>
            <div className="space-y-2">
              {modules.map((module) => {
                const Icon = module.icon;
                const isActive = activeModule === module.id;
                const moduleProgress = getModuleProgress(module.id, module.totalSections || 10);

                return (
                  <div key={module.id}>
                    <button
                      onClick={() => {
                        onModuleChange(module.id);
                        if (window.innerWidth < 1024) onClose();
                      }}
                      className={`
                        w-full flex items-start gap-3 px-4 py-3 rounded-xl
                        transition-all duration-200
                        ${isActive
                          ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                          : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700'
                        }
                      `}
                    >
                      <div className={`p-1.5 rounded-lg ${isActive ? 'bg-white/20' : 'bg-slate-200 dark:bg-slate-600'}`}>
                        <Icon size={18} />
                      </div>
                      <div className="flex-1 text-left">
                        <div className="font-medium text-sm mb-1">{module.title}</div>
                        <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-1.5 overflow-hidden">
                          <div
                            className={`h-full rounded-full transition-all ${isActive ? 'bg-white' : 'bg-blue-600'}`}
                            style={{ width: `${moduleProgress}%` }}
                          />
                        </div>
                        <div className="text-xs mt-1 opacity-80">{moduleProgress}% Complete</div>
                      </div>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-200 dark:border-slate-700">
          <div className="text-xs text-slate-500 dark:text-slate-400 text-center">
            <p>📚 Keep learning every day!</p>
            <p className="mt-1">Made with ❤️ for students</p>
          </div>
        </div>
      </motion.aside>
    </>
  );
};
