import { render, screen } from '@testing-library/react'
import CountrySelector from '../index'

describe('Test suite - Country selector', ()=> {
    test('Render without crashing', ()=> {
        render(<CountrySelector/>)

        const countrySelector = screen.getByTestId('country-selector')

        expect(countrySelector).toBeVisible()
    })
})