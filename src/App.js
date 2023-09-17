import './App.css';
import SignUp from './pages/SignUp';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import MobileSignUp from './pages/MobileSignUp';
import { useState, useEffect } from 'react';
function App() {
  // const isMobile = window.innerWidth <= 900;
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 920);

  useEffect(() => {
    // Function to update isMobile state based on window width
    function handleResize() {
      setIsMobile(window.innerWidth <= 900);
    }

    // Attach the event listener
    window.addEventListener('resize', handleResize);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <div className="App">
      <Router> {/* Wrap your entire app in Router */}
        <Routes>
          {isMobile ? <Route path="/" element={<MobileSignUp />} /> : <Route path="/" element={<SignUp />} />}
          <Route path="/dashboard" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
