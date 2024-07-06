"use client";
import { QueryClientProvider } from "@tanstack/react-query";

import Features from "./components/Features/Features";
import Products from "./components/Products/Products";
import Compares from "./components/Compares/Compares";
import TermsPositionProvider from "./store/getTermsYPosition-context";
import Serivces from "./components/Services&Terms/Services";
import Terms from "./components/Services&Terms/Terms";
import Footer from "./components/Footer/Footer";

import { queryClient } from "./util/http";

export default function Home() {
  return (
    <main>
      <Products />
      <QueryClientProvider client={queryClient}>
        <Features />
      </QueryClientProvider>
      <TermsPositionProvider>
        <Compares />
        <Serivces />
        <Terms />
      </TermsPositionProvider>
      <Footer />
    </main>
  );
}
