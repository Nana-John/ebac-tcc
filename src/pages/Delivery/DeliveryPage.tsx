import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { usePurchaseMutation } from '../../services/api'

const DeliveryPage: React.FC = () => {
  // State para armazenar os dados do formulário
  const [receiver, setReceiver] = useState('')
  const [description, setDescription] = useState('')
  const [city, setCity] = useState('')
  const [zipCode, setZipCode] = useState('')
  const [number, setNumber] = useState('')
  const [complement, setComplement] = useState('')
  const [cardName, setCardName] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const [cardCode, setCardCode] = useState('')
  const [expiryMonth, setExpiryMonth] = useState('')
  const [expiryYear, setExpiryYear] = useState('')

  const [purchase, { isLoading, isSuccess, data }] = usePurchaseMutation()
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const orderDetails = {
      products: [{ id: 1, price: 0 }],
      delivery: {
        receiver,
        address: {
          description,
          city,
          zipCode,
          number: parseInt(number),
          complement,
        },
      },
      payment: {
        card: {
          name: cardName,
          number: cardNumber,
          code: parseInt(cardCode),
          expires: {
            month: parseInt(expiryMonth),
            year: parseInt(expiryYear),
          },
        },
      },
    }

    await purchase(orderDetails)

    if (isSuccess) {
      navigate('/order-confirmation', { state: { order: data } })
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* Formulário de entrega e pagamento */}
    </form>
  )
}

export default DeliveryPage
