import { reactive } from 'vue'
import { Balance } from '../models/Balance'

const useBalance = () => {
    const balances: Array<Balance> = reactive([
        {
            id: 1,
            dayOfWeek: 'Lunes',
            week: 1,
            total: 800,
            driver: 1,
            approbed: true,
            approbedBy: 1,
            createdAt: new Date(),
            isActive: true
        },
        {
            id: 2,
            dayOfWeek: 'Martes',
            week: 1,
            total: 720,
            driver: 1,
            approbed: true,
            approbedBy: 1,
            createdAt: new Date(),
            isActive: true
        },
        {
            id: 3,
            dayOfWeek: 'Miercoles',
            week: 1,
            total: 900,
            driver: 1,
            approbed: true,
            approbedBy: 1,
            createdAt: new Date(),
            isActive: true
        },
        {
            id: 4,
            dayOfWeek: 'Jueves',
            week: 1,
            total: 1100,
            driver: 1,
            approbed: false,
            approbedBy: 1,
            createdAt: new Date(),
            isActive: true
        },
        {
            id: 5,
            dayOfWeek: 'Viernes',
            week: 1,
            total: 600,
            driver: 1,
            approbed: false,
            approbedBy: 1,
            createdAt: new Date(),
            isActive: true
        },
    ])
    const approbedBalances = balances.filter((item) => item.approbed)
    const notApprobedBalances = balances.filter((item) => !item.approbed)
    
    return {
        balances,
        approbedBalances,
        notApprobedBalances
    }
}

export default useBalance