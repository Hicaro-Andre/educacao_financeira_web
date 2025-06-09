import NavBar from "../components/NavBar";
import AboutSection from "../components/AboutSection";
import PrinciplesSection from "../components/PrinciplesSection";
import FeedbackSection from "../components/FeedbackSection";
import Footer from "../components/Footer";
import HeroAbout from "../components/HeroAbout";


function About (){
  
  return(
    <>
    <NavBar />
    <HeroAbout />
    <AboutSection />
    <PrinciplesSection />
    <FeedbackSection />
    <Footer />
    </>
  )
}

export default About;