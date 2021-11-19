import "./App.scss";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import BannerOne from "./components/BannerOne/BannerOne";
import Footer from "./components/Footer/Footer";
import CarouselOne from "./components/CarouselOne/CarouselOne";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <BannerOne />
      <CarouselOne />
      <Footer />
    </div>
  );
}

export default App;
