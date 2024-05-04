import { reactive, computed } from 'vue'
import { Balance } from '../models/Balance'

const useBalance = () => {
    let balances: Balance[] = reactive([
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
    const approbedBalances = computed(() => balances.filter((item) => item.approbed))
    const notApprobedBalances = computed(() => balances.filter((item) => !item.approbed))
    const currentBalance = computed(() => balances.at(-1))
    const addBalance = (balance: Balance) => {
        balances.push(balance)
    }
    const loadBalances = ({done}) => {
        setTimeout(() => {
            balances.push(...balances.map((item) => {
                item.id = undefined
                item.total = item.total + 10
                return item
            }))
            if (balances.length === 0) done('empty')
            else done ('ok')
        }, 4000);
    }

    return {
        currentBalance,
        approbedBalances,
        notApprobedBalances,
        addBalance,
        loadBalances
    }
}

export default useBalance