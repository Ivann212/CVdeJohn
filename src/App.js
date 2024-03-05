import Header from './Header';
import './App.css';
import Footer from './Footer';
import {Routes, Route} from 'react-router-dom'
import Accueil from './Accueil'


function App() {
  return (
    <div className="App">
      
      <Header/>
      <Routes>
        <Route path="/" element={<Accueil/>}></Route>
      </Routes>
      
      <Footer/> 
    </div>
  );
}

export default App;
