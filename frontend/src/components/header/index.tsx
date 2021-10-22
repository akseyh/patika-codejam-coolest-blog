const Header: React.FC = () => {
  return <header className="w-10/12  flex flex-row items-center justify-between m-auto text-gray-600 body-font">
    <h1 className="text-4xl">Logo</h1>
    <nav className="list-none flex flex-row gap-2">
      <li className="list-none flex items-center">
        Homepage
      </li>
      <li className="list-none flex items-center">
        Profile
      </li>
      <li className="list-none flex items-center">
        Logout
      </li>
    </nav>
</header>
};

export default Header;
