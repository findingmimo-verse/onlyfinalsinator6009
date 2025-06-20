import React, { useState } from 'react';
import './Character.css';

const characters = [
  { name: 'Cardan', image: '/characters/character1.png' },
  { name: 'Jack', image: '/characters/character2.png' },
  { name: 'Ravi', image: '/characters/character3.png' },
  { name: 'Harry', image: '/characters/character4.png' },
];

const Character = ({ onSelect }) => {
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const handleSelect = () => {
    if (onSelect && selectedCharacter) {
      onSelect(selectedCharacter);
      console.log('Character selected:', selectedCharacter);
    }
  };

  return (
    <div className="character-container">
      <div className="character-grid">
        {characters.map((char) => (
          <div
            key={char.name}
            className="character-card"
            onClick={() => setSelectedCharacter(char.name)}
            style={{
              border: selectedCharacter === char.name ? '2px solid #3d6f8f' : 'none',
              cursor: 'pointer',
            }}
          >
            <img src={char.image} alt={char.name} />
            <p>{char.name}</p>
          </div>
        ))}
      </div>

      <button className="select-button" onClick={handleSelect}>
        Select
      </button>
    </div>
  );
};

export default Character;
