import { useState, useEffect } from 'react';

export function useScreen(movies) {
  const [winWidth, setWinWidth] = useState(window.innerWidth);
  const [timer, setTimer] = useState(0);
  const [showMovies, setShowMovies] = useState(7);

  function resizeFunc() {
    clearTimeout(timer);
    setTimer(setTimeout(() => {
      setWinWidth(window.innerWidth);
    }, 800));
  }

  useEffect(() => {
    window.addEventListener('resize', resizeFunc);
    if (winWidth >= 1280) {
      setShowMovies(7);
    } else if (winWidth >= 0) {
      setShowMovies(5);
    }

    return () => {
      window.removeEventListener('resize', resizeFunc);
    }
  }, [winWidth]);

  function displayMoreMovies() {
    if (winWidth >= 1280) {
      setShowMovies(showMovies + 7);
    } else if (winWidth >= 0) {
      setShowMovies(showMovies + 1);
    }
  }

  let displayedMovies = movies.length > 0 ? movies.slice(0, showMovies) : [];

  return {
    displayedMovies,
    displayMoreMovies,
  }
}