import CryptoJS from 'crypto-js'
import {defineNuxtPlugin} from "nuxt/app";

export default defineNuxtPlugin(() => {
    return {
        provide: {
            md5Hash: (msg) => CryptoJS.MD5(msg),
        }
    }
})
