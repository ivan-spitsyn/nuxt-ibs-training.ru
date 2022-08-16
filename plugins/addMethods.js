import md5 from 'crypto-js/md5'
export default defineNuxtPlugin(() => {
    return {
        provide: {
            md5Hash: (msg) => md5(msg),
        }
    }
})
