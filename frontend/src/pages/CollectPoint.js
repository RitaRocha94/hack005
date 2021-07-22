import React from "react"
import { withRouter } from "react-router";
import styles from '../styles/CollectPoint.module.css'

class PontodeRecolha extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            donations: []
        }
    }

    componentDidMount(){
        const id = this.props.match.params;
        this.fetchDonations(id)
    }

    fetchDonations = async (values) => {
        const res = await fetch(`/api/donations/freguesias/${values.freguesias}/locations/${values.rua}`)
        const json = await res.json();
         this.setState({donations: json.donations})
    }

    handleDonations = async (id) => {
        const res = await fetch(`/api/donations/${id}`, {
            method: "DELETE"
        })
        if (res.status === 200) {
            console.log("foi apagado")
        }
        await this.fetchDonations(this.props.match.params)
    }

    render(){
        return(
            <div>
                <h2 className={styles.Title}>Veja aqui se existem donações existentes neste ponto de recolha</h2>
                <div>
                  {this.state.donations.map((item, index) => (
                      <div key={index} className={styles.list}>

                        <p>
                            {
                                item.alimentos.map(a =>
                                <p>Quantidade: {a.number} Alimento: {a.name} </p>)
                                
                            }
                        </p>  
                        <button className={styles.buttonCollect} onClick={() =>this.handleDonations(item._id)}>Recolher</button>
                        </div>
                        
                  ))}
            </div>
            </div>
        )
    }
}

export default withRouter(PontodeRecolha);