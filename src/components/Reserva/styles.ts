import styled from 'styled-components'

export const FormContainer = styled.form`
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  background: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  text-align: center;
`

export const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 15px;
  color: #d62828;
`

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`

export const Select = styled.select`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`

export const SubmitButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #28a745;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #218838;
  }
`
