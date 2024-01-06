import { Route, Routes } from "react-router-dom";
import NavbarComp from "./components/NavbarComp";
import HomePage from "./pages/HomePage";
import LayananPage from "./pages/LayananPage";
import TestimonialPage from "./pages/TestimonialPage";
import FaqPage from "./pages/FaqPage";
import SyaratKeten from "./pages/SyaratKeten";

const App = () => {
  return (
    <>
      <NavbarComp />
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/layanan" Component={LayananPage} />
        <Route path="/testimonial" Component={TestimonialPage} />
        <Route path="/faq" Component={FaqPage} />
        <Route path="/syaratketen" Component={SyaratKeten} />
      </Routes>
    </>
  );
};

export default App;
