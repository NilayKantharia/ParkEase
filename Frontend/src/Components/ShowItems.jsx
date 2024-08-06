import React, { useState, useEffect } from "react";
import axios from "axios";

const ShowItems = ({ stallId }) => {
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    // Fetch existing items from the backend
    const fetchItems = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/stalls/${stallId}/items`);
        setItems(response.data);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };

    fetchItems();
  }, [stallId]);

  const handleAddItem = async (e) => {
    e.preventDefault();
    try {
      const newItem = {
        item_name: itemName,
        description,
        price,
        image,
        stall_id: stallId,
      };
      await axios.post("http://localhost:8000/items", newItem);
      setItems((prevItems) => [...prevItems, newItem]);
      // Clear form
      setItemName("");
      setDescription("");
      setPrice("");
      setImage("");
      setShowForm(false);
    } catch (error) {
      console.error("Error adding item:", error);
    }
  };

  return (
    <div className="container mt-4">
      <h3>Items</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>{item.item_name}</td>
              <td>{item.description}</td>
              <td>{item.price}</td>
              <td>
                <img src={item.image} alt={item.item_name} style={{ width: "50px" }} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="btn btn-secondary mb-3" onClick={() => setShowForm(!showForm)}>
        {showForm ? "Cancel" : "Add New Item"}
      </button>
      {showForm && (
        <form onSubmit={handleAddItem}>
          <div className="mb-3">
            <label className="form-label">Item Name</label>
            <input
              type="text"
              className="form-control"
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea
              className="form-control"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="mb-3">
            <label className="form-label">Price</label>
            <input
              type="number"
              className="form-control"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Image URL</label>
            <input
              type="text"
              className="form-control"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Add Item
          </button>
        </form>
      )}
    </div>
  );
};

export default ShowItems;
