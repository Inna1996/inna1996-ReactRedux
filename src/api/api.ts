import axios from 'axios';


export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: { "API-KEY": "eccf5e5a-9c5a-4d8d-b71d-977792b662a6" }
});


export type ResponseType<D = {}, RC = ResultCodeEnam> = {
    data: D
    messages: Array<string>
    resultCode: RC
}

export enum ResultCodeEnam {
    Succes = 0,
    Error = 1
}

export enum ResultCodeForCaptcha {
    CaptchaIsRequired = 10,
}

