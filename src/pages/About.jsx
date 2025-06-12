import wpp from "../assets/images/globals_btn/wpp.svg";
import topo from "../assets/images/globals_btn/topo.svg";

import NavBar from "../components/NavBar";
import AboutSection from "../components/AboutSection";
import PrinciplesSection from "../components/PrinciplesSection";
import FeedbackSection from "../components/FeedbackSection";
import Footer from "../components/Footer";
import HeroAbout from "../components/HeroAbout";


function About (){
   // Função para voltar ao topo suavemente
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return(
    <>
    <NavBar />
    <HeroAbout />
    <AboutSection />
    <PrinciplesSection />
    <FeedbackSection />
    <Footer />
    {/* Botões flutuantes (agora estilizados externamente) */}
                <div className="floating-buttons">
                  {/* Botão do WhatsApp */}
                  <button 
                    className="btn-float whatsapp-btn"
                    onClick={() => window.open('https://wa.me/seunumerodeaqui', '_blank')}
                  >
                    <img 
                      src={wpp} 
                      alt="WhatsApp" 
                      
                    />
                  </button>
          
                 
                  {/* <button 
                    className="btn-float back-to-top"
                    onClick={scrollToTop}
                  >
                    <img 
                      src={topo} 
                      alt="Voltar ao topo" 
                      style={{ width: '16px' }} 
                    />
                    Voltar ao Topo
                  </button> */}
                </div>
    </>
  )
}

export default About;