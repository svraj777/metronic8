import axios from 'axios'
import {AuthModel} from '../models/AuthModel'

const API_URL = process.env.REACT_APP_API_URL || 'api'
console.log(API_URL, 'API_URL')
export const GET_USER_BY_ACCESSTOKEN_URL = `${API_URL}/auth/get-user`
export const LOGIN_URL = `${API_URL}/login`
export const REGISTER_URL = `${API_URL}/auth/register`
export const REQUEST_PASSWORD_URL = `${API_URL}/auth/forgot-password`

// Server should return AuthModel
export function login(email: string, password: string) {
  console.log(email, password, 'email,password')
  return axios.post(LOGIN_URL, {email, password})
}

// Server should return AuthModel
export function register(email: string, firstname: string, lastname: string, password: string) {
  return axios.post<AuthModel>(REGISTER_URL, {
    email,
    firstname,
    lastname,
    password,
  })
}

// Server should return object => { result: boolean } (Is Email in DB)
export function requestPassword(email: string) {
  return axios.post<{result: boolean}>(REQUEST_PASSWORD_URL, {email})
}

export function getUserByToken() {
  // Authorization head should be fulfilled in interceptor.
  // Check common redux folder => setupAxios
  return axios.get(GET_USER_BY_ACCESSTOKEN_URL)
}
