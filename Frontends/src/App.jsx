
import Login from './pages/onlymentors/Login';
import Dashboard from './pages/onlymentors/dashboard';
import ProtectedRoute from './pages/onlymentors/ProtectedRoute';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Timeline from './pages/Timeline';
import Mentors from './pages/Mentors';
import FAQs from './pages/FAQs';
import Register from './form/Register'
import Success from './form/Success';
function App() {
  return (
    <>
      <Navbar />
      <Routes>
       
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/mentors" element={<Mentors />} />
        <Route path="/faqs" element={<FAQs />} />
         <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<ProtectedRoute> <Dashboard /></ProtectedRoute>}/>
        <Route path="/register" element={<Register/>}/>
         <Route path="/success" element={<Success />} />
         
      </Routes>
      <Footer />
    </>
  );
}

export default App;
