import axios from 'axios'

const instance = axios.create({
    baseURL: "http://localhost:7542/2.0/",
    withCredentials: true,
})

export const Api = {
    login(email: string, password: string, rememberMe: boolean) {
        return instance.post<ResponsType>('auth/login', {email, password, rememberMe})
    },
    logOut() {
        return instance.delete('auth/me')
    },
    loginRegistration<LoginRegistrationType>(email: string, password: string){
        return instance.post('auth/register', {email, password})
    },
    SetNewPassword(password:string){
        return instance.post<NewPasswordType>('auth/set-new-password',{password})
    }
}

export type ResponsType = {
    _id: string;
    email: string;
    name: string;
    avatar?: string;
    publicCardPacksCount: number; // количество колод

    created: Date;
    updated: Date;
    isAdmin: boolean;
    verified: boolean; // подтвердил ли почту
    rememberMe: boolean;

    error?: string;
}

export type NewPasswordType ={
    info : string
    error:string
}

export type LoginRegistrationType ={
    error? : string
}