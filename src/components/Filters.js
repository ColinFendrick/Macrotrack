import React from 'react'
import Toggle from 'material-ui/Toggle'
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'
import store from '../store'

const Filters = () => (
  <div className='DropDownMenu'>
    <div className='filters'>
      <Toggle label='Show only foods within budget' />
      <DropDownMenu value={store.sort} onChange={(_, x, value) => store._sort(value)}>
        <MenuItem primaryText='Filter By' value={0} />
        <MenuItem primaryText='Calories: Lowest to Highest' value={1} />
        <MenuItem primaryText='Calories: Highest to Lowest' value={2} />
        <MenuItem primaryText='Protein: Lowest to Highest' value={3} />
        <MenuItem primaryText='Protein: Highest to Lowest' value={4} />
        <MenuItem primaryText='Carbs: Lowest to Highest' value={5} />
        <MenuItem primaryText='Carbs: Highest to Lowest' value={6} />
        <MenuItem primaryText='Fats: Lowest to Highest' value={7} />
        <MenuItem primaryText='Fats: Highest to Lowest' value={8} />
      </DropDownMenu>
    </div>
  </div>
)

export default Filters
