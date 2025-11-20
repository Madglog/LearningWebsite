# LearnHub - Interactive Study Platform

An interactive, visually appealing web application for studying complex subjects with engaging features like quizzes, flashcards, progress tracking, and interactive visualizations.

## ✨ Features

### 📚 **Comprehensive Learning Modules**
- Well-structured content organized into modules and sections
- Collapsible sections with bookmark and completion tracking
- Rich markdown support with syntax highlighting
- Interactive visualizations (Memory Layout, Process State Diagrams, etc.)

### 🧠 **Interactive Study Tools**
- **Quizzes**: Multi-choice quizzes with instant feedback and explanations
- **Flashcards**: Flip-card interface with mastery tracking
- **Notes**: Markdown-supported notes editor for each section
- **Code Blocks**: Syntax-highlighted code with copy functionality

### 📊 **Progress Tracking**
- Module completion percentages
- Quiz score history
- Study time tracking
- Bookmarked sections
- Achievement badges
- Study streak counter

### 🎨 **Modern UI/UX**
- Dark mode support with smooth transitions
- Fully responsive design (mobile, tablet, desktop)
- Beautiful animations with Framer Motion
- Gradient backgrounds and glassmorphism effects
- Custom scrollbars
- Interactive hover states

### 🚀 **Performance**
- Built with Vite for lightning-fast development
- Optimized React components
- Local storage for persisting progress
- Lazy loading and code splitting

## 🛠️ Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Markdown**: React Markdown
- **Syntax Highlighting**: React Syntax Highlighter
- **Charts**: Recharts

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎯 Usage

### Adding New Modules

1. Open `src/data/modules.js`
2. Add a new module object with the following structure:

```javascript
{
  id: 'module-id',
  title: 'Module Title',
  icon: IconComponent, // from lucide-react
  color: 'blue', // tailwind color
  totalSections: 5,
  description: 'Module description',
  sections: [
    {
      id: 'section-id',
      title: 'Section Title',
      icon: IconComponent,
      content: `Markdown content here`
    }
  ]
}
```

### Adding Quizzes

1. Open `src/data/quizzes.js`
2. Add quiz for your module:

```javascript
'module-id': {
  id: 'unique-quiz-id',
  title: 'Quiz Title',
  questions: [
    {
      question: 'Question text?',
      options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
      correctAnswer: 0, // index of correct option
      explanation: 'Explanation of the answer'
    }
  ]
}
```

### Adding Flashcards

1. Open `src/data/flashcards.js`
2. Add flashcard deck for your module:

```javascript
'module-id': {
  deckTitle: 'Deck Title',
  cards: [
    {
      question: 'Question?',
      answer: 'Answer',
      hint: 'Optional hint',
      example: 'Optional example'
    }
  ]
}
```

## 📁 Project Structure

```
LearningWebsite/
├── public/                 # Static files
├── src/
│   ├── components/        # Reusable components
│   │   ├── common/       # Common UI components (Button, Card, Badge, etc.)
│   │   ├── interactive/  # Interactive learning components
│   │   └── layout/       # Layout components (Sidebar, Header)
│   ├── context/          # React Context (Theme, Progress)
│   ├── data/             # Module content, quizzes, flashcards
│   ├── pages/            # Page components (Dashboard, ModulePage)
│   ├── App.jsx           # Main app component
│   ├── main.jsx          # Entry point
│   └── index.css         # Global styles
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## 🎨 Customization

### Colors
Modify `tailwind.config.js` to change the color scheme.

### Modules
Edit files in `src/data/` to add/modify learning content.

### Theme
The app supports dark mode by default. The theme is managed through `ThemeContext`.

## 🌟 Key Components

- **Dashboard**: Overview with stats, module cards, bookmarks, and recent quizzes
- **ModulePage**: Displays module content with tabs for content, flashcards, quiz, and notes
- **CollapsibleSection**: Expandable section with bookmark and completion tracking
- **Quiz**: Interactive quiz with score tracking and explanations
- **FlashcardDeck**: Flip-card learning tool with progress tracking
- **NotesEditor**: Markdown-supported notes with preview mode

## 💾 Data Persistence

All user progress is stored in browser's localStorage:
- Completed sections
- Quiz scores
- Personal notes
- Bookmarks
- Flashcard progress
- Study time

## 🚀 Deployment

```bash
# Build for production
npm run build

# The dist/ folder can be deployed to any static hosting service:
# - Vercel
# - Netlify
# - GitHub Pages
# - AWS S3
# - etc.
```

## 📝 License

MIT License - feel free to use this project for your own learning platform!

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Add new modules and content
- Improve UI/UX
- Add new features
- Fix bugs
- Improve documentation

---

**Happy Learning! 📚✨**
