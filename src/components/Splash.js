import React from 'react'
import SplashImage from '../../public/spalsh-race.jpeg'
import Logo from '../../public/logo.png'
import { Banner } from 'rebass'
import RaisedButton from 'material-ui/RaisedButton'

const Splash = ({ history }) => (
  <div className='Splash'>
    <Banner
      align='center'
      backgroundImage={SplashImage}>
      <div className='splash-container'>
        <div className='logo'>
          <img src={Logo} />
          <div>A better way</div>
        </div>
        <div className='splash-button-container'>
          <RaisedButton className='splash-button' label='Make a profile' onTouchTap={() => history.push('app/profile')} />
          <RaisedButton className='splash-button' label='Go to your log' onTouchTap={() => history.push('app/log')} />
        </div>
      </div>
    </Banner>
  </div>
)

export default Splash
