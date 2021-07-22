import React from 'react';
import { Formik, Field } from 'formik'
import styles from '../styles/Donate.module.css'

class Donate extends React.Component{
  constructor(props){
    super(props)
    this.state= {
    togglePlaces: false,
    deliveryPlaces: ["Escola", "PSP", "Junta de Freguesia", "Clube Desportivo"]  
    }
  }

    handleToggle = () =>{
      this.setState({togglePlaces: true})

  }
    render() {
      let {togglePlaces} = this.state;
    return(
        <div>
            <h2 className={styles.Title}>Procure os sitios onde pode doar</h2>
            <Formik
            initialValues={{ freguesias: ''}}
                onSubmit={this.handleToggle}
                >
               {
                    ({ values, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
            <h3>Escolha a freguesia</h3>
            <div className={styles.ComponentFreguesias}>
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
            </div>
            </form>
                    )}
            </Formik>
             {togglePlaces?
           <div className={styles.deliveryPlaces}>
                  {this.state.deliveryPlaces.map((item, index) => (
                      <div key={index}>
                          <p className={styles.deliveryPlacesItem}>
                              {item}</p>  
                        </div>
                       
                  ))}
            </div> : null} 
           
            
      </div>
    )
    }
}

export default Donate;