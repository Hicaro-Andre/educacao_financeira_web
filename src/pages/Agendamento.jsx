import NavBar from "../components/NavBar";
import AgendaSection from "../components/AgendaSection";
import Footer from "../components/Footer"


function Agendamento() {
  return (
    <>
    <div className="page-wrapper">
      <NavBar/>
      <main>
      <AgendaSection />
      </main>
      <Footer/>
      </div>
    </>
  );
}

export default Agendamento;
