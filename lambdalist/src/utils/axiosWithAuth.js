import axios from "./node_modules/axios"
export const axiosWithAuth = () => {
    const token = window.localStorage.getItem('token')
    return axios.create({
        baseURL: 'https://lambdawunderlist.herokuapp.com/',
        headers: {
            Authorization: token
        }
    })
} 