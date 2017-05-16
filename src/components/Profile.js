import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import Avatar from 'material-ui/Avatar'
import DatePicker from 'material-ui/DatePicker'
import Paper from 'material-ui/Paper'
import FlatButton from 'material-ui/FlatButton'
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton'
import Slider from 'material-ui/Slider'

import { DailyNutrients } from '.'

class Profile extends Component {
  state = {
    'name': '',
    'age': 0,
    'weight': 0,
    'height': 55,
    'gender': 'male',
    'body': 'endo',
    'activity': 'low',
    'goal': 'lose'
  }
  gather = () => {
    console.log(this.refs.name.value)
  }
  _change = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  _activity = input => {
    this.setState({
      'goal': input
    })
  }
  _height = (event, value) => {
    this.setState({'height': value})
  }
  render () {
    return <div className='Profile'>
      <div className='profile-top'>
        <div className='profile-info'>
          <Avatar src='https://s-media-cache-ak0.pinimg.com/originals/79/6b/1c/796b1c17ab518ddd26c46ccfbb0f215b.png' />
          <TextField hintText='Name' name='name' onChange={this._change} />
          <DatePicker hintText='Age' />
          <TextField hintText='Weight' name='weight' onChange={this._change} />
          <div className='height'>
            <span>Height: {Math.floor(this.state.height / 12)}'{(this.state.height % 12)}</span>
            <Slider min={40}
              max={90}
              step={1}
              name='height'
              value={this.state.height}
              onChange={this._height} />
          </div>
        </div>
        <div className='profile-top-dailies'>
          <h3>Daily Nutrients</h3>
          <DailyNutrients />
        </div>
      </div>
      <br />
      <div className='profile-radio-list'>
        <div className='profile-radio-title'>Gender:</div><br />
        <RadioButtonGroup name='gender' onChange={this._change}>
          <RadioButton value='male' label='Male' />
          <RadioButton value='female' label='Female' />
          <RadioButton value='trans' label='Transgender / Transsexual / Non-Binary' />
        </RadioButtonGroup>
      </div>
      <div className='profile-radio-list'>
        <div className='profile-radio-title'>Body Type:</div><br />
        <div>Not sure? Find a handy guide <a href='http://www.superskinnyme.com/body-types.html'>here</a></div><br />
        <RadioButtonGroup name='body' onChange={this._change}>
          <RadioButton value='endo' label='Endomorph' />
          <RadioButton value='meso' label='Mesomorph' />
          <RadioButton value='ecto' label='Ectomorph' />
        </RadioButtonGroup>
      </div>
      <div className='profile-radio-list'>
        <div className='profile-radio-title'>Activity Level</div><br />
        <RadioButtonGroup name='activity' onChange={this._change}>
          <RadioButton value='low' label='Lightly Active (0-2 workouts per week)' />
          <RadioButton value='medium' label='Moderately Active (3-4 workouts per week)' />
          <RadioButton value='high' label='Highly Active (5-7 workouts per week)' />
        </RadioButtonGroup>
      </div>
      <div className='profile-goals'>
        <h3>What are my goals?</h3>
        <div className='profile-goals-list'>
          <Paper className='paper-goals' onTouchTap={() => this._activity('lose')}>Lose Weight<DailyNutrients /></Paper>
          <Paper className='paper-goals' onTouchTap={() => this._activity('maintain')}>Sculpt and Maintain<DailyNutrients /></Paper>
          <Paper className='paper-goals' onTouchTap={() => this._activity('gain')}>Gain Muscle<DailyNutrients /></Paper>
        </div>
      </div>
      <br />
      <div style={{'width': '100vh', 'textAlign': 'center'}}>
        <FlatButton style={{'border': '1px solid black'}} label='Update Profile' onTouchTap={() => this.gather()} />
      </div>
    </div>
  }
}

export default Profile
