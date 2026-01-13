import { useState } from 'react';

// Donnees des cas finlandais
const FINNISH_CASES = [
  { name: 'Nominatif', question: 'Mikä? Kuka?', meaning: 'Sujet', suffix: '-', example: 'talo', exampleFr: 'maison' },
  { name: 'Genitif', question: 'Minkä? Kenen?', meaning: 'Possession', suffix: '-n', example: 'talon', exampleFr: 'de la maison' },
  { name: 'Partitif', question: 'Mitä? Ketä?', meaning: 'Partiel/Indéfini', suffix: '-a/-ä/-ta/-tä', example: 'taloa', exampleFr: 'de maison' },
  { name: 'Inessif', question: 'Missä?', meaning: 'Dans', suffix: '-ssa/-ssä', example: 'talossa', exampleFr: 'dans la maison' },
  { name: 'Elatif', question: 'Mistä?', meaning: 'Hors de', suffix: '-sta/-stä', example: 'talosta', exampleFr: 'de la maison' },
  { name: 'Illatif', question: 'Mihin?', meaning: 'Vers (intérieur)', suffix: '-Vn/-hVn/-seen', example: 'taloon', exampleFr: 'vers la maison' },
  { name: 'Adessif', question: 'Millä?', meaning: 'Sur/Chez', suffix: '-lla/-llä', example: 'talolla', exampleFr: 'sur la maison' },
  { name: 'Ablatif', question: 'Miltä?', meaning: 'De dessus', suffix: '-lta/-ltä', example: 'talolta', exampleFr: 'de la maison' },
  { name: 'Allatif', question: 'Mille?', meaning: 'Vers (extérieur)', suffix: '-lle', example: 'talolle', exampleFr: 'vers la maison' },
  { name: 'Essif', question: 'Minä? Milloin?', meaning: 'En tant que', suffix: '-na/-nä', example: 'talona', exampleFr: 'en tant que maison' },
  { name: 'Translatif', question: 'Miksi?', meaning: 'Devenir', suffix: '-ksi', example: 'taloksi', exampleFr: 'en maison' },
];

// Conjugaison du verbe puhua (type 1)
const VERB_CONJUGATION = {
  puhua: {
    type: 1,
    meaning: 'parler',
    present: {
      minä: 'puhun', sinä: 'puhut', hän: 'puhuu',
      me: 'puhumme', te: 'puhutte', he: 'puhuvat'
    },
    presentPuhekieli: {
      minä: 'mä puhun', sinä: 'sä puhut', hän: 'se puhuu',
      me: 'me puhutaan', te: 'te puhutte', he: 'ne puhuu'
    },
    past: {
      minä: 'puhuin', sinä: 'puhuit', hän: 'puhui',
      me: 'puhuimme', te: 'puhuitte', he: 'puhuivat'
    }
  },
  olla: {
    type: 'irrégulier',
    meaning: 'être',
    present: {
      minä: 'olen', sinä: 'olet', hän: 'on',
      me: 'olemme', te: 'olette', he: 'ovat'
    },
    presentPuhekieli: {
      minä: 'mä oon', sinä: 'sä oot', hän: 'se on',
      me: 'me ollaan', te: 'te ootte', he: 'ne on'
    },
    past: {
      minä: 'olin', sinä: 'olit', hän: 'oli',
      me: 'olimme', te: 'olitte', he: 'olivat'
    }
  },
  mennä: {
    type: 3,
    meaning: 'aller',
    present: {
      minä: 'menen', sinä: 'menet', hän: 'menee',
      me: 'menemme', te: 'menette', he: 'menevät'
    },
    presentPuhekieli: {
      minä: 'mä meen', sinä: 'sä meet', hän: 'se menee',
      me: 'me mennään', te: 'te meette', he: 'ne menee'
    },
    past: {
      minä: 'menin', sinä: 'menit', hän: 'meni',
      me: 'menimme', te: 'menitte', he: 'menivät'
    }
  },
  syödä: {
    type: 2,
    meaning: 'manger',
    present: {
      minä: 'syön', sinä: 'syöt', hän: 'syö',
      me: 'syömme', te: 'syötte', he: 'syövät'
    },
    presentPuhekieli: {
      minä: 'mä syön', sinä: 'sä syöt', hän: 'se syö',
      me: 'me syödään', te: 'te syötte', he: 'ne syö'
    },
    past: {
      minä: 'söin', sinä: 'söit', hän: 'söi',
      me: 'söimme', te: 'söitte', he: 'söivät'
    }
  }
};

// Pronoms personnels
const PRONOUNS = ['minä', 'sinä', 'hän', 'me', 'te', 'he'];
const PRONOUNS_FR = ['je', 'tu', 'il/elle', 'nous', 'vous', 'ils/elles'];

