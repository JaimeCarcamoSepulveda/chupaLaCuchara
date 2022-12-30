import react from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Recipe from '../components/Recipe'
import Greetings from '../components/Greetings'
//import reactLogo from './assets/react.svg'
//import './App.css'

export default function App() {
  return (
    <article>
         < Navbar />
         <Greetings />
         < Hero />
         < Recipe 
          let starRating = "5.0"
          let origin = "Chile "
          let prepTime = "1 hour to make"
          let nameOfDish = "porotos granados"
          let calorieCount = "950 calories"
          let dishIngredients = "Porotos and more"
          />
         
    </article>
  )
}

