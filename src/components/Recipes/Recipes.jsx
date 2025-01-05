import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";
import PropTypes from "prop-types";

const Recipes = ({handleCookBtn}) => {
    const [recipes,setRecipes] = useState([]);
    useEffect(()=>{
        fetch('recipes.json')
        .then(res=>res.json())
        .then(data=>setRecipes(data))
    },[])
    return (
        <div className="md:w-3/5 w-full">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
                {
                    recipes.map((recipe,index)=><Recipe key={index} 
                    recipe={recipe}
                    handleCookBtn = {handleCookBtn}
                    ></Recipe>)
                }
            </div>
            
        </div>
    );
};

Recipes.propTypes = {
    handleCookBtn : PropTypes.func,
}

export default Recipes;