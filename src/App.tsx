import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PeopleContainer from './components/PeopleContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-green-500'>
        <PeopleContainer />
          
      </div>
    </>
  )
}

export default App
