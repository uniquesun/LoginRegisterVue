import http from './http'


export const info = async () => {
    return await http.get('/v1/user')
}

export const update = async (data) => {
    return await http.put('/v1/user',data)
}

