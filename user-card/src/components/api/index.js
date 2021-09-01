import axios from 'axios';

let apiUrl = 'https://api.github.com/users/';

export function getUserData(username) {
    return axios.get(`${apiUrl}${username}`);
}

export function getFollowersData(username) {
    return axios.get(`${apiUrl}${username}/followers`)
}

export function getFollowingData(username) {
    return axios.get(`${apiUrl}${username}/following`)
}

const api = {
    getUserData,
    getFollowersData,
    getFollowingData
}

export default api;