import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./BookOrder.css";

const BookOrder = () => {
  const [selectedStall, setSelectedStall] = useState("");
  const [stalls, setStalls] = useState([]);
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch stalls from backend
    const fetchStalls = async () => {
      try {
        const response = await axios.get("http://localhost:8000/stalls");
        console.log("Stalls:", response.data); // for debugging
        setStalls(response.data);
      } catch (error) {
        console.error("Error fetching stalls:", error);
      }
    };

    fetchStalls();
  }, []);

  useEffect(() => {
    // Fetch items based on the selected stall
    const fetchItems = async () => {
      try {
        const url = selectedStall
          ? `http://localhost:8000/items/stall/${selectedStall}`
          : "http://localhost:8000/items";
        const response = await axios.get(url);
        console.log("Items:", response.data); // for debugging
        setItems(response.data);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };

    fetchItems();
  }, [selectedStall]);

  const handleStallChange = (e) => {
    setSelectedStall(e.target.value);
  };

  const handleMyOrdersClick = () => {
    navigate("/my-orders");
  };

  const handleAddToCart = (item, quantity) => {
    setCart((prevCart) => [...prevCart, { ...item, quantity, stallId: selectedStall }]);
  };

  const handleRemoveFromCart = (itemId) => {
    setCart((prevCart) => prevCart.filter(item => item.item_id !== itemId));
  };

  const handleGoToCart = () => {
    navigate("/cart", { state: { cart } });
  };

  return (
    <>
      <div className="container mt-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <button className="btn btn-primary" onClick={handleMyOrdersClick}>
            Order History
          </button>
          <select
            className="form-select"
            onChange={handleStallChange}
            value={selectedStall}
          >
            <option value="">Select Stall</option>
            {stalls.map((stall) => (
              <option key={stall.stall_id} value={stall.stall_id}>
                {stall.stall_name}
              </option>
            ))}
          </select>
          <div
            className="d-flex align-items-center cart"
            onClick={handleGoToCart}
            style={{ cursor: "pointer" }}
          >
            <FontAwesomeIcon icon={faShoppingCart} className="me-2" />
            Cart ({cart.length})
          </div>
        </div>
        <div className="row">
          {items
            .filter(item => !selectedStall || item.stall_id === selectedStall)
            .map((item) => (
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
                      type="number"
                      min="1"
                      defaultValue="1"
                      className="form-control mb-2"
                      id={`quantity-${item.item_id}`}
                    />
                    <button
                      className="btn btn-primary"
                      onClick={() =>
                        handleAddToCart(
                          item,
                          document.getElementById(`quantity-${item.item_id}`).value
                        )
                      }
                    >
                      Add to Cart
                    </button>
                    <button
                      className="btn btn-danger mt-2"
                      onClick={() => handleRemoveFromCart(item.item_id)}
                    >
                      Remove from Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default BookOrder;
