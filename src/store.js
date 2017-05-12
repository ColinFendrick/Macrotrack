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
  @observable used = {
    'calories': 1200,
    'protein': 32,
    'carbs': 120,
    'fat': 18
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
