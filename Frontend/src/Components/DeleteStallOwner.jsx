import React, { useState, useEffect } from "react";
import axios from "axios";

function StallExecutives() {
  const [stallOwners, setStallOwners] = useState([]);

  useEffect(() => {
    // Fetch stall owners from the backend
    axios
      .get("http://localhost:8000/stall-owners")
      .then((response) => setStallOwners(response.data))
      .catch((error) => console.error("Error fetching stall owners:", error));
  }, []);

  const handleDeleteOwner = async (ownerId) => {
    const confirmed = window.confirm("Are you sure you want to delete this owner?");
    if (confirmed) {
      try {
        await axios.delete(`http://localhost:8000/stall-owners/${ownerId}`);
        setStallOwners((prevOwners) => prevOwners.filter((owner) => owner._id !== ownerId));
        alert("Stall owner deleted successfully");
      } catch (error) {
        console.error("Error deleting stall owner:", error);
        alert("Failed to delete stall owner");
      }
    }
  };

  return (
    <div>
      <h1>Stall Executives</h1>
      <ul>
        {stallOwners.map((owner) => (
          <li key={owner._id}>
            {owner.name} - {owner.email}
            <button onClick={() => handleDeleteOwner(owner._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StallExecutives;
