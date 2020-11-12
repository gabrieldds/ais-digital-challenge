const axios = require('axios')

class Api {
  constructor (baseURL, apikey) {
    this.apikey = apikey
    this.api = axios.create({
      baseURL
    })
  }

  async get (path) {
    const { data } = await this.api.get(path + `?api_key=${this.apikey}`)
    return data
  }
}

module.exports = Api
