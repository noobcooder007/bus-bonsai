import { defineStore } from 'pinia';

export const useUserDataStore = defineStore('user', {
    state: () => {
        const isAuthenticated = sessionStorage.getItem('isAuthenticated')?? false
        return {
            isAuthenticated: isAuthenticated
        }
    },
    actions: {
        login() {
            sessionStorage.setItem('isAuthenticated', 'true')
            this.isAuthenticated = true
        },
        logout() {
            sessionStorage.setItem('isAuthenticated', 'false')
            this.isAuthenticated = false
        }
    }
})
