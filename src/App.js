import React, { useState, useEffect } from 'react'
import CountrySelector from './components/CoutrySelector'
import Highlight from './components/Highlight'
import Summary from './components/Summary'
import { getCountries } from './services/countries'
import './app.css'

function App() {
  const [countries, setCountries] = useState([])
  const [selectCountryId, setSelectCountry] = useState('vn')

  useEffect(() => {
    getCountries().then((res) => setCountries(res.data))
  }, [])

  return (
    <div className='app-component'>
      <CountrySelector countries={countries} selectCountry={selectCountryId} />
      <Highlight />
      <Summary />
    </div>
  )
}

export default App
