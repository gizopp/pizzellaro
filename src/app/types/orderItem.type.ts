import { Order } from "./order.type";
import { Product } from "./product.type";

export interface OrderItem {
  id: string;
  amount: number;
  description: string;
  created_at: string;
  order_id: string;
  product_id: string;
  quantity: number;
  product: Product;
  order: Order;
}
