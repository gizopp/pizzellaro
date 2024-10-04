import { Order } from "@/app/types/order.type";
import { getCoookieServer } from "@/lib/cookieServer";
import { api } from "@/services/app";

export const OrdersGet = async (): Promise<Order[] | []> => {
  try {
    const token = getCoookieServer();
    const response = await api.get("/order", {
      headers: { Authorization: `Bearer ${token}` },
    });

    return response.data || [];
  } catch (error) {
    console.error("Error getting orders: " + error);
    return [];
  }
};
