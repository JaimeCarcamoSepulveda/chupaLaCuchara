import React from "react";
import star from  "../src/assets/star-regular.svg"

export default function Recipe(props) {
    let badgeText
    if(props.camiFavorite === 1) {
        badgeText = "FAVORITE"
    }  else if (props.origin === "Chile") {
        badgeText = `${props.origin}`
    }
    

    return (
        <>
         <div className="card-recipe">
            {badgeText && <div className="recipe-badge">{badgeText}</div>}
                <img className="card-recipe--image" src={props.img && `../recipe-images/${props.img}`} alt="" />
            
            <div className="recipe-stats">
              <img className="recipe--star" src={star} alt="" />
              <span>{props.starRating} ({props.reviewCount}) </span>
              <span className="grayish">{props.origin}</span>
              <span className="grayish">{props.prepTime}</span>
            </div>
            <p> {props.nameOfDish}</p>
            <p><span className="bold">{props.calorieCount}</span>/per plate</p>
            <p>Ingredients:{props.dishIngredients}</p>
         </div>
        </>
    )


}