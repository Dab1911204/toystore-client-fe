
import { get, post } from "@/utils/request";

export const OrderService = {
    getOrder: (url: string) => get<any>(url, { requireAuth: true }),
    createOrder: (data: any) => post<any>("/api/Order", data, { requireAuth: true }),
    updateOrder: (id: string, data: any) => post<any>(`/api/Auth/profile?userId=${id}`, data, { requireAuth: true }),
};