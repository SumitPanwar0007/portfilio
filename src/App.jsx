

import Home from './components/Home';
import NavBar from './components/NavBar';
 import About from './components/About';
 import Skills from './components/Skills';
import Services from './components/Services';
import ContactBox from './components/ContactBox';
import Contact from './components/Contact';
import './App.css'
import Footer from './components/footer';

import RecentProj from './components/RecentProj'

function App() {
 

  
  return (
    <>
    <NavBar />
  
      <Home />
      <About />
      <Skills/>
      

      <RecentProj/>
      <Services/>
      <Contact /> 
      {/* {component} */}
      <ContactBox/>
      <Footer/>
    </>
  )
}

export default App
