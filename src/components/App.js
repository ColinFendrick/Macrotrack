import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import { TopBar, Splash, Log, Recipes, Profile, Footer } from '.'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

const muiTheme = getMuiTheme({
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
        <div style={{'background': '#fff'}}>
          <Route exact path='/' component={Splash} />
          <Route path='/app' component={TopBar} />
          <Route exact path='/app/log' component={Log} />
          <Route exact path='/app/recipes' component={Recipes} />
          <Route exact path='/app/profile' component={Profile} />
          <Route path='/app' component={Footer} />
        </div>
      </Router>
    </MuiThemeProvider>
  }
}

export default App
