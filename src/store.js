import { observable, action, computed } from 'mobx'

class Store {
  @observable entries = []

  @observable profile = {
    'name': '',
    'age': 0,
    'date': '',
    'weight': 0,
    'height': 55,
    'gender': 'male',
    'body': 1,
    'activity': 1.2,
    'goal': 'lose'
  }

  @observable query = ''
  @observable offset = 25
  @observable scroll = false

    @computed get daily () {
      let calories = ((this.profile.gender === 'male' || this.profile.gender === 'trans')
      ? ((66 + (6.2 * this.profile.weight) + (12.7 * this.profile.height) - (6.76 * this.profile.age)) * this.profile.activity * this.profile.body)
      : (655.1 + (4.35 * this.profile.weight) + (4.7 * this.profile.height) - (4.7 * this.profile.age)) * this.profile.activity * this.profile.body)

      let protein
      let carbs
      let fats
      if (this.profile.goal === 'lose') {
        calories = calories * 0.9
        protein = ((calories / 2) / 4)
        carbs = (calories / 10) / 4
        fats = (calories / (10 / 4)) / 9
      } else if (this.profile.goal === 'maintain') {
        calories = calories * 1.15
        protein = (calories / 3) / 4
        carbs = (calories / 3) / 4
        fats = (calories / 3) / 9
      } else {
        calories = calories * 1.4
        protein = (calories / 4) / 4
        carbs = (calories / 2) / 4
        fats = (calories / 4) / 9
      }

      return {
        'calories': calories,
        'protein': protein,
        'carbs': carbs,
        'fats': fats
      }
    }

    @computed get total () {
      return {
        'calories': Object.keys(this.used.calories)
        .map(key => this.used.calories[key]).reduce((a, b) => a + b),
        'protein': Object.keys(this.used.protein)
        .map(key => this.used.protein[key]).reduce((a, b) => a + b),
        'carbs': Object.keys(this.used.carbs)
        .map(key => this.used.carbs[key]).reduce((a, b) => a + b),
        'fats': Object.keys(this.used.fats)
        .map(key => this.used.fats[key]).reduce((a, b) => a + b)
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

  @observable index = {
    'Breakfast': 0,
    'Lunch': 0,
    'Dinner': 0,
    'Snack': 0
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

  @observable selected = {
    'Breakfast': [],
    'Lunch': [],
    'Dinner': [],
    'Snack': []
  }

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

  @action add = (food, meal) => {
    let newLog = { ...this.log }

    newLog[meal] = {
      ...this.log[meal],
      [this.index[meal]]: food
    }
    this.log = newLog
  }

  @action _selected = (meal, e) => {
    console.log(this.selected[meal])
  }

  @action delete = (meal, e) => {
    for (let i = 0; i < e.length; i++) {
      console.log(e[i])
    }
    // console.log(this.log[meal], selected)
  }
}

const store = new Store()
window.store = store

export default store
