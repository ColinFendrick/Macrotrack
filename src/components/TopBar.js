import React from 'react'
import { Tabs, Tab } from 'material-ui/Tabs'
import { observer } from 'mobx-react'
import store from '../store'

import Log from './Log'

const TopBar = () => (
  <Tabs>
    <Tab label='Food Log'>
      <Log />
    </Tab>
    <Tab label='Recipes'>
      Do recipe stuff here
    </Tab>
    <Tab label='Profile'>
      Who da fuck are you
    </Tab>
  </Tabs>
)

export default observer(TopBar)
