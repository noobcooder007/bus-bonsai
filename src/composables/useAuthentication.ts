import router from '../router'
import { useUserDataStore } from '../store/useUserDataStore'

const useAuthentication = () => {
    debugger
    const userData = useUserDataStore()
    const login = () => {
        userData.login()
        router.push('home')
    }
    const logout = () => {
        userData.logout()
        router.push('login')
    }
    return {
        isAuthenticated: userData.isAuthenticated,
        login,
        logout
    }
}

export default useAuthentication