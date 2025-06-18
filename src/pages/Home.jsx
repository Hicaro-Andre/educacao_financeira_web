//* componente pai
import wpp from "../assets/images/globals_btn/wpp.svg";
import topo from "../assets/images/globals_btn/topo.svg";

//* Importar o componente filho
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import TipsSection from "../components/TipsSection";
import Footer from "../components/Footer";
import Degrade from "../components/Degrade";
import Benefits from "../components/Benefits";
import Introduction from "../components/Introduction";

function Home() {
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
          <HeroSection />
          <Introduction />
          {/* <Degrade /> */}
          <Benefits />
          <TipsSection />
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

export default Home;
