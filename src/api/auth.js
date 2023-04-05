import http from './http'

export const register = async (data) => {
    return await http.post('/v1/register', data)
}

export const login = async (data) => {
    return await http.post('/v1/login', data)
}


export const logout = async () => {
    return await http.delete('/v1/logout')
}

