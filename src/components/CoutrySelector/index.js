import React, { useState, useEffect } from 'react'

function CountrySelector({ countries, selectCountry }) {
  useEffect(() => {}, [])

  return (
    <section className='countries-selector-component'>
      <form>
        <select name='' id=''>
          {countries.map((country) => {
            return <option>{country.Country}</option>
          })}
        </select>
      </form>
    </section>
  )
}

export default CountrySelector
