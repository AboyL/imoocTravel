import axios from 'axios'
import config from './config.const.js'
export default {
  request ({ method = 'post', url, data }) {
    return axios({
      url: url,
      method: method,
      data: data,
      baseURL: config.baseUrl
    })
      .then((result) => {
        return result.data
      }).catch((err) => {
        return err
      })
  }
}
