import store from '../store'
import {observer} from 'mobx-react'
import { autorun } from 'mobx'
const API_BASE = 'https://api.nutritionix.com/v1_1/search/'
const API_KEY = '105450dabfa9aba34c9ace6b9248ef91'
const API_ID = 'fc3e322d'

// Gets data from API
const getData = () => {
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

  // Sorts API data based on dropdown
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

  // Fetch data from API
  if (store.query && store.query.length > 0 && !store.scroll) {
    window.fetch(API_BASE, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        'appId': API_ID,
        'appKey': API_KEY,
        'query': store.query,
        'offset': 5,
        'fields': [
          'item_name',
          'nf_calories',
          'nf_protein',
          'nf_total_carbohydrate',
          'nf_total_fat'
        ],
        'limit': 20,
        'filters': filters,
        'sort': sort
      })
    }).then(r => r.json())
  .then(r => { store.entries = r.hits })
  }

  // Fetch API on scrolling to bottom of page
  if (store.scroll) {
    window.fetch(API_BASE, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        'appId': API_ID,
        'appKey': API_KEY,
        'query': store.query,
        'offset': store.offset,
        'fields': [
          'item_name',
          'nf_calories',
          'nf_protein',
          'nf_total_carbohydrate',
          'nf_total_fat'
        ],
        'limit': 50,
        'filters': filters,
        'sort': sort
      })
    }).then(r => r.json())
  .then(r => { store.entries = store.entries.concat(r.hits) })
  }
}

// Reruns this fn on toggles/filters
autorun(() => {
  getData()
})

window.getData = getData

export default observer({getData})
