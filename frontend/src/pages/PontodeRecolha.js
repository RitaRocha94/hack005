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
        // this.fetchDonations(id)
    }

    fetchDonations = async (values) => {
        // const res = await fetch(`/api/donations/${values.freguesias}/locations/${values.rua}`) //passar freguesia e ponto de recolha
        const res = await fetch(`/api/donations/${values.freguesias}/locations/${values.rua}`)
        const json = await res.json();
        this.setState({donations: json.donations})
        console.log(this.state.donations)
    }

    render(){
        return(
            <div>
                
            </div>
        )
    }
}

export default withRouter(PontodeRecolha);