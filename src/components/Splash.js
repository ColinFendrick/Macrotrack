import React from 'react'
import SplashImage from '../../public/spalsh-race.jpeg'
import Logo from '../../public/logo.png'
import { Banner } from 'rebass'
import { RaisedButton } from 'material-ui'

// Splash page, some links into app
const Splash = ({ history }) => (
  <div className='Splash'>
    <Banner
      align='center'
      backgroundImage={SplashImage}>
      <div className='splash-container'>
        <div className='logo'>
          <img src={Logo} onTouchTap={() => history.push('app/profile')} />
          <div>Health, deconstructed</div>
        </div>
        <div className='splash-button-container'>
          <RaisedButton className='splash-button' label='Make a profile'
            onTouchTap={() => history.push('app/profile')} />
          <RaisedButton className='splash-button' label='Go to your log'
            onTouchTap={() => history.push('app/log')} />
        </div>
      </div>
    </Banner>
  </div>
)

export default Splash
