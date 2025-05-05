import { useState, useEffect, useCallback } from 'react';
import { Howl } from 'howler';

export const useSoundEffects = () => {
  const [sounds, setSounds] = useState<{
    correct?: Howl;
    incorrect?: Howl;
    button?: Howl;
    option?: Howl;
  }>({});
  
  useEffect(() => {
    // Load all sounds
    const correctSound = new Howl({
      src: ['https://pixabay.com/sound-effects/download/correct-2-46134.mp3'],
      volume: 0.5,
      preload: true,
    });
    
    const incorrectSound = new Howl({
      src: ['https://pixabay.com/sound-effects/download/wrong-answer-126515.mp3'],
      volume: 0.5,
      preload: true,
    });
    
    const buttonSound = new Howl({
      src: ['https://pixabay.com/sound-effects/download/metal-design-button-bell-push-short-106288.mp3'],
      volume: 0.3,
      preload: true,
    });
    
    const optionSound = new Howl({
      src: ['https://pixabay.com/sound-effects/download/click-menu-app-147357.mp3'],
      volume: 0.3,
      preload: true,
    });
    
    setSounds({
      correct: correctSound,
      incorrect: incorrectSound,
      button: buttonSound,
      option: optionSound,
    });
    
    // Cleanup
    return () => {
      correctSound.unload();
      incorrectSound.unload();
      buttonSound.unload();
      optionSound.unload();
    };
  }, []);
  
  const playCorrectSound = useCallback(() => {
    sounds.correct?.play();
  }, [sounds.correct]);
  
  const playIncorrectSound = useCallback(() => {
    sounds.incorrect?.play();
  }, [sounds.incorrect]);
  
  const playButtonSound = useCallback(() => {
    sounds.button?.play();
  }, [sounds.button]);
  
  const playOptionSound = useCallback(() => {
    sounds.option?.play();
  }, [sounds.option]);
  
  return {
    playCorrectSound,
    playIncorrectSound,
    playButtonSound,
    playOptionSound,
  };
};