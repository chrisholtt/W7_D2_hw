import React, { useState } from 'react';
import './App.css';
import MovieBanner from './components/MovieBanner'
import Navbar from './components/Navbar'
import HideButton from './components/HideButton'

function App() {
  const [showMovies, setShowMovies] = useState(true)

  const clickShowButton = () => {
    setShowMovies(bool => !bool)
  }


  return (
    <>
      <Navbar />
      <HideButton clickShowButton={() => clickShowButton()} show={showMovies} />
      {showMovies && <MovieBanner />}

    </>
  );
}

export default App;
