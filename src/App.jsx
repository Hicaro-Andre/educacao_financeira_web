//* componente pai
import "./App.css";

//* Importar o componente filho
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import PlansSection from "./components/PlansSection";
import AboutSection from "./components/AboutSection";
import PrinciplesSection from "./components/PrinciplesSection";
import FeedbackSection from "./FeedbackSection";
import TipsSection from "./components/TipsSection";
import Footer from "./components/Footer"


function App() {
  return (
    <>
      <NavBar/>
      <HeroSection/>
      <PlansSection/>
      <AboutSection/>
      <PrinciplesSection/>
      <FeedbackSection/>
      <TipsSection/>
      <Footer/>
    </>
  );
}

export default App;
