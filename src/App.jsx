import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';

function App() {
  return (
    <Router>
      <div className="pt-16"> {/* push content below the fixed navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          {/* …other routes */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
