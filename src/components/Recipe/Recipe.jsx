import PropTypes from 'prop-types';
const Recipe = ({recipe,handleCookBtn}) => {
    // console.log(recipe);
    const {recipe_img,recipe_name,short_description,ingredients,preparing_time,calories} = recipe;
    return (
        <div className="card card-compact bg-base-100 w-full shadow-xl p-5">
  <figure>
    <img className='h-[300px] w-full object-cover'
      src={recipe_img}
      alt="recipes img" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{recipe_name}</h2>
    <p className='text-gray-600'>{short_description}</p>
    <div className="divider"></div>
    <div>
        <h2 className='text-gray-600 font-semibold mb-2'>Ingredients: {ingredients.length} </h2>
        <ul className='list-disc'>
            {
                ingredients.map((ingredient,index)=><li key={index}>{ingredient}</li>)
            }
        </ul>
    </div>
    <div className="divider"></div>
    <div className='flex gap-5 mb-2'>
        <h3><i className="fa-regular fa-clock"></i> <span>{preparing_time} minutes</span></h3>
        <h3><i className="fa-solid fa-fire"></i> <span>{calories} Calories</span></h3>
    </div>
    <div className="card-actions">
      <button onClick={()=>handleCookBtn(recipe)} className="btn bg-[#0BE58A] rounded-3xl">Want to Cook</button>
    </div>
  </div>
</div>
    );
};
Recipe.propTypes = {
    recipe : PropTypes.object,
    handleCookBtn : PropTypes.func,
}
export default Recipe;