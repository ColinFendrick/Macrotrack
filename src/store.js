import { observable, action, computed } from 'mobx'

class Store {
  @observable entries = []

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

    @observable daily = {
      'calories': 2000,
      'protein': 100,
      'carbs': 300,
      'fats': 33
    }

    @computed get total () {
      return {
        'calories': Object.keys(this.used.calories).map(key => this.used.calories[key]).reduce((a, b) => a + b),
        'protein': Object.keys(this.used.protein).map(key => this.used.protein[key]).reduce((a, b) => a + b),
        'carbs': Object.keys(this.used.carbs).map(key => this.used.carbs[key]).reduce((a, b) => a + b),
        'fats': Object.keys(this.used.fats).map(key => this.used.fats[key]).reduce((a, b) => a + b)
      }
    }

  @observable used = {
    'calories': {
      'Breakfast': 0,
      'Lunch': 0,
      'Dinner': 0,
      'Snack': 0
    },
    'protein': {
      'Breakfast': 0,
      'Lunch': 0,
      'Dinner': 0,
      'Snack': 0
    },
    'carbs': {
      'Breakfast': 0,
      'Lunch': 0,
      'Dinner': 0,
      'Snack': 0
    },
    'fats': {
      'Breakfast': 0,
      'Lunch': 0,
      'Dinner': 0,
      'Snack': 0
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
    const foodId = `${food['_id']}${Math.random()}`

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
