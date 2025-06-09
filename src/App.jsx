// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Plans from './pages/Plans';
import Blog from './pages/Blog';
import Agendamento from './pages/Agendamento';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/agenda" element={<Agendamento />} />
      </Routes>
    </Router>
  );
}

export default App;
