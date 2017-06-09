import { observable, action, computed } from 'mobx'

class Store {
  // Search entries
  @observable entries = []

  // User stats
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

  // Search query
  @observable query = ''
  // Offset of search
  @observable offset = 10
  // Has user reached bottom of search results?
  @observable scroll = false

  // Daily nutrient allotment from profile
  // These values are based on a formula, some are my additions
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

  // Total used nutrients
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

  // Used nutrients at each meal
  @computed get used () {
    return {
      'calories': {
        'Breakfast': this.log.Breakfast[0] ? Object.keys(this.log.Breakfast)
        .map(key => this.log.Breakfast[key].nf_calories)
        .reduce((a, b) => a + b) : 0,
        'Lunch': this.log.Lunch[0] ? Object.keys(this.log.Lunch)
        .map(key => this.log.Lunch[key].nf_calories)
        .reduce((a, b) => a + b) : 0,
        'Dinner': this.log.Dinner[0] ? Object.keys(this.log.Dinner)
        .map(key => this.log.Dinner[key].nf_calories)
        .reduce((a, b) => a + b) : 0,
        'Snack': this.log.Snack[0] ? Object.keys(this.log.Snack)
        .map(key => this.log.Snack[key].nf_calories)
        .reduce((a, b) => a + b) : 0
      },
      'protein': {
        'Breakfast': this.log.Breakfast[0] ? Object.keys(this.log.Breakfast)
        .map(key => this.log.Breakfast[key].nf_protein)
        .reduce((a, b) => a + b) : 0,
        'Lunch': this.log.Lunch[0] ? Object.keys(this.log.Lunch)
        .map(key => this.log.Lunch[key].nf_protein)
        .reduce((a, b) => a + b) : 0,
        'Dinner': this.log.Dinner[0] ? Object.keys(this.log.Dinner)
        .map(key => this.log.Dinner[key].nf_protein)
        .reduce((a, b) => a + b) : 0,
        'Snack': this.log.Snack[0] ? Object.keys(this.log.Snack)
        .map(key => this.log.Snack[key].nf_protein)
        .reduce((a, b) => a + b) : 0
      },
      'carbs': {
        'Breakfast': this.log.Breakfast[0] ? Object.keys(this.log.Breakfast)
        .map(key => this.log.Breakfast[key].nf_total_carbohydrate)
        .reduce((a, b) => a + b) : 0,
        'Lunch': this.log.Lunch[0] ? Object.keys(this.log.Lunch)
        .map(key => this.log.Lunch[key].nf_total_carbohydrate)
        .reduce((a, b) => a + b) : 0,
        'Dinner': this.log.Dinner[0] ? Object.keys(this.log.Dinner)
        .map(key => this.log.Dinner[key].nf_total_carbohydrate)
        .reduce((a, b) => a + b) : 0,
        'Snack': this.log.Snack[0] ? Object.keys(this.log.Snack)
        .map(key => this.log.Snack[key].nf_total_carbohydrate)
        .reduce((a, b) => a + b) : 0
      },
      'fats': {
        'Breakfast': this.log.Breakfast[0] ? Object.keys(this.log.Breakfast)
        .map(key => this.log.Breakfast[key].nf_total_fat)
        .reduce((a, b) => a + b) : 0,
        'Lunch': this.log.Lunch[0] ? Object.keys(this.log.Lunch)
        .map(key => this.log.Lunch[key].nf_total_fat)
        .reduce((a, b) => a + b) : 0,
        'Dinner': this.log.Dinner[0] ? Object.keys(this.log.Dinner)
        .map(key => this.log.Dinner[key].nf_total_fat)
        .reduce((a, b) => a + b) : 0,
        'Snack': this.log.Snack[0] ? Object.keys(this.log.Snack)
        .map(key => this.log.Snack[key].nf_total_fat)
        .reduce((a, b) => a + b) : 0
      }
    }
  }

  // Here's where all the food user has eaten goes
  @observable log = {
    'Breakfast': {},
    'Lunch': {},
    'Dinner': {},
    'Snack': {}
  }

  // Index of food additions/subtractions, used to manage delete functionality
  @observable index = {
    'Breakfast': 0,
    'Lunch': 0,
    'Dinner': 0,
    'Snack': 0
  }

  // Add food
  @action add = (food, meal) => {
    let newLog = { ...this.log }

    newLog[meal] = {
      ...this.log[meal],
      [this.index[meal]]: food
    }
    this.log = newLog
    this.index[meal] = this.index[meal] + 1
  }

  // Delete food based on position of index
  @action delete = (meal, e) => {
    if (e === 'all') {
      this.log[meal] = {}
      this.index[meal] = 0
    } else {
      let newLog = {...this.log}
      for (let i = 0; i < e.length; i++) {
        delete newLog[meal][e[i]]
        this.index[meal] = this.index[meal] - 1
      }
      this.log = newLog
    }
  }

  // Display information
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

  // More display information
  @action mealToggle = meal => {
    if (this.display[meal] === 'none') {
      this.display[meal] = 'flex'
    } else {
      this.display[meal] = 'none'
    }
  }

  // Toggle from 'Is within budget?'
  @observable toggle = false

  @action _toggle = () => {
    this.toggle = !this.toggle
  }

  // Sorts based on macros
  @observable sort = 0

  @action _sort = value => {
    this.sort = value
  }
}

const store = new Store()
window.store = store

export default store
