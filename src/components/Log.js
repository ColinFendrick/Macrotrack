import React from 'react'
import { Donut } from 'rebass'
import store from '../store'
import { observer } from 'mobx-react'

const Log = () => (
  <div className='Log'>
    <div className='log-cal'>
      <Donut
        color='teal'
        size={256}
        value={(store.daily.calories - store.used.calories) / 2000}
    />
      <div>Daily Calories</div>
    </div>
    <div className='log-macro-donut'>
      <Donut />
      <Donut />
      <Donut />
    </div>
  </div>
)

export default observer(Log)
