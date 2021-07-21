import React, { useState } from 'react';
import { Formik, Field, FieldArray } from 'formik'

class Donate extends React.Component{
  constructor(props){
    super(props)
    this.state= {
    togglePlaces: false,
    deliveryPlaces: ["Escola", "PSP", "Junta de Frequesia", "Clube Desportivo"]  
    }
  }

    handleToggle = () =>{
      this.setState({togglePlaces: true})

  }
    render() {
      let {togglePlaces} = this.state;
    return(

    <div>
            <h2>Bem-Vindo</h2>
            <Formik
            initialValues={{ freguesias: ''}}
                onSubmit={this.handleToggle}
                // onSubmit={async (values) => {
                //     console.log(values.freguesias)
                //     const res = await fetch(`/api/donations/${values.freguesias}`)
                //     const json = await res.json();
                //     setDonations(json.donations)
                //     console.log(donations)
                //   }}
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
                    )}
            </Formik>
             {togglePlaces?
           <div>
    {this.state.deliveryPlaces.map((item, index) => (
        <div key={index}>
            <div className='deliveryPlaces'>{item}</div>
        </div>
    ))}
    </div> : null}
        </div> 
    )
    }
}

export default Donate;