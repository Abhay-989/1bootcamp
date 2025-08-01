import { useState } from "react";
import { Link,useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-[#2b1a6f] shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="flex justify-center h-16 items-center ">
       
        <div className="flex items-center space-x-2 pr-20 ">
            <Link to="/" className="flex items-center space-x-2   ">
            <img src="/images/ieee-logo.png" alt="IEEE Logo" className="h-12" />
            {/* <span className="text-xl font-bold text-purple-800">IEEE</span>
            <span className="text-sm text-purple-600 hidden sm:inline">MANIT Student Branch</span> */}
          </Link>
        </div>


   {/* Desktop Menu */}
<div className="hidden md:flex space-x-6 font-medium text-white relative right-3">
            <Link
  to="/"
  className={`hover:text-purple-500 pb-1 border-b-2 ${
    currentPath === '/' ? 'border-red-500' : 'border-transparent'
  }`}
>
  Home
</Link>

<Link
  to="/about"
  className={`hover:text-purple-500 pb-1 border-b-2 ${
    currentPath === '/about' ? 'border-red-500' : 'border-transparent'
  }`}
>
  About
</Link>

<Link
  to="/faqs"
  className={`hover:text-purple-500 pb-1 border-b-2 ${
    currentPath === '/faqs' ? 'border-red-500' : 'border-transparent'
  }`}
>
  FAQs
</Link>

<Link
  to="/mentors"
  className={`hover:text-purple-500 pb-1 border-b-2 ${
    currentPath === '/mentors' ? 'border-red-500 text-orange-500 ' : 'border-transparent'
  }`}
>
  Mentors
</Link>

<Link
  to="/timeline"
  className={`hover:text-purple-500 pb-1 border-b-2 ${
    currentPath === '/timeline' ? 'border-red-500 text-orange-500 ' : 'border-transparent'
  }`}
>
  Timeline
</Link>
<Link
  to="/login"
  className={`hover:text-purple-500 pb-1 border-b-2 ${
    currentPath === '/login' ? 'border-red-500 text-orange-500 ' : 'border-transparent'
  }`}
>
  List
</Link>

          </div>

         
          

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700">
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div  onClick={toggleMenu} className="md:hidden  px-4 py-4 space-y-2 shadow-md w-full absolute text-center bg-[#040F2D] ">
          <Link to="/" className="block text-white">Home</Link>
          <Link to="/about" className="block text-white">About</Link>
          <Link to="/faqs" className="block text-white">FAQs</Link>
          <Link to="/mentors" className="block text-white">Mentors</Link>
          <Link to="/timeline" className="block text-white">timeline </Link>
          <Link to="/Login" className="block text-white">List</Link>
        </div>
      )}
    </nav>
  
);
};

export default Navbar;
