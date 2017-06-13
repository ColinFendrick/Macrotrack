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
    //  Data for the pie chart
    //  Percentages are converted grams to calories, then divided by total, then put into percent
    //  Fat is remainder, to account for rounding errors
     const carbPercent = ((t.carbs * 4) / t.calories) * 100
     const proPercent = ((t.protein * 4) / t.calories) * 100
     const fatPercent = 100 - proPercent - carbPercent
     const data = [
       {
         label: 'Carbs',
         value: t.carbs,
         color: 'hsla(212, 68%, 40%, 0.58)',
         tag: 'carb',
         percent: carbPercent
       },
       {
         label: 'Protein',
         value: t.protein,
         color: '#b33951',
         tag: 'protein',
         percent: proPercent

       },
       {
         label: 'Fats',
         value: t.fats,
         color: '#e3d081',
         tag: 'fat',
         percent: fatPercent
       }
     ]
    //  Value of each donut
     const donutValue = macro => (
       1 - ((d[macro] - t[macro]) / d[macro])
     )

     return <div className='Log'>
       <div className='log-top'>
         <div className='log-cal'>
           <br />
           <Donut
            //  Each donut's color adjusts if over 100%
             color={donutValue('calories') < 1 ? 'hsl(118, 24%, 45%)' : 'hsla(118, 24%, 45%, 0.5)'}
             size={256}
             value={donutValue('calories')} />
           <div className='calories'>Daily Calories
             <br />
             {Math.trunc(store.total.calories)} of {Math.trunc(store.daily.calories)}
           </div>
         </div>
         <div>
           <br />
           <div style={{'width': '256px'}}>
             {/* Pie chart with macro data  */}
             <PieChart
               data={data}
               expandOnHover={false}
            />
           </div>
           <div>
             {/* Map all macro data to a readable table */}
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
           {/* Three smaller donuts for individual macros */}
           <Donut color={donutValue('protein') ? 'rgb(179,57,81)' : 'rgba(179,57,81, 0.5)'}
             value={donutValue('protein')} />
           <div className='donut-label protein'>Protein
             <br />
             {Math.trunc(store.total.protein)}g of {Math.trunc(store.daily.protein)}g
           </div>
         </div>
         <div>
           <Donut color={donutValue('carbs') < 1 ? 'hsla(212, 68%, 40%, 0.58)' : 'hsla(212, 68%, 40%, 0.2)'}
             value={donutValue('carbs')} />
           <div className='donut-label carb'>Carbs
            <br />
             {Math.trunc(store.total.carbs)}g of {Math.trunc(store.daily.carbs)}g
           </div>
         </div>
         <div>
           <Donut color={donutValue('fats') < 1 ? 'rgb(227,208,129)' : 'rgba(227,208,129, 0.5)'}
             value={donutValue('fats')} />
           <div className='donut-label fat'>Fats
            <br />
             {Math.trunc(store.total.fats)}g of {Math.trunc(store.daily.fats)}g
           </div>
         </div>
       </div>
       <div className='daily-log'>
         <div className='log-list'>
           {/* Food logs */}
           <LogItem meal='Breakfast' />
           <LogItem meal='Lunch' />
           <LogItem meal='Dinner' />
           <LogItem meal='Snack' />
         </div>
       </div>
     </div>
   }
}

 export default observer(Log)
