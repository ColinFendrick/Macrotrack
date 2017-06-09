import React from 'react'
import { Toggle, DropDownMenu, MenuItem } from 'material-ui'
import store from '../store'
import { observer } from 'mobx-react'

// Dropdown filter menu
const Filters = () => (
  <div className='DropDownMenu'>
    <div className='filters'>
      <Toggle
        style={{'width': '300px'}}
        defaultToggled={store.toggle}
        label='Show only foods within budget'
        // Changes the toggle boolean in store
        onTouchTap={() => store._toggle()} />
      <DropDownMenu value={store.sort}
        // Updates store on filter
        onChange={(_, x, value) => store._sort(value)}>
        <MenuItem primaryText='Filter By' value={0} />
        <MenuItem primaryText='Calories: Highest to Lowest' value={1} />
        <MenuItem primaryText='Protein: Highest to Lowest' value={2} />
        <MenuItem primaryText='Carbs: Highest to Lowest' value={3} />
        <MenuItem primaryText='Fats: Highest to Lowest' value={4} />
      </DropDownMenu>
    </div>
  </div>
)

export default observer(Filters)
