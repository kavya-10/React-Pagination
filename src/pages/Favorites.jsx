import React, { useState, useEffect } from 'react';

const Favorites = () => {
  const [favoriteCards, setFavoriteCards] = useState([]);

  useEffect(() => {
    // Retrieve favorited cards from local storage
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavoriteCards(favorites);
  }, []);

  return (
    <div className="container my-4">
      <h1 className="text-center my-4">Favorites</h1>
      <div className="row">
        {favoriteCards.map((card, index) => (
          <div className="col-md-4" key={index}>
            <div className="card mb-4">
              <img src={card.image ? card.image : "./src/assets/danieal-HP.jpg"} className="card-img-top" alt="Character" />
              <div className="card-body">
                <h5 className="card-title">{card.name}</h5>
                <p className="card-text">{card.species}</p>
                {/* Add more details as needed */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;