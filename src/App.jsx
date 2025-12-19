import './index.css';
import Navbar from './components/layout/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import { DarkModeProvider } from './components/Dark/DarkModeContext'
import Gallerypage from './pages/Gallerypage'
import SearchBox from './components/layout/SearchBox'
import About from './pages/About'
import Footer from './components/layout/Footer'
import Servicepage from './pages/ServicePage'
import Womenlist from './components/service/Womenlist'
import Boylist from './components/service/Boylist'
import BookingPage from './pages/BookingPage'
import BlogPage from './pages/BlogPage'
import ShopPage from './pages/ShopPage'
import Contect from './pages/Contect'
import BlogNews from './components/blog/news/BlogNews'
import ScrollToTop from './components/layout/ScrollToTop'
function App() {

  return (
    <>
     <DarkModeProvider>
     <Navbar/>
       <ScrollToTop />
     {/* <WhatsAppButton/> */}
     <Routes>
      
      <Route path="/" element={<Home/>}/>
      <Route path="/gallery" element={<Gallerypage/>}/>
      <Route path='/search' element={<SearchBox />}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/service' element={<Servicepage/>}/>
      <Route path='/booking' element={<BookingPage/>}/>
      <Route path='/women' element={<Womenlist/>}/>
      <Route path='/boy' element={<Boylist/>}/>
      <Route path='/blog' element={<BlogPage/>}/>
      <Route path='/shop' element={<ShopPage/>}/>
      <Route path='/contact' element={<Contect/>}/>
      <Route path="/news1" element={<BlogNews/>}/>
      <Route path="*" element={<Home/>}/>

     </Routes>
   
     <Footer/>
     </DarkModeProvider>
    </>
  )
}

export default App
