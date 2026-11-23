export interface Order {
  orderId: string
  symbol: string
  side: 'BUY' | 'SELL'
  quantity: number
  price: number
  status: 'NEW' | 'PARTIALLY_FILLED' | 'FILLED' | 'CANCELLED'
}