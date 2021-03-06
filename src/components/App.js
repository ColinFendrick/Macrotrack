import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import { TopBar, Splash, Log, Recipes, Profile, Footer, Error } from '.'
import {
  BrowserRouter as Router,
  Route,
  Switch
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
          {/* TopBar handles user navigation */}
          <Route path='/app' component={TopBar} />
          <Route path='/app' component={Footer} />
          <Switch>
            <Route exact path='/app/log' component={Log} />
            <Route exact path='/app/recipes' component={Recipes} />
            <Route exact path='/app/profile' component={Profile} />
            <Route path='/app/:anything' component={Error} />
          </Switch>
        </div>
      </Router>
    </MuiThemeProvider>
  }
}

export default App
