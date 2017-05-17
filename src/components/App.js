import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import { TopBar, Splash } from '.'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

const muiTheme = getMuiTheme({
  fontFamily: 'PT Sans, Roboto, sans-serif',
  palette: {
    primary1Color: '#3f51b5',
    canvasColor: '#e1e7ed',
    accent1Color: '#ffadc6'
  }
})

class App extends Component {
  render () {
    return <MuiThemeProvider muiTheme={muiTheme}>
      <Router>
        <div>
          <Route exact path='/' component={Splash} />
          <Route exact path='/home' component={TopBar} />
        </div>
      </Router>
    </MuiThemeProvider>
  }
}

export default App
