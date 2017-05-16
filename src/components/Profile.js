import React from 'react'
import TextField from 'material-ui/TextField'
import Avatar from 'material-ui/Avatar'
import DatePicker from 'material-ui/DatePicker'
import Paper from 'material-ui/Paper'
import FlatButton from 'material-ui/FlatButton'
import { Radio } from 'rebass'
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
      <Radio label='Male' name='gender' /><br />
      <Radio label='Female' name='gender' /><br />
      <Radio label='Transgender / Transsexual / Non-Binary' name='gender' /><br />
    </div>
    <div className='profile-radio-list'>
      <div className='profile-radio-title'>Body Type:</div><br />
      <div>Not sure?ind a handy guide <a href='http://www.superskinnyme.com/body-types.html'>here</a></div><br />
      <Radio label='Endomorph' name='body' /><br />
      <Radio label='Mesomorph' name='body' /><br />
      <Radio label='Ectomorph' name='body' /><br />
    </div>
    <div className='profile-radio-list'>
      <div className='profile-radio-title'>Activity Level</div><br />
      <Radio label='Lightly Active (0-2 workouts per week)' name='activity' /><br />
      <Radio label='Moderately Active (3-4)' name='activity' /><br />
      <Radio label='Active (5-7 workouts per week)' name='activity' /><br />
    </div>
    <div className='profile-goals'>
      <h3>What are my goals?</h3>
      <div className='profile-goals-list'>
        <Paper className='paper-goals'>Lose Weight<DailyNutrients /></Paper>
        <Paper className='paper-goals'>Sculpt and Maintain<DailyNutrients /></Paper>
        <Paper className='paper-goals'>Gain Muscle<DailyNutrients /></Paper>
      </div>
    </div>
    <FlatButton label='Update Profile' />

  </div>
)

export default Profile
