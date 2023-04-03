import axios from 'axios'

const baseURL = 'https://camp-courses.api.kreosoft.space/'

const instance = axios.create({
    baseURL : baseURL
});

function login(data) {
    console.log("api")

    return instance.post('login', data)
    .then(response => {
        if (response.status === 200) {
            console.log('login')
        }
    })
    .catch(error => {
        console.log(error.response.data.error)
    })
}

export const campusCoursesApi = {
    login: login
}