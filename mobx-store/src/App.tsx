import './App.css'
import { AppStore } from './store/AppStore'
import { Dashboard } from './components/dashboard/Dashboard'
import { Results } from './components/results/Results'

function App() {

  const counter = new AppStore();

  return (
    <>
      <Dashboard counter={counter} />
      <Results counter={counter} />

    </>
  )
}

export default App
