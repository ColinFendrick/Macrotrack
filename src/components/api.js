import store from '../store'
import { autorun } from 'mobx'
const API_BASE = 'https://api.nutritionix.com/v1_1/search/'
const API_KEY = '105450dabfa9aba34c9ace6b9248ef91'
const API_ID = 'fc3e322d'

const getData = (query, offset) => {
  const url = API_BASE
  let filters = {}
  if (store.toggle) {
    filters = {
      'nf_calories': {
        'lte': store.daily.calories - store.total.calories
      },
      'nf_protein': {
        'lte': store.daily.protein - store.total.protein
      },
      'nf_total_carbohydrate': {
        'lte': store.daily.carbs - store.total.carbs
      },
      'nf_total_fat': {
        'lte': store.daily.fats - store.total.fats
      }
    }
  }

  let sort = {
    'field': 'item_name',
    'order': 'desc'
  }
  if (store.sort === 1) {
    sort = {
      'field': 'nf_calories',
      'order': 'desc'
    }
  } else if (store.sort === 2) {
    sort = {
      'field': 'nf_protein',
      'order': 'desc'
    }
  } else if (store.sort === 3) {
    sort = {
      'field': 'nf_total_carbohydrate',
      'order': 'desc'
    }
  } else if (store.sort === 4) {
    sort = {
      'field': 'nf_total_fat',
      'order': 'desc'
    }
  }

  let pos = 25
  if (offset) {
    pos = offset
  }

  if (query) {
    window.fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        'appId': API_ID,
        'appKey': API_KEY,
        'query': query,
        'offset': pos,
        'fields': ['*'],
        'limit': 50,
        'filters': filters,
        'sort': sort
      })
    }).then(r => r.json())
  .then(r => { store.entries = store.entries.concat(r.hits) })
  }
}

autorun(() => {
  getData()
})

window.getData = getData

export { getData }
