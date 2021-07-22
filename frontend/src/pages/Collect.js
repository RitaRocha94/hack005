import { Formik, Field } from "formik";
import React from "react"
import { Link } from "react-router-dom"
import styles from '../styles/Collect.module.css'

class Collect extends React.Component{
        constructor(props){
            super(props);
            this.state = {
                donations: {},
                togglePlaces: false,
                freguesia: '',
                deliveryPlaces: ["Escola", "PSP", "Junta de Freguesia", "Clube Desportivo"] 
            }
        }

        fetchDonations = async (values) => {
            const res = await fetch(`/api/donations/${values.freguesias}/locations/${values.rua}`) //passar freguesia e ponto de recolha
            const json = await res.json();
            this.setState({donations: json.donations})
            console.log(this.state.donations)
        }

    handleToggle = (values) => {
        console.log(values)
        this.setState({togglePlaces: true,
                        freguesia: values.freguesias
        })
    }

        render(){
            let {togglePlaces} = this.state
        return (
            <div>
                <h2 className={styles.Title}>Procure os sitios onde pode recolher</h2>
                <Formik
                initialValues={{ freguesias: ''}}
                    onSubmit={ this.handleToggle}>
                   {
                        ({ values, handleSubmit }) => (
                <form onSubmit={handleSubmit}
                >
                     <Field
                  as="select"
                  name="freguesias" >
                 <option value="empty"></option>
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
                    <button className={styles.Search} type="submit"><img src={'./img/search.png'} alt={'Search'} /></button>
                </form>
                        )}
    
                </Formik>
                {togglePlaces?
                <div>
                     {this.state.deliveryPlaces.map((item, index) => (
                     <div key={index}>
                     <div className={styles.deliveryPlaces}>
                     <Link className={styles.deliveryPlacesItem} 
                     to={`/PontodeRecolha/${this.state.freguesia}/locations/${item}`}>
                         {item}
                        </Link></div>
                </div>
    ))}
                </div> : null}
            </div>
        )
    }
}
export default Collect;