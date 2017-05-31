import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import DatePicker from 'material-ui/DatePicker'
import Paper from 'material-ui/Paper'
import Slider from 'material-ui/Slider'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import RaisedButton from 'material-ui/RaisedButton'
import { DailyNutrients } from '.'
import { observer } from 'mobx-react'
import store from '../store'
import moment from 'moment'

class Profile extends Component {
  state = {
    'name': null,
    'age': null,
    'date': '',
    'weight': null,
    'height': 55,
    'gender': 1.2,
    'body': 0.8,
    'activity': 1.2,
    'goal': 'lose'
  }

  _update = () => {
    if (!this.state.name || !this.state.weight || !this.state.height) {
      alert('All fields are required')
    } else { store.profile = {...this.state} }
    console.log(this.state)
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
    console.log(this.state)
  }

  _height = (_, value) => {
    this.setState({'height': value})
  }

  _age = (_, value) => {
    this.setState({'date': value})
    let age = moment(value).fromNow().split(' ')[0]
    age !== 'a' ? this.setState({'age': parseInt(age)}) : this.setState({'age': 0})
  }

  disableFuture = date => {
    return moment(date).fromNow().includes('in')
  }

  render () {
    const req = 'This is required'

    return <div className='Profile'>
      <div className='profile-top'>
        <div className='profile-info'>
          <TextField hintText='Name'
            defaultValue={store.profile.name}
            name='name' onChange={this._change}
            floatingLabelText={req}
            floatingLabelFixed />
          <DatePicker hintText='Birthday'
            shouldDisableDate={this.disableFuture}
            name='age' onChange={this._age}
            floatingLabelText={req}
            floatingLabelFixed />
          <TextField hintText='Weight'
            defaultValue={store.profile.weight}
            name='weight' onChange={this._change}
            floatingLabelText={req}
            floatingLabelFixed />
          <div className='height'>
            <span>Height: {Math.floor(this.state.height / 12)}'{(this.state.height % 12)}</span>
            <Slider min={40}
              max={90}
              step={1}
              name='height'
              defaultValue={store.profile.height}
              onChange={this._height} />
          </div>
        </div>
        <div className='profile-top-dailies'>
          <h3>Daily Nutrients</h3>
          <DailyNutrients />
        </div>
      </div>
      <br />
      <SelectField
        floatingLabelText='Gender'
        value={this.state.gender}
        onChange={(e, i, v) => this.setState({'gender': v})}>
        <MenuItem value={1.2} primaryText='Male' />
        <MenuItem value={0.9} primaryText='Female' />
        <MenuItem value={1} primaryText='Transgender / Transsexual / Non-Binary' />
      </SelectField>
      <br />
      <SelectField
        floatingLabelText='Body Type'
        value={this.state.body}
        onChange={(e, i, v) => this.setState({'body': v})}>
        <MenuItem value={0.8} primaryText='Endomorph' />
        <MenuItem value={1} primaryText='Mesomorph' />
        <MenuItem value={1.2} primaryText='Ectomorph' />
      </SelectField>
      <div>Not sure? Find a handy guide <a href='http://www.superskinnyme.com/body-types.html'>here</a></div><br />
      <SelectField
        floatingLabelText='Activity Level'
        value={this.state.activity}
        onChange={(e, i, v) => this.setState({'activity': v})}>
        <MenuItem value={1.2} primaryText='Low Activity (0-2 workout per week)' />
        <MenuItem value={1.5} primaryText='Medium Activity (3-5 workouts per week)' />
        <MenuItem value={1.75} primaryText='High Activity (6+ workouts per week)' />
      </SelectField>
      <div className='profile-goals'>
        <h3>What are my goals?</h3>
        <div className='profile-goals-list'>
          <Paper className='paper-goals'
            onTouchTap={() => this._activity('lose')}>Lose Weight<DailyNutrients />
          </Paper>
          <Paper className='paper-goals'
            onTouchTap={() => this._activity('maintain')}>Sculpt and Maintain<DailyNutrients />
          </Paper>
          <Paper className='paper-goals'
            onTouchTap={() => this._activity('gain')}>Gain Muscle<DailyNutrients />
          </Paper>
        </div>
      </div>
      <br />
      <div style={{'width': '100%', 'textAlign': 'center'}}>
        <RaisedButton style={{'border': '1px solid black'}} label='Update Profile' onTouchTap={() => this._update()} />
      </div>
      <br />
    </div>
  }
}

export default observer(Profile)
