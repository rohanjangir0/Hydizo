import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar/Navbar'

import Home from './Components/Home/Home'
import Services from './Components/Services/Services'
import GetStarted from './Components/GetStarted/GetStarted'
import BusinessProcess from './Components/BusinessProcess/BusinessProcess'
import WhyHydizo from './Components/WhyHydizo/WhyHydizo'
import Footer from './Components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar></Navbar>
    <Home></Home>
    <Services></Services>
    <GetStarted></GetStarted>
    <BusinessProcess></BusinessProcess>
    <WhyHydizo></WhyHydizo>
    <Footer></Footer>
    </>
  )
}

export default App
