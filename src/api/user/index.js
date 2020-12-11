import axios from '../axios'
import md5 from 'md5'
export  const phoneLogin = (phone, password) =>
    axios.get(  `/login/cellphone?phone=${phone}&md5_password=${md5(password)}`)

export const emailLogin = (email, password) => axios.get(`/login?email=${email}&md5_password=${md5(password)}`)

export const refreshLogin = () => axios.get('/login/refresh')

export const sent = (phone) => axios.get(`/captcha/sent?phone=${phone}`)

export const verify = (phone, code) => axios.get(`/captcha/verify?phone=${phone}&captcha=${code}`)

export const reg = (phone, password, captcha, nickname) =>
    axios.get(`/register/cellphone?phone=${phone}&password=${password}&captcha=${captcha}&nickname=${nickname}`)

export const checkPhone = (phone) => axios.get(`/cellphone/existence/check?phone=${phone}`)

export const initNickname = (nickname) => axios.get(`/activate/init/profile?nickname=${nickname}`)

export const rebind = (phone, oldcaptcha, captcha) =>
    axios.get(`/rebind?phone=${phone}&oldcaptcha=${oldcaptcha}&captcha=${captcha}`)

export const logout = () => axios.get(`/logout`)

export const logStat = () => axios.get(`/login/status`)