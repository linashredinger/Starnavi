import axios from 'axios'

export function getHousesApi() {
    return axios.get('http://demo4452328.mockable.io/properties', {
        crossdomain: true,
        headers: {'Access-Control-Allow-Origin': '*'},
    }).then(response => {
        return response.data.data
    })
}

export function getTemplatesApi() {
    return axios.get('http://demo4452328.mockable.io/templates', {
        crossdomain: true,
        headers: {'Access-Control-Allow-Origin': '*'},
    }).then(response => {
        return response.data
    })
}
