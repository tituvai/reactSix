
import { Route, Routes } from 'react-router-dom'
import './App.css'
import RootLayout from './components/layouts/RootLayout'
import Home from './components/pages/Home'
import Shop from './components/pages/Shop'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Jounal from './components/pages/Jounal'

function App() {
 

  return (
    <>
      <Routes>
        <Route path='/' element={<RootLayout/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/shop' element={<Shop/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/journal' element={<Jounal/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
