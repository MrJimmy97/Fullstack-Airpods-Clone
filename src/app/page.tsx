import Features from "./components/Features/Features";
import Products from "./components/Products/Products";
import Compares from "./components/Compares/Compares";
import TermsPositionProvider from "./store/getTermsYPosition-context";
import Serivces from "./components/Services&Terms/Services";
import Terms from "./components/Services&Terms/Terms";

export default function Home() {
  return (
    <main>
      <Products></Products>
      <Features></Features>
      <TermsPositionProvider>
        <Compares />
        <Serivces />
        <Terms />
      </TermsPositionProvider>
    </main>
  );
}
