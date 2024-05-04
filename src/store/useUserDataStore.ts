import { defineStore } from 'pinia';

export const useUserDataStore = defineStore('user', {
    state: () => {
        const isAuthenticated = sessionStorage.getItem('isAuthenticated')?? false
        const userData = {
            fullname: 'Javier Herrera',
            username: 'JH',
            email: 'javier.herrera@example.com',
            numberOfBus: 14
        }
        return {
            userData,
            isAuthenticated
        }
    },
    actions: {
        login(user: string, password: string) {
            sessionStorage.setItem('isAuthenticated', 'true')
            this.isAuthenticated = true
        },
        logout() {
            sessionStorage.setItem('isAuthenticated', 'false')
            this.isAuthenticated = false
        }
    }
})
