import NavBar from "../components/NavBar";
import PlansSection from "../components/PlansSection"
import Footer from "../components/Footer";
import wpp from "../assets/images/globals_btn/wpp.svg";
import topo from "../assets/images/globals_btn/topo.svg";

function Plans (){
     // Função para voltar ao topo suavemente
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return(
    <>
     <div className="page-wrapper">
    <NavBar />
     <main>
    <PlansSection />
    </main>
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
          </div>
    </>
  )
}

export default Plans;