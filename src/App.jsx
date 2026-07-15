import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Kurslar from './pages/Kurslar.jsx'
import BizHaqimizda from './pages/BizHaqimizda.jsx'
import Aloqa from './pages/Aloqa.jsx'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kurslar" element={<Kurslar />} />
        <Route path="/biz-haqimizda" element={<BizHaqimizda />} />
        <Route path="/aloqa" element={<Aloqa />} />
      </Routes>
      <Footer />
    </>
  )
}
