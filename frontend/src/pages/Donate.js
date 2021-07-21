import React from 'react';
import { Formik, Field, FieldArray } from 'formik'

function Donate() {
  const [value, setValue] = React.useState('');
  return (
    <>
      <h1>Doações</h1>
      <Formik
        initialValues={
          { alimentos: [], 
            freguesias: '',
            rua: ''}}
        
        onSubmit={async (values, { resetForm }) => {
          console.log(values)
          const res = await fetch(`/api/donations/`, {
            method: "POST",
            body: JSON.stringify(values),
            headers: { "Content-Type": "application/json" }
          })
          console.log(res.status)
          if (res.status === 201) {
            const {id} = await res.json()
            resetForm()
          }
        }}
      >
        {
          ({ values, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
            <h2>Escolhe a freguesias</h2>
            <Field
              as="select"
              name="freguesias" >
              <option value="Agualva e Mira-Sintra">Agualva e Mira-Sintra</option>
              <option value="Algueirão - Mem Martins">Algueirão - Mem Martins</option>
              <option value="Cabrela">Cabrela</option>
              <option value="Cacém e São Marcos">Cacém e São Marcos</option>
              <option value="Casal de Cambra">Casal de Cambra</option>
              <option value="Queluz e Belas">Queluz e Belas</option>
              <option value="São João das Lampas e Terrugem">São João das Lampas e Terrugem</option>
              <option value="Almargem do Bispo, Pero Pinheiro e Montelavar">Almargem do Bispo, Pero Pinheiro e Montelavar</option>
              <option value="Santa Maria e São Miguel, São Martinho e São Pedro de Penaferrim">Santa Maria e São Miguel, São Martinho e São Pedro de Penaferrim</option>
            </Field>

            <button type="submit">Pesquisar</button>
            </form>
          )
        }
      </Formik>
    </>
  )
}

export default Donate;