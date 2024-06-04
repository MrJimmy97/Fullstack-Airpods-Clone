import ProductBar from "./ProductBar";
import MainNavbar from "./MainNavbar";
import NavMessage from "./NavMessage";

const Navbar: React.FC = () => {
  return (
    <div>
      <MainNavbar />
      <ProductBar/>
      <NavMessage/>
    </div>
  );
};

export default Navbar;
