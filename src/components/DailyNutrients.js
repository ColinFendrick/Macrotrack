import React from 'react'
import { observer } from 'mobx-react'
import store from '../store'

// A quick component to put daily nutrients in places
const DailyNutrients = ({ temp }) => {
  const d = store.daily
  if (!temp) {
    return <div className='DailyNutrients'>
      <div className='daily'>
        <div>Calories: </div>
        <div>
          {Math.trunc(d.calories)}
        </div>
      </div>
      <div className='daily'>
        <div>Protein: </div>
        <div>
          {Math.trunc(d.protein)} g
        </div>
      </div>
      <div className='daily'>
        <div>Fats: </div>
        <div>
          {Math.trunc(d.fats)} g
      </div>
      </div>
      <div className='daily'>
        <div>Carbohydrates: </div>
        <div>
          {Math.trunc(d.carbs)} g
        </div>
      </div>
    </div>
  }
  if (temp) {
    return <div className='DailyNutrients'>
      <div className='daily'>
        <div>Calories: </div>
        <div>
          {Math.trunc(d.tCalories)} <span>
            ({Math.trunc(d.tCalories - d.calories)})
          </span>
        </div>
      </div>
      <div className='daily'>
        <div>Protein: </div>
        <div>
          {Math.trunc(d.tProtein)} g <span>
            ({Math.trunc(d.tProtein - d.protein)})
          </span>
        </div>
      </div>
      <div className='daily'>
        <div>Fats: </div>
        <div>
          {Math.trunc(d.tFats)} g <span>
            ({Math.trunc(d.tFats - d.fats)})
          </span>
        </div>
      </div>
      <div className='daily'>
        <div>Carbohydrates: </div>
        <div>
          {Math.trunc(d.tCarbs)} g <span>
            ({Math.trunc(d.tCarbs - d.carbs)})
          </span>
        </div>
      </div>
    </div>
  }
}

export default observer(DailyNutrients)
