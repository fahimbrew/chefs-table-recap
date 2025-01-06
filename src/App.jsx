import { useState } from "react"
import Banner from "./components/Banner/Banner"
import Carts from "./components/Carts/Carts"
import Header from "./components/Header/Header"
import OurRecipes from "./components/OurRecipes/OurRecipes"
import Recipes from "./components/Recipes/Recipes"

function App() {
  
  const [AddRecipes,setAddRecipes] = useState([]);
  const [currentlyCooking,setCurrentlyCooking] = useState([])
  const [totalTimes,setTotalTimes] = useState(0);
  const [totalCalories,setTotalCalories] = useState(0);
  const handleTotalTimeAndClories = (time,calories)=>{
    // console.log(time,calories);
    setTotalTimes(totalTimes+time);
    setTotalCalories(totalCalories + calories);
  }
  const handleCookBtn = (recipe) =>{
    // console.log(recipe);
    // console.log("ami add korbo");
    const alreadyAdded = AddRecipes.find((addRecipe,idx)=>addRecipe.recipe_id === recipe.recipe_id);
    if(!alreadyAdded){
      setAddRecipes([...AddRecipes,recipe]);
    }
    else{
      alert("already Added to the Queue")
    }
    
  }
 
 const handlePreparingBtn = id =>{
  // console.log(id);
  // console.log('ami currently cooking a jabo ar eikhan theke delete hobo');
  // find which item should be removed
  const removeRecipe = AddRecipes.find((recipe) => recipe.recipe_id === id)
  // console.log(removeRecipe);
  // updated queue 
  const updatedRecipe = AddRecipes.filter(recipe=> recipe.recipe_id !==id);
  setAddRecipes(updatedRecipe);
  // console.log(updatedRecipe);
  setCurrentlyCooking([...currentlyCooking,removeRecipe]);


 }

  return (
    <main className="container mx-auto">
      <Header></Header>
      <Banner></Banner>
      <OurRecipes></OurRecipes>
      <section className="flex md:flex-row flex-col gap-4">
        <Recipes handleCookBtn = {handleCookBtn}></Recipes>
        <Carts AddRecipes = {AddRecipes}
               handlePreparingBtn = {handlePreparingBtn}
               currentlyCooking = {currentlyCooking}
               handleTotalTimeAndClories = {handleTotalTimeAndClories}
               totalTimes = {totalTimes}
               totalCalories = {totalCalories}
        ></Carts>
      </section>
      
      
    </main>
  )
}

export default App
