
import axios  from "axios";

const API = 'http://127.0.0.1:8000/usuario'

export const Resister_users = query => axios.post(`${API}`, query)