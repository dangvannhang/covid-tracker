import React, { useState, useEffect, useRef } from 'react'
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

  const didMountSelectCountry = useRef(false)
  // function help change value of country what we selected to another country
  const onChangeCountry = (e) => {
    setSelectCountryId(e.target.value)
  }

  // get countries
  useEffect(() => {
    getCountries().then((res) => {
      const { data } = res
      // sort this response array to get array A -> Z
      const countries = sortBy(data, 'Country')

      setCountries(countries)
      setSelectCountryId('vn')
    })
  }, [])

  useEffect(() => {

    if(selectCountryId){
      const {Slug} = countries.find(
        country => country.ISO2.toLowerCase() === selectCountryId
      )
      
      getSituationOfCountry(Slug).then(res => {
        // move final item in array
        res.data.pop()
        setCountrySituation(res.data)
      })
    }

  }, [selectCountryId, countries])

  return (
    <div className="app-component">
      <CountrySelector
        countries={countries}
        selectCountryId={selectCountryId}
        onChangeCountry={onChangeCountry}
      />
      <Highlight countrySituation={countrySituation} />
      <Summary countrySituation={countrySituation}/>
    </div>
  )
}

export default App
