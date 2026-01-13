// Systeme de sons melodiques - Inspire par la nature finlandaise
// Utilise Web Audio API pour generer des sons sans fichiers externes

let audioContext = null;

// Initialiser le contexte audio (doit etre appele apres une interaction utilisateur)
const getAudioContext = () => {
  if (!audioContext) {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
  }
  // Resume si suspendu (politique autoplay des navigateurs)
  if (audioContext.state === 'suspended') {
    audioContext.resume();
  }
  return audioContext;
};

// Jouer une note simple
const playNote = (frequency, duration = 0.3, type = 'sine', volume = 0.3) => {
  try {
    const ctx = getAudioContext();
    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);

    oscillator.type = type;
    oscillator.frequency.setValueAtTime(frequency, ctx.currentTime);

    // Envelope ADSR simple pour un son plus naturel
    gainNode.gain.setValueAtTime(0, ctx.currentTime);
    gainNode.gain.linearRampToValueAtTime(volume, ctx.currentTime + 0.02); // Attack
    gainNode.gain.linearRampToValueAtTime(volume * 0.7, ctx.currentTime + 0.1); // Decay
    gainNode.gain.linearRampToValueAtTime(0, ctx.currentTime + duration); // Release

    oscillator.start(ctx.currentTime);
    oscillator.stop(ctx.currentTime + duration);
  } catch (e) {
    // Silencieux si l'audio n'est pas disponible
    console.warn('Audio non disponible:', e);
  }
};

// Jouer une sequence de notes (melodie)
const playMelody = (notes, tempo = 150) => {
  const beatDuration = 60 / tempo;
  let time = 0;

  notes.forEach(({ freq, duration = 1, type = 'sine', volume = 0.3 }) => {
    setTimeout(() => {
      if (freq > 0) { // freq = 0 pour silence
        playNote(freq, duration * beatDuration * 0.9, type, volume);
      }
    }, time * 1000);
    time += duration * beatDuration;
  });
};

// Frequences des notes (octave 4 et 5)
const NOTES = {
  C4: 261.63, D4: 293.66, E4: 329.63, F4: 349.23, G4: 392.00,
  A4: 440.00, B4: 493.88,
  C5: 523.25, D5: 587.33, E5: 659.25, F5: 698.46, G5: 783.99,
  A5: 880.00, B5: 987.77,
  C6: 1046.50
};

// === SONS DE L'APPLICATION ===

// Son de bonne reponse - Carillon joyeux (arpege majeur ascendant)
const playCorrect = () => {
  playMelody([
    { freq: NOTES.E5, duration: 0.15, type: 'sine', volume: 0.25 },
    { freq: NOTES.G5, duration: 0.15, type: 'sine', volume: 0.28 },
    { freq: NOTES.C6, duration: 0.4, type: 'sine', volume: 0.3 }
  ], 300);
};

// Son de mauvaise reponse - Note douce descendante
const playIncorrect = () => {
  playMelody([
    { freq: NOTES.E4, duration: 0.2, type: 'triangle', volume: 0.2 },
    { freq: NOTES.C4, duration: 0.3, type: 'triangle', volume: 0.15 }
  ], 200);
};

// Son de lecon terminee - Melodie de celebration (style kantele finlandais)
const playLessonComplete = () => {
  playMelody([
    { freq: NOTES.G4, duration: 0.25, type: 'sine', volume: 0.25 },
    { freq: NOTES.A4, duration: 0.25, type: 'sine', volume: 0.27 },
    { freq: NOTES.B4, duration: 0.25, type: 'sine', volume: 0.28 },
    { freq: NOTES.D5, duration: 0.25, type: 'sine', volume: 0.3 },
    { freq: NOTES.E5, duration: 0.5, type: 'sine', volume: 0.32 },
    { freq: 0, duration: 0.1 }, // Petite pause
    { freq: NOTES.G5, duration: 0.6, type: 'sine', volume: 0.35 }
  ], 180);
};

// Son de niveau de maitrise atteint - Accord harmonieux
const playMasteryUp = () => {
  // Accord majeur simultane
  try {
    const ctx = getAudioContext();
    const freqs = [NOTES.C5, NOTES.E5, NOTES.G5];

    freqs.forEach((freq, i) => {
      setTimeout(() => {
        playNote(freq, 0.5, 'sine', 0.2);
      }, i * 50); // Leger arpege
    });
  } catch (e) {
    console.warn('Audio non disponible');
  }
};

// Son de clic/selection - Petit "pop"
const playClick = () => {
  playNote(NOTES.G5, 0.08, 'sine', 0.15);
};

// Son de flip de carte
const playFlip = () => {
  playMelody([
    { freq: NOTES.E5, duration: 0.05, type: 'sine', volume: 0.12 },
    { freq: NOTES.A5, duration: 0.08, type: 'sine', volume: 0.15 }
  ], 400);
};

// Son de navigation
const playNav = () => {
  playNote(NOTES.D5, 0.1, 'triangle', 0.12);
};

// Hook React pour utiliser les sons
export function useSounds() {
  // Verifier si les sons sont actives (preference utilisateur)
  const isSoundEnabled = () => {
    const pref = localStorage.getItem('tuteur-finnois-sounds');
    return pref !== 'disabled';
  };

  const setSoundEnabled = (enabled) => {
    localStorage.setItem('tuteur-finnois-sounds', enabled ? 'enabled' : 'disabled');
  };

  // Wrapper qui verifie si les sons sont actives
  const withSoundCheck = (soundFn) => () => {
    if (isSoundEnabled()) {
      soundFn();
    }
  };

  return {
    playCorrect: withSoundCheck(playCorrect),
    playIncorrect: withSoundCheck(playIncorrect),
    playLessonComplete: withSoundCheck(playLessonComplete),
    playMasteryUp: withSoundCheck(playMasteryUp),
    playClick: withSoundCheck(playClick),
    playFlip: withSoundCheck(playFlip),
    playNav: withSoundCheck(playNav),
    // Controles
    isSoundEnabled,
    setSoundEnabled
  };
}

export default useSounds;
