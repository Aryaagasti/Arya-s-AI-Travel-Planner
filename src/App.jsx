import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Results from './pages/Result';
import About from './pages/About';
import Contact from './pages/Contact';
import Chatbot from './components/Chatbot';
function App() {
  return (
    <Router>
      <Chatbot/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/results" element={<Results />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;