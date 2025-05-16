import { useState } from 'react'
import PeopleContainer from './components/PeopleContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex flex-row'>
        <PeopleContainer />
          
      </div>
    </>
  )
}

export default App
