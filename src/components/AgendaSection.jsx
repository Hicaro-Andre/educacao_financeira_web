import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "../styles/AgendaSection.css";

function AgendaSection() {
  const { state } = useLocation();
  const selectedPlanFromState = state?.selectedPlan;

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
    phone: "",
    date: "",
  });
  const [formErrors, setFormErrors] = useState({});

  const handlePlanChange = (e) => {
    const planTitle = e.target.value;
    const newPlan = availablePlans.find((plan) => plan.title === planTitle);
    if (newPlan) setSelectedPlan(newPlan);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setFormErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validação e envio do formulário
  };

  return (
    <div className="form-wrapper">
      <div className="form-container">
        <div className="form-content">
          <div className="form-section">
            <h2 className="plan-title">Agendamento - {selectedPlan.title}</h2>
            
            {/* Mobile Card */}
            <div className={`selected-plan-card ${
              selectedPlan.title.includes('Básico') || selectedPlan.title.includes('Avançado') 
                ? 'plano-verde' 
                : ''
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

              <label>
                Nome:
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={formErrors.name ? "error-input" : ""}
                />
                {formErrors.name && <span className="error-text">{formErrors.name}</span>}
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
                {formErrors.email && <span className="error-text">{formErrors.email}</span>}
              </label>

              <label>
                Telefone:
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={formErrors.phone ? "error-input" : ""}
                />
                {formErrors.phone && <span className="error-text">{formErrors.phone}</span>}
              </label>

              <label>
                Data:
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className={formErrors.date ? "error-input" : ""}
                />
                {formErrors.date && <span className="error-text">{formErrors.date}</span>}
              </label>

              <p className="time-note">Horário a combinar</p>

              <button type="submit" className="submit-button">
                Confirmar Agendamento
              </button>
            </form>
          </div>
          
          {/* Desktop Card */}
          <div className={`selected-plan-card-desk ${
            selectedPlan.title.includes('Básico') ? 'plans_card-1' :
            selectedPlan.title.includes('Avançado') ? 'plans_card-3' : ''
          }`}>
            <h3>{selectedPlan.title}</h3>
            <p className="price">{selectedPlan.price}</p>
            {selectedPlan.type && <p className="type">{selectedPlan.type}</p>}
            <p className="description">{selectedPlan.description}</p>
            <ul>
              {selectedPlan.items.map((item, index) => (
                <li key={index}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path 
                      d="M16.6668 5L7.50016 14.1667L3.3335 10" 
                      stroke={selectedPlan.title.includes('Básico') || selectedPlan.title.includes('Avançado') ? "white" : "#22C55E"}
                      strokeWidth="2"
                    />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AgendaSection;