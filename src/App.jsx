import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "./components/Footer";
import Navbars from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/categories";

function App() {
  return (
    <>
      <div>
        <Navbars />
        <Hero />
        <Categories />
        <Footer />
      </div>
    </>
  );
}

export default App;