export function GrammarTables({ onBack }) {
  const [activeTab, setActiveTab] = useState('cases'); // 'cases', 'verbs'
  const [selectedVerb, setSelectedVerb] = useState('puhua');
  const [showPuhekieli, setShowPuhekieli] = useState(false);
  const [selectedCase, setSelectedCase] = useState(null);

  return (
    <div className="grammar-tables">
      <header className="grammar-header">
        <button className="back-btn" onClick={onBack}>← Retour</button>
        <h1>Tableaux de grammaire</h1>
      </header>

      {/* Onglets */}
      <div className="grammar-tabs">
        <button
          className={`tab-btn ${activeTab === 'cases' ? 'active' : ''}`}
          onClick={() => setActiveTab('cases')}
        >
          Les 15 cas
        </button>
        <button
          className={`tab-btn ${activeTab === 'verbs' ? 'active' : ''}`}
          onClick={() => setActiveTab('verbs')}
        >
          Conjugaison
        </button>
      </div>

      {/* Contenu */}
      <div className="grammar-content">
        {activeTab === 'cases' && (
          <div className="cases-section">
            <p className="grammar-intro">
              Le finnois compte <strong>15 cas grammaticaux</strong>. Chaque cas modifie la fin du mot
              pour indiquer sa fonction dans la phrase.
            </p>

            <div className="cases-grid">
              {FINNISH_CASES.map((caseItem, index) => (
                <div
                  key={index}
                  className={`case-card ${selectedCase === index ? 'expanded' : ''}`}
                  onClick={() => setSelectedCase(selectedCase === index ? null : index)}
                >
                  <div className="case-header">
                    <span className="case-number">{index + 1}</span>
                    <span className="case-name">{caseItem.name}</span>
                    <span className="case-suffix">{caseItem.suffix}</span>
                  </div>

                  {selectedCase === index && (
                    <div className="case-details">
                      <div className="case-info">
                        <p><strong>Question :</strong> {caseItem.question}</p>
                        <p><strong>Sens :</strong> {caseItem.meaning}</p>
                      </div>
                      <div className="case-example">
                        <span className="example-fi">{caseItem.example}</span>
                        <span className="example-fr">{caseItem.exampleFr}</span>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="case-tip">
              <strong>Astuce :</strong> Les 6 premiers cas (nominatif → illatif) couvrent 90% des usages quotidiens !
            </div>
          </div>
        )}

        {activeTab === 'verbs' && (
          <div className="verbs-section">
            <div className="verb-controls">
              <div className="verb-selector">
                <label>Verbe :</label>
                <select
                  value={selectedVerb}
                  onChange={(e) => setSelectedVerb(e.target.value)}
                >
                  {Object.keys(VERB_CONJUGATION).map(verb => (
                    <option key={verb} value={verb}>
                      {verb} ({VERB_CONJUGATION[verb].meaning})
                    </option>
                  ))}
                </select>
              </div>

              <label className="toggle-label">
                <input
                  type="checkbox"
                  checked={showPuhekieli}
                  onChange={(e) => setShowPuhekieli(e.target.checked)}
                />
                Puhekieli (langue parlée)
              </label>
            </div>

            <div className="verb-info">
              <h3>{selectedVerb}</h3>
              <span className="verb-meaning">{VERB_CONJUGATION[selectedVerb].meaning}</span>
              <span className="verb-type">Type {VERB_CONJUGATION[selectedVerb].type}</span>
            </div>

            <div className="conjugation-tables">
              {/* Présent */}
              <div className="conjugation-table">
                <h4>Présent</h4>
                <table>
                  <thead>
                    <tr>
                      <th>Pronom</th>
                      <th>Forme</th>
                    </tr>
                  </thead>
                  <tbody>
                    {PRONOUNS.map((pronoun, index) => (
                      <tr key={pronoun}>
                        <td>
                          <span className="pronoun-fi">{pronoun}</span>
                          <span className="pronoun-fr">{PRONOUNS_FR[index]}</span>
                        </td>
                        <td className="verb-form">
                          {showPuhekieli
                            ? VERB_CONJUGATION[selectedVerb].presentPuhekieli[pronoun]
                            : VERB_CONJUGATION[selectedVerb].present[pronoun]}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Passé */}
              <div className="conjugation-table">
                <h4>Passé (Imperfekti)</h4>
                <table>
                  <thead>
                    <tr>
                      <th>Pronom</th>
                      <th>Forme</th>
                    </tr>
                  </thead>
                  <tbody>
                    {PRONOUNS.map((pronoun, index) => (
                      <tr key={pronoun}>
                        <td>
                          <span className="pronoun-fi">{pronoun}</span>
                          <span className="pronoun-fr">{PRONOUNS_FR[index]}</span>
                        </td>
                        <td className="verb-form">
                          {VERB_CONJUGATION[selectedVerb].past[pronoun]}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="verb-tip">
              <strong>Astuce :</strong> En puhekieli, "nous" utilise souvent le passif (me puhutaan)
              et "ils/elles" la 3ème personne du singulier (ne puhuu).
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
