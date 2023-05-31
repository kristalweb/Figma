import { Footer } from "./Pages/MainPages/Footer";
import { Navbar } from "./Pages/MainPages/Navbar";
import { ShowPage } from "./Pages/MainPages/ShowPage";

export function Wrapper() {
  return (
    <div className="Wrapper">
      <Navbar />
      <ShowPage />
      <Footer />
    </div>
  );
}
