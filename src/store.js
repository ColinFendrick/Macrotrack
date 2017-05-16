import { observable, action } from 'mobx'

class Store {
  @observable display = {
    'Breakfast': 'none',
    'Lunch': 'none',
    'Dinner': 'none'
  }
  @observable daily = {
    'calories': 2000,
    'protein': 100,
    'carbs': 100,
    'fat': 33
  }
  @observable profile = {
    'name': '',
    'age': '',
    'weight': '',
    'height': '',
    'bender': '',
    'body': '',
    'activity': '',
    'goals': ''
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

  @action toggle = (input) => {
    if (this.display.input === 'none') {
      this.display.input = 'flex'
    } else {
      this.display.input = 'none'
    }
    console.log(this.display.input)
  }
}

const store = new Store()

export default store
