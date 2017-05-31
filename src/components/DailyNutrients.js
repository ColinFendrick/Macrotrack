import React from 'react'
import { observer } from 'mobx-react'
import store from '../store'

const DailyNutrients = () => (
  <div className='DailyNutrients'>
    <div className='daily'>
      <div>Calories: </div>
      <div>{store.daily.calories.toString().substring(0, 4)}</div>
    </div>
    <div className='daily'>
      <div>Protein: </div>
      <div>{store.daily.protein.toString().substring(0, 6)} g</div>
    </div>
    <div className='daily'>
      <div>Fats: </div>
      <div>
        {store.daily.fats.toString().substring(0, 5)} g
      </div>
    </div>
    <div className='daily'>
      <div>Carbohydrates: </div>
      <div>{store.daily.carbs.toString().substring(0, 6)} g</div>
    </div>
  </div>
)

export default observer(DailyNutrients)
