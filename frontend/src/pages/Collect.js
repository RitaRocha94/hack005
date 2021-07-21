import { Formik, Field } from "formik";
import React from "react"
import { useEffect, useState } from "react";

class Collect extends React.Component{
        constructor(props){
            super(props);
            this.state = {
                donations: [],
                togglePlaces: false,
                deliveryPlaces: ["Escola", "PSP", "Junta de Frequesia", "Clube Desportivo"]  
            }
        }
    // async function fetchDonations(values){
    //         const res = await fetch(`/api/donations/${values.freguesias}`)
    //         const json = await res.json();
    //         setDonations(json.donations)
    //         console.log(donations)
    //     }

    handleToggle = () => {
        this.setState({togglePlaces: true})
    }
        
        // useEffect(() => {
            //     fetchDonations("Cabrelas")
            // }, [])
        render(){
            let {togglePlaces} = this.state
        return (
            <div>
                <h2>Bem-Vindo</h2>
                <Formik
                initialValues={{ freguesias: ''}}
                    onSubmit={this.handleToggle}
                    // onSubmit={async (values) => {
                    //     console.log(values.freguesias)
                    //     const res = await fetch(`/api/donations/${values.freguesias}`)
                    //     const json = await res.json();
                    //     this.setState({donations: json.donations})
                    //     console.log(this.state.donations)
                    //   }}
                    >
                   {
                        ({ values, handleSubmit }) => (
                <form onSubmit={handleSubmit}
                >
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
                     <li className='deliveryPlaces'>{item}</li>
                </div>
    ))}
                </div> : null}
                {/* <div>
        {this.state.donations.map((item, index) => (
            <div key={index}>
                <div>{item.rua}</div>
            </div>
        ))}
        </div> */}
            </div>
        )
    }
}
export default Collect;