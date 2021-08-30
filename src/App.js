import CountrySelector from './components/CoutrySelector'
import Highlight from './components/Highlight'
import Summary from './components/Summary'
import { getCountries } from './data/countries'
import './app.css'

function App() {
  useEffect(() => {
    getCountries().then()
  }, [])
  return (
    <div className='app-component'>
      <CountrySelector />
      <Highlight />
      <Summary />
    </div>
  )
}

export default App
