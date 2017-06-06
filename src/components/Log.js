import React, { Component } from 'react'
import { Donut } from 'rebass'
import store from '../store'
import { observer } from 'mobx-react'
import { LogItem } from '.'
import PieChart from 'react-svg-piechart'

class Log extends Component {
  state = {
    expanded: null
  }

  data = [
    {
      label: 'Protein',
      value: 10,
      color: '#b33951'

    },
    {
      label: 'Fats',
      value: 10,
      color: '#e3d081'

    },
    {
      label: 'Carbs',
      value: 10,
      color: 'hsla(212, 68%, 40%, 0.58)'

    }
  ]

  _mouseEnter = sector => {
    this.setState({expanded: sector})
  }

  render () {
    const d = store.daily
    const t = store.total

    return <div className='Log'>
      <div className='log-top'>
        <div className='log-cal'>
          <br />
          <Donut
            color='hsl(118, 24%, 45%)'
            size={256}
            value={1 - ((d.calories - t.calories) / d.calories)}
        />
          <div className='calories'>Daily Calories</div>
        </div>
        <div style={{'width': '300px'}}>
          <PieChart
            data={this.data}
            expandedSector={this.state.expanded}
            onSectorHover={this._mouseEnter}
          />
        </div>
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
        <div className='log-list'>
          <LogItem meal='Breakfast' />
          <LogItem meal='Lunch' />
          <LogItem meal='Dinner' />
          <LogItem meal='Snack' />
        </div>
      </div>
      <div className='weekly-log' />
    </div>
  }
}

export default observer(Log)
