 import React,{useContext, useState} from 'react';
import { NavLink, useNavigate } from 'react-router';
import { AuthContext } from '../../../context/AuthContext';



const Navbar = () => {
  const navigate=useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const {token}=useContext(AuthContext);
  const handleLogout = () => {
  localStorage.removeItem(token); // or sessionStorage
  console.log(localStorage.getItem('token')); 

 

  navigate('/login'); // redirect to login
};



    const setNavigate = { 
          
};
  return (
    <div className='bg-amber-200'>

    <nav className="sticky top-0 z-50 text-black bg-white dark:bg-violet-900 shadow-md border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between ">
        <div className="flex space-x-4 max-lg:hidden">
         
            <NavLink
              
              to='/'
              className={({ isActive }) =>
                `flex items-center px-4 py-2 rounded-md text-lg font-medium transition-colors duration-200 focus:outline-none focus-visible:ring-2 ring-offset-2 ring-red-500 ${
                  isActive
                    ? 'bg-blue-100 dark:bg-red-600 text-red-800 dark:text-white'
                    : 'text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700'
                }`
              }
            >
              <span className="text-xl mr-2">🏠</span>
              Home
            </NavLink>
             <NavLink
              
              to='/meds'
              className={({ isActive }) =>
                `flex items-center px-4 py-2 rounded-md text-lg font-medium transition-colors duration-200 focus:outline-none focus-visible:ring-2 ring-offset-2 ring-red-500 ${
                  isActive
                    ? 'bg-blue-100 dark:bg-red-600 text-red-800 dark:text-white'
                    : 'text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700'
                }`
              }
            >
              <span className="text-xl mr-2">💊</span>
              Meds
            </NavLink>
             <NavLink
              
              to='/emotion'
              className={({ isActive }) =>
                `flex items-center px-4 py-2 rounded-md text-lg font-medium transition-colors duration-200 focus:outline-none focus-visible:ring-2 ring-offset-2 ring-red-500 ${
                  isActive
                    ? 'bg-blue-100 dark:bg-red-600 text-red-800 dark:text-white'
                    : 'text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700'
                }`
              }
            >
              <span className="text-xl mr-2">💊</span>
              Emotion
            </NavLink>
            
             <NavLink
              
              to='/care'
              className={({ isActive }) =>
                `flex items-center px-4 py-2 rounded-md text-lg font-medium transition-colors duration-200 focus:outline-none focus-visible:ring-2 ring-offset-2 ring-red-500 ${
                  isActive
                    ? 'bg-blue-100  dark:bg-red-600 text-red-800 dark:text-white'
                    : 'text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700'
                }`
              }
            >
              <span className="text-xl mr-2">👥</span>
              Care Team
            </NavLink>
             <NavLink
              
              to='/emergency'
              className={({ isActive }) =>
                `flex items-center px-4 py-2 rounded-md text-lg font-medium transition-colors duration-200 focus:outline-none focus-visible:ring-2 ring-offset-2 ring-red-500 ${
                  isActive
                    ? 'bg-blue-100  dark:bg-red-600 text-red-800 dark:text-white'
                    : 'text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700'
                }`
              }
            >
              <span className="text-xl mr-2">📞</span>
              Emergency
            </NavLink>
             <NavLink
              
              to='/schedule'
              className={({ isActive }) =>
                `flex items-center px-4 py-2 rounded-md text-lg font-medium transition-colors duration-200 focus:outline-none focus-visible:ring-2 ring-offset-2 ring-red-500 ${
                  isActive
                    ? 'bg-blue-100  dark:bg-red-600 text-red-800 dark:text-white'
                    : 'text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700'
                }`
              }
            >
              <span className="text-xl mr-2">📅</span>
              Schedule
            </NavLink>
             <NavLink
              
              to='/mood'
              className={({ isActive }) =>
                `flex items-center px-4 py-2 rounded-md text-lg font-medium transition-colors duration-200 focus:outline-none focus-visible:ring-2 ring-offset-2 ring-red-500 ${
                  isActive
                    ? 'bg-blue-100  dark:bg-red-600 text-red-800 dark:text-white'
                    : 'text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700'
                }`
              }
            >
              <span className="text-xl mr-2">🥰</span>
              MoodBoard
            </NavLink>
          
        </div>

         <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
       

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="lg:hidden px-4 pb-4 space-y-2 ">
             <NavLink
              
              to='/'
              className={({ isActive }) =>
                `flex items-center px-4 py-2 rounded-md text-lg font-medium transition-colors duration-200 focus:outline-none focus-visible:ring-2 ring-offset-2 ring-red-500 ${
                  isActive
                    ? 'bg-blue-100 dark:bg-red-600 text-red-800 dark:text-white'
                    : 'text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700'
                }`
              }
            >
              <span className="text-xl mr-2">🏠</span>
              Home
            </NavLink>
             <NavLink
              
              to='/meds'
              className={({ isActive }) =>
                `flex items-center px-4 py-2 rounded-md text-lg font-medium transition-colors duration-200 focus:outline-none focus-visible:ring-2 ring-offset-2 ring-red-500 ${
                  isActive
                    ? 'bg-blue-100 dark:bg-red-600 text-red-800 dark:text-white'
                    : 'text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700'
                }`
              }
            >
              <span className="text-xl mr-2">💊</span>
              Meds
            </NavLink>
             <NavLink
              
              to='/emotion'
              className={({ isActive }) =>
                `flex items-center px-4 py-2 rounded-md text-lg font-medium transition-colors duration-200 focus:outline-none focus-visible:ring-2 ring-offset-2 ring-red-500 ${
                  isActive
                    ? 'bg-blue-100 dark:bg-red-600 text-red-800 dark:text-white'
                    : 'text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700'
                }`
              }
            >
              <span className="text-xl mr-2">💊</span>
              Emotion
            </NavLink>
            
             <NavLink
              
              to='/care'
              className={({ isActive }) =>
                `flex items-center px-4 py-2 rounded-md text-lg font-medium transition-colors duration-200 focus:outline-none focus-visible:ring-2 ring-offset-2 ring-red-500 ${
                  isActive
                    ? 'bg-blue-100  dark:bg-red-600 text-red-800 dark:text-white'
                    : 'text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700'
                }`
              }
            >
              <span className="text-xl mr-2">👥</span>
              Care Team
            </NavLink>
             <NavLink
              
              to='/emergency'
              className={({ isActive }) =>
                `flex items-center px-4 py-2 rounded-md text-lg font-medium transition-colors duration-200 focus:outline-none focus-visible:ring-2 ring-offset-2 ring-red-500 ${
                  isActive
                    ? 'bg-blue-100  dark:bg-red-600 text-red-800 dark:text-white'
                    : 'text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700'
                }`
              }
            >
              <span className="text-xl mr-2">📞</span>
              Emergency
            </NavLink>
             <NavLink
              
              to='/schedule'
              className={({ isActive }) =>
                `flex items-center px-4 py-2 rounded-md text-lg font-medium transition-colors duration-200 focus:outline-none focus-visible:ring-2 ring-offset-2 ring-red-500 ${
                  isActive
                    ? 'bg-blue-100  dark:bg-red-600 text-red-800 dark:text-white'
                    : 'text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700'
                }`
              }
            >
              <span className="text-xl mr-2">📅</span>
              Schedule
            </NavLink>
             <NavLink
              
              to='/mood'
              className={({ isActive }) =>
                `flex items-center px-4 py-2 rounded-md text-lg font-medium transition-colors duration-200 focus:outline-none focus-visible:ring-2 ring-offset-2 ring-red-500 ${
                  isActive
                    ? 'bg-blue-100  dark:bg-red-600 text-red-800 dark:text-white'
                    : 'text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700'
                }`
              }
            >
              <span className="text-xl mr-2">🥰</span>
              MoodBoard
            </NavLink>
            {!token ?
              <NavLink
              
              to= "/login"
              className={({ isActive }) =>
                `flex items-center px-4 py-2 rounded-md text-lg font-medium transition-colors duration-200 focus:outline-none focus-visible:ring-2 ring-offset-2 ring-red-500 ${
                  isActive
                    ? 'bg-blue-100  dark:bg-red-600 text-red-800 dark:text-white'
                    : 'text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700'
                }`
              }
            >
              <span className="text-xl mr-2">📞</span>
              Login
            </NavLink>:   <NavLink
          to="/"
          className="  bg-gradient-to-r from-fuchsia-500 to-indigo-500 text-white font-semibold py-2 px-6 rounded-full shadow-lg transition-transform hover:scale-105"
        >
          🧠  Logout
        </NavLink>}
        </div>
      )}
    
        <div className="flex space-x-2">
        {!token?
            <NavLink
          to="/login"
          className=" max-lg:hidden bg-gradient-to-r from-fuchsia-500 to-indigo-500 text-white font-semibold py-2 px-6 rounded-full shadow-lg transition-transform hover:scale-105"
        >
          🧠  Login
        </NavLink> :  <button
           onClick={handleLogout}
          className=" max-lg:hidden bg-gradient-to-r from-fuchsia-500 to-indigo-500 text-white font-semibold py-2 px-6 rounded-full shadow-lg transition-transform hover:scale-105"
        >
          🧠  Logout
        </button> } 
           
        </div>
      </div>
    </nav>
    </div>
  );
};

export default Navbar;
