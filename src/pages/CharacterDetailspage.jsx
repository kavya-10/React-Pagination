import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CharacterDetails = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const response = await fetch(`https://hp-api.onrender.com/api/characters`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const characterData = data.find(character => character.id === id);
        if (!characterData) {
          throw new Error('Character not found');
        }
        setCharacter(characterData);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchCharacter();
  }, [id]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!character) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container my-4 d-flex justify-content-center">
      <div className="card " style={{width:'18rem'}}>
        <img
          src={character.image || "./src/assets/danieal-HP.jpg"}
          className="card-img-top"
          alt={character.name}
          style={{ height: "300px", width: '285px' }}
        />
        <div className="card-body bg-primary">
        <h5 className="card-title">{character.name}</h5>
          <p className="card-text"><i className="bi bi-star-fill"></i> <strong>Species:</strong> {character.species}</p>
          <p className="card-text"><i className="bi bi-gender-ambiguous"></i> <strong>Gender:</strong> {character.gender}</p>
          <p className="card-text"><i className="bi bi-house-fill"></i> <strong>House:</strong> {character.house}</p>
          <p className="card-text"><i className="bi bi-calendar-fill"></i> <strong>Date of Birth:</strong> {character.dateOfBirth}</p>
          <p className="card-text"><i className="bi bi-tree-fill"></i> <strong>Ancestry:</strong> {character.ancestry}</p>
          <p className="card-text"><i className="bi bi-eye-fill"></i> <strong>Eye Color:</strong> {character.eyeColour}</p>
          <p className="card-text"><i className="bi bi-person-fill"></i> <strong>Hair Color:</strong> {character.hairColour}</p>
          <p className="card-text"><i className="bi bi-wand"></i> <strong>Wand:</strong> {character.wand.wood}, {character.wand.core}, {character.wand.length} inches</p>
          <p className="card-text"><i className="bi bi-patronus-fill"></i> <strong>Patronus:</strong> {character.patronus}</p>
          <p className="card-text"><i className="bi bi-person-badge-fill"></i> <strong>Actor:</strong> {character.actor}</p>
          <p className="card-text"><i className="bi bi-heart-fill"></i> <strong>Alive:</strong> {character.alive ? "Yes" : "No"}</p>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetails;