import { observable } from 'mobx'

class Store {
  @observable sideBar = {
    'display': 'none'
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
}

const store = new Store()

export default store
