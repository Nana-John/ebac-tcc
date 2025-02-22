import { useFormik } from 'formik'
import { checkoutSchema } from './checkoutValidation'

type CheckoutFormValues = {
  nome: string
  email: string
  telefone: string // <-- Adicionado telefone
  endereco: string
  cidade: string
  cep: string
}

type CheckoutFormProps = {
  onSubmit: (values: CheckoutFormValues) => void
}

export const CheckoutForm: React.FC<CheckoutFormProps> = ({ onSubmit }) => {
  const formik = useFormik<CheckoutFormValues>({
    initialValues: {
      nome: '',
      email: '',
      telefone: '', // <-- Inicializando telefone
      endereco: '',
      cidade: '',
      cep: ''
    },
    validationSchema: checkoutSchema,
    onSubmit
  })

  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        type="text"
        name="nome"
        placeholder="Nome"
        onChange={formik.handleChange}
        value={formik.values.nome}
      />
      {formik.touched.nome && formik.errors.nome && <p>{formik.errors.nome}</p>}

      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email && (
        <p>{formik.errors.email}</p>
      )}

      <input
        type="text"
        name="telefone"
        placeholder="Telefone"
        onChange={formik.handleChange}
        value={formik.values.telefone}
      />
      {formik.touched.telefone && formik.errors.telefone && (
        <p>{formik.errors.telefone}</p>
      )}

      <input
        type="text"
        name="endereco"
        placeholder="Endereço"
        onChange={formik.handleChange}
        value={formik.values.endereco}
      />
      {formik.touched.endereco && formik.errors.endereco && (
        <p>{formik.errors.endereco}</p>
      )}

      <input
        type="text"
        name="cidade"
        placeholder="Cidade"
        onChange={formik.handleChange}
        value={formik.values.cidade}
      />
      {formik.touched.cidade && formik.errors.cidade && (
        <p>{formik.errors.cidade}</p>
      )}

      <input
        type="text"
        name="cep"
        placeholder="CEP"
        onChange={formik.handleChange}
        value={formik.values.cep}
      />
      {formik.touched.cep && formik.errors.cep && <p>{formik.errors.cep}</p>}

      <button type="submit">Finalizar Compra</button>
    </form>
  )
}
