import type { Order } from '../types/Order'

interface OrderTableProps {
  orders: Order[]
}

function OrderTable({ orders }: OrderTableProps) {
  return (
    <section>
      <h2>Order Book</h2>

      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Symbol</th>
            <th>Side</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((order) => (
            <tr key={order.orderId}>
              <td>{order.orderId}</td>
              <td>{order.symbol}</td>
              <td>{order.side}</td>
              <td>{order.quantity}</td>
              <td>{order.price}</td>
              <td>{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}

export default OrderTable