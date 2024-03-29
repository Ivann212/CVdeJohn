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
import Github from './pages/Github';


function App() {
  return (
    <div className="App">
      
        <Header/>
      

      
        <Routes>
          <Route path="/" element={<Accueil/>}/>
          <Route path="/realisation" element={<Realisations/>}/>
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/realisations" element={<Realisations/>}/>
          <Route path="/mentions" element={<Mentions/>}/>
          <Route path="/Github" element={<Github/>}/>
        </Routes>
     

      
        <Footer/>
      
      
      
      
    </div>
  );
}

export default App;
