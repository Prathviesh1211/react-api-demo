import React from "react";
import './Card.css'

const Card = ({ movieData }) => {
    const {Poster,imdbID}=movieData;
  return (
    // <li className="hero-container">
    //   <div className="main-container">
    //     <div className="poster-container">
    //       <img src={Poster} className="poster" alt={imdbID} />
    //     </div>
    //     <div className="ticket-container">
    //       <div className="ticket__content">
    //         <a href={`/movie/${imdbID}`}>
    //           <button className="ticket__buy-btn">Watch now</button>
    //         </a>
    //       </div>
    //     </div>
    //   </div>
    // </li>
    <li className="movie-card">
      <img src={movieData.Poster} alt={movieData.Title} />
      <div className="movie-info">
        <h3>{movieData.Title}</h3>
        <p>{movieData.Year}</p>
        <p>{movieData.Type}</p>
      </div>
    </li>
  );
};

export default Card;
