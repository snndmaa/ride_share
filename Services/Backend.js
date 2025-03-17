import AsyncStorage from '@react-native-async-storage/async-storage'
import { BASE_URL } from '../util'

class BackendService{
    
    constructor (){
        this.baseURL = `http://${BASE_URL}`
    }

    async makeRequest (endpoint, method='GET', data=null, token=null){
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `bearer ${token}`,
        }

        const requestOptions = {
            method,
            headers,
            body: data ? JSON.stringify(data) : null,
        }

        try{
            const response = await fetch(`${this.baseURL}/${endpoint}`, requestOptions)
            const data     = await response.json()

            return data
        }
        catch (error){
            throw (error)
        }
    }

    // Auth
    async register (data) {
        return await this.makeRequest('user/auth/register', 'POST', data)
    }

    async sendSMS (data) {
        return await this.makeRequest('user/auth/sms', 'POST', data)
    }

    async verify (data) {
        return await this.makeRequest('user/auth/verify', 'POST', data)
    }
    
    async login (data) {
        return await this.makeRequest('user/auth/login', 'POST', data)
    }

    // User
    async getDriver (id, token) {
        return await this.makeRequest(`driver/${id}`, 'GET', null, token)
    }

    // Profile
    async getProfile (id, token) {
        return await this.makeRequest(`driver/profile/${id}`, 'GET', null, token)
    }

    async addProfile (data, token) {
        return await this.makeRequest('driver/profile/', 'POST', data, token)
    } 

    async updateProfile (id, data, token) {
        return await this.makeRequest(`driver/profile/update/${id}`, 'PUT', data, token)
    }
}

export default new BackendService()