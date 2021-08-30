import axios from 'axios'

const getCountries = () => {
  return axios.get('https://api.covid19api.com/countries')
}

export { getCountries }
