import { useLocation } from "react-router-dom";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/AgendaSection.css";

function AgendaSection() {
  // Configurações do EmailJS (variáveis de ambiente Vite)
  const emailJsConfig = {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    userId: import.meta.env.VITE_EMAILJS_USER_ID,
  };

  // Verifica se as variáveis de ambiente estão carregadas
  console.log("Configurações EmailJS:", emailJsConfig);

  const { state } = useLocation();
  const selectedPlanFromState = state?.selectedPlan;

  const availablePlans = [
    {
      title: "Plano Essencial",
      price: "Gratuito",
      description:
        "Ideal para quem está começando e quer dar o primeiro passo sem compromisso.",
      duration: "1 sessão de 1 hora",
      items: [
        "Exercício prático para identificar desafios financeiros do casal",
        "Conceitos básicos",
      ],
    },
    {
      title: "Plano Básico",
      price: "R$ 450",
      description:
        "Ideal para casais que querem mais controle sobre suas finanças e um plano de ação prático.",
      duration: "3 sessões de 1 hora",
      items: [
        "Como alinhar a visão financeira do casal com princípios cristãos",
        "Planejamento financeiro simples e prático",
        "Como sair das dívidas e evitar novos endividamentos",
        "Definição de metas financeiras realistas",
        "Planilha de controle financeiro personalizada",
      ],
    },
    {
      title: "Plano Intermediário",
      price: "R$ 600",
      type: "ou 2x sem juros",
      description:
        "Ideal para casais que querem sair da instabilidade financeira e construir um futuro próspero.",
      duration: "5 sessões de 1 hora",
      items: [
        "Tudo do plano anterior +",
        "Acompanhamento por WhatsApp durante o período da mentoria",
        "Como construir uma reserva de emergência eficaz",
        "Introdução a investimentos para casais cristãos",
        "Planejamento financeiro para objetivos de curto, médio e longo prazo",
        "Como ensinar princípios financeiros cristãos aos filhos",
      ],
    },
    {
      title: "Plano Avançado",
      price: "R$ 1000",
      type: "ou 4x sem juros",
      description:
        "Ideal para casais que desejam viver a verdadeira liberdade financeira sem abrir mão dos princípios bíblicos.",
      duration: "8 sessões de 1 hora + acompanhamento",
      items: [
        "Tudo dos planos anteriores +",
        "Diagnóstico financeiro completo do casal",
        "Planejamento para aposentadoria e herança financeira",
        "Estratégias avançadas de investimentos",
        "Como empreender ou gerar novas fontes de renda juntos",
        "Sessão exclusiva sobre doação e generosidade cristã",
        "Acompanhamento individualizado por 3 meses após a mentoria",
      ],
    },
  ];

  const initialPlan =
    selectedPlanFromState ||
    availablePlans.find((plan) => plan.title === "Plano Essencial");

  const [selectedPlan, setSelectedPlan] = useState(initialPlan);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const validate = () => {
    const errors = {};
    if (!formData.name.trim() || formData.name.length < 2) {
      errors.name = "Digite um nome válido (mínimo 2 letras)";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      errors.email = "Digite um e-mail válido";
    }

    const phoneRegex = /^\(?\d{2}\)?[\s-]?\d{4,5}-?\d{4}$/;
    if (!phoneRegex.test(formData.phone)) {
      errors.phone = "Digite um telefone válido (ex: (11) 91234-5678)";
    }

    if (!formData.date) {
      errors.date = "Escolha uma data válida";
    }

    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setFormErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handlePlanChange = (e) => {
    const planTitle = e.target.value;
    const newPlan = availablePlans.find((plan) => plan.title === planTitle);
    if (newPlan) setSelectedPlan(newPlan);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      setShowModal(true);
    }
  };

  const handleSend = async () => {
    if (
      !emailJsConfig.serviceId ||
      !emailJsConfig.templateId ||
      !emailJsConfig.userId
    ) {
      console.error("Configurações do EmailJS não encontradas!");
      alert("Erro de configuração. Contate o suporte.");
      return;
    }

    setIsSending(true);

    try {
      const response = await emailjs.send(
        emailJsConfig.serviceId,
        emailJsConfig.templateId,
        {
          plan: selectedPlan.title,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          date: formData.date,
        },
        emailJsConfig.userId
      );

      console.log("E-mail enviado com sucesso:", response);
      alert("Agendamento enviado! Entraremos em contato em breve.");

      // Reset do formulário
      setFormData({
        name: "",
        email: "",
        phone: "",
        date: "",
      });
      setShowModal(false);
    } catch (error) {
      console.error("Falha no envio:", error);
      alert(`Erro ao enviar: ${error.text || "Tente novamente mais tarde"}`);
    } finally {
      setIsSending(false);
    }
  };

  const handleBack = () => {
    setShowModal(false);
  };

  return (
    <div className="form-wrapper">
      <div className="form-container">
        <div className="form-content">
          <div className="form-section">
            <h2 className="plan-title">Agendamento - {selectedPlan.title}</h2>
            {/* mobile*/}
            <div className="selected-plan-card">
              <h3>{selectedPlan.title}</h3>
              <p className="price">{selectedPlan.price}</p>
              {selectedPlan.type && <p className="type">{selectedPlan.type}</p>}
              <p className="description">{selectedPlan.description}</p>
              {/* <p className="duration">{selectedPlan.duration}</p> */}
              {/* <ul>
              {selectedPlan.items.map((item, index) => (
                <li key={index}>• {item}</li>
              ))}
            </ul> */}
            </div>

            {/* desktop*/}
            <div className="selected-plan-card-desk">
              <h3>{selectedPlan.title}</h3>
              <p className="price">{selectedPlan.price}</p>
              {selectedPlan.type && <p className="type">{selectedPlan.type}</p>}
              <p className="description">{selectedPlan.description}</p>
              <p className="duration">{selectedPlan.duration}</p>
              <ul>
                {selectedPlan.items.map((item, index) => (
                  <li
                    key={index}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M16.6668 5L7.50016 14.1667L3.3335 10"
                        stroke="#22C55E"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <form onSubmit={handleSubmit} className="form">
              <label>
                Plano:
                <select
                  name="plan"
                  value={selectedPlan.title}
                  onChange={handlePlanChange}
                >
                  {availablePlans.map((plan) => (
                    <option key={plan.title} value={plan.title}>
                      {plan.title} - {plan.price}
                    </option>
                  ))}
                </select>
              </label>

              <label>
                Nome:
                <input
                  className={formErrors.name ? "error-input" : ""}
                  type="text"
                  name="name"
                  placeholder="Seu nome"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                {formErrors.name && (
                  <p className="error-text">{formErrors.name}</p>
                )}
              </label>

              <label>
                E-mail:
                <input
                  className={formErrors.email ? "error-input" : ""}
                  type="email"
                  name="email"
                  placeholder="seu@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                {formErrors.email && (
                  <p className="error-text">{formErrors.email}</p>
                )}
              </label>

              <label>
                Telefone:
                <input
                  className={formErrors.phone ? "error-input" : ""}
                  type="tel"
                  name="phone"
                  placeholder="(00) 00000-0000"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
                {formErrors.phone && (
                  <p className="error-text">{formErrors.phone}</p>
                )}
              </label>

              <label>
                Data:
                <input
                  className={formErrors.date ? "error-input" : ""}
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
                {formErrors.date && (
                  <p className="error-text">{formErrors.date}</p>
                )}
              </label>

              <p className="time-note">Horário a combinar</p>

              <button type="submit" className="submit-button">
                Confirmar Agendamento
              </button>
            </form>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Confirme suas informações:</h3>
            <p>
              <strong>Plano:</strong> {selectedPlan.title}
            </p>
            <p>
              <strong>Nome:</strong> {formData.name}
            </p>
            <p>
              <strong>Email:</strong> {formData.email}
            </p>
            <p>
              <strong>Telefone:</strong> {formData.phone}
            </p>
            <p>
              <strong>Data:</strong> {formData.date}
            </p>
            <p>
              <strong>Horário:</strong> A combinar
            </p>
            <div className="modal-buttons">
              <button
                onClick={handleSend}
                className="submit-button"
                disabled={isSending}
              >
                {isSending ? "Enviando..." : "Enviar"}
              </button>
              <button onClick={handleBack} className="back-button">
                Voltar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AgendaSection;
