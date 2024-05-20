import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Description = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      const response = await fetch(`https://your-api-endpoint/characters/${id}`);
      const data = await response.json();
      setCharacter(data);
    };

    fetchCharacter();
  }, [id]);

  if (!character) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container my-4">
      <button onClick={() => navigate(-1)}>Back</button>
      <h3>Character Details</h3>
      <p><strong>Name:</strong> {character.name}</p>
      <p><strong>Gender:</strong> {character.gender}</p>
      <p><strong>Status:</strong> {character.alive ? "Alive" : "Dead"}</p>
      <p><strong>Species:</strong> {character.species}</p>
      <p><strong>House:</strong> {character.house || "None"}</p>
      <p><strong>Description:</strong> {character.description || "No additional information available."}</p>
    </div>
  );
};

export default Description;