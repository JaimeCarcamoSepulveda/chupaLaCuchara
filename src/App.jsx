import ReactDOM from "react-dom/client"
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Greetings from '../components/Greetings'
import Recipe from '../components/Recipe'
import recipeData from '../components/recipeData'
import RecipeFilter from '../components/RecipeFilter'
import UserForm from '../components/UserForm'

//import reactLogo from './assets/react.svg'
//import './App.css'

export default function App() {
  
  const recipeElements = recipeData.map(recipe=> {
    return < Recipe 
      key = {recipe.id}
      {...recipe}
       />
  })


  return (
    <article>
         < Navbar />
         <Greetings />
         < RecipeFilter/>
         < Hero />
        <section className='recipe-list'>{recipeElements}</section>
         < UserForm />
    </article>

  )
}

/*
let img = "need-a-sample-image-here-to-test.png"
let starRating = {5.0}
let reviewCount = {5}
let origin = "Chile "
let prepTime = "1 hour to make"
let nameOfDish = "porotos granados"
let calorieCount = "950 calories"
let dishIngredients = "Porotos and more"
*/