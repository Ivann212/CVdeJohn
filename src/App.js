import Header from './Header';
import './App.css';
import Footer from './Footer';
import {Routes, Route} from 'react-router-dom'
import Accueil from './Accueil'
import Realisations from './pages/Realisations';
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Mentions from './pages/Mentions'
import Services from './pages/Services'


function App() {
  return (
    <div className="App">
      
        <Header/>
      

      
        <Routes>
          <Route path="/" element={<Accueil/>}></Route>
          <Route path="/realisation" element={<Realisations/>}></Route>
          <Route path="/blog" element={<Blog/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/services" element={<Services/>}></Route>
          <Route path="/realisations" element={<Realisations/>}></Route>
          <Route path="/mentions" element={<Mentions/>}></Route>
        </Routes>
     

      
        <Footer/>
      
      
      
      
    </div>
  );
}

export default App;
