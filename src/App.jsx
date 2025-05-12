import './App.css'
import Navbar from './components/Navbar'
import Home from './components/home'
import Working from './components/working'
import Footer from './components/Footer'
import Offsets_projects from './components/offsets_projects'
import Trust_makers from './components/trust_makers'
import Final_CTA from './components/Final_CTA'
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import { Heading1 } from 'lucide-react'

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route index element={<Home />} />
          <Route path='how-it-works' element={<Working />}/>
          <Route path='offset-projects' element={<Offsets_projects />}/>
          <Route path='about' element={<Trust_makers />}/>
          <Route path='calculator' element={<Final_CTA />}/>
          <Route path='contact' element={<Footer />}/>
          <Route path="*" element={<h1>Error occured</h1>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
