import Header from './component/Header';
import Footer from './component/Footer';
import Home from './component/Home';
import About from './component/About';
import Services from './component/Services';
import Gallery from './component/Gallery';
import Contact from './component/Contact'
import './App.css';
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import { FloatingWhatsApp } from 'react-floating-whatsapp'


function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path='/Home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services/men' element={<Services type={1} />} />
          <Route path='/services/women' element={<Services type={2} />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <FloatingWhatsApp  phoneNumber='+919999030477' accountName='Tony & Guy'/>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
