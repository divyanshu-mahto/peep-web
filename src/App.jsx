import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <button onClick={() => window.location.href = '/login'}>
          Get started
        </button>
    </>
  )
}

export default App
