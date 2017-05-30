const API_BASE = 'https://api.nutritionix.com/v1_1/search/'
const API_KEY = '105450dabfa9aba34c9ace6b9248ef91'
const API_ID = 'fc3e322d'

const getData = query => {
  const url = API_BASE
  window.fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      'appId': API_ID,
      'appKey': API_KEY,
      'query': query,
      'fields': ['*']
    })
  }).then(r => r.json()).then(r => console.log(r.hits))
}

export { getData }
