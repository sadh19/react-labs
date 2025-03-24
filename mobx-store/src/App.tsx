import './App.css'
import { AppStore } from './store/AppStore'
import { Dashboard } from './components/dashboard/Dashboard'
import { Results } from './components/results/Results'
import { Users } from './components/users/Users';

function App() {

  const counter = new AppStore();
  counter.fetchUsers()

  return (
    <>
      <Dashboard counter={counter} />
      <Results counter={counter} />
      <Users counter={counter} />

    </>
  )
}

export default App
