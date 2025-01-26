import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Component/Header'
import Home from './Component/Home'
import Footer from "./Component/Footer.jsx"
import About from "./Component/About.jsx"
import Contact from "./Component/Contact.jsx"
import Academy from "./Component/Academy.jsx"
import Club from "./Component/Club.jsx"
import Mint from "./Component/Mint.jsx"


function App() {

  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/contact' element={<Contact></Contact>}></Route>
          <Route path='/academy' element={<Academy></Academy>}></Route>
          <Route path='/club' element={<Club></Club>}></Route>
          <Route path='/mint' element={<Mint></Mint>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  )
}

export default App
