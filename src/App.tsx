import { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { quotes, CATEGORIES, filterQuotesByCategory } from './data/quotes';
import type { Quote, Category } from './data/quotes';
import { QuoteCard } from './components/QuoteCard';

// Beautiful gradient color palettes
const colorPalettes = [
  { bg: ['#0f0c29', '#302b63', '#24243e'], text: ['#ff9a9e', '#fad0c4'] },
  { bg: ['#134E5E', '#71B280', '#134E5E'], text: ['#ffeaa7', '#fdcb6e'] },
  { bg: ['#2C3E50', '#4CA1AF', '#2C3E50'], text: ['#fab1a0', '#ff7675'] },
  { bg: ['#1e3c72', '#2a5298', '#1e3c72'], text: ['#a29bfe', '#6c5ce7'] },
  { bg: ['#360033', '#0b8793', '#360033'], text: ['#ffeaa7', '#fdcb6e'] },
  { bg: ['#000428', '#004e92', '#000428'], text: ['#74b9ff', '#a29bfe'] },
  { bg: ['#2c3e50', '#3498db', '#2c3e50'], text: ['#ffeaa7', '#fdcb6e'] },
  { bg: ['#4b134f', '#c94b4b', '#4b134f'], text: ['#ffeaa7', '#fdcb6e'] },
  { bg: ['#283c86', '#45a247', '#283c86'], text: ['#ffeaa7', '#fdcb6e'] },
  { bg: ['#8e2de2', '#4a00e0', '#8e2de2'], text: ['#ffeaa7', '#fdcb6e'] },
  { bg: ['#2b5876', '#4e4376', '#2b5876'], text: ['#fab1a0', '#ff7675'] },
  { bg: ['#314755', '#26a0da', '#314755'], text: ['#ffeaa7', '#fdcb6e'] },
];

function App() {
  // Ref to track mounted state for async safety
  const isMountedRef = useRef(true);
  useEffect(() => {
    return () => {
      isMountedRef.current = false;
    };
  }, []);
  const [currentQuote, setCurrentQuote] = useState<Quote | null>(null);
  const [colorPalette, setColorPalette] = useState(colorPalettes[0]);
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const filteredQuotes = useMemo(
    () => filterQuotesByCategory(quotes, activeCategory),
    [activeCategory]
  );

  const pickRandomQuote = useCallback(
    (avoidQuote?: Quote | null) => {
      const pool = filteredQuotes.length > 0 ? filteredQuotes : quotes;
      let nextQuote: Quote;
      let attempts = 0;
      do {
        const idx = Math.floor(Math.random() * pool.length);
        nextQuote = pool[idx];
        attempts++;
      } while (nextQuote?.id === avoidQuote?.id && pool.length > 1 && attempts < 10);

      const randomColorIndex = Math.floor(Math.random() * colorPalettes.length);
      setColorPalette(colorPalettes[randomColorIndex]);
      setCurrentQuote(nextQuote);
    },
    [filteredQuotes]
  );

  // Initial load
  useEffect(() => {
    pickRandomQuote();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Re-roll when category changes
  useEffect(() => {
    if (currentQuote) {
      pickRandomQuote(currentQuote);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeCategory]);

  // Simplified refresh: directly pick a new quote without transition guards
  const handleRefresh = useCallback(() => {
    // Pick a new random quote, avoiding immediate repeat
    pickRandomQuote(currentQuote);
  }, [pickRandomQuote, currentQuote]);

  // Keyboard shortcut: Space to refresh
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Space' && !['INPUT', 'TEXTAREA', 'BUTTON'].includes((e.target as HTMLElement).tagName)) {
        e.preventDefault();
        handleRefresh();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleRefresh]);

  const backgroundStyle = {
    background: `linear-gradient(to right, ${colorPalette.bg[0]}, ${colorPalette.bg[1]}, ${colorPalette.bg[2]})`,
  };

  const textStyle: React.CSSProperties = {
    color: colorPalette.text[0],
  };

  return (
    <div className="app-container" style={backgroundStyle}>
      <header className="app-header">
        <img src="/icon-square.svg" alt="Movie Quotes icon" className="app-logo" />
      </header>

      {/* Category Filter Chips */}
      <div className="filter-chips-container">
        {CATEGORIES.map((cat) => (
          <button
            key={`category-${cat}`}
            className={`filter-chip ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Quote Card with transition */}
      <div className={`quote-card-wrapper ${isTransitioning ? 'fade-out' : 'fade-in'}`}>
        {currentQuote && (
          <QuoteCard quote={currentQuote} textStyle={textStyle} />
        )}
      </div>

      {/* Refresh Button */}
      <button className="refresh-button" onClick={handleRefresh} aria-label="New quote">
        <span className="refresh-icon">↻</span>
        <span className="refresh-label">New Quote</span>
      </button>

      <div className="background-gradient"></div>
    </div>
  );
}

export default App;
