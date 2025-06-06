import { useEffect, useState } from "react";


import './Order.css'
function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(stored);
  }, []);

 

  return (
    <div className="orders" style={{ padding: "1rem" }}>
      <h2>My Orders</h2>


 <div className="order_parent"> 
      {    
      
      orders.map((order) => (
       
        <div
        className="order_box"
          key={order.id}
          style={{
            border: "1px solid #ccc",
            marginBottom: "1rem",
            padding: "1rem",
            borderRadius: "8px"
          }}
        >
          <h4>Order ID: {order.id}</h4>
          <p><strong>Date:</strong> {order.date}</p>
          <p><strong>Total:</strong> ${order.total.toFixed(2)}</p>
          <p><strong>Items:</strong> {order.items.length}</p>

                <ul className="itemss" style={{ listStyle: "none", paddingLeft: 0 }}>
                    {order.items.map((item, idx) => (
                    <li key={idx} style={{ display: "flex", gap: "1rem", alignItems: "center", marginBottom: "0.5rem" }}>
                        <img src={item.image} alt={item.title} width="50" />
                        <div>
                        <p style={{ margin: 0 }}>{item.title}</p>
                        <p style={{ margin: 0 }}>${item.price}</p>
                        </div>
                    </li>
                    ))}
                </ul>
        </div>
   

      ))}
     </div> 



    </div>
  );
}

export default Orders;
