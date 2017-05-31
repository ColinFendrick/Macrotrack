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
import cx from 'classnames'

class Profile extends Component {
  state = {
    'name': null,
    'age': null,
    'date': '',
    'weight': null,
    'height': 55,
    'gender': 'male',
    'body': 0.8,
    'activity': 1.2,
    'goal': 'lose',
    'error': false
  }

  update = () => {
    if (!this.state.name || !this.state.weight || !this.state.height) {
      this.setState({'error': true})
    }
    store.profile = {...this.state}
  }

  _change = event => {
    this.setState({
      [event.target.name]: event.target.value
    }, this.update())
  }

  _weight = event => {
    this.setState({
      'weight': event.target.value.replace(/\D/g, '')
    }, this.update())
  }

  _activity = input => {
    this.setState({
      'goal': input
    }, this.update())
  }

  _height = (_, value) => {
    this.setState({'height': value}, this.update())
  }

  _age = (_, value) => {
    this.setState({'date': value})
    let age = moment(value).fromNow().split(' ')[0]
    age !== 'a' ? this.setState({'age': parseInt(age)}) : this.setState({'age': 0}, this.update())
  }

  _drop = (e, i, value, key) => {
    this.setState({[key]: value}, this.update())
    console.log(this.state)
  }

  disableFuture = date => {
    return moment(date).fromNow().includes('in')
  }

  render () {
    const error = this.state.error ? 'This is required' : null

    return <div className='Profile'>
      <div className='profile-top'>
        <div className='profile-info'>
          <TextField hintText='Name'
            defaultValue={store.profile.name}
            name='name' onChange={this._change}
            errorText={this.state.name ? null : error}
            floatingLabelFixed />
          <DatePicker hintText='Birthday'
            shouldDisableDate={this.disableFuture}
            name='age' onChange={this._age}
            errorText={this.state.age ? null : error}
            floatingLabelFixed />
          <TextField hintText='Weight'
            defaultValue={store.profile.weight}
            name='weight' onChange={this._weight}
            errorText={this.state.weight ? null : error}
            floatingLabelFixed />
          <div className='height'>
            <span>Height:
              {Math.floor(this.state.height / 12)}'{(this.state.height % 12)}
            </span>
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
        onChange={(e, i, value) => this._drop(e, i, value, 'gender')}>
        <MenuItem value='male' primaryText='Male' />
        <MenuItem value='female' primaryText='Female' />
        <MenuItem value='trans' primaryText='Transgender / Transsexual / Non-Binary' />
      </SelectField>
      <br />
      <SelectField
        floatingLabelText='Body Type'
        value={this.state.body}
        onChange={(e, i, value) => this._drop(e, i, value, 'body')}>
        <MenuItem value={0.8} primaryText='Endomorph' />
        <MenuItem value={1} primaryText='Mesomorph' />
        <MenuItem value={1.2} primaryText='Ectomorph' />
      </SelectField>
      <div>Not sure? Find a handy guide <a href='http://www.superskinnyme.com/body-types.html'>here</a>
      </div>
      <br />
      <SelectField
        floatingLabelText='Activity Level'
        value={this.state.activity}
        onChange={(e, i, value) => this._drop(e, i, value, 'activity')}>
        <MenuItem value={1.2} primaryText='Low Activity (0-2 workout per week)' />
        <MenuItem value={1.5} primaryText='Medium Activity (3-5 workouts per week)' />
        <MenuItem value={1.75} primaryText='High Activity (6+ workouts per week)' />
      </SelectField>
      <div className='profile-goals'>
        <h3>What are my goals?</h3>
        <div className='profile-goals-list'>
          <Paper
            className={cx('paper-goals', {selected: this.state.goal === 'lose'})}
            onTouchTap={() => this._activity('lose')}>Lose Weight
            <DailyNutrients />
          </Paper>
          <Paper className={cx('paper-goals', {selected: this.state.goal === 'maintain'})}
            onTouchTap={() => this._activity('maintain')}>Sculpt and Maintain
            <DailyNutrients />
          </Paper>
          <Paper className={cx('paper-goals', {selected: this.state.goal === 'gain'})}
            onTouchTap={() => this._activity('gain')}>Gain Muscle
            <DailyNutrients />
          </Paper>
        </div>
      </div>
      <br />
      <div style={{'width': '100%', 'textAlign': 'center'}}>
        <RaisedButton style={{'border': '1px solid black'}} label='Update Profile' onTouchTap={() => this.update()} />
      </div>
      <br />
    </div>
  }
}

export default observer(Profile)
