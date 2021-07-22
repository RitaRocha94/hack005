import React from "react"
import { withRouter } from "react-router";
import { Formik, Field } from 'formik'

class PontodeRecolha extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            donations: []
        }
    }

    componentDidMount(){
        const id = this.props.match.params;
        console.log("id")
        console.log(id)
        this.fetchDonations(id)
    }

    fetchDonations = async (values) => {
        console.log(values.freguesias)
        console.log(values.rua)
        // const res = await fetch(`/api/donations/${values.freguesias}/locations/${values.rua}`) //passar freguesia e ponto de recolha
        //antes estava isto /api/donations/freguesias/${values.freguesias}/locations/${values.rua}
        const res = await fetch(`/api/donations/freguesias/${values.freguesias}/locations/${values.rua}`)
        const json = await res.json();

        // this.setState(item => ({
        //     donations: item.donations.map(i => {
              
        //   })

         this.setState({donations: json.donations})
        console.log(this.state.donations)
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
                {/* {JSON.stringify(this.state.donations)} */}
                <div>
                  {this.state.donations.map((item, index) => (
                      <div key={index}>
                        <p>
                            {
                                item.alimentos.map(a => 
                                // <p>Doação {index}</p>
                                <p>Quantidade: {a.number} Alimento: {a.name} </p>)
                                
                            }
                        </p>  
                        <button onClick={() => this.handleDonations(item._id)}>Recolher</button>
                        {/* <Field type="number"
                          min={0}
                          name={`alimentos.${index}.number`}
                          placeholder="Quantidade (unidade)" /> */}
                        </div>
                        
                  ))}
            </div>
            </div>
        )
    }
}

export default withRouter(PontodeRecolha);