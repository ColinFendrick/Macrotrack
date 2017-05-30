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
      'Breakfast': 1000,
      'Lunch': 450,
      'Dinner': 0,
      'Snack': 100,
      'total': 1550
    },
    'protein': {
      'Breakfast': 18,
      'Lunch': 22,
      'Dinner': 0,
      'Snack': 18,
      'total': 58
    },
    'carbs': {
      'Breakfast': 90,
      'Lunch': 10,
      'Dinner': 0,
      'Snack': 11,
      'total': 111
    },
    'fat': {
      'Breakfast': 3,
      'Lunch': 9,
      'Dinner': 0,
      'Snack': 11,
      'total': 23
    }
  }

  @observable log = {
    'Breakfast': {},
    'Lunch': {},
    'Dinner': {},
    'Snack': {}
  }

  @observable display = {
    'Breakfast': 'none',
    'Lunch': 'none',
    'Dinner': 'none',
    'Snack': 'none',
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

  @action add = (log, food, meal) => {
    let newLog = { ...log }
    const foodId = food['item_id']

    newLog[meal] = {
      ...log[meal],
      [foodId]: food
    }

    this.log = newLog
  }
}

const store = new Store()

export default store
