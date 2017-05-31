import { observable, action } from 'mobx'

class Store {
  @observable entries = []

  @observable daily = {
    'calories': 2000,
    'protein': 100,
    'carbs': 300,
    'fats': 33
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
    'fats': {
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
    'add': 'none',
    'remove': {
      'Breakfast': 'none',
      'Lunch': 'none',
      'Dinner': 'none',
      'Snack': 'none'
    }
  }

  @observable sort = 0
  @observable toggle = false

  @action _toggle = () => {
    this.toggle = !this.toggle
  }

  @action mealToggle = (input, meal) => {
    if (this.display[input][meal] === 'none') {
      this.display[input][meal] = 'flex'
    } else {
      this.display[input][meal] = 'none'
    }
  }

  @action _sort = value => {
    this.sort = value
  }

  @action add = (log, food, meal) => {
    let newLog = { ...log }
    const foodId = food['_id']

    newLog[meal] = {
      ...log[meal],
      [foodId]: food
    }

    this.log = newLog
  }

  @action delete = (log, food, meal) => {
    const foodId = food['item_id']
    delete log[meal][foodId]
  }
}

const store = new Store()
window.store = store

export default store
