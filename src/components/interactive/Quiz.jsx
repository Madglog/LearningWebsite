import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle, ChevronRight, RotateCcw, Award, TrendingUp } from 'lucide-react';
import { useProgress } from '../../context/ProgressContext';
import { Card, CardBody, CardHeader, CardFooter } from '../common/Card';
import { Button } from '../common/Button';
import { Badge } from '../common/Badge';

export const Quiz = ({ questions, quizId, title = 'Quiz Challenge' }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [answers, setAnswers] = useState([]);
  const { saveQuizScore } = useProgress();

  const question = questions[currentQuestion];
  const isCorrect = selectedOption === question.correctAnswer;

  const handleSelectOption = (index) => {
    if (selectedOption !== null) return;

    setSelectedOption(index);
    setShowExplanation(true);

    const correct = index === question.correctAnswer;
    if (correct) {
      setScore(score + 1);
    }

    setAnswers([...answers, {
      questionIndex: currentQuestion,
      selected: index,
      correct,
      question: question.question
    }]);
  };

  const handleNext = () => {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
      setShowExplanation(false);
    } else {
      setIsCompleted(true);
      saveQuizScore(quizId, score + (isCorrect ? 1 : 0), questions.length);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedOption(null);
    setShowExplanation(false);
    setScore(0);
    setIsCompleted(false);
    setAnswers([]);
  };

  if (isCompleted) {
    const percentage = Math.round(((score) / questions.length) * 100);
    const isPassed = percentage >= 70;

    return (
      <Card className="max-w-2xl mx-auto" glow gradient>
        <CardBody className="text-center py-12">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center"
          >
            <Award size={48} className="text-white" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-2"
          >
            Quiz Completed!
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-8"
          >
            <div className="text-5xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              {score}/{questions.length}
            </div>
            <div className="text-xl text-slate-600 dark:text-slate-400">
              {percentage}% Score
            </div>
            <Badge
              variant={isPassed ? 'success' : 'warning'}
              className="mt-3 text-base px-4 py-2"
            >
              {isPassed ? '✓ Passed' : 'Needs Improvement'}
            </Badge>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <h3 className="font-semibold text-slate-800 dark:text-slate-100 mb-4">Review:</h3>
            <div className="space-y-2 text-left max-w-md mx-auto">
              {answers.map((answer, idx) => (
                <div
                  key={idx}
                  className={`p-3 rounded-lg border-2 ${
                    answer.correct
                      ? 'border-green-300 bg-green-50 dark:bg-green-900/20'
                      : 'border-red-300 bg-red-50 dark:bg-red-900/20'
                  }`}
                >
                  <div className="flex items-start gap-2">
                    {answer.correct ? (
                      <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                    ) : (
                      <XCircle size={16} className="text-red-600 mt-0.5 flex-shrink-0" />
                    )}
                    <span className="text-sm text-slate-700 dark:text-slate-300">
                      Q{idx + 1}: {answer.question.substring(0, 50)}...
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <Button onClick={resetQuiz} icon={RotateCcw} size="lg">
            Try Again
          </Button>
        </CardBody>
      </Card>
    );
  }

  return (
    <Card className="max-w-3xl mx-auto">
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100">{title}</h2>
            <p className="text-sm text-slate-500 mt-1">
              Question {currentQuestion + 1} of {questions.length}
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Badge variant="primary" icon={TrendingUp}>
              Score: {score}/{currentQuestion + (selectedOption !== null ? 1 : 0)}
            </Badge>
            <div className="w-32 bg-slate-200 dark:bg-slate-700 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </CardHeader>

      <CardBody className="min-h-[400px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mb-6 leading-relaxed">
              {question.question}
            </h3>

            <div className="space-y-3 mb-6">
              {question.options.map((option, index) => {
                const isSelected = selectedOption === index;
                const isCorrectAnswer = index === question.correctAnswer;
                const showCorrect = showExplanation && isCorrectAnswer;
                const showWrong = showExplanation && isSelected && !isCorrect;

                return (
                  <motion.button
                    key={index}
                    whileHover={selectedOption === null ? { scale: 1.01, x: 4 } : {}}
                    whileTap={selectedOption === null ? { scale: 0.99 } : {}}
                    onClick={() => handleSelectOption(index)}
                    disabled={selectedOption !== null}
                    className={`
                      w-full text-left p-4 rounded-xl border-2 transition-all duration-200
                      flex items-center justify-between group
                      ${selectedOption === null
                        ? 'border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-700 hover:bg-blue-50 dark:hover:bg-blue-900/20'
                        : showCorrect
                          ? 'border-green-500 bg-green-50 dark:bg-green-900/30'
                          : showWrong
                            ? 'border-red-500 bg-red-50 dark:bg-red-900/30'
                            : 'border-slate-200 dark:border-slate-700 opacity-60'
                      }
                    `}
                  >
                    <span className="text-slate-700 dark:text-slate-300 font-medium">
                      {option}
                    </span>
                    <AnimatePresence>
                      {showCorrect && (
                        <motion.div
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          exit={{ scale: 0 }}
                        >
                          <CheckCircle size={24} className="text-green-600" />
                        </motion.div>
                      )}
                      {showWrong && (
                        <motion.div
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          exit={{ scale: 0 }}
                        >
                          <XCircle size={24} className="text-red-600" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.button>
                );
              })}
            </div>

            <AnimatePresence>
              {showExplanation && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className={`p-4 rounded-xl border-2 ${
                    isCorrect
                      ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800'
                      : 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800'
                  }`}
                >
                  <div className="flex items-start gap-2 mb-2">
                    {isCorrect ? (
                      <CheckCircle size={20} className="text-green-600 mt-0.5" />
                    ) : (
                      <XCircle size={20} className="text-red-600 mt-0.5" />
                    )}
                    <span className={`font-bold ${isCorrect ? 'text-green-800 dark:text-green-300' : 'text-red-800 dark:text-red-300'}`}>
                      {isCorrect ? 'Correct!' : 'Incorrect'}
                    </span>
                  </div>
                  <p className="text-sm text-slate-700 dark:text-slate-300 ml-7">
                    {question.explanation}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </AnimatePresence>
      </CardBody>

      {showExplanation && (
        <CardFooter>
          <Button
            onClick={handleNext}
            icon={ChevronRight}
            fullWidth
            size="lg"
          >
            {currentQuestion + 1 === questions.length ? 'Finish Quiz' : 'Next Question'}
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};
