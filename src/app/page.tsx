import Features from "./components/Features/Features";
import Products from "./components/Products/Products";
import Compares from "./components/Compares/Compares";
import Serivces from "./components/Services&Terms/Services";

export default function Home() {
  return (
    <main>
      <Products></Products>
      <Features></Features>
      <Compares></Compares>
      <Serivces></Serivces>
    </main>
  );
}
