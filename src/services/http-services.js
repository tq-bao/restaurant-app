const host = 'https://gplx.demo.bizmac.io/api';

export function handlePostAPI(url, body) {
  url = `${host}/${url}`
  console.log('postAPI', url, body)
  return new Promise((resolve, reject) => {
    return fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body)
    }).then(response => {
      return response.json()
    }).then(result => {
      resolve(JSON.parse(result))
    }).catch(error => {
      reject(error)
    })
  })
}

export function handleGetAPI(url) {
  url = `${host}/${url}`
  return new Promise((resolve, reject) => {
    return fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }).then(response => {
      return response.json()
    }).then(result => {
      resolve(JSON.parse(result))
    }).catch(error => {
      reject(error)
    })
  })
}

export function handleRequestAPI(url) {
  return new Promise((resolve, reject) => {
    return fetch(url).then(response => {
      return response.json()
    }).then(result => {
      resolve(result)
    }).catch(error => {
      reject(error)
    })
  })
}