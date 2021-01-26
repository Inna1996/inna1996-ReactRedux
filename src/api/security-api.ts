import axios from 'axios';
import { PhotosType, ProfileType, UsersType } from '../types/types';
import { instance } from './api';



type getCaptchaUrlResponse = {
    url: string
}
export const securityAPI = {
    getCaptchaUrl() {
        return instance.get<getCaptchaUrlResponse>('security/get-captcha-url')
    }
}