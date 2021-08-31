import React, { useState, useEffect } from 'react'
import CountrySelector from './components/CoutrySelector'
import Highlight from './components/Highlight'
import Summary from './components/Summary'
import { getCountries, getSituationOfCountry } from './services/countries'
import { sortBy } from 'lodash'
import './app.css'

function App() {
  const [countries, setCountries] = useState([])
  const [selectCountryId, setSelectCountryId] = useState('')
  const [countrySituation, setCountrySituation] = useState([])

  // function help change value of country what we selected to another country
  const onChangeCountry = (value) => {
    setSelectCountryId(value)
  }

  // get countries
  useEffect(() => {
    getCountries().then((res) => {
      const { data } = res
      // sort this response array to get array A -> Z
      const countries = sortBy(data, 'Country')

      console.log('countries after sort: ', countries)

      setCountries(countries)
      setSelectCountryId('vn')
    })
  }, [])

  useEffect(() => {
    if (selectCountryId) {
      const selectedCountry = countries.find(
        (country) => country.ISO2 === selectCountryId.toUpperCase()
      )
      getSituationOfCountry(selectedCountry.Slug).then((res) => {
        setCountrySituation(res.data)
        console.log('situation of country', res)
      })
    }
  }, [selectCountryId, countries])

  return (
    <div className='app-component'>
      <CountrySelector
        countries={countries}
        selectCountryId={selectCountryId}
        onChangeCountry={onChangeCountry}
      />
      <Highlight countrySituation={countrySituation} />
      <Summary />
    </div>
  )
}

export default App
