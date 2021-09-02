import axios from 'axios'
import moment from 'moment'

const getCountries = () => axios.get('https://api.covid19api.com/countries')

const getSituationOfCountry = (slug) =>
  axios.get(`https://api.covid19api.com/dayone/country/${slug}`)

export { getCountries, getSituationOfCountry }
