import React from 'react'
import SplashImage from '../../public/spalsh-race.jpeg'
import { NavLink as Link } from 'react-router-dom'
import { Banner, Heading } from 'rebass'
import RaisedButton from 'material-ui/RaisedButton'

const Splash = () => (
  <div className='Splash'>
    <Link to={'/home'}>
      <Banner
        align='center'
        backgroundImage={SplashImage}
      >
        <Heading level={2} size={0}>
          <div className='splash-button-container'>
            <RaisedButton className='splash-button' label='Make a profile' />
            <RaisedButton className='splash-button' label='Go to your log' />
          </div>
        </Heading>
      </Banner>
    </Link>
  </div>
)

export default Splash
