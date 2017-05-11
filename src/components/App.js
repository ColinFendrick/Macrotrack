import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { TopBar } from '.'

class App extends Component {
  render () {
    return <MuiThemeProvider>
      <TopBar />
    </MuiThemeProvider>
  }
}

export default App
