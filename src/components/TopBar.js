import React from 'react'
import { Tabs, Tab } from 'material-ui/Tabs'

// Topbar that controls location of user in app
// This component always shows
const TopBar = ({ history, location }) => {
  let loc = -1
  if (location.pathname === '/app/log') {
    loc = 0
  } else if (location.pathname === '/app/recipes') {
    loc = 1
  } else if (location.pathname === '/app/profile') {
    loc = 2
  } else {
    loc = -1
  }

  return <Tabs initialSelectedIndex={loc}>
    <Tab label='Food Log' onActive={() => history.push('log')} />
    <Tab label='Recipes' onActive={() => history.push('recipes')} />
    <Tab label='Profile' onActive={() => history.push('profile')} />
  </Tabs>
}

export default TopBar
