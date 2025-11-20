import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import { CollapsibleSection } from '../components/interactive/CollapsibleSection';
import { NotesEditor } from '../components/interactive/NotesEditor';
import { Quiz } from '../components/interactive/Quiz';
import { FlashcardDeck } from '../components/interactive/Flashcard';
import { MemoryLayoutVisualization, ProcessStateDiagram } from '../components/interactive/InteractiveVisualization';
import { Tabs } from '../components/common/Tabs';
import { Card, CardBody } from '../components/common/Card';
import { CodeBlock } from '../components/common/CodeBlock';
import { Badge } from '../components/common/Badge';
import { ProgressBar } from '../components/common/ProgressBar';
import { useProgress } from '../context/ProgressContext';
import { quizzes } from '../data/quizzes';
import { flashcards } from '../data/flashcards';
import {
  BookOpen,
  Brain,
  MessageSquare,
  Trophy,
  CheckCircle,
  Clock
} from 'lucide-react';

export const ModulePage = ({ module }) => {
  const [activeTab, setActiveTab] = useState('content');
  const { getModuleProgress } = useProgress();

  const tabs = [
    { id: 'content', label: 'Content', icon: BookOpen },
    { id: 'flashcards', label: 'Flashcards', icon: Brain },
    { id: 'quiz', label: 'Quiz', icon: Trophy },
    { id: 'notes', label: 'Notes', icon: MessageSquare }
  ];

  const moduleProgress = getModuleProgress(module.id, module.totalSections);

  // Custom component to render code blocks in markdown
  const MarkdownComponents = {
    code({ node, inline, className, children, ...props }) {
      const match = /language-(\w+)/.exec(className || '');
      return !inline && match ? (
        <CodeBlock
          code={String(children).replace(/\n$/, '')}
          language={match[1]}
          showLineNumbers={true}
        />
      ) : (
        <code className="px-1.5 py-0.5 bg-slate-200 dark:bg-slate-700 rounded text-sm font-mono" {...props}>
          {children}
        </code>
      );
    }
  };

  const renderInteractiveContent = (sectionId) => {
    // Special interactive visualizations for specific sections
    if (module.id === 'system-internals') {
      if (sectionId === 'process-concept') {
        return (
          <div className="my-8">
            <h4 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-4">
              Interactive: Process State Diagram
            </h4>
            <ProcessStateDiagram />
          </div>
        );
      }
      if (sectionId === 'system-calls') {
        return (
          <div className="my-8">
            <h4 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-4">
              Interactive: Memory Layout
            </h4>
            <MemoryLayoutVisualization />
          </div>
        );
      }
    }
    return null;
  };

  return (
    <div className="max-w-6xl mx-auto">
      {/* Module Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`bg-gradient-to-r from-${module.color}-600 to-${module.color}-700 rounded-2xl p-8 text-white shadow-2xl mb-8`}
      >
        <div className="flex items-center gap-4 mb-4">
          {React.createElement(module.icon, { size: 48 })}
          <div className="flex-1">
            <h1 className="text-4xl font-bold mb-2">{module.title}</h1>
            <p className={`text-${module.color}-100 text-lg`}>{module.description}</p>
          </div>
        </div>

        <div className="mt-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">Module Progress</span>
            <span className="text-sm font-bold">{moduleProgress}%</span>
          </div>
          <div className="w-full bg-white/20 rounded-full h-3 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${moduleProgress}%` }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="h-full bg-white rounded-full"
            />
          </div>
        </div>

        <div className="flex gap-4 mt-6">
          <Badge variant="default" className="bg-white/20 text-white border-white/30">
            <CheckCircle size={14} />
            {module.totalSections} Sections
          </Badge>
          <Badge variant="default" className="bg-white/20 text-white border-white/30">
            <Clock size={14} />
            ~{module.totalSections * 15} min read
          </Badge>
        </div>
      </motion.div>

      {/* Tabs */}
      <Card className="mb-6">
        <Tabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />
      </Card>

      {/* Tab Content */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {activeTab === 'content' && (
          <div className="space-y-6">
            {module.sections.map((section, index) => (
              <div key={section.id}>
                <CollapsibleSection
                  title={section.title}
                  moduleId={module.id}
                  sectionId={section.id}
                  icon={section.icon}
                  defaultOpen={index === 0}
                >
                  <div className="prose dark:prose-invert max-w-none">
                    <ReactMarkdown components={MarkdownComponents}>
                      {section.content}
                    </ReactMarkdown>
                  </div>
                  {renderInteractiveContent(section.id)}
                </CollapsibleSection>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'flashcards' && (
          <div>
            {flashcards[module.id] ? (
              <FlashcardDeck
                cards={flashcards[module.id].cards}
                deckTitle={flashcards[module.id].deckTitle}
              />
            ) : (
              <Card>
                <CardBody className="text-center py-12">
                  <Brain size={48} className="mx-auto mb-4 text-slate-400" />
                  <p className="text-slate-600 dark:text-slate-400">
                    Flashcards for this module are coming soon!
                  </p>
                </CardBody>
              </Card>
            )}
          </div>
        )}

        {activeTab === 'quiz' && (
          <div>
            {quizzes[module.id] ? (
              <Quiz
                questions={quizzes[module.id].questions}
                quizId={quizzes[module.id].id}
                title={quizzes[module.id].title}
              />
            ) : (
              <Card>
                <CardBody className="text-center py-12">
                  <Trophy size={48} className="mx-auto mb-4 text-slate-400" />
                  <p className="text-slate-600 dark:text-slate-400">
                    Quiz for this module is coming soon!
                  </p>
                </CardBody>
              </Card>
            )}
          </div>
        )}

        {activeTab === 'notes' && (
          <div className="space-y-6">
            {module.sections.map((section) => (
              <NotesEditor
                key={section.id}
                moduleId={module.id}
                sectionId={section.id}
                title={section.title}
              />
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
};
