import axios from 'axios'

export const url = `https://sharp-napkin.pockethost.io/api/collections/`

export function getX(path) {
    return axios.get(`${url}/${path}`)
}
export function postX(path, params) {
    return axios.post(`${url}/${path}`, params)
}