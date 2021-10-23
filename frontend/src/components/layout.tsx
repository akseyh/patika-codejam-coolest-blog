import Header from "./header";

interface LProps {
  children: React.ReactNode;
}

const Layout: React.FC<LProps> = ({ children }) => {
  return (
    <main className="w-10/12 m-auto text-gray-600 body-font">
      <Header />
      {children}
    </main>
  );
};

export default Layout;
