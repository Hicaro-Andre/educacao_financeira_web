import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import emailjs from "@emailjs/browser";
import "../styles/AgendaSection.css";

function AgendaSection() {
  const { state } = useLocation();
  const selectedPlanFromState = state?.selectedPlan;

  // Configurações do EmailJS
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const userId = import.meta.env.VITE_EMAILJS_USER_ID;

  const availablePlans = [
    {
      title: "Plano Essencial",
      price: "Gratuito",
      description: "Ideal para quem está começando",
      items: [
        "Exercício prático para identificar desafios financeiros do casal",
        "Conceitos básicos",
      ],
    },
    {
      title: "Plano Básico",
      price: "R$ 450",
      description: "Ideal para casais que querem mais controle",
      items: [
        "Como alinhar a visão financeira do casal",
        "Planejamento financeiro",
        "Como sair das dívidas e evitar novas",
        "Definição de metas",
      ],
    },
    {
      title: "Plano Intermediário",
      price: "R$ 600",
      type: "ou 2x sem juros",
      description:
        "Ideal para casais que querem sair da instabilidade financeira",
      items: [
        "Tudo do plano anterior +",
        "Acompanhamento por WhatsApp",
        "Como construir uma reserva de emergência",
        "Dicas de investimentos",
      ],
    },
    {
      title: "Plano Avançado",
      price: "R$ 1000",
      type: "ou 4x sem juros",
      description: "Ideal para casais que desejam viver a verdadeira liberdade",
      items: [
        "Tudo dos planos anteriores +",
        "Diagnóstico financeiro",
        "Planejamento para aposentadoria",
        "Estratégias avançadas de investimentos",
      ],
    },
  ];

  const initialPlan = selectedPlanFromState || availablePlans[0];
  const [selectedPlan, setSelectedPlan] = useState(initialPlan);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    ddd: "11",
    phone: "",
    date: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handlePlanChange = (e) => {
    const planTitle = e.target.value;
    const newPlan = availablePlans.find((plan) => plan.title === planTitle);
    if (newPlan) setSelectedPlan(newPlan);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "name" && value.length > 40) {
      return;
    }

    if (name === "phone") {
      const numericValue = value.replace(/\D/g, "");
      setFormData((prev) => ({ ...prev, [name]: numericValue }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

    setFormErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
  const errors = {};
  let isValid = true;

 

  if (!formData.name.trim()) {
    errors.name = "Nome é obrigatório";
    isValid = false;
  } else if (formData.name.trim().length < 2) {
    errors.name = "Nome deve ter no mínimo 2 caracteres";
    isValid = false;
  } else if (formData.name.trim().length > 40) {
    errors.name = "Nome deve ter no máximo 40 caracteres";
    isValid = false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const validProviders = [
    "gmail.com",
    "hotmail.com",
    "outlook.com",
    "yahoo.com",
    "icloud.com",
    "protonmail.com",
    "live.com",
    "bol.com.br",
    "uol.com.br",
    "terra.com.br",
    "ig.com.br",
    "r7.com",
    "yahoo.com.br",
    "aol.com",
    "mail.com",
    "zoho.com",
  ];

  if (!formData.email.trim()) {
    errors.email = "Email é obrigatório";
    isValid = false;
  } else if (!emailRegex.test(formData.email)) {
    errors.email = "Email inválido";
    isValid = false;
  } else {
    const [, domain] = formData.email.split("@");
    if (!domain || !validProviders.includes(domain.toLowerCase())) {
      errors.email = "Provedor de email não suportado";
      isValid = false;
    }
  }

// Validação do Telefone
const phoneDigits = formData.phone.replace(/\D/g, '');
const phoneRegex = /^\d{10,11}$/;

if (!phoneDigits) {
  errors.phone = "Telefone é obrigatório";
  isValid = false;
} else if (!phoneRegex.test(phoneDigits)) {
  errors.phone = "Telefone deve conter 10 ou 11 dígitos";
  isValid = false;
}


  if (!formData.date) {
    errors.date = "Data é obrigatória";
    isValid = false;
  } else {
    const [year, month, day] = formData.date.split("-").map(Number);
    const selectedDate = new Date(year, month - 1, day);

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (selectedDate < today) {
      errors.date = "Selecione uma data a partir de hoje";
      isValid = false;
    }
  }

  setFormErrors(errors);
  return isValid;
};


  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setShowConfirmationModal(true);
  };

  const confirmSubmission = async () => {
    setIsSubmitting(true);
    setShowConfirmationModal(false);

    try {
      const templateParams = {
        name: formData.name,
        email: formData.email,
        phone: `(${formData.ddd}) ${formData.phone}`,
        date: formData.date,
        plan: selectedPlan.title,
        plan_price: selectedPlan.price,
        plan_description: selectedPlan.description,
      };

      await emailjs.send(serviceId, templateId, templateParams);

      setShowSuccessModal(true);
      setFormData({
        name: "",
        email: "",
        ddd: "11",
        phone: "",
        date: "",
      });
    } catch (error) {
      console.error("Erro ao enviar email:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeSuccessModal = () => {
    setShowSuccessModal(false);
  };

  // Obter data mínima (hoje) para o campo de data
  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="form-wrapper">
      <div className="form-container">
        <div className="form-content">
          <div className="form-section">
            <h2 className="plan-title">Agendamento - {selectedPlan.title}</h2>

            <div
              className={`selected-plan-card ${
                selectedPlan.title.includes("Básico") ||
                selectedPlan.title.includes("Avançado")
                  ? "plano-verde"
                  : ""
              }`}
            >
              <h3>{selectedPlan.title}</h3>
              <p className="price">{selectedPlan.price}</p>
              {selectedPlan.type && <p className="type">{selectedPlan.type}</p>}
              <p className="description">{selectedPlan.description}</p>
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
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  maxLength={40}
                  className={formErrors.name ? "error-input" : ""}
                />
                <div className="char-counter">{formData.name.length}/40</div>
                {formErrors.name && (
                  <span className="error-text">{formErrors.name}</span>
                )}
              </label>

              <label>
                Email:
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={formErrors.email ? "error-input" : ""}
                />
                {formErrors.email && (
                  <span className="error-text">{formErrors.email}</span>
                )}
              </label>

              <label>
  Telefone:
  <input
    type="tel"
    name="phone"
    value={formData.phone}
    onChange={handleChange}
    placeholder="(00) 90000-0000"
    className={formErrors.phone ? "error-input phone-input" : "phone-input"}
  />
  {formErrors.phone && (
    <span className="error-text">{formErrors.phone}</span>
  )}
</label>


              <label>
                Data:
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  min={today}
                  className={formErrors.date ? "error-input" : ""}
                />
                {formErrors.date && (
                  <span className="error-text">{formErrors.date}</span>
                )}
              </label>

              <p className="time-note">
                *Forma de pagamento e horário a combinar.
              </p>

              <button
                type="submit"
                className="submit-button"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Enviando..." : "Enviar"}
              </button>
            </form>
          </div>

          <div
            className={`selected-plan-card-desk ${
              selectedPlan.title.includes("Básico")
                ? "plans_card-1"
                : selectedPlan.title.includes("Avançado")
                ? "plans_card-3"
                : ""
            }`}
          >
            <h3>{selectedPlan.title}</h3>
            <p className="price">{selectedPlan.price}</p>
            {selectedPlan.type && <p className="type">{selectedPlan.type}</p>}
            <p className="description">{selectedPlan.description}</p>
            <ul>
              {selectedPlan.items.map((item, index) => (
                <li key={index}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 21 20"
                    fill="none"
                  >
                    <path
                      d="M17.1666 5L7.99992 14.1667L3.83325 10"
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
        </div>
      </div>

      {showConfirmationModal && (
        <div className="modal-overlay">
          <div className="confirmation-modal">
            <h3>Confirmar Agendamento</h3>
            <div className="confirmation-details">
              <p>
                <strong>Nome:</strong> {formData.name}
              </p>
              <p>
                <strong>Email:</strong> {formData.email}
              </p>
              <p>
                <strong>Telefone:</strong> ({formData.ddd}) {formData.phone}
              </p>
              <p>
                <strong>Data:</strong> {formData.date}
              </p>
              <p>
                <strong>Plano:</strong> {selectedPlan.title} -{" "}
                {selectedPlan.price}
              </p>
            </div>
            <div className="modal-buttons">
              <button
                onClick={() => setShowConfirmationModal(false)}
                className="cancel-button"
              >
                Voltar
              </button>
              <button
                onClick={confirmSubmission}
                className="confirm-button"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Enviando..." : "Confirmar"}
              </button>
            </div>
          </div>
        </div>
      )}

      {showSuccessModal && (
        <div className="modal-overlay">
          <div className="success-modal">
            <svg
              width="60"
              height="60"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"
                fill="#047857"
              />
            </svg>
            <h3>Agendamento Enviado!</h3>
            <p>
              Seu agendamento foi enviado com sucesso. Entraremos em contato em
              breve.
            </p>
            <button onClick={closeSuccessModal} className="success-button">
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default AgendaSection;
