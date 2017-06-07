 import React, { Component } from 'react'
 import { Donut } from 'rebass'
 import store from '../store'
 import { observer } from 'mobx-react'
 import { LogItem } from '.'
 import PieChart from 'react-svg-piechart'

 class Log extends Component {
   render () {
     const d = store.daily
     const t = store.total
     const data = [
       {
         label: 'Carbs',
         value: t.carbs,
         color: 'hsla(212, 68%, 40%, 0.58)',
         tag: 'carb',
         percent: ((t.carbs * 4) / t.calories) * 100
       },
       {
         label: 'Protein',
         value: t.protein,
         color: '#b33951',
         tag: 'protein',
         percent: ((t.protein * 4) / t.calories) * 100

       },
       {
         label: 'Fats',
         value: t.fats,
         color: '#e3d081',
         tag: 'fat',
         percent: ((t.fats * 9) / t.calories) * 100

       }
     ]

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
         <div>
           <br />
           <div style={{'width': '256px'}}>
             <PieChart
               data={data}
               expandOnHover={false}
            />
           </div>
           <div>
             {data[0].value ? data.map((element, i) => (
               <div key={i} className='pie-info'>
                 <span className={`${element.tag}`}>{element.label}</span>
                 <span className={`${element.tag}`}>{element.value} g</span>
                 <span className={`${element.tag}`}>{Math.trunc(element.percent)}%</span>
               </div>
            )) : <div />}
           </div>
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
