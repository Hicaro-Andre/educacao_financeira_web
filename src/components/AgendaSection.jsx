
import "../styles/AgendaSection.css"

function AgendaSection() {
  return (
    <section className="agenda">
      <h3>Agende sua Mentoria</h3>

      <div className="agenda__container">
        <img
          className="frame-icon4"
          alt=""
          src="../assets/images/plans/button-select.svg"
        />
        <img
          className="frame-icon5"
          alt=""
          src="../assets/images/plans/button-select.svg"
        />
        <img
          className="frame-icon6"
          alt=""
          src="../assets/images/plans/button-select.svg"
        />
        <img
          className="frame-icon7"
          alt=""
          src="../assets/images/plans/button-select.svg"
        />
      </div>

      <div className="agenda__wrapper">
        <div className="agenda__planos">
          <div className="agenda__card">
            <p className="agenda__title">Plano Essencial</p>
            <p className="agenda__plans">Gratuito</p>
            <p className="agenda__description">
              Ideal para quem está começando e quer dar o primeiro passo sem
              compromisso.
            </p>
            <p className="agenda__time">Duração: 1 sessão de 1 hora</p>

            <div className="exerccio-prtico-para-identif-parent">
              <div className="exerccio-prtico-para">
                Exercício prático para identificar desafios financeiros do casal
              </div>
              <div className="conceitos-bsicos">Conceitos básicos</div>
              <div className="frame-parent">
                <img
                  className="frame-icon"
                  alt=""
                  src="../assets/images/plans/frame-card.svg"
                />
                <img
                  className="frame-icon"
                  alt=""
                  src="../assets/images/plans/frame-card.svg"
                />
              </div>
            </div>

            <div className="exerccio-prtico-para-identif-parent">
              <div className="frame-parent">
                <img
                  className="frame-icon"
                  alt=""
                  src="../assets/images/plans/arrow-esq.svg"
                />
                <img
                  className="frame-icon"
                  alt=""
                  src="../assets/images/plans/arrow-dir.svg"
                />
              </div>
            </div>

            <div className="btn__plans-button">
              <img alt="" src="../assets/images/plans/frame-button.svg" />
              <p>Agendar Sessão</p>
            </div>
          </div>

          <div className="agenda__card">
            <div className="button1">
              <img className="frame-icon2" alt="" src="Frame.svg" />
              <div className="agendar">Agendar</div>
              <div className="sesso">Sessão</div>
            </div>
            <b className="plano-bsico">
              <p className="plano">Plano</p>
              <p className="plano">Básico</p>
            </b>
            <b className="r-450">R$ 450</b>
            <div className="ideal-para-casais">
              Ideal para casais que querem mais controle sobre suas finanças e
              um plano de ação prático.
            </div>
            <div className="durao-3-sesses">Duração: 3 sessões de 1 hora</div>
            <div className="como-alinhar-a-viso-financeir-parent">
              <div className="como-alinhar-a">
                Como alinhar a visão financeira do casal com princípios cristãos
              </div>
              <div className="como-alinhar-a">
                Planejamento financeiro simples e prático
              </div>
              <div className="como-alinhar-a">
                Como sair das dívidas e evitar novos endividamentos
              </div>
              <div className="como-alinhar-a">
                <p className="plano">
                  Definição de metas financeiras realistas
                </p>
                <p className="plano">
                  Planilha de controle financeiro personalizada
                </p>
              </div>
            </div>
            <div className="frame-group">
              <img className="frame-icon4" alt="" src="Frame.svg" />
              <img className="frame-icon5" alt="" src="Frame.svg" />
              <img className="frame-icon6" alt="" src="Frame.svg" />
              <img className="frame-icon7" alt="" src="Frame.svg" />
            </div>
          </div>

          <div className="intermedio">
            <b className="plano-intermedirio">
              <p className="plano">Plano</p>
              <p className="plano">Intermediário</p>
            </b>
            <div className="r-600-ou-container">
              <p className="plano">
                <b>R$ 600 </b>
              </p>
              <p className="ou-2x-sem">ou 2x sem juros</p>
            </div>
            <div className="ideal-para-quem">
              Ideal para casais que querem sair da instabilidade financeira e
              construir um futuro próspero.
            </div>
            <div className="durao-5-sesso">Duração: 5 sessão de 1 hora</div>
            <div className="tudo-do-plano-anterior-parent">
              <div className="tudo-do-plano">Tudo do plano anterior +</div>
              <div className="acompanhamento-por-whatsapp">
                Acompanhamento por WhatsApp durante o período da mentoria
              </div>
              <div className="como-construir-uma">
                Como construir uma reserva de emergência eficaz
              </div>
              <div className="acompanhamento-por-whatsapp">
                Introdução a investimentos para casais cristãos
              </div>
              <div className="acompanhamento-por-whatsapp">
                Planejamento financeiro para objetivos de curto, médio e longo
                prazo
              </div>
              <div className="acompanhamento-por-whatsapp">
                Como ensinar princípios financeiros cristãos aos filhos
              </div>
            </div>
            <div className="frame-container">
              <img className="frame-icon8" alt="" src="Frame.svg" />
              <img className="frame-icon9" alt="" src="Frame.svg" />
              <img className="frame-icon10" alt="" src="Frame.svg" />
              <img className="frame-icon11" alt="" src="Frame.svg" />
              <img className="frame-icon12" alt="" src="Frame.svg" />
              <img className="frame-icon13" alt="" src="Frame.svg" />
            </div>
            <div className="button2">
              <img className="frame-icon2" alt="" src="Frame.svg" />
              <div className="agendar">Agendar</div>
              <div className="sesso">Sessão</div>
            </div>
          </div>
        </div>
      </div>

      <img className="vector-icon" alt="" src="Vector.svg" />
      <img className="vector-icon1" alt="" src="Vector.svg" />
      <div className="proiconsbutton-parent">
        <img className="proiconsbutton" alt="" src="proicons:button.svg" />
        <img className="proiconsbutton1" alt="" src="proicons:button.svg" />
        <img className="proiconsbutton2" alt="" src="proicons:button.svg" />
        <img className="proiconsbutton3" alt="" src="proicons:button.svg" />
      </div>
    </section>
  );
}

export default AgendaSection;
