import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import { TopBar } from '.'

const muiTheme = getMuiTheme({
  fontFamily: 'PT Sans, Roboto, sans-serif',
  palette: {
    primary1Color: '#3F51B5',
    canvasColor: '#eceff1'
  }
})

class App extends Component {
  render () {
    return <MuiThemeProvider muiTheme={muiTheme}>
      <TopBar />
    </MuiThemeProvider>
  }
}

export default App
