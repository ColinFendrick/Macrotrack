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

@observer class Profile extends Component {
  error = () => {
    if (!store.profile.name || !store.profile.weight || !store.profile.height) {
      store.profile.error = true
    }
  }

  _name = event => {
    store.profile[event.target.name] = event.target.value
    this.error()
  }

  _age = (_, value) => {
    store.profile.date = value
    let age = moment(value).fromNow().split(' ')[0]
    age !== 'a' ? store.profile.age = parseInt(age) : store.profile.age = 0
    this.error()
  }

  _weight = event => {
    store.profile.weight = event.target.value.replace(/\D/g, '')
    this.error()
  }

  _height = (_, value) => {
    store.profile.height = value
  }

  _click = input => {
    store.profile.goal = input
    store.profile.prevGoal = input
  }

  _hover = input => {
    store.profile.prevGoal = store.profile.goal
    store.profile.goal = input
  }

  _unhover = () => {
    store.profile.goal = store.profile.prevGoal
  }

  _drop = (e, i, value, key) => {
    store.profile[key] = value
  }

  disableFuture = date => {
    return moment(date).fromNow().includes('in')
  }

  render () {
    const error = store.profile.error ? 'This is required' : null

    return <div className='Profile'>
      <div className='profile-top'>
        <div className='profile-info'>
          <TextField hintText='Name'
            defaultValue={store.profile.name}
            name='name' onChange={this._name}
            errorText={store.profile.name ? null : error}
            floatingLabelFixed />
          <DatePicker hintText='Birthday'
            shouldDisableDate={this.disableFuture}
            name='age' onChange={this._age}
            errorText={store.profile.age ? null : error}
            floatingLabelFixed />
          <TextField hintText='Weight'
            defaultValue={store.profile.weight}
            name='weight' onChange={this._weight}
            errorText={store.profile.weight ? null : error}
            floatingLabelFixed />
          <div className='height'>
            <span>Height:
              {Math.floor(store.profile.height / 12)}'{(store.profile.height % 12)}
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
        value={store.profile.gender}
        onChange={(e, i, value) => this._drop(e, i, value, 'gender')}>
        <MenuItem value='male' primaryText='Male' />
        <MenuItem value='female' primaryText='Female' />
        <MenuItem value='trans' primaryText='Transgender / Transsexual / Non-Binary' />
      </SelectField>
      <br />
      <SelectField
        floatingLabelText='Body Type'
        value={store.profile.body}
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
        value={store.profile.activity}
        onChange={(e, i, value) => this._drop(e, i, value, 'activity')}>
        <MenuItem value={1.2} primaryText='Low Activity (0-2 workout per week)' />
        <MenuItem value={1.5} primaryText='Medium Activity (3-5 workouts per week)' />
        <MenuItem value={1.75} primaryText='High Activity (6+ workouts per week)' />
      </SelectField>
      <div className='profile-goals'>
        <h3>What are my goals?</h3>
        <div className='profile-goals-list'>
          <Paper
            className={cx('paper-goals', {selected: store.profile.goal === 'lose'})}
            onMouseEnter={() => this._hover('lose')}
            onMouseLeave={() => this._unhover()}
            onTouchTap={() => this._click('lose')}>Lose Weight
            <DailyNutrients />
          </Paper>
          <Paper className={cx('paper-goals', {selected: store.profile.goal === 'maintain'})}
            onMouseEnter={() => this._hover('maintain')}
            onMouseLeave={() => this._unhover()}
            onTouchTap={() => this._click('maintain')}>Sculpt and Maintain
            <DailyNutrients />
          </Paper>
          <Paper className={cx('paper-goals', {selected: store.profile.goal === 'gain'})}
            onMouseEnter={() => this._hover('gain')}
            onMouseLeave={() => this._unhover()}
            onTouchTap={() => this._click('gain')}>Gain Muscle
            <DailyNutrients />
          </Paper>
        </div>
      </div>
      <br />
      <div style={{'width': '100%', 'textAlign': 'center'}}>
        <RaisedButton style={{'border': '1px solid black'}} label='Update Profile' onTouchTap={() => this.error()} />
      </div>
      <br />
    </div>
  }
}

export default Profile
