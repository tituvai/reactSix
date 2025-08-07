
import { Route, Routes } from 'react-router-dom'
import './App.css'
import RootLayout from './components/layouts/RootLayout'
import Home from './components/pages/Home'
import Shop from './components/pages/Shop'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Jounal from './components/pages/Jounal'
import ProductDetiles from './components/pages/ProductDetiles'
import Login from './components/pages/Login'
import MyAcount from './components/pages/MyAcount'

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
          <Route path='/ProductDetiles' element={<ProductDetiles/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/myAcount' element={<MyAcount/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
