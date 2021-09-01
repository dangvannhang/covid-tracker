import { render, screen } from '@testing-library/react'
import App from './App'

describe('app component',() => {
  test('should render with crashing', ()=> {
    render(<App/>)
    const appComponent = screen.getByTestId('app-component')
    expect(appComponent).toBeVisible()
  })
})