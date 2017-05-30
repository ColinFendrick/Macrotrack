import React from 'react'
import { observer } from 'mobx-react'
import store from '../store'

const DailyNutrients = () => (
  <div className='DailyNutrients'>
    <div className='daily'>
      <div>Calories: </div>
      <div>{store.daily.calories}</div>
    </div>
    <div className='daily'>
      <div>Protein: </div>
      <div>{store.daily.protein} g</div>
    </div>
    <div className='daily'>
      <div>Fats: </div>
      <div>
        {store.daily.fats} g
      </div>
    </div>
    <div className='daily'>
      <div>Carbohydrates: </div>
      <div>{store.daily.carbs} g</div>
    </div>
  </div>
)

export default observer(DailyNutrients)
