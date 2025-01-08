import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/categories";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Footer />
        <Hero />
        <Categories />
      </div>
    </>
  );
}

export default App;
