import React from 'react'

// A small component to list out nutrients of an individual entry
const FoodNutrients = ({ food }) => {
  const f = food.fields
  return <div className='FoodNutrients'>
    <div className='nutrient calories'>
      <div>Calories: </div>
      <div>{f.nf_calories}</div>
    </div>
    <div className='nutrient protein'>
      <div>Protein: </div>
      <div>{f.nf_protein} g</div>
    </div>
    <div className='nutrient fat'>
      <div>Fats: </div>
      <div>
        {f.nf_total_fat} g
        </div>
    </div>
    <div className='nutrient carb'>
      <div>Carbohydrates: </div>
      <div>{f.nf_total_carbohydrate} g</div>
    </div>

  </div>
}

export default FoodNutrients
