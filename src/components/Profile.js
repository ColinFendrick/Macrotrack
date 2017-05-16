import React from 'react'
import TextField from 'material-ui/TextField'
import Avatar from 'material-ui/Avatar'
import DatePicker from 'material-ui/DatePicker'
import Paper from 'material-ui/Paper'
import FlatButton from 'material-ui/FlatButton'
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton'

import { DailyNutrients } from '.'

const Profile = () => (
  <div className='Profile'>
    <div className='profile-top'>
      <div className='profile-info'>
        <Avatar src='https://s-media-cache-ak0.pinimg.com/originals/79/6b/1c/796b1c17ab518ddd26c46ccfbb0f215b.png' />
        <TextField hintText='Name' />
        <DatePicker hintText='Age' />
        <TextField hintText='Weight' />
        <TextField hintText='Height' />
      </div>
      <div className='profile-top-dailies'>
        <h3>Daily Nutrients</h3>
        <DailyNutrients />
      </div>
    </div>
    <br />
    <div className='profile-radio-list'>
      <div className='profile-radio-title'>Gender:</div><br />
      <RadioButtonGroup name='gender'>
        <RadioButton value='male' label='Male' />
        <RadioButton value='female' label='Female' />
        <RadioButton value='trans' label='Transgender / Transsexual / Non-Binary' />
      </RadioButtonGroup>
    </div>
    <div className='profile-radio-list'>
      <div className='profile-radio-title'>Body Type:</div><br />
      <div>Not sure? Find a handy guide <a href='http://www.superskinnyme.com/body-types.html'>here</a></div><br />
      <RadioButtonGroup name='body'>
        <RadioButton value='endo' label='Endomorph' />
        <RadioButton value='meso' label='Mesomorph' />
        <RadioButton value='ecto' label='Ectomorph' />
      </RadioButtonGroup>
    </div>
    <div className='profile-radio-list'>
      <div className='profile-radio-title'>Activity Level</div><br />
      <RadioButtonGroup name='activity'>
        <RadioButton value='low' label='Lightly Active (0-2 workouts per week)' />
        <RadioButton value='medium' label='Moderately Active (3-4 workouts per week)' />
        <RadioButton value='high' label='Highly Active (5-7 workouts per week)' />
      </RadioButtonGroup>
    </div>
    <div className='profile-goals'>
      <h3>What are my goals?</h3>
      <div className='profile-goals-list'>
        <Paper className='paper-goals' onTouchTap={() => console.log('what')}>Lose Weight<DailyNutrients /></Paper>
        <Paper className='paper-goals'>Sculpt and Maintain<DailyNutrients /></Paper>
        <Paper className='paper-goals'>Gain Muscle<DailyNutrients /></Paper>
      </div>
    </div>
    <FlatButton label='Update Profile' />

  </div>
)

export default Profile
