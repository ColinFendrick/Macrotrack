import React from 'react'
import SplashImage from '../../public/spalsh-race.jpeg'
import { NavLink as Link } from 'react-router-dom'
import { Banner } from 'rebass'
import RaisedButton from 'material-ui/RaisedButton'

const Splash = () => (
  <div className='Splash'>
    <Banner
      align='center'
      backgroundImage={SplashImage}
      >
      <div className='splash-container'>
        <div className='logo'>
          <h3>MacroTrack</h3>
          <div>A better way</div>
        </div>
        <div className='splash-button-container'>
          <Link to={'/home'}>
            <RaisedButton className='splash-button' label='Make a profile' />
            <RaisedButton className='splash-button' label='Go to your log' />
          </Link>
        </div>
      </div>
    </Banner>
  </div>
)

export default Splash
