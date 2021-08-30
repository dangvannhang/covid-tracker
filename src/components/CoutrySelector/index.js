import React, { useState, useEffect } from 'react'

function CountrySelector({ countries, selectCountryId, onChangeCountry }) {
  useEffect(() => {}, [])

  return (
    <section className='countries-selector-component'>
      <form>
        <label htmlFor='country-selected'>Chọn đất nước</label>
        <select
          name='country-selected'
          id='country-selected'
          value={selectCountryId}
          onChange={(e) => onChangeCountry(e.target.value)}
        >
          {countries.map((country) => {
            return (
              <option
                value={country.ISO2.toLowerCase()}
                key={country.ISO2.toLowerCase()}
              >
                {country.Country}/{country.ISO2.toLowerCase()}
              </option>
            )
          })}
        </select>
      </form>
    </section>
  )
}

export default CountrySelector
