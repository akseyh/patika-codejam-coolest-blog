import { Link } from "react-router-dom";

import { useLocation } from 'react-router-dom'

const Header: React.FC = () => {
  const { pathname } = useLocation()

  const classes = 'text-lg list-none flex items-center transition p-2 px-6 hover:bg-gray-300 hover:text-black'
  const selectedClasses = 'text-lg list-none flex items-center bg-gray-100 text-gray-400 transition p-2 px-6'
  
  return (
    <header className="flex flex-row items-center justify-between m-auto text-gray-600 body-font py-4">
      <h1 className="text-xl text-gray-900 font-light cursor-pointer select-none hover:text-gray-500 transition">Coolest Blog</h1>
      <nav className="list-none flex flex-row gap-x-8">
          <Link to='/'>
            <li className={`${pathname === '/' ? selectedClasses : classes}`}>Home</li>
          </Link>
          <li className="text-lg list-none flex items-center select-none cursor-pointer hover:text-black">Logout</li>
      </nav>
    </header>
  );
};

export default Header;
