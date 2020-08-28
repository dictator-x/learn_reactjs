import ajax from './ajax.js'

export const reqRegister = (user) => ajax('/register', user, 'POST')
export const reqLogin = (user) => ajax('/login', user, 'POST')
export const reqUpdateUser = (user) => ajax('/update', user, 'POST')
