import PropTypes from "prop-types";

const Carts = ({AddRecipes,handlePreparingBtn,currentlyCooking,handleTotalTimeAndClories,totalCalories,totalTimes}) => {
    
    return (
        <div className="p-5 border rounded-3xl md:w-2/5 w-full">
            <h3 className="text-center text-3xl">Want to cook: {AddRecipes.length}</h3>
            <div className="divider"></div>
        
        { /*want to cook table */}
        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Time</th>
        <th>Calories</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      
      {
        AddRecipes.map((AddRecipes,index)=>

            <tr key={index}>
        <th>{index+1}</th>
        <td className="text-gray-500">{AddRecipes.recipe_name}</td>
        <td className="text-gray-500">{AddRecipes.preparing_time} minutes</td>
        <td className="text-gray-500">{AddRecipes.calories} Calories</td>
        <td><button onClick={()=>{handlePreparingBtn(AddRecipes.recipe_id)
                                  handleTotalTimeAndClories(AddRecipes.preparing_time,AddRecipes.calories)
        }} className="btn bg-[#0BE58A] text-gray-600 rounded-3xl">Preparing</button></td>
      </tr>
        
        )
      }
      
      
    </tbody>
  </table>
  
</div>

        {/*currently cooking table table */}
        <div className="divider"></div>
        <h3 className="text-center text-3xl mt-6">Currently Cooking: 0</h3>
        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Time</th>
        <th>Calories</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      
      {
        currentlyCooking.map((currentlyCook,index)=>

            <tr key={index}>
        <th>{index+1}</th>
        <td className="text-gray-500">{currentlyCook.recipe_name}</td>
        <td className="text-gray-500">{currentlyCook.preparing_time} minutes</td>
        <td className="text-gray-500">{currentlyCook.calories} Calories</td>
        
      </tr>
        
        )
      }

      <tr className="text-lime-800 font-medium border-none">
        <td></td>
        <td></td>
        <td>Total times : {totalTimes} minutes</td>
        <td>Total Calories: {totalCalories} Calories</td>
      </tr>
      
      
    </tbody>
  </table>
  
</div>
        </div>
    );
};

Carts.propTypes = {
    AddRecipes : PropTypes.array,
    handlePreparingBtn : PropTypes.func,
    currentlyCooking : PropTypes.array,
    handleTotalTimeAndClories : PropTypes.func,
    totalCalories : PropTypes.number,
    totalTimes : PropTypes.number,
}

export default Carts;