import React, { useState } from 'react'

// Definindo os tipos para os dados de resposta da API
interface Address {
  description: string;
  city: string;
  zipCode: string;
  number: string;
  complement: string;
}

interface Card {
  name: string;
  number: string;
  code: number;
  expires: {
    month: number;
    year: number;
  };
}

interface Payment {
  card: Card;
}

interface Delivery {
  receiver: string;
  address: Address;
}

interface OrderConfirmationData {
  products: Array<{ id: number; price: number }>;
  delivery: Delivery;
  payment: Payment;
}

const DeliveryPage: React.FC = () => {
  const [formData, setFormData] = useState({
    receiver: '',
    address: {
      description: '',
      city: '',
      zipCode: '',
      number: '',
      complement: '',
    },
    payment: {
      card: {
        name: '',
        number: '',
        code: 123,
        expires: {
          month: 12,
          year: 1234,
        },
      },
    },
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Definindo o tipo de `confirmationData` como `OrderConfirmationData | null`
  const [confirmationData, setConfirmationData] = useState<OrderConfirmationData | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://fake-api-tau.vercel.app/api/efood/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Falha ao enviar os dados para a API');
      }

      const data: OrderConfirmationData = await response.json();
      setConfirmationData(data); // Aqui você pode passar os dados para a tela de confirmação
    } catch (error) {
      console.error('Erro:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <h2>Finalizar Pedido</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="receiver">Nome do Recebedor:</label>
          <input
            type="text"
            id="receiver"
            name="receiver"
            value={formData.receiver}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="description">Descrição do Endereço:</label>
          <input
            type="text"
            id="description"
            name="description"
            value={formData.address.description}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="city">Cidade:</label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.address.city}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="zipCode">CEP:</label>
          <input
            type="text"
            id="zipCode"
            name="zipCode"
            value={formData.address.zipCode}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="number">Número:</label>
          <input
            type="text"
            id="number"
            name="number"
            value={formData.address.number}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="complement">Complemento:</label>
          <input
            type="text"
            id="complement"
            name="complement"
            value={formData.address.complement}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="cardName">Nome no Cartão:</label>
          <input
            type="text"
            id="cardName"
            name="cardName"
            value={formData.payment.card.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="cardNumber">Número do Cartão:</label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            value={formData.payment.card.number}
            onChange={handleChange}
          />
        </div>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Enviando...' : 'Concluir Pedido'}
        </button>
      </form>

      {confirmationData && (
        <div>
          <h3>Pedido Confirmado!</h3>
          <p>Recebedor: {confirmationData.delivery.receiver}</p>
          <p>Endereço: {confirmationData.delivery.address.description}</p>
          {/* Exiba outras informações da resposta da API aqui */}
        </div>
      )}
    </div>
  );
};

export default DeliveryPage
