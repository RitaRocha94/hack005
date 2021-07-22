import React from "react"
import Accordion from 'react-bootstrap/Accordion'
import 'bootstrap/dist/css/bootstrap.css';

function FAQ(){
    return(
        <div>
            <h2>Perguntas Frequentes</h2>
           <Accordion defaultActiveKey="0" flush>
  <Accordion.Item eventKey="0">
    <Accordion.Header>O que é o The FoodFund?</Accordion.Header>
    <Accordion.Body>
    É uma rede de distribuição alimentar digital moderna e adaptada para o mundo digital
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Qual o objectivo principal do The FoodFund?</Accordion.Header>
    <Accordion.Body>
    Facilitar a distribuição de alimentos.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="2">
    <Accordion.Header>Está prevista a participação das instituições?</Accordion.Header>
    <Accordion.Body>
    Sim, no futuro gostariamos de trabalhar em conjunto com grandes instituições.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="3">
    <Accordion.Header>Onde e como posso levantar doações?</Accordion.Header>
    <Accordion.Body>
    Através do nosso site no separador de doações ou por email.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="4">
    <Accordion.Header>Onde e como posso doar?</Accordion.Header>
    <Accordion.Body>
    Através do nosso site no separador recolher comida ou por email.
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
        </div>
    )
}
export default FAQ;