import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Add more routes here as components are created */}
          {/* <Route path="/services" element={<Services />} /> */}
          {/* <Route path="/projects" element={<Projects />} /> */}
          {/* <Route path="/quote" element={<Quote />} /> */}
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
