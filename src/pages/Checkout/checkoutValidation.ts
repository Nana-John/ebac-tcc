import * as Yup from 'yup'

export const checkoutSchema = Yup.object().shape({
  nome: Yup.string().required('Nome é obrigatório'),
  email: Yup.string().email('Email inválido').required('Email é obrigatório'),
  endereco: Yup.string().required('Endereço é obrigatório'),
  cidade: Yup.string().required('Cidade é obrigatória'),
  cep: Yup.string()
    .matches(/^\d{5}-\d{3}$/, 'Formato inválido (ex: 12345-678)')
    .required('CEP é obrigatório'),
})
