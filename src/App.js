import React, { useState, useEffect } from 'react'
import CountrySelector from './components/CoutrySelector'
import Highlight from './components/Highlight'
import Summary from './components/Summary'
import { getCountries } from './services/countries'
import './app.css'
import { sortBy } from 'lodash'

function App() {
  const [countries, setCountries] = useState([])
  const [selectCountryId, setSelectCountryId] = useState('')

  const onChangeCountry = (value) => {
    setSelectCountryId(value)
  }
  useEffect(() => {
    getCountries().then((res) => {
      // sort this response array to get array A -> Z
      const { data } = res
      const countries = sortBy(data, 'Country')
      setCountries(countries)
      setSelectCountryId('vn')
    })
  }, [])

  return (
    <div className='app-component'>
      <CountrySelector
        countries={countries}
        selectCountryId={selectCountryId}
        onChangeCountry={onChangeCountry}
      />
      <Highlight />
      <Summary />
    </div>
  )
}

export default App
