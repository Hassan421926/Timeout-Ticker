
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Shop from './components/Shop'
import Blog from './components/Blog'
import About from './components/About'
import Footer from './components/Footer'
import Contact from './components/Contact'
import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import ScrollToTop from "./components/scroll";

function App() {


  const [cartCount, setcartCount] = useState(0);
  const [alert, setAlert] = useState(false);
  const [fade, setfade] = useState(true);

  function handleClick() {
    setcartCount(cartCount + 1)


    setAlert(true)
    setfade(false)

    setTimeout(() => {
      setfade(true);
      setTimeout(() => {
        setAlert(false)
      }, 3000);
    }, 3000);
  }

  return (
    <>

      <BrowserRouter basename="/Timeout-Ticker">
      <ScrollToTop />
        <Navbar cartCount={cartCount} />
       
        <Routes>
       
          <Route path="/" element={<Home addtoCart={handleClick} />} />
          {/* <Route path="/shop" element={<Shop />} />  */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/shop" element={<Shop addtoCart={handleClick} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />

        {alert && <div className={`show_alert ${ fade ? 'fade_out' : ""}`} id='alert'>
        Item Added to Cart!
      </div>}

      </BrowserRouter>

    
    </>
  )
}

export default App
