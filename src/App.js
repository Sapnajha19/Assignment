import './App.css';
import SignUp from './pages/SignUp';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import MobileSignUp from './pages/MobileSignUp';
import { useState, useEffect } from 'react';
import MobileHome from './pages/MobileHome';
function App() {
  // const isMobile = window.innerWidth <= 900;
  const [isSignUpMobile, setIsSignUpMobile] = useState(window.innerWidth <= 920);
  const [isHomeMobile, setIsHomeMobile] = useState(window.innerWidth <= 1280);
  useEffect(() => {
    // Function to update isMobile state based on window width
    function handleSignUpResize() {
      setIsSignUpMobile(window.innerWidth <= 920);
    }
    function handleHomeResize() {
      setIsHomeMobile(window.innerWidth <= 1280);
    }

    // Attach the event listener
    window.addEventListener('resize', handleSignUpResize);
    window.addEventListener('resize', handleHomeResize);
    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleSignUpResize);
      window.removeEventListener('resize', handleHomeResize);
    };
  }, []);


  return (
    <div className="App">
      <Router> {/* Wrap your entire app in Router */}
        <Routes>
          {isSignUpMobile ? <Route path="/" element={<MobileSignUp />} /> : <Route path="/" element={<SignUp />} />}
          {isHomeMobile ? <Route path="/dashboard" element={<MobileHome />} /> : <Route path="/dashboard" element={<Home />} />}
          {/* <Route path="/dashboard" element={<Home />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
