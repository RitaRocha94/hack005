import { Formik, Field } from "formik";
import React from "react"
import { useEffect, useState } from "react";

function Collect() {
    const [donations, setDonations] = useState([])

    async function fetchDonations(){
        const res = await fetch('/')
        const resBody = await res.json();
        setDonations(resBody.donations)
    }

    useEffect(() => {
    }, [])

    return (
        <div>
            <h2>Bem-Vindo</h2>
            <Formik
            initialValues={
                { freguesia: ''}}

                onChange={async (values) => {
                    const res = await fetch(`/api/donations/:${values}`)
                    const json = await res.json();
                    setDonations(json.donations)
                  }}
                />
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

            <section>
                {
                    donations.map(donation => (
                        <div
                            key={donation._id}
                        >
                            {donation}
                        </div>
                    ))
                }
            </section>
        </div>
    )
}
export default Collect;