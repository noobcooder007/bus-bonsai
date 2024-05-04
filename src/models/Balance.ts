export interface Balance {
    id?: number,
    dayOfWeek: String,
    week: number,
    total: number,
    driver: number,
    approbed: boolean,
    approbedBy?: number,
    createdAt: Date,
    isActive: boolean
}