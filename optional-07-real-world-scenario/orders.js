// Gunakan fungsi di bawah ini untuk menghasilkan id yang unik
function generateUniqueId() {
  return `_${Math.random().toString(36).slice(2, 9)}`;
}

// Inisialisasi array orders
let orders = [];

function addOrder(customerName, items) {
  const totalPrice = items.reduce((sum, item) => sum + item.price, 0);
  
  const order = {
    id: generateUniqueId(),
    customerName,
    items: [...items], // membuat copy dari items
    totalPrice,
    status: 'Menunggu'
  };
  
  orders.push(order);
}

function updateOrderStatus(orderId, status) {
  const orderIndex = orders.findIndex(order => order.id === orderId);
  if (orderIndex !== -1) {
    orders[orderIndex] = {
      ...orders[orderIndex],
      status
    };
  }
}

function calculateTotalRevenue() {
  return orders
    .filter(order => order.status === 'Selesai')
    .reduce((total, order) => total + order.totalPrice, 0);
}

function deleteOrder(id) {
  orders = orders.filter(order => order.id !== id);
}

export { orders, addOrder, updateOrderStatus, calculateTotalRevenue, deleteOrder };
