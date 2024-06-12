import Features from "./components/Features/Features";
import Products from "./components/Products/Products";
import Compares from "./components/Compares/Compares";

export default function Home() {
  return (
    <main>
      <Products></Products>
      <Features></Features>
      <Compares></Compares>
    </main>
  );
}
