import React from 'react'

function CountrySelector({ countries, selectCountryId, onChangeCountry }) {
  return (
    <section
      className="countries-selector-component"
      data-testid="country-selector"
    >
      <form>
        <label htmlFor="country-selected">Chọn đất nước</label>
        <br />
        <select
          name="country-selected"
          id="country-selected"
          value={selectCountryId}
          onChange={onChangeCountry}
        >
          {countries.map((country) => {
            return (
              <option
                value={country.ISO2.toLowerCase()}
                key={country.ISO2.toLowerCase()}
              >
                {country.Country}
              </option>
            )
          })}
        </select>
      </form>
    </section>
  )
}

export default CountrySelector
