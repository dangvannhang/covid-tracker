import './app.css'
import CountrySelector from './components/CoutrySelector'
import Highlight from './components/Highlight'
import Summary from './components/Summary'

function App() {
  return (
    <div className='app-component'>
      <CountrySelector />
      <Highlight />
      <Summary />
    </div>
  )
}

export default App
