import axios from 'axios'

export default function ajax(url='', data={}, method='GET') {
  if ( method === 'GET' ) {
    let dataStr = ''
    Object.keys(data).forEach(key => {
      dataStr += key + '=' + data[key] + '&'
    })

    if ( dataStr !== '' ) {
      dataStr = dataStr.substring(0, data.lastIndexOf('&'))
      url = url + '?' + dataStr
    }
    return axios.get(url)
  }
  return axios.post(url, data)
}