import { useLocation } from "react-router-dom";
import { useState } from "react";
import "../styles/AgendaSection.css";

function AgendaSection() {
  const { state } = useLocation();
  const selectedPlan = state?.selectedPlan;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    datetime: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Agendamento realizado para o plano: ${selectedPlan?.title}\nNome: ${formData.name}\nEmail: ${formData.email}\nData: ${formData.datetime}`);
  };

  if (!selectedPlan) {
    return <div className="form-container"><p>Plano não encontrado. Volte e selecione um plano.</p></div>;
  }

  return (
    <div className="form-container">
      <div className="selected-plan-card">
        <h3>{selectedPlan.title}</h3>
        <p className="price">{selectedPlan.price}</p>
        <p className="description">{selectedPlan.description}</p>
        <p className="duration">{selectedPlan.duration}</p>
      </div>

      <h2 className="plan-title">Agendamento - {selectedPlan.title}</h2>

      <form onSubmit={handleSubmit} className="form">
        <label>
          Nome:
          <input
            type="text"
            name="name"
            placeholder="Seu nome"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          E-mail:
          <input
            type="email"
            name="email"
            placeholder="seu@email.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Data e horário:
          <input
            type="datetime-local"
            name="datetime"
            value={formData.datetime}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit" className="submit-button">Confirmar Agendamento</button>
      </form>
    </div>
  );
}

export default AgendaSection;
