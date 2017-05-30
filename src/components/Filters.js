import React from 'react'
import Toggle from 'material-ui/Toggle'
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'
import store from '../store'
import { observer } from 'mobx-react'

const Filters = () => (
  <div className='DropDownMenu'>
    <div className='filters'>
      <Toggle
        defaultToggled={store.toggle}
        label='Show only foods within budget'
        onTouchTap={() => store._toggle()} />
      <DropDownMenu value={store.sort} onChange={(_, x, value) => store._sort(value)}>
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
