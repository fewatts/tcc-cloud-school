import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import { Footer } from './components/footer/Footer';
import { NavBar } from './components/navbar/NavBar';
import { Home } from './pages/home/Home';
import { About } from './pages/about/About';
import { Cv } from './pages/cv/Cv';

function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <div className='app'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cv' element={<Cv/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App
