import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Department from './Components/department/Department'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Header/>  */}
    <Department/>
    {/* <Footer/> */}
    </>
  )
}

export default App
