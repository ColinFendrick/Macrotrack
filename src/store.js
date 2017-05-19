import { observable, action } from 'mobx'

class Store {
  @observable daily = {
    'calories': 2000,
    'protein': 100,
    'carbs': 100,
    'fat': 33
  }
  @observable profile = {
    'name': '',
    'age': 0,
    'date': '',
    'weight': '',
    'height': 55,
    'gender': 'male',
    'body': 'endo',
    'activity': 'low',
    'goal': 'lose'
  }
  @observable used = {
    'calories': {
      'Breakfast': '1000',
      'Lunch': '450',
      'Dinner': '0'
    },
    'protein': {
      'Breakfast': '1000',
      'Lunch': '450',
      'Dinner': '0'
    },
    'carbs': {
      'Breakfast': '1000',
      'Lunch': '450',
      'Dinner': '0'
    },
    'fat': {
      'Breakfast': '1000',
      'Lunch': '450',
      'Dinner': '0'
    }
  }
  @observable log = {
    'Breakfast': {},
    'Lunch': {},
    'Dinner': {}
  }
  @observable display = {
    'Breakfast': 'none',
    'Lunch': 'none',
    'Dinner': 'none',
    'add': 'none'
  }
  @observable filter = 0

  @action toggle = input => {
    if (this.display[input] === 'none') {
      this.display[input] = 'flex'
    } else {
      this.display[input] = 'none'
    }
  }
  @action _filter = value => {
    this.filter = value
    console.log(value)
  }
  @action add = (food, meal) => {
    this.log[meal] = food
    console.log(this.log)
  }
}

const store = new Store()

export default store
