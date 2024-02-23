import React, { useState } from 'react';
import Image from './Image';
import './App.css';

const App = () => {
  const [score, setScore] = useState(0);
  const [clickedImages, setClickedImages] = useState([]);
  const [images, setImages] = useState([
    { id: 1, src: 'https://clicky-game.netlify.app/assets/images/jessica.png', alt: 'Image 1' },
    { id: 2, src: 'https://clicky-game.netlify.app/assets/images/summer.png', alt: 'Image 2' },
    { id: 3, src: 'https://clicky-game.netlify.app/assets/images/gianthead.png', alt: 'Image 3' },
    { id: 4, src: 'https://clicky-game.netlify.app/assets/images/jerry.png', alt: 'Image 4' },
    { id: 5, src: 'https://clicky-game.netlify.app/assets/images/beth.png', alt: 'Image 5' },
    { id: 6, src: 'https://clicky-game.netlify.app/assets/images/birdperson.png', alt: 'Image 6' },
    { id: 7, src: 'https://clicky-game.netlify.app/assets/images/mr.png', alt: 'Image 7' },
    { id: 8, src: 'https://clicky-game.netlify.app/assets/images/goldenford.png', alt: 'Image 8' },
    { id: 9, src: 'https://clicky-game.netlify.app/assets/images/morty.png', alt: 'Image 9' },
    { id: 10, src: 'https://clicky-game.netlify.app/assets/images/evilmorty.png', alt: 'Image 10' },
    { id: 11, src: 'https://clicky-game.netlify.app/assets/images/rick.png', alt: 'Image 11' },
    { id: 12, src: 'https://clicky-game.netlify.app/assets/images/meeseeks.png', alt: 'Image 12' },
  ]);

  const isCorrectGuess = () => {
    return clickedImages.length === new Set(clickedImages).size;
  };

  const handleImageClick = (id) => {
    if (clickedImages.includes(id)) {
      setScore(0);
      setClickedImages([]);
    } else {
      setScore(score + 1);
      setClickedImages([...clickedImages, id]);
    }

    shuffleImages();
  };

  const shuffleImages = () => {
    const shuffledImages = [...images].sort(() => Math.random() - 0.5);

    setImages(shuffledImages);

    if (clickedImages.length > 0 && !isCorrectGuess()) {
      setTimeout(() => {
        setScore(0);
        setClickedImages([]);
      }, 1000);
    }
  };

  return (
    <div>
      <header>
        <h1>Memory Game</h1>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/2560px-Rick_and_Morty.svg.png" alt="Rick and Morty Logo" className="logo" />
        <p className="score">Score: {score}</p>
      </header>
      <div className="main-section">
        <div className="overlay"></div>
        <div className="image-container">
          {images.map((image) => (
            <Image
              key={image.id}
              src={image.src}
              alt={image.alt}
              onClick={() => handleImageClick(image.id)}
              className="image"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
