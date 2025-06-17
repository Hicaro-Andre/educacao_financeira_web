import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import emailjs from "@emailjs/browser";
import "../styles/AgendaSection.css";

// Componentes dos Ícones
const CorrectIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
    <g clipPath="url(#clip0_613_500)">
      <path d="M5 0C2.23858 0 0 2.23858 0 5C0 7.76142 2.23858 10 5 10C7.76142 10 10 7.76142 10 5C10 2.23858 7.76141 0 5 0ZM5 1.08643C7.16141 1.08643 8.91297 2.83913 8.91297 5C8.91297 7.16087 7.16141 8.91297 5 8.91297C2.83858 8.91297 1.08703 7.16088 1.08703 5C1.08704 2.83913 2.83858 1.08643 5 1.08643ZM6.91589 2.62573L4.01794 5.52429L3.078 4.58435L2.15576 5.50598L3.0957 6.44593L4.02404 7.37427L4.94568 6.45203L7.84423 3.55408L6.91589 2.62573Z" fill="#1C4140"/>
    </g>
    <defs>
      <clipPath id="clip0_613_500">
        <rect width="10" height="10" fill="white"/>
      </clipPath>
    </defs>
  </svg>
);

const ErrorIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
    <path d="M3.23917 3.23907C3.33293 3.14533 3.46009 3.09268 3.59267 3.09268C3.72525 3.09268 3.8524 3.14533 3.94617 3.23907L5.02317 4.31557L6.09967 3.23907C6.14579 3.19131 6.20096 3.15322 6.26197 3.12702C6.32297 3.10081 6.38858 3.08702 6.45497 3.08644C6.52136 3.08587 6.5872 3.09852 6.64864 3.12366C6.71009 3.1488 6.76592 3.18593 6.81286 3.23287C6.85981 3.27982 6.89694 3.33564 6.92208 3.39709C6.94722 3.45854 6.95987 3.52438 6.95929 3.59077C6.95872 3.65716 6.94492 3.72277 6.91872 3.78377C6.89251 3.84477 6.85442 3.89995 6.80667 3.94607L5.73017 5.02307L6.80667 6.09957C6.89775 6.19387 6.94814 6.32017 6.947 6.45127C6.94587 6.58237 6.89328 6.70778 6.80058 6.80048C6.70787 6.89318 6.58247 6.94577 6.45137 6.94691C6.32027 6.94805 6.19397 6.89765 6.09967 6.80657L5.02317 5.73007L3.94617 6.80657C3.8515 6.89546 3.72597 6.94404 3.59613 6.94203C3.46628 6.94001 3.34232 6.88756 3.25046 6.79577C3.15861 6.70397 3.10607 6.58005 3.10396 6.45021C3.10185 6.32036 3.15034 6.1948 3.23917 6.10007L4.31567 5.02357L3.23917 3.94657C3.14543 3.85281 3.09277 3.72565 3.09277 3.59307C3.09277 3.46049 3.14543 3.33333 3.23917 3.23957" fill="#FF4E4E"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M5 0C2.2385 0 0 2.2385 0 5C0 7.7615 2.2385 10 5 10C7.7615 10 10 7.7615 10 5C10 2.2385 7.7615 0 5 0ZM1 5C1 3.93913 1.42143 2.92172 2.17157 2.17157C2.92172 1.42143 3.93913 1 5 1C6.06087 1 7.07828 1.42143 7.82843 2.17157C8.57857 2.92172 9 3.93913 9 5C9 6.06087 8.57857 7.07828 7.82843 7.82843C7.07828 8.57857 6.06087 9 5 9C3.93913 9 2.92172 8.57857 2.17157 7.82843C1.42143 7.07828 1 6.06087 1 5Z" fill="#FF4E4E"/>
  </svg>
);

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
      description: "Ideal para casais que querem sair da instabilidade financeira",
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
    ddd: "",
    phone: "",
    date: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [fieldStatus, setFieldStatus] = useState({
    name: null,
    email: null,
    ddd: null,
    phone: null,
    date: null,
  });

  const handlePlanChange = (e) => {
    const planTitle = e.target.value;
    const newPlan = availablePlans.find((plan) => plan.title === planTitle);
    if (newPlan) setSelectedPlan(newPlan);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Limitar o nome a 40 caracteres
    if (name === "name" && value.length > 40) {
      return;
    }

    // Permitir apenas números no DDD e telefone
    if (name === "ddd" || name === "phone") {
      const numericValue = value.replace(/\D/g, "");
      setFormData((prev) => ({ ...prev, [name]: numericValue }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

    setFormErrors((prev) => ({ ...prev, [name]: "" }));
    setFieldStatus((prev) => ({ ...prev, [name]: null }));
  };

  const validateField = (name, value) => {
    if (name === "name") {
      if (!value.trim()) return { isValid: false, error: "Nome é obrigatório" };
      if (value.trim().length < 2) return { isValid: false, error: "Nome deve ter no mínimo 2 caracteres" };
      if (value.trim().length > 40) return { isValid: false, error: "Nome deve ter no máximo 40 caracteres" };
      return { isValid: true };
    }

    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const validProviders = [
        "gmail.com", "hotmail.com", "outlook.com", "yahoo.com", "icloud.com",
        "protonmail.com", "live.com", "bol.com.br", "uol.com.br", "terra.com.br",
        "ig.com.br", "r7.com", "yahoo.com.br", "aol.com", "mail.com", "zoho.com",
      ];

      if (!value.trim()) return { isValid: false, error: "Email é obrigatório" };
      if (!emailRegex.test(value)) return { isValid: false, error: "Email inválido" };
      
      const [, domain] = value.split("@");
      if (!domain || !validProviders.includes(domain.toLowerCase())) {
        return { isValid: false, error: "Provedor de email não suportado" };
      }

      const [localPart] = value.split("@");
      if (!localPart || localPart.length < 1) {
        return { isValid: false, error: "Email deve conter texto antes do @" };
      }
      return { isValid: true };
    }

    if (name === "ddd") {
      const dddRegex = /^[0-9]{2}$/;
      if (!value) return { isValid: false, error: "DDD é obrigatório" };
      if (!dddRegex.test(value)) return { isValid: false, error: "DDD deve ter 2 dígitos" };
      return { isValid: true };
    }

    if (name === "phone") {
      const phoneRegex = /^[0-9]{8,9}$/; // 8 ou 9 dígitos (sem DDD)
      if (!value) return { isValid: false, error: "Telefone é obrigatório" };
      if (!phoneRegex.test(value)) return { isValid: false, error: "Telefone deve conter 8 ou 9 dígitos" };
      return { isValid: true };
    }

    if (name === "date") {
      if (!value) return { isValid: false, error: "Data é obrigatória" };
      
      const [year, month, day] = value.split("-").map(Number);
      const selectedDate = new Date(year, month - 1, day);
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      if (selectedDate < today) return { isValid: false, error: "Selecione uma data a partir de hoje" };
      return { isValid: true };
    }

    return { isValid: true };
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const validation = validateField(name, value);
    
    if (!validation.isValid) {
      setFormErrors((prev) => ({ ...prev, [name]: validation.error }));
      setFieldStatus((prev) => ({ ...prev, [name]: "error" }));
    } else if (value) {
      setFieldStatus((prev) => ({ ...prev, [name]: "success" }));
    }
  };

  const validateForm = () => {
    const errors = {};
    let isValid = true;

    Object.keys(formData).forEach((field) => {
      const validation = validateField(field, formData[field]);
      if (!validation.isValid) {
        errors[field] = validation.error;
        isValid = false;
        setFieldStatus((prev) => ({ ...prev, [field]: "error" }));
      } else if (formData[field]) {
        setFieldStatus((prev) => ({ ...prev, [field]: "success" }));
      }
    });

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

      await emailjs.send(serviceId, templateId, templateParams, userId);

      setShowSuccessModal(true);
      setFormData({
        name: "",
        email: "",
        ddd: "",
        phone: "",
        date: "",
      });
      setFieldStatus({
        name: null,
        email: null,
        ddd: null,
        phone: null,
        date: null,
      });
    } catch (error) {
      console.error("Erro ao enviar email:", error);
      setShowSuccessModal(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeSuccessModal = () => {
    setShowSuccessModal(false);
  };

  return (
    <div className="form-wrapper">
      <div className="form-container">
        <h2 className="plan-title">Agendamento - {selectedPlan.title}</h2>
        <div className="form-content">

          <div className="form-section">
            
            {/* Mobile Card */}
            <div className={`selected-plan-card ${
              selectedPlan.title.includes("Básico") ||
              selectedPlan.title.includes("Avançado")
                ? "plano-verde"
                : ""
            }`}>
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

              <div className="form-field-wrapper">
                <label>
                  Nome:
                  <div className="input-with-icon">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      maxLength={40}
                      className={formErrors.name ? "error-input" : ""}
                    />
                    {fieldStatus.name === "success" && (
                      <span className="status-icon success">
                        <CorrectIcon />
                      </span>
                    )}
                    {fieldStatus.name === "error" && (
                      <span className="status-icon error">
                        <ErrorIcon />
                      </span>
                    )}
                  </div>
                  {formErrors.name && (
                    <span className="error-text">{formErrors.name}</span>
                  )}
                </label>
              </div>

              <div className="form-field-wrapper">
                <label>
                  Email:
                  <div className="input-with-icon">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={formErrors.email ? "error-input" : ""}
                    />
                    {fieldStatus.email === "success" && (
                      <span className="status-icon success">
                        <CorrectIcon />
                      </span>
                    )}
                    {fieldStatus.email === "error" && (
                      <span className="status-icon error">
                        <ErrorIcon />
                      </span>
                    )}
                  </div>
                  {formErrors.email && (
                    <span className="error-text">{formErrors.email}</span>
                  )}
                </label>
              </div>

              <div className="phone-date-container">
                <div className="ddd-phone-wrapper">
                  <div className="form-field-wrapper ddd-field">
                    <label>
                      DDD:
                      <div className="input-with-icon">
                        <input
                          type="tel"
                          name="ddd"
                          value={formData.ddd}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          maxLength={2}
                          className={formErrors.ddd ? "error-input" : ""}
                        />
                        {fieldStatus.ddd === "success" && (
                          <span className="status-icon success">
                            <CorrectIcon />
                          </span>
                        )}
                        {fieldStatus.ddd === "error" && (
                          <span className="status-icon error">
                            <ErrorIcon />
                          </span>
                        )}
                      </div>
                      {formErrors.ddd && (
                        <span className="error-text">{formErrors.ddd}</span>
                      )}
                    </label>
                  </div>

                  <div className="form-field-wrapper phone-field">
                    <label>
                      Telefone:
                      <div className="input-with-icon">
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          maxLength={9}
                          className={formErrors.phone ? "error-input" : ""}
                        />
                        {fieldStatus.phone === "success" && (
                          <span className="status-icon success">
                            <CorrectIcon />
                          </span>
                        )}
                        {fieldStatus.phone === "error" && (
                          <span className="status-icon error">
                            <ErrorIcon />
                          </span>
                        )}
                      </div>
                      {formErrors.phone && (
                        <span className="error-text">{formErrors.phone}</span>
                      )}
                    </label>
                  </div>
                </div>

                <div className="form-field-wrapper">
                  <label>
                    Data:
                    <div className="input-with-icon">
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        min={new Date().toISOString().split("T")[0]}
                        className={formErrors.date ? "error-input" : ""}
                      />
                      {fieldStatus.date === "success" && (
                        <span className="status-icon success">
                          <CorrectIcon />
                        </span>
                      )}
                      {fieldStatus.date === "error" && (
                        <span className="status-icon error">
                          <ErrorIcon />
                        </span>
                      )}
                    </div>
                    {formErrors.date && (
                      <span className="error-text">{formErrors.date}</span>
                    )}
                  </label>
                </div>
              </div>

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

          {/* Desktop Card */}
          <div className={`selected-plan-card-desk ${
            selectedPlan.title.includes("Básico")
              ? "plans_card-1"
              : selectedPlan.title.includes("Avançado")
              ? "plans_card-3"
              : ""
          }`}>
            <h3>{selectedPlan.title}</h3>
            <p className="price">{selectedPlan.price}</p>
            {selectedPlan.type && <p className="type">{selectedPlan.type}</p>}
            <p className="description">{selectedPlan.description}</p>
            <ul>
              {selectedPlan.items.map((item, index) => (
                <li key={index}>
                  <svg
                    className="plan-item-icon"
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

      {/* Modal de Confirmação */}
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

      {/* Modal de Sucesso */}
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