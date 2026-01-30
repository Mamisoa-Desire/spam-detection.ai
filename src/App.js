import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './layouts/Navbar/Navbar';
import Hero from './Page/Hero/Hero';
import Explication from './components/Explication/Explication';
import Scan from './components/Scan/Scan';
import ScrollToTop from './components/srolltop/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <main className="App">
        {/* La Navbar est en dehors de Routes, donc elle reste visible sur toutes les pages */}
        <Navbar />
        
        <Routes>
          {/* Page d'accueil */}
          <Route path="/" element={<Hero />} />
          <Route path="/explication" element={<Explication />} />
          <Route path="/explication" element={<Explication />} />
          <Route path="/scanner" element={<Scan />} />
          
        </Routes>
      </main> 
    </Router>
  );
}

export default App;