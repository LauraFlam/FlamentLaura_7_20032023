import './Rating.scss'
import React from "react";
import greyStar from '../../assets/grey_star.png';
import redStar from '../../assets/red_star.png';


function Rating(props) {
  const score = props.score;
const notes = [1, 2, 3, 4, 5];
return (
  <div className="rate-container">
    {notes.map((note) =>
      score >= note ? (
        <img
          key={note.toString()}
          className="star"
          src={redStar}
          alt="star"
        />
      ) : (
        <img
          key={note.toString()}
          className="star"
          src={greyStar}
          alt="star"
        />
      )
    )}
  </div>
);
}

export default Rating;