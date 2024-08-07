// TopFiveSellingItems.jsx
import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import axios from 'axios';

// Register necessary components from Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const TopFiveSellingItems = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/analytics/top-selling-items');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching top selling items:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const chartData = {
    labels: data.map(item => item.item_name),
    datasets: [
      {
        label: 'Total Sales',
        data: data.map(item => parseInt(item.total_sales, 10)),
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: false,
        text: 'Top 5 Selling Items',
      },
    },
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
    maintainAspectRatio: false,
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="card-body">
     Top 5 Selling Items
      <div style={{ position: "relative", height: "300px", width: "100%" }}>
      <Bar data={chartData} options={options}/>
      </div>
    </div>
  );
};

export default TopFiveSellingItems;
