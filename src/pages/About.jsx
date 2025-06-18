import wpp from "../assets/images/globals_btn/wpp.svg";
import topo from "../assets/images/globals_btn/topo.svg";

import NavBar from "../components/NavBar";
import AboutSection from "../components/AboutSection";
import PrinciplesSection from "../components/PrinciplesSection";
import FeedbackSection from "../components/FeedbackSection";
import Footer from "../components/Footer";
import MentoringAbout from "../components/MentoringAbout";


function About() {
  // Função para voltar ao topo suavemente
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="page-wrapper">
        <NavBar />
        <main>
          < MentoringAbout />
          <AboutSection />
          <PrinciplesSection />
          <FeedbackSection />
        </main>
        <Footer />
        {/* Botões flutuantes (agora estilizados externamente) */}
         <div className="floating-buttons">
                  {/* Botão do WhatsApp com mensagem pré-definida */}
                  <button
                    className="btn-float whatsapp-btn"
                    onClick={() => {
                      const message =
                        "Olá, estou buscando mais informações sobre as mentorias";
                      window.open(
                        `https://wa.me/48984927741?text=${encodeURIComponent(message)}`,
                        "_blank"
                      );
                    }}
                  >
                    <img src={wpp} alt="WhatsApp" />
                  </button>
                </div>
      </div>
    </>
  );
}

export default About;
