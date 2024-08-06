import React, { useState, useEffect } from "react";
import axios from "axios";
import AddItem from "./ShowItems";

const StallExecutiveDashboard = ({ stallId }) => {
  const [orders, setOrders] = useState([]);
  const [items, setItems] = useState([]);
  const [showAddItem, setShowAddItem] = useState(false);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/orders/${stallId}`);
        setOrders(response.data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    const fetchItems = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/items/${stallId}`);
        setItems(response.data);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };

    fetchOrders();
    fetchItems();
  }, [stallId]);

  const handleOrderAction = async (orderId, action) => {
    try {
      await axios.post(`http://localhost:8000/orders/${orderId}/${action}`);
      setOrders((prevOrders) => prevOrders.filter(order => order.id !== orderId));
    } catch (error) {
      console.error("Error updating order:", error);
    }
  };

  const handleItemPrepared = async (itemId) => {
    try {
      await axios.put(`http://localhost:8000/items/${itemId}`, { status: 'prepared' }); // Adjust endpoint and payload as necessary
      setItems((prevItems) =>
        prevItems.map(item => 
          item.item_id === itemId ? { ...item, prepared: true } : item
        )
      );
    } catch (error) {
      console.error("Error updating item status:", error);
    }
  };

  const handleItemAdded = () => {
    // Refresh items after adding a new item
    const fetchItems = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/items/${stallId}`);
        setItems(response.data);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };
    fetchItems();
  };

  return (
    <div className="container mt-4">
      <h2>Stall Executive Dashboard</h2>
      <button className="btn btn-primary mb-4" onClick={() => setShowAddItem(!showAddItem)}>
        {showAddItem ? "Hide Add Item Form" : "Show Add Item Form"}
      </button>
      {showAddItem && <AddItem stallId={stallId} onItemAdded={handleItemAdded} />}
      <div className="row">
        <div className="col-md-4">
          <h3>Order Requests</h3>
          {orders.length === 0 ? (
            <p>No new orders.</p>
          ) : (
            orders.map((order) => (
              <div className="card mb-3" key={order.id}>
                <div className="card-body">
                  <h5 className="card-title">Order ID: {order.id}</h5>
                  <ul>
                    {order.items.map((item) => (
                      <li key={item.id}>
                        {item.name} - {item.quantity} x &#x20B9;{item.price}
                      </li>
                    ))}
                  </ul>
                  <button
                    className="btn btn-success me-2"
                    onClick={() => handleOrderAction(order.id, "accept")}
                  >
                    Accept
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleOrderAction(order.id, "reject")}
                  >
                    Reject
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="col-md-8">
          <h3>Items</h3>
          <div className="row">
            {items.map((item) => (
              <div className="col-md-4 mb-4" key={item.item_id}>
                <div className="card">
                  <div
                    className="card-img-top"
                    style={{
                      backgroundImage: `url(${item.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      height: '200px',
                      width: '100%',
                      borderRadius: '0.25rem'
                    }}
                  ></div>
                  <div className="card-body">
                    <h5 className="card-title">{item.item_name}</h5>
                    <p className="card-text">{item.description}</p>
                    <p className="card-text">Price: &#x20B9;{item.price}</p>
                    <input
                      type="checkbox"
                      checked={item.prepared}
                      onChange={() => handleItemPrepared(item.item_id)}
                    />{" "}
                    Prepared
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StallExecutiveDashboard;











// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import AddItem from "./ShowItems";

// const StallExecutiveDashboard = ({ stallId }) => {
//   const [orders, setOrders] = useState([]);
//   const [items, setItems] = useState([]);
//   const [showAddItem, setShowAddItem] = useState(false);

//   useEffect(() => {
//     const fetchOrders = async () => {
//       try {
//         const response = await axios.get(`http://localhost:8000/orders/${stallId}`);
//         setOrders(response.data);
//       } catch (error) {
//         console.error("Error fetching orders:", error);
//       }
//     };

//     const fetchItems = async () => {
//       try {
//         const response = await axios.get(`http://localhost:8000/items/${stallId}`);
//         setItems(response.data);
//       } catch (error) {
//         console.error("Error fetching items:", error);
//       }
//     };

//     fetchOrders();
//     fetchItems();
//   }, [stallId]);

//   const handleOrderAction = async (orderId, action) => {
//     try {
//       await axios.post(`http://localhost:8000/orders/${orderId}/${action}`);
//       setOrders((prevOrders) => prevOrders.filter(order => order.id !== orderId));
//     } catch (error) {
//       console.error("Error updating order:", error);
//     }
//   };

//   const handleItemAdded = () => {
//     // Refresh items after adding a new item
//     const fetchItems = async () => {
//       try {
//         const response = await axios.get(`http://localhost:8000/items/${stallId}`);
//         setItems(response.data);
//       } catch (error) {
//         console.error("Error fetching items:", error);
//       }
//     };
//     fetchItems();
//   };

//   return (
//     <div className="container mt-4">
//       <h2>Stall Executive Dashboard</h2>
//       <button className="btn btn-primary mb-4" onClick={() => setShowAddItem(!showAddItem)}>
//         {showAddItem ? "Hide Add Item Form" : "Show Add Item Form"}
//       </button>
//       {showAddItem && <AddItem stallId={stallId} onItemAdded={handleItemAdded} />}
//       <div className="row">
//         <div className="col-md-4">
//           <h3>Order Requests</h3>
//           {orders.length === 0 ? (
//             <p>No new orders.</p>
//           ) : (
//             orders.map((order) => (
//               <div className="card mb-3" key={order.id}>
//                 <div className="card-body">
//                   <h5 className="card-title">Order ID: {order.id}</h5>
//                   <ul>
//                     {order.items.map((item) => (
//                       <li key={item.id}>
//                         {item.name} - {item.quantity} x &#x20B9;{item.price}
//                       </li>
//                     ))}
//                   </ul>
//                   <button
//                     className="btn btn-success me-2"
//                     onClick={() => handleOrderAction(order.id, "accept")}
//                   >
//                     Accept
//                   </button>
//                   <button
//                     className="btn btn-danger"
//                     onClick={() => handleOrderAction(order.id, "reject")}
//                   >
//                     Reject
//                   </button>
//                 </div>
//               </div>
//             ))
//           )}
//         </div>
//         <div className="col-md-8">
//           <h3>Items</h3>
//           <div className="row">
//             {items.map((item) => (
//               <div className="col-md-4 mb-4" key={item.item_id}>
//                 <div className="card">
//                   <div
//                     className="card-img-top"
//                     style={{
//                       backgroundImage: `url(${item.image})`,
//                       backgroundSize: 'cover',
//                       backgroundPosition: 'center',
//                       height: '200px',
//                       width: '100%',
//                       borderRadius: '0.25rem'
//                     }}
//                   ></div>
//                   <div className="card-body">
//                     <h5 className="card-title">{item.item_name}</h5>
//                     <p className="card-text">{item.description}</p>
//                     <p className="card-text">Price: &#x20B9;{item.price}</p>
//                     <input
//                       type="checkbox"
//                       checked={item.prepared}
//                       onChange={() => handleItemPrepared(item.item_id)}
//                     />{" "}
//                     Prepared
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StallExecutiveDashboard;
