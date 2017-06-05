import React from 'react'
import { Donut } from 'rebass'
import store from '../store'
import { observer } from 'mobx-react'
import { LogItem } from '.'

const Log = () => {
  const d = store.daily
  const t = store.total
  return <div className='Log'>
    <div className='log-cal'>
      <br />
      <Donut
        color='hsl(118, 24%, 45%)'
        size={256}
        value={1 - ((d.calories - t.calories) / d.calories)}
      />
      <div>Daily Calories</div>
    </div>
    <div className='log-macro-donut'>
      <div>
        <Donut color='#b33951'
          value={1 - ((d.protein - t.protein) / d.protein)} />
        <div className='donut-label protein'>Protein</div>
      </div>
      <div>
        <Donut color='hsla(212, 68%, 40%, 0.58)'
          value={1 - ((d.carbs - t.carbs) / d.carbs)} />
        <div className='donut-label carb'>Carbs</div>
      </div>
      <div>
        <Donut color='#e3d081'
          value={1 - ((d.fats - t.fats) / d.fats)} />
        <div className='donut-label fat'>Fats</div>
      </div>
    </div>
    <div className='daily-log'>
      <div className='add-food-buttons'>
        <LogItem meal='Breakfast' />
        <LogItem meal='Lunch' />
        <LogItem meal='Dinner' />
        <LogItem meal='Snack' />
      </div>
    </div>
    <div className='weekly-log' />
  </div>
}

export default observer(Log)
