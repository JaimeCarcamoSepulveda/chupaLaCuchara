import React from "react";
import star from  "../src/assets/star-regular.svg"

export default function Recipe(props) {


    return (
        <>
         <div className="card-recipe">
                <img className="card-recipe--image" src="" alt="" />
            
            <div className="recipe-stats">
              <img className="recipe--star" src={star} alt="" />
              <span>{props.starRating} </span>
              <span className="grayish"> {props.origin}</span>
              <span className="grayish"> {props.prepTime}</span>
            </div>
            <p> {props.nameOfDish}</p>
            <p><span className="bold">{props.calorieCount}</span>/per plate Ingredients:{props.dishIngredients}</p>
         </div>
        </>
    )


}