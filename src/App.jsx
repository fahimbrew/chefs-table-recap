import { useState } from "react"
import Banner from "./components/Banner/Banner"
import Carts from "./components/Carts/Carts"
import Header from "./components/Header/Header"
import OurRecipes from "./components/OurRecipes/OurRecipes"
import Recipes from "./components/Recipes/Recipes"

function App() {
  
  const [AddRecipes,setAddRecipes] = useState([]);
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

  return (
    <main className="container mx-auto">
      <Header></Header>
      <Banner></Banner>
      <OurRecipes></OurRecipes>
      <section className="flex md:flex-row flex-col gap-4">
        <Recipes handleCookBtn = {handleCookBtn}></Recipes>
        <Carts AddRecipes = {AddRecipes}></Carts>
      </section>
      
      
    </main>
  )
}

export default App
