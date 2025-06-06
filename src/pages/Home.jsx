//* componente pai
import wpp from "../assets/images/globals_btn/wpp.svg"
import topo from "../assets/images/globals_btn/topo.svg"


//* Importar o componente filho
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import PlansSection from "../components/PlansSection";
import AboutSection from "../components/AboutSection";
import PrinciplesSection from "../components/PrinciplesSection";
import FeedbackSection from "../components/FeedbackSection";
import TipsSection from "../components/TipsSection";
import Footer from "../components/Footer"


function Home() {
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
      {/* <div className="floating-buttons">
        <img src={wpp} alt="Botão 1" className="floating-icon" />
        <img src={topo} alt="Botão 2" className="floating-icon" />
      </div> */}
    </>
  );
}

export default Home;
