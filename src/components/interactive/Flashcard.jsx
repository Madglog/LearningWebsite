import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { RotateCcw, ChevronLeft, ChevronRight, Check, X, Star } from 'lucide-react';
import { useProgress } from '../../context/ProgressContext';
import { Card } from '../common/Card';
import { Button } from '../common/Button';
import { Badge } from '../common/Badge';

export const FlashcardDeck = ({ cards, deckTitle }) => {
  const [currentCard, setCurrentCard] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [masteredCards, setMasteredCards] = useState(new Set());
  const [reviewCards, setReviewCards] = useState(new Set());
  const { updateFlashcardProgress } = useProgress();

  const card = cards[currentCard];

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleNext = () => {
    if (currentCard < cards.length - 1) {
      setCurrentCard(currentCard + 1);
      setIsFlipped(false);
    }
  };

  const handlePrevious = () => {
    if (currentCard > 0) {
      setCurrentCard(currentCard - 1);
      setIsFlipped(false);
    }
  };

  const handleMastered = () => {
    setMasteredCards(new Set([...masteredCards, currentCard]));
    updateFlashcardProgress(`${deckTitle}-${currentCard}`, true);
    handleNext();
  };

  const handleReview = () => {
    setReviewCards(new Set([...reviewCards, currentCard]));
    updateFlashcardProgress(`${deckTitle}-${currentCard}`, false);
    handleNext();
  };

  const handleReset = () => {
    setCurrentCard(0);
    setIsFlipped(false);
    setMasteredCards(new Set());
    setReviewCards(new Set());
  };

  const progress = {
    mastered: masteredCards.size,
    review: reviewCards.size,
    total: cards.length
  };

  return (
    <div className="max-w-3xl mx-auto">
      {/* Progress Stats */}
      <div className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="p-4 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-green-700 dark:text-green-300 font-medium">Mastered</p>
              <p className="text-3xl font-bold text-green-600 dark:text-green-400">{progress.mastered}</p>
            </div>
            <Check size={32} className="text-green-600 dark:text-green-400" />
          </div>
        </Card>

        <Card className="p-4 bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-800/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-yellow-700 dark:text-yellow-300 font-medium">To Review</p>
              <p className="text-3xl font-bold text-yellow-600 dark:text-yellow-400">{progress.review}</p>
            </div>
            <Star size={32} className="text-yellow-600 dark:text-yellow-400" />
          </div>
        </Card>

        <Card className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-blue-700 dark:text-blue-300 font-medium">Total Cards</p>
              <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">{progress.total}</p>
            </div>
            <div className="text-blue-600 dark:text-blue-400 font-bold text-2xl">
              {Math.round((progress.mastered / progress.total) * 100)}%
            </div>
          </div>
        </Card>
      </div>

      {/* Main Card */}
      <div className="relative perspective-1000 mb-6" style={{ minHeight: '400px' }}>
        <motion.div
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
          className="relative w-full h-full"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Front */}
          <Card
            className={`absolute inset-0 w-full p-8 cursor-pointer ${isFlipped ? 'invisible' : 'visible'}`}
            style={{ backfaceVisibility: 'hidden' }}
            onClick={handleFlip}
            glow
            gradient
          >
            <div className="flex flex-col items-center justify-center h-full min-h-[350px]">
              <Badge variant="primary" className="mb-6">
                Question {currentCard + 1} of {cards.length}
              </Badge>

              <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 text-center mb-4">
                {card.question}
              </h3>

              {card.hint && (
                <p className="text-sm text-slate-500 dark:text-slate-400 italic text-center mt-4">
                  💡 Hint: {card.hint}
                </p>
              )}

              <p className="text-slate-400 dark:text-slate-500 text-sm mt-8">
                Click to reveal answer
              </p>
            </div>
          </Card>

          {/* Back */}
          <Card
            className={`absolute inset-0 w-full p-8 cursor-pointer ${!isFlipped ? 'invisible' : 'visible'}`}
            style={{
              backfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)'
            }}
            onClick={handleFlip}
            glow
            gradient
          >
            <div className="flex flex-col items-center justify-center h-full min-h-[350px]">
              <Badge variant="success" className="mb-6">
                Answer
              </Badge>

              <div className="text-lg text-slate-700 dark:text-slate-300 text-center leading-relaxed">
                {card.answer}
              </div>

              {card.example && (
                <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800 w-full">
                  <p className="text-sm font-semibold text-blue-800 dark:text-blue-300 mb-2">Example:</p>
                  <p className="text-sm text-blue-700 dark:text-blue-300">{card.example}</p>
                </div>
              )}

              <p className="text-slate-400 dark:text-slate-500 text-sm mt-8">
                Click to see question again
              </p>
            </div>
          </Card>
        </motion.div>
      </div>

      {/* Controls */}
      <div className="flex flex-col gap-4">
        {isFlipped && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex gap-4"
          >
            <Button
              onClick={handleReview}
              variant="warning"
              icon={Star}
              fullWidth
              size="lg"
            >
              Review Later
            </Button>
            <Button
              onClick={handleMastered}
              variant="success"
              icon={Check}
              fullWidth
              size="lg"
            >
              Mastered
            </Button>
          </motion.div>
        )}

        <div className="flex gap-4">
          <Button
            onClick={handlePrevious}
            disabled={currentCard === 0}
            icon={ChevronLeft}
            variant="outline"
            className="flex-1"
          >
            Previous
          </Button>

          <Button
            onClick={handleFlip}
            variant="primary"
            className="flex-1"
          >
            {isFlipped ? 'Hide Answer' : 'Show Answer'}
          </Button>

          <Button
            onClick={handleNext}
            disabled={currentCard === cards.length - 1}
            icon={ChevronRight}
            variant="outline"
            className="flex-1"
          >
            Next
          </Button>
        </div>

        <Button
          onClick={handleReset}
          variant="ghost"
          icon={RotateCcw}
          fullWidth
        >
          Reset Deck
        </Button>
      </div>
    </div>
  );
};
