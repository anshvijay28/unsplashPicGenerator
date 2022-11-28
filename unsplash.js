import axios from "axios";



export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID WhxQK1DrdohZ1Tq22TSgY5e-j_4NGh5T7q_aaGE17wQ'
    }
});

