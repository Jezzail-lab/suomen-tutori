// Animations de feedback visuelles - Particules et effets
import { createContext, useContext, useState, useCallback, useRef } from 'react';

const FeedbackContext = createContext(null);

// Types de particules
const PARTICLE_TYPES = {
  STAR: 'star',
  LEAF: 'leaf',
  SPARKLE: 'sparkle',
  PETAL: 'petal'
};

// Generer une particule avec proprietes aleatoires
const createParticle = (type, originX, originY) => {
  const id = Math.random().toString(36).substr(2, 9);
  const angle = Math.random() * Math.PI * 2;
  const velocity = 2 + Math.random() * 3;
  const size = type === PARTICLE_TYPES.STAR ? 20 + Math.random() * 15 : 15 + Math.random() * 10;
  const rotation = Math.random() * 360;
  const rotationSpeed = (Math.random() - 0.5) * 10;

  // Couleurs selon le type
  const colors = {
    [PARTICLE_TYPES.STAR]: ['#FFD700', '#FFC107', '#FFEB3B'],
    [PARTICLE_TYPES.LEAF]: ['#8FB58F', '#7DA67D', '#A8C4A8', '#6B9B6B'],
    [PARTICLE_TYPES.SPARKLE]: ['#FFFFFF', '#FFF9C4', '#FFECB3'],
    [PARTICLE_TYPES.PETAL]: ['#FFB6C1', '#FFC0CB', '#FF69B4', '#D88BA8']
  };
  const color = colors[type][Math.floor(Math.random() * colors[type].length)];

  return {
    id,
    type,
    x: originX || window.innerWidth / 2,
    y: originY || window.innerHeight / 2,
    vx: Math.cos(angle) * velocity,
    vy: Math.sin(angle) * velocity - 2, // Biais vers le haut
    size,
    rotation,
    rotationSpeed,
    color,
    opacity: 1,
    life: 1
  };
};

// Composant Particule individuelle
function Particle({ particle }) {
  const style = {
    position: 'fixed',
    left: particle.x,
    top: particle.y,
    width: particle.size,
    height: particle.size,
    opacity: particle.opacity,
    transform: `rotate(${particle.rotation}deg)`,
    pointerEvents: 'none',
    zIndex: 10000
  };

  // Rendu selon le type
  switch (particle.type) {
    case PARTICLE_TYPES.STAR:
      return (
        <svg style={style} viewBox="0 0 24 24">
          <path
            d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
            fill={particle.color}
          />
        </svg>
      );

    case PARTICLE_TYPES.LEAF:
      return (
        <svg style={style} viewBox="0 0 24 24">
          <path
            d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"
            fill={particle.color}
          />
        </svg>
      );

    case PARTICLE_TYPES.SPARKLE:
      return (
        <svg style={style} viewBox="0 0 24 24">
          <path
            d="M12 0L14 10L24 12L14 14L12 24L10 14L0 12L10 10L12 0Z"
            fill={particle.color}
          />
        </svg>
      );

    case PARTICLE_TYPES.PETAL:
      return (
        <svg style={style} viewBox="0 0 24 24">
          <ellipse cx="12" cy="12" rx="6" ry="10" fill={particle.color} />
        </svg>
      );

    default:
      return null;
  }
}

// Provider du contexte de feedback
export function FeedbackProvider({ children }) {
  const [particles, setParticles] = useState([]);
  const animationRef = useRef(null);

  // Mettre a jour les particules (animation frame)
  const updateParticles = useCallback(() => {
    setParticles(prev => {
      const updated = prev
        .map(p => ({
          ...p,
          x: p.x + p.vx,
          y: p.y + p.vy,
          vy: p.vy + 0.15, // Gravite
          rotation: p.rotation + p.rotationSpeed,
          life: p.life - 0.02,
          opacity: p.life
        }))
        .filter(p => p.life > 0);

      if (updated.length > 0) {
        animationRef.current = requestAnimationFrame(updateParticles);
      }

      return updated;
    });
  }, []);

  // Emettre des particules
  const emit = useCallback((type, count = 10, originX, originY) => {
    const newParticles = Array.from({ length: count }, () =>
      createParticle(type, originX, originY)
    );

    setParticles(prev => [...prev, ...newParticles]);

    if (!animationRef.current) {
      animationRef.current = requestAnimationFrame(updateParticles);
    }
  }, [updateParticles]);

  // Effets predefinies
  const showCorrect = useCallback((x, y) => {
    emit(PARTICLE_TYPES.STAR, 8, x, y);
    emit(PARTICLE_TYPES.SPARKLE, 5, x, y);
  }, [emit]);

  const showIncorrect = useCallback(() => {
    // Pas de particules pour erreur, juste un effet CSS sur l'element
  }, []);

  const showLessonComplete = useCallback(() => {
    // Cascade de feuilles et petales depuis le haut
    const centerX = window.innerWidth / 2;
    for (let i = 0; i < 5; i++) {
      setTimeout(() => {
        emit(PARTICLE_TYPES.LEAF, 4, centerX + (Math.random() - 0.5) * 200, 50);
        emit(PARTICLE_TYPES.PETAL, 3, centerX + (Math.random() - 0.5) * 200, 50);
      }, i * 150);
    }
  }, [emit]);

  const showMasteryUp = useCallback((x, y) => {
    emit(PARTICLE_TYPES.STAR, 12, x, y);
    emit(PARTICLE_TYPES.SPARKLE, 8, x, y);
  }, [emit]);

  return (
    <FeedbackContext.Provider value={{
      showCorrect,
      showIncorrect,
      showLessonComplete,
      showMasteryUp,
      emit
    }}>
      {children}
      {/* Rendu des particules */}
      <div className="particles-container" aria-hidden="true">
        {particles.map(p => (
          <Particle key={p.id} particle={p} />
        ))}
      </div>
    </FeedbackContext.Provider>
  );
}

// Hook pour utiliser les effets de feedback
export function useFeedback() {
  const context = useContext(FeedbackContext);
  if (!context) {
    // Retourner des fonctions vides si pas de provider
    return {
      showCorrect: () => {},
      showIncorrect: () => {},
      showLessonComplete: () => {},
      showMasteryUp: () => {},
      emit: () => {}
    };
  }
  return context;
}
