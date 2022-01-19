import React from "react";
import clientsService from "../services/clientsService";

class clientsComponent extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
            clients:[]
        }
    }

    componentDidMount() {
        clientsService.getclients().then((response) => {
            this.setState({clients: response.data})
        });
    }

    render() {
        return(
            <div>
                <h1 className="text-center"> Clients List</h1>
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <td>clients Id</td>
                        <td>clients First Name</td>
                        <td>clients Last Name</td>
                        <td>clients Email Id</td>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.clients.map(
                            client =>
                                <tr key={client.id}>
                                    <td>{client.id}</td>
                                    <td>{client.firstName}</td>
                                    <td>{client.lastName}</td>
                                    <td>{client.emailId}</td>
                                </tr>
                        )
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default clientsComponent