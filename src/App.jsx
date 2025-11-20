import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { ProgressProvider } from './context/ProgressContext';
import { Sidebar } from './components/layout/Sidebar';
import { Header } from './components/layout/Header';
import { Dashboard } from './pages/Dashboard';
import { ModulePage } from './pages/ModulePage';
import { modules } from './data/modules';
import { AnimatePresence } from 'framer-motion';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeView, setActiveView] = useState('dashboard');
  const [selectedModule, setSelectedModule] = useState(null);

  // Responsive sidebar
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setIsSidebarOpen(false);
      } else {
        setIsSidebarOpen(true);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleModuleChange = (moduleId, sectionId = null) => {
    if (moduleId === 'dashboard' || moduleId === 'bookmarks' || moduleId === 'progress' || moduleId === 'achievements' || moduleId === 'settings') {
      setActiveView(moduleId);
      setSelectedModule(null);
    } else {
      const module = modules.find(m => m.id === moduleId);
      if (module) {
        setSelectedModule(module);
        setActiveView('module');
      }
    }

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getPageTitle = () => {
    if (activeView === 'dashboard') return 'Dashboard';
    if (activeView === 'module' && selectedModule) return selectedModule.title;
    if (activeView === 'bookmarks') return 'Bookmarks';
    if (activeView === 'progress') return 'Your Progress';
    if (activeView === 'achievements') return 'Achievements';
    if (activeView === 'settings') return 'Settings';
    return 'LearnHub';
  };

  const getPageSubtitle = () => {
    if (activeView === 'dashboard') return 'Track your learning journey';
    if (activeView === 'module' && selectedModule) return selectedModule.description;
    return '';
  };

  return (
    <ThemeProvider>
      <ProgressProvider>
        <div className="flex h-screen bg-slate-50 dark:bg-slate-900 overflow-hidden">
          {/* Sidebar */}
          <Sidebar
            isOpen={isSidebarOpen}
            onClose={() => setIsSidebarOpen(false)}
            modules={modules}
            activeModule={activeView === 'module' ? selectedModule?.id : activeView}
            onModuleChange={handleModuleChange}
          />

          {/* Main Content */}
          <div className="flex-1 flex flex-col overflow-hidden">
            {/* Header */}
            <Header
              onMenuClick={() => setIsSidebarOpen(true)}
              title={getPageTitle()}
              subtitle={getPageSubtitle()}
            />

            {/* Page Content */}
            <main className="flex-1 overflow-y-auto">
              <div className="p-6 md:p-8 lg:p-12">
                <AnimatePresence mode="wait">
                  {activeView === 'dashboard' && (
                    <Dashboard key="dashboard" onNavigate={handleModuleChange} />
                  )}
                  {activeView === 'module' && selectedModule && (
                    <ModulePage key={selectedModule.id} module={selectedModule} />
                  )}
                  {activeView === 'bookmarks' && (
                    <div key="bookmarks" className="text-center py-20">
                      <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100">
                        Bookmarks Page
                      </h2>
                      <p className="text-slate-600 dark:text-slate-400 mt-2">
                        View all your bookmarked sections here
                      </p>
                    </div>
                  )}
                  {activeView === 'progress' && (
                    <div key="progress" className="text-center py-20">
                      <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100">
                        Progress Analytics
                      </h2>
                      <p className="text-slate-600 dark:text-slate-400 mt-2">
                        Detailed progress tracking and analytics
                      </p>
                    </div>
                  )}
                  {activeView === 'achievements' && (
                    <div key="achievements" className="text-center py-20">
                      <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100">
                        Your Achievements
                      </h2>
                      <p className="text-slate-600 dark:text-slate-400 mt-2">
                        Badges and milestones you've earned
                      </p>
                    </div>
                  )}
                  {activeView === 'settings' && (
                    <div key="settings" className="text-center py-20">
                      <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100">
                        Settings
                      </h2>
                      <p className="text-slate-600 dark:text-slate-400 mt-2">
                        Customize your learning experience
                      </p>
                    </div>
                  )}
                </AnimatePresence>
              </div>
            </main>
          </div>
        </div>
      </ProgressProvider>
    </ThemeProvider>
  );
}

export default App;
