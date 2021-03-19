import 'whatwg-fetch'

const customFetch = (url, opts) => {
  return window
    .fetch(url, opts)
    .catch(() => {
      throw new Error('NetworkFailed')
    })
    .then(res => {
      if (!res.ok) {
        if (res.status === 401) {
          throw new Error('Unauthorized')
        }
        throw new Error('ServerError')
      } else {
        return res.json().then(data => {
          if (data.IsSessionTimeout) {
            throw new Error('Unauthorized')
          } else {
            return data
          }
        })
      }
    })
    .then(json => {
      if (json && json.error && json.status !== 'success') {
        if (typeof json.error === 'object') {
          throw json.error
        } else {
          throw new Error(json.error)
        }
      }
      return json
    })
    .catch(err => {
      console.log(err)
      throw err
    })
}

export default customFetch
