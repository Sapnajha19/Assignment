import './App.css';
import SignUp from './pages/SignUp';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
       <Router> {/* Wrap your entire app in Router */}
        <Routes>
        <Route path="/" element={<SignUp />} /> 
          <Route path="/dashboard" element={<Home />} /> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
