import React from 'react';
import "./card.scss"

const Card = ({image,HeadText,about,price}) => {
  return (
    <div id='card'>
        <div className="col-4">
        <img src={image} alt="" />
        <div className="text">
        <div className="text-1">
        <h4>{HeadText}</h4>
        <p>{about}</p>
        </div>
        <div className="text-2">
        <span>{price}</span>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Card;