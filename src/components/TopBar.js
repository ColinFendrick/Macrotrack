import React from 'react'
import { Tabs, Tab } from 'material-ui/Tabs'
import { observer } from 'mobx-react'
import { Profile, Recipes, Log } from '.'

const TopBar = () => (
  <Tabs>
    <Tab label='Food Log'>
      <Log />
    </Tab>
    <Tab label='Recipes'>
      <Recipes />
    </Tab>
    <Tab label='Profile'>
      <Profile />
    </Tab>
  </Tabs>
)

export default observer(TopBar)
