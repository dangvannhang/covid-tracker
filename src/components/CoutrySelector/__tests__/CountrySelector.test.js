import { render, screen } from '@testing-library/react'
import CountrySelector from '../index'
import {
  countries,
  selectCountryId,
  onChangeCountry,
} from '../../../constants/countrySelector'

describe('Test suite - Country selector', () => {
  test('Render without crashing', async () => {
    render(
      <CountrySelector
        countries={countries}
        selectCountryId={selectCountryId}
        onChangeCountry={onChangeCountry}
      />
    )

    const countrySelector = screen.getByTestId('country-selector')

    expect(countrySelector).toBeVisible()
  })
})
