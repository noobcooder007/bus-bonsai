import router from '../router'
import { useUserDataStore } from '../store/useUserDataStore'

const useAuthentication = () => {
    const { userData, isAuthenticated, login, logout } = useUserDataStore()
    const loginUser = (user: string, password: string) => {
        login(user, password)
        router.push('home')
    }
    const logoutUser = () => {
        logout()
        router.push('login')
    }
    return {
        user: userData,
        isAuthenticated,
        login: loginUser,
        logout: logoutUser
    }
}

export default useAuthentication