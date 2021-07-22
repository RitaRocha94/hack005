import React from "react"
import { withRouter } from "react-router";
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

    render(){
        return(
            <div>
                {/* {JSON.stringify(this.state.donations)} */}
                <div>
                  {this.state.donations.map((item, index) => (
                      <div key={index}>
                        <p>
                              {({alimento: item.alimentos}, {quantidade: item.number})}
                        </p>  
                        </div>
                       
                  ))}
            </div>
            </div>
        )
    }
}

export default withRouter(PontodeRecolha);