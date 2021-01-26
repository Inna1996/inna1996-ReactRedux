import { instance, ResponseType, ResultCodeForCaptcha, ResultCodeEnam } from './api';


type MeResponseType = {
    id: number, email: string, login: string
}
type LoginResponseType = {
    userId: number
}
export const authAPI = {
    me() {
        return instance.get<ResponseType<MeResponseType>>('auth/me')
            .then(response => response.data)
    },
    login(email: string, password: string, rememberMe: boolean = false, captcha: string | null = null) {
        return instance.post<ResponseType<LoginResponseType, ResultCodeForCaptcha | ResultCodeEnam>>('auth/login', { email, password, rememberMe, captcha })
            .then(response => response.data)
    },
    logout() {
        return instance.delete<ResponseType>('auth/login')
            .then(response => response.data)
    },
}
