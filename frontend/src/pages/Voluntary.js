import React from 'react';
import emailjs from 'emailjs-com';
import styles from '../styles/Voluntary.module.css'

function Voluntary(){

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_h8rh6dx', e.target, 'user_CS5sLhtJkDj5vpPFLZFSI')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }

    return(
        <div className={styles.VolunteeringPage}>
            <h2 className={styles.Title}>Quero ser voluntário</h2>
            <p>Para ser voluntário na The FoodFund By Sintra, não importa quais são as tuas habilidades, ou competências.
                <br/>
                Se tens uma genuína  vontade em integrar a nossa organização e 
                estar ao serviço basta  enviares email  para thefoodfund@gmail.com através dos campos abaixo e apresentares a tua candidatura.</p>
                <form onSubmit={sendEmail} className={styles.Voluntario}>
                    <div className={styles.Input}>
                    <label>Nome</label>
                    <input type="text" placeholder="Name" name="name" />
                    </div>
                    <div className={styles.Input}>
                    <label>Email</label>
                    <input type="email" placeholder="Email" name="email" />
                    </div>
                    <div className={styles.Input}>
                    <label>Assunto</label>
                    <input type="text" placeholder="Assunto" name="subject" />
                    </div>
                    <div className={styles.Input}>
                    <textarea name="message" />
                    </div>
                    <div className={styles.ButtonSubmit}>
                    <input type="submit" placeholder="Enviar" value="Send" />
                    </div>
                    
                </form>
        </div>
    )
}
export default Voluntary;