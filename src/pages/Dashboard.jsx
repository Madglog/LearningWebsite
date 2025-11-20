import React from 'react';
import { motion } from 'framer-motion';
import { useProgress } from '../context/ProgressContext';
import { Card, CardBody } from '../components/common/Card';
import { Badge } from '../components/common/Badge';
import { ProgressBar } from '../components/common/ProgressBar';
import {
  TrendingUp,
  Award,
  Clock,
  BookmarkCheck,
  Target,
  Flame,
  Calendar,
  CheckCircle
} from 'lucide-react';
import { modules } from '../data/modules';

export const Dashboard = ({ onNavigate }) => {
  const { progress, getModuleProgress } = useProgress();

  // Calculate stats
  const totalSections = modules.reduce((acc, mod) => acc + mod.totalSections, 0);
  const completedSections = Object.keys(progress.completedSections).length;
  const completionPercentage = Math.round((completedSections / totalSections) * 100);

  const totalQuizzes = Object.keys(progress.quizScores).length;
  const averageQuizScore = totalQuizzes > 0
    ? Math.round(
        Object.values(progress.quizScores).reduce((acc, quiz) => acc + quiz.percentage, 0) /
        totalQuizzes
      )
    : 0;

  const totalStudyTime = Object.values(progress.studyTime).reduce((acc, time) => acc + time, 0);
  const studyHours = Math.floor(totalStudyTime / 3600);
  const studyMinutes = Math.floor((totalStudyTime % 3600) / 60);

  const currentStreak = 7; // This could be calculated from study sessions

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      {/* Welcome Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white shadow-2xl"
      >
        <h1 className="text-4xl font-bold mb-2">Welcome back! 👋</h1>
        <p className="text-blue-100 text-lg">
          Keep up the great work! You're making excellent progress.
        </p>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border-blue-200 dark:border-blue-800">
            <CardBody>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-blue-700 dark:text-blue-300 font-medium mb-1">
                    Overall Progress
                  </p>
                  <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                    {completionPercentage}%
                  </p>
                  <p className="text-xs text-blue-600 dark:text-blue-400 mt-1">
                    {completedSections} / {totalSections} sections
                  </p>
                </div>
                <div className="p-3 bg-blue-600 rounded-xl">
                  <TrendingUp size={28} className="text-white" />
                </div>
              </div>
            </CardBody>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border-green-200 dark:border-green-800">
            <CardBody>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-green-700 dark:text-green-300 font-medium mb-1">
                    Quiz Average
                  </p>
                  <p className="text-3xl font-bold text-green-600 dark:text-green-400">
                    {averageQuizScore}%
                  </p>
                  <p className="text-xs text-green-600 dark:text-green-400 mt-1">
                    {totalQuizzes} quizzes taken
                  </p>
                </div>
                <div className="p-3 bg-green-600 rounded-xl">
                  <Award size={28} className="text-white" />
                </div>
              </div>
            </CardBody>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 border-purple-200 dark:border-purple-800">
            <CardBody>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-purple-700 dark:text-purple-300 font-medium mb-1">
                    Study Time
                  </p>
                  <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                    {studyHours}h {studyMinutes}m
                  </p>
                  <p className="text-xs text-purple-600 dark:text-purple-400 mt-1">
                    Total time invested
                  </p>
                </div>
                <div className="p-3 bg-purple-600 rounded-xl">
                  <Clock size={28} className="text-white" />
                </div>
              </div>
            </CardBody>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 border-orange-200 dark:border-orange-800">
            <CardBody>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-orange-700 dark:text-orange-300 font-medium mb-1">
                    Study Streak
                  </p>
                  <p className="text-3xl font-bold text-orange-600 dark:text-orange-400">
                    {currentStreak} days
                  </p>
                  <p className="text-xs text-orange-600 dark:text-orange-400 mt-1">
                    Keep it going! 🔥
                  </p>
                </div>
                <div className="p-3 bg-orange-600 rounded-xl">
                  <Flame size={28} className="text-white" />
                </div>
              </div>
            </CardBody>
          </Card>
        </motion.div>
      </div>

      {/* Module Progress */}
      <div>
        <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-6 flex items-center gap-2">
          <Target size={28} className="text-blue-600" />
          Your Modules
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {modules.map((module, index) => {
            const Icon = module.icon;
            const moduleProgress = getModuleProgress(module.id, module.totalSections);

            return (
              <motion.div
                key={module.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <Card hover className="cursor-pointer" onClick={() => onNavigate(module.id)}>
                  <CardBody>
                    <div className="flex items-start gap-4">
                      <div className={`p-3 bg-${module.color}-100 dark:bg-${module.color}-900/30 rounded-xl`}>
                        <Icon size={28} className={`text-${module.color}-600 dark:text-${module.color}-400`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-1">
                          {module.title}
                        </h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                          {module.description}
                        </p>
                        <ProgressBar value={moduleProgress} showLabel={false} />
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-sm text-slate-600 dark:text-slate-400">
                            {moduleProgress}% Complete
                          </span>
                          <Badge variant={moduleProgress === 100 ? 'success' : 'primary'}>
                            {module.totalSections} sections
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Bookmarks */}
      {progress.bookmarks.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-6 flex items-center gap-2">
            <BookmarkCheck size={28} className="text-yellow-600" />
            Bookmarked Sections
          </h2>

          <Card>
            <CardBody>
              <div className="space-y-3">
                {progress.bookmarks.slice(0, 5).map((bookmark, index) => {
                  const [moduleId, sectionId] = bookmark.split('-');
                  const module = modules.find(m => m.id === moduleId);
                  const section = module?.sections.find(s => s.id === sectionId);

                  return (
                    <div
                      key={bookmark}
                      className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-900/50 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors cursor-pointer"
                      onClick={() => onNavigate(moduleId, sectionId)}
                    >
                      <div className="flex items-center gap-3">
                        <BookmarkCheck size={18} className="text-yellow-600" />
                        <div>
                          <p className="font-medium text-slate-800 dark:text-slate-100">
                            {section?.title}
                          </p>
                          <p className="text-sm text-slate-500">
                            {module?.title}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardBody>
          </Card>
        </div>
      )}

      {/* Recent Quiz Scores */}
      {totalQuizzes > 0 && (
        <div>
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-6 flex items-center gap-2">
            <Award size={28} className="text-green-600" />
            Recent Quiz Results
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Object.entries(progress.quizScores)
              .slice(-6)
              .reverse()
              .map(([quizId, quiz], index) => {
                const isPassed = quiz.percentage >= 70;
                return (
                  <motion.div
                    key={quizId}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.05 * index }}
                  >
                    <Card className={`border-2 ${isPassed ? 'border-green-300 dark:border-green-700' : 'border-yellow-300 dark:border-yellow-700'}`}>
                      <CardBody>
                        <div className="flex items-center justify-between mb-3">
                          <Badge variant={isPassed ? 'success' : 'warning'}>
                            {quiz.percentage}%
                          </Badge>
                          {isPassed && <CheckCircle size={20} className="text-green-600" />}
                        </div>
                        <p className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                          Score: {quiz.score}/{quiz.total}
                        </p>
                        <p className="text-xs text-slate-500">
                          {new Date(quiz.date).toLocaleDateString()}
                        </p>
                      </CardBody>
                    </Card>
                  </motion.div>
                );
              })}
          </div>
        </div>
      )}
    </div>
  );
};
