// Paysage finlandais decoratif - Inspired by Finnish nature
// Plaines fleuries, bouleaux et pins

export function SceneryBackground() {
  return (
    <div className="scenery-background" aria-hidden="true">
      {/* Ciel avec nuages subtils */}
      <div className="sky">
        <div className="cloud cloud-1"></div>
        <div className="cloud cloud-2"></div>
        <div className="cloud cloud-3"></div>
      </div>

      {/* Collines en arriere-plan */}
      <svg className="hills-back" viewBox="0 0 1440 200" preserveAspectRatio="none">
        <path
          d="M0,200 L0,120 Q180,80 360,100 T720,90 T1080,110 T1440,95 L1440,200 Z"
          fill="var(--hill-back)"
        />
      </svg>

      {/* Arbres arriere-plan (pins lointains) */}
      <div className="trees-far">
        <svg className="pine-far" viewBox="0 0 40 80" style={{ left: '5%' }}>
          <path d="M20,0 L35,60 L25,55 L30,70 L10,70 L15,55 L5,60 Z" fill="var(--tree-far)" />
          <rect x="17" y="70" width="6" height="10" fill="var(--trunk-far)" />
        </svg>
        <svg className="pine-far" viewBox="0 0 40 80" style={{ left: '12%', transform: 'scale(0.7)' }}>
          <path d="M20,0 L35,60 L25,55 L30,70 L10,70 L15,55 L5,60 Z" fill="var(--tree-far)" />
          <rect x="17" y="70" width="6" height="10" fill="var(--trunk-far)" />
        </svg>
        <svg className="pine-far" viewBox="0 0 40 80" style={{ left: '88%' }}>
          <path d="M20,0 L35,60 L25,55 L30,70 L10,70 L15,55 L5,60 Z" fill="var(--tree-far)" />
          <rect x="17" y="70" width="6" height="10" fill="var(--trunk-far)" />
        </svg>
        <svg className="pine-far" viewBox="0 0 40 80" style={{ left: '93%', transform: 'scale(0.8)' }}>
          <path d="M20,0 L35,60 L25,55 L30,70 L10,70 L15,55 L5,60 Z" fill="var(--tree-far)" />
          <rect x="17" y="70" width="6" height="10" fill="var(--trunk-far)" />
        </svg>
      </div>

      {/* Collines au milieu */}
      <svg className="hills-mid" viewBox="0 0 1440 180" preserveAspectRatio="none">
        <path
          d="M0,180 L0,100 Q240,60 480,80 T960,70 T1440,90 L1440,180 Z"
          fill="var(--hill-mid)"
        />
      </svg>

      {/* Bouleaux (milieu) */}
      <div className="birches">
        <svg className="birch" viewBox="0 0 30 120" style={{ left: '8%' }}>
          <rect x="12" y="20" width="6" height="100" fill="var(--birch-trunk)" rx="2" />
          <rect x="13" y="30" width="4" height="3" fill="var(--birch-mark)" />
          <rect x="13" y="45" width="4" height="2" fill="var(--birch-mark)" />
          <rect x="13" y="60" width="4" height="3" fill="var(--birch-mark)" />
          <rect x="13" y="80" width="4" height="2" fill="var(--birch-mark)" />
          <ellipse cx="15" cy="15" rx="12" ry="18" fill="var(--birch-leaves)" />
          <ellipse cx="8" cy="25" rx="8" ry="12" fill="var(--birch-leaves)" />
          <ellipse cx="22" cy="22" rx="9" ry="14" fill="var(--birch-leaves)" />
        </svg>
        <svg className="birch" viewBox="0 0 30 120" style={{ left: '15%', transform: 'scale(0.85)' }}>
          <rect x="12" y="25" width="6" height="95" fill="var(--birch-trunk)" rx="2" />
          <rect x="13" y="35" width="4" height="2" fill="var(--birch-mark)" />
          <rect x="13" y="55" width="4" height="3" fill="var(--birch-mark)" />
          <rect x="13" y="75" width="4" height="2" fill="var(--birch-mark)" />
          <ellipse cx="15" cy="20" rx="11" ry="16" fill="var(--birch-leaves)" />
          <ellipse cx="7" cy="28" rx="7" ry="10" fill="var(--birch-leaves)" />
          <ellipse cx="23" cy="26" rx="8" ry="12" fill="var(--birch-leaves)" />
        </svg>
        <svg className="birch" viewBox="0 0 30 120" style={{ right: '10%' }}>
          <rect x="12" y="20" width="6" height="100" fill="var(--birch-trunk)" rx="2" />
          <rect x="13" y="30" width="4" height="3" fill="var(--birch-mark)" />
          <rect x="13" y="50" width="4" height="2" fill="var(--birch-mark)" />
          <rect x="13" y="70" width="4" height="3" fill="var(--birch-mark)" />
          <ellipse cx="15" cy="15" rx="12" ry="18" fill="var(--birch-leaves)" />
          <ellipse cx="6" cy="22" rx="8" ry="12" fill="var(--birch-leaves)" />
          <ellipse cx="24" cy="20" rx="9" ry="14" fill="var(--birch-leaves)" />
        </svg>
        <svg className="birch" viewBox="0 0 30 120" style={{ right: '5%', transform: 'scale(0.9)' }}>
          <rect x="12" y="22" width="6" height="98" fill="var(--birch-trunk)" rx="2" />
          <rect x="13" y="35" width="4" height="2" fill="var(--birch-mark)" />
          <rect x="13" y="55" width="4" height="3" fill="var(--birch-mark)" />
          <rect x="13" y="78" width="4" height="2" fill="var(--birch-mark)" />
          <ellipse cx="15" cy="17" rx="11" ry="16" fill="var(--birch-leaves)" />
          <ellipse cx="8" cy="25" rx="7" ry="11" fill="var(--birch-leaves)" />
          <ellipse cx="22" cy="23" rx="8" ry="13" fill="var(--birch-leaves)" />
        </svg>
      </div>

      {/* Collines premier plan */}
      <svg className="hills-front" viewBox="0 0 1440 150" preserveAspectRatio="none">
        <path
          d="M0,150 L0,80 Q360,40 720,60 T1440,50 L1440,150 Z"
          fill="var(--hill-front)"
        />
      </svg>

      {/* Pins premier plan */}
      <div className="pines-front">
        <svg className="pine" viewBox="0 0 50 100" style={{ left: '2%' }}>
          <path d="M25,0 L45,40 L35,38 L48,65 L32,60 L42,85 L8,85 L18,60 L2,65 L15,38 L5,40 Z" fill="var(--pine-dark)" />
          <rect x="21" y="85" width="8" height="15" fill="var(--trunk)" />
        </svg>
        <svg className="pine pine-small" viewBox="0 0 50 100" style={{ left: '0%' }}>
          <path d="M25,0 L45,40 L35,38 L48,65 L32,60 L42,85 L8,85 L18,60 L2,65 L15,38 L5,40 Z" fill="var(--pine-medium)" />
          <rect x="21" y="85" width="8" height="15" fill="var(--trunk)" />
        </svg>
        <svg className="pine" viewBox="0 0 50 100" style={{ right: '1%' }}>
          <path d="M25,0 L45,40 L35,38 L48,65 L32,60 L42,85 L8,85 L18,60 L2,65 L15,38 L5,40 Z" fill="var(--pine-dark)" />
          <rect x="21" y="85" width="8" height="15" fill="var(--trunk)" />
        </svg>
        <svg className="pine pine-small" viewBox="0 0 50 100" style={{ right: '5%' }}>
          <path d="M25,0 L45,40 L35,38 L48,65 L32,60 L42,85 L8,85 L18,60 L2,65 L15,38 L5,40 Z" fill="var(--pine-medium)" />
          <rect x="21" y="85" width="8" height="15" fill="var(--trunk)" />
        </svg>
      </div>

      {/* Prairie fleurie en bas */}
      <div className="meadow">
        <svg className="meadow-svg" viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path
            d="M0,100 L0,30 Q120,20 240,25 T480,20 T720,28 T960,22 T1200,26 T1440,20 L1440,100 Z"
            fill="var(--meadow)"
          />
        </svg>

        {/* Herbes */}
        <div className="grass-container">
          {[...Array(30)].map((_, i) => (
            <svg key={i} className="grass" style={{ left: `${(i * 3.5) + Math.random() * 2}%` }} viewBox="0 0 20 30">
              <path d="M10,30 Q8,20 5,10 Q10,15 10,0 Q10,15 15,10 Q12,20 10,30" fill="var(--grass-color)" />
            </svg>
          ))}
        </div>

        {/* Fleurs */}
        <div className="flowers-container">
          {/* Fleurs blanches (paivankakkara - marguerites) */}
          <svg className="flower daisy" style={{ left: '10%' }} viewBox="0 0 30 40">
            <line x1="15" y1="40" x2="15" y2="20" stroke="var(--stem)" strokeWidth="2" />
            <ellipse cx="15" cy="15" rx="3" ry="3" fill="var(--flower-center)" />
            <ellipse cx="15" cy="8" rx="2" ry="5" fill="white" />
            <ellipse cx="15" cy="22" rx="2" ry="5" fill="white" />
            <ellipse cx="8" cy="15" rx="5" ry="2" fill="white" />
            <ellipse cx="22" cy="15" rx="5" ry="2" fill="white" />
            <ellipse cx="10" cy="10" rx="2" ry="4" fill="white" transform="rotate(-45 10 10)" />
            <ellipse cx="20" cy="10" rx="2" ry="4" fill="white" transform="rotate(45 20 10)" />
            <ellipse cx="10" cy="20" rx="2" ry="4" fill="white" transform="rotate(45 10 20)" />
            <ellipse cx="20" cy="20" rx="2" ry="4" fill="white" transform="rotate(-45 20 20)" />
          </svg>
          <svg className="flower daisy" style={{ left: '25%' }} viewBox="0 0 30 40">
            <line x1="15" y1="40" x2="15" y2="22" stroke="var(--stem)" strokeWidth="2" />
            <ellipse cx="15" cy="17" rx="2.5" ry="2.5" fill="var(--flower-center)" />
            <ellipse cx="15" cy="11" rx="1.8" ry="4" fill="white" />
            <ellipse cx="15" cy="23" rx="1.8" ry="4" fill="white" />
            <ellipse cx="9" cy="17" rx="4" ry="1.8" fill="white" />
            <ellipse cx="21" cy="17" rx="4" ry="1.8" fill="white" />
          </svg>

          {/* Fleurs bleues (kissankello - campanules) */}
          <svg className="flower bluebell" style={{ left: '40%' }} viewBox="0 0 30 45">
            <path d="M15,45 Q14,35 12,30" stroke="var(--stem)" strokeWidth="2" fill="none" />
            <path d="M12,30 Q8,28 6,32 Q10,35 12,30" fill="var(--bluebell)" />
            <path d="M15,45 Q16,38 18,33" stroke="var(--stem)" strokeWidth="2" fill="none" />
            <path d="M18,33 Q22,31 24,35 Q20,38 18,33" fill="var(--bluebell)" />
            <path d="M15,45 Q15,32 15,25" stroke="var(--stem)" strokeWidth="2" fill="none" />
            <path d="M15,25 Q11,23 9,27 Q13,30 15,25" fill="var(--bluebell)" />
          </svg>
          <svg className="flower bluebell" style={{ left: '65%' }} viewBox="0 0 30 45">
            <path d="M15,45 Q14,35 12,30" stroke="var(--stem)" strokeWidth="2" fill="none" />
            <path d="M12,30 Q8,28 6,32 Q10,35 12,30" fill="var(--bluebell)" />
            <path d="M15,45 Q16,38 18,33" stroke="var(--stem)" strokeWidth="2" fill="none" />
            <path d="M18,33 Q22,31 24,35 Q20,38 18,33" fill="var(--bluebell)" />
          </svg>

          {/* Fleurs roses (horsma - epilobes) */}
          <svg className="flower fireweed" style={{ left: '55%' }} viewBox="0 0 20 50">
            <line x1="10" y1="50" x2="10" y2="10" stroke="var(--stem)" strokeWidth="2" />
            <circle cx="10" cy="8" r="3" fill="var(--fireweed)" />
            <circle cx="10" cy="15" r="2.5" fill="var(--fireweed)" />
            <circle cx="10" cy="21" r="2.5" fill="var(--fireweed)" />
            <circle cx="10" cy="27" r="2" fill="var(--fireweed)" />
            <circle cx="10" cy="32" r="2" fill="var(--fireweed)" />
          </svg>
          <svg className="flower fireweed" style={{ left: '80%' }} viewBox="0 0 20 50">
            <line x1="10" y1="50" x2="10" y2="12" stroke="var(--stem)" strokeWidth="2" />
            <circle cx="10" cy="10" r="2.5" fill="var(--fireweed)" />
            <circle cx="10" cy="16" r="2.5" fill="var(--fireweed)" />
            <circle cx="10" cy="22" r="2" fill="var(--fireweed)" />
            <circle cx="10" cy="27" r="2" fill="var(--fireweed)" />
          </svg>

          {/* Fleurs jaunes (voikukka - pissenlits) */}
          <svg className="flower dandelion" style={{ left: '18%' }} viewBox="0 0 30 35">
            <line x1="15" y1="35" x2="15" y2="15" stroke="var(--stem)" strokeWidth="2" />
            <circle cx="15" cy="10" r="8" fill="var(--dandelion)" />
          </svg>
          <svg className="flower dandelion" style={{ left: '70%' }} viewBox="0 0 30 35">
            <line x1="15" y1="35" x2="15" y2="18" stroke="var(--stem)" strokeWidth="2" />
            <circle cx="15" cy="13" r="6" fill="var(--dandelion)" />
          </svg>
          <svg className="flower dandelion" style={{ left: '90%' }} viewBox="0 0 30 35">
            <line x1="15" y1="35" x2="15" y2="16" stroke="var(--stem)" strokeWidth="2" />
            <circle cx="15" cy="11" r="7" fill="var(--dandelion)" />
          </svg>
        </div>
      </div>
    </div>
  );
}
