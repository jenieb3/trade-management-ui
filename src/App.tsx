import OrderTable from './components/OrderTable'
import './App.css'
import type { Order } from './types/Order'

const orders: Order[] = [
  {
    orderId: 'ORD001',
    symbol: 'AAPL',
    side: 'BUY',
    quantity: 100,
    price: 250.50,
    status: 'NEW'
  },
  {
    orderId: 'ORD002',
    symbol: 'MSFT',
    side: 'SELL',
    quantity: 50,
    price: 420.00,
    status: 'FILLED'
  }
]
function App() {
  return (
    <main>
      <h1>Trade Management System</h1>
      <p>Order Management Dashboard</p>
      
        <OrderTable orders={orders} />
     
    </main>
      
  )
}

export default App
