

// import React, { useEffect, useState } from "react";

// const Character = ({ data, onCardClick }) => {
//   const [isFavorite, setIsFavorite] = useState(false);

//   useEffect(() => {
//     const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
//     const index = favorites.findIndex((item) => item.name === data.name);
//     setIsFavorite(index !== -1);
//   }, [data.name]);

//   const handleFavoriteClick = (event) => {
//     event.stopPropagation(); // Prevent click event from propagating to parent elements
//     let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
//     const index = favorites.findIndex((item) => item.name === data.name);

//     if (index === -1) {
//       favorites.push(data);
//     } else {
//       favorites.splice(index, 1);
//     }

//     localStorage.setItem("favorites", JSON.stringify(favorites));
//     setIsFavorite(!isFavorite);
//   };

//   return (
//     <div className="card" style={{ maxWidth: "310px" }} onClick={() => onCardClick(data.id)}>
//       <img
//         src={data.image || "./src/assets/danieal-HP.jpg"}
//         className="card-img-top"
//         alt={data.name}
//         style={{ height: "300px" }}
//       />
//       <div className="card-body">
//         <h5 className="card-title">
//           {data.gender === "female" ? (
//             <i className="bi bi-gender-female" />
//           ) : (
//             <i className="bi bi-gender-male" />
//           )}{" "}
//           {data.name}
//         </h5>
//         <h5>
//           {data.alive ? (
//             <i className="bi bi-heart-fill"></i>
//           ) : (
//             <i className="bi bi-heartbreak-fill"></i>
//           )}
//           {data.alive ? "Alive" : "Dead"} - {data.species}
//         </h5>
//         <h5>{data.house || "🛖"}</h5>
//       </div>
//       <div className="fav" onClick={handleFavoriteClick}>
//         <h3>
//           <i className={isFavorite ? "bi bi-heart-fill" : "bi bi-heart"}></i>
//         </h3>
//       </div>
//     </div>
//   );
// };

// export default Character;
import React, { useEffect, useState } from "react";

const Character = ({ data, onCardClick }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const index = favorites.findIndex((item) => item.name === data.name);
    setIsFavorite(index !== -1);
  }, [data.name]);

  const handleFavoriteClick = (event) => {
    event.stopPropagation(); // Prevent click event from propagating to parent elements
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const index = favorites.findIndex((item) => item.name === data.name);

    if (index === -1) {
      favorites.push(data);
    } else {
      favorites.splice(index, 1);
    }

    localStorage.setItem("favorites", JSON.stringify(favorites));
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="card" style={{ maxWidth: "310px" }} onClick={() => onCardClick(data.id)}>
      <img
        src={data.image || "./src/assets/danieal-HP.jpg"}
        className="card-img-top"
        alt={data.name}
        style={{ height: "300px" }}
      />
      <div className="card-body">
        <h5 className="card-title">
          {data.gender === "female" ? (
            <i className="bi bi-gender-female" />
          ) : (
            <i className="bi bi-gender-male" />
          )}{" "}
          {data.name}
        </h5>
        <h5>
          {data.alive ? (
            <i className="bi bi-heart-fill"></i>
          ) : (
            <i className="bi bi-heartbreak-fill"></i>
          )}
          {data.alive ? "Alive" : "Dead"} - {data.species}
        </h5>
        <h5>{data.house || "🛖"}</h5>
      </div>
      <div className="fav" onClick={handleFavoriteClick}>
        <h3>
          <i className={isFavorite ? "bi bi-heart-fill" : "bi bi-heart"}></i>
        </h3>
      </div>
    </div>
  );
};

export default Character;