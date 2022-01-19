import axios from "axios";

const CLIENTS_REST_API_URL = 'http://localhost:8080/api/Clients';

class clientsService{
    getclients(){
        axios.get(CLIENTS_REST_API_URL)
    }
}

export default new clientsService();