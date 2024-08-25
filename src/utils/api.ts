import axios from "axios";

const api = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_SERVER_URL}/api`,
    headers: {
        'Content-Type': 'application/json',
    }
})

export default api;