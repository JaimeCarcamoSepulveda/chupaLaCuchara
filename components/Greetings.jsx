import React from "react";

export default function Greetings() {

    const date = new Date()
    const hours = date.getHours()
    let dayTime
    let mealType
    
   /* hours < 17? hours < 12?  dayTime ="good morning"; mealType = "breakfast": dayTime = "good afternoon"; mealType = "lunch":  dayTime ="good evening"; mealType= "dinner"; */
   if (hours < 12) {
    dayTime = "Good morning"
    mealType = "Breakfast"
} else if (hours >= 12 && hours < 17) {
    dayTime = "Good afternoon"
    mealType = "Lunch"
} else {
    dayTime = "Good evening"
    mealType = "Dinner"
}



    return(
        <>
            <section className="greeting">
                <h1> {dayTime}! </h1>
                <h2>are you ready to eat {mealType}?</h2>

            </section>

        </>

    )
}