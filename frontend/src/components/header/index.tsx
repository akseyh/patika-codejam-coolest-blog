import { Link } from "react-router-dom";

import useHeader from "./hooks/useHeader";

const Header: React.FC = () => {
  const { menu } = useHeader();

  return (
    <header className="w-10/12  flex flex-row items-center justify-between m-auto text-gray-600 body-font">
      <h1 className="text-4xl text-gray-500 font-light">Logo</h1>
      <nav className="list-none flex flex-row gap-2">
        {menu.map((item) => (
          <Link key={item.key} to={item.url}>
            <li className="text-lg list-none flex items-center">
              {item.title}
            </li>
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
