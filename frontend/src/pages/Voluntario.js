import React from "react"

function Voluntario(){
    return(
        <div>
            <h2>QUERO SER VOLUNTÁRIO</h2>
            <p>Para ser voluntário na The FoodFund By Sintra, não importa quais são as tuas habilidades, ou competências.
                <br/>
                Se tens uma genuína  vontade em integrar a nossa organização e 
                estar ao serviço basta  enviares email  para thefoodfund@gmail.com e apresentares a tua candidatura.</p>
                <input refs="email" type="text" size="30" placeholder="Email"/>
        </div>
    )
}
export default Voluntario;