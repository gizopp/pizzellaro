import { OrdersGet } from "../api/orders/OrdersGet";
import { Orders } from "../components/orders";

export default async function Dashboard() {
  const orders = await OrdersGet();

  return <Orders orders={orders} />;
}
