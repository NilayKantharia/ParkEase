// static

// import React, { useState, useEffect } from "react";
// // import axios from "axios";
// import { Pie } from "react-chartjs-2";
// import topTicketsData from "./topTicketsData.json";

// export default function TopTickets({ className, style }) {
//   const [noOfTickets, setNoOfTickets] = useState([]);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchDataset = async () => {
//       setNoOfTickets(topTicketsData);
//     };

//     fetchDataset();
//   }, []); // Empty dependency array to run once on mount

//   const topTicketChartData = {
//     labels: noOfTickets.map((ticketType) => ticketType.ticketType),
//     datasets: [
//       {
//         label: "Top Tickets",
//         data: noOfTickets.map((ticketType) => ticketType.ticketCount),
//         backgroundColor: ["#b7d1e2", "#FEC602", "#e8ecef"],
//         borderWidth: 0,
//       },
//     ],
//   };

//   const options3 = {
//     responsive: true,
//     maintainAspectRatio: false, // Allows custom width/height
//     plugins: {
//       legend: {
//         position: "top",
//       },
//       tooltip: {
//         callbacks: {
//           label: function (tooltipItem) {
//             return `${tooltipItem.label}: ${tooltipItem.raw}`;
//           },
//         },
//       },
//     },
//   };

//   return (
//     <>
//       {error && <div>{error}</div>}
//       <div className={className} style={style}>
//         <Pie data={topTicketChartData} options={options3} />
//       </div>
//     </>
//   );
// }



// dyanamic

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Pie } from "react-chartjs-2";

export default function TopTickets({ className, style }) {
  const [noOfTickets, setNoOfTickets] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchDataset = async () => {
      try {
        const response = await axios.get("https://your-api-endpoint.com/tickets"); // Replace with your API endpoint
        setNoOfTickets(response.data);
      } catch (err) {
        setError("Failed to fetch data");
        console.error("Error fetching data:", err);
      }
    };

    fetchDataset();
  }, []); // Empty dependency array to run once on mount

  const topTicketChartData = {
    labels: noOfTickets.map((ticketType) => ticketType.ticketType),
    datasets: [
      {
        label: "Top Tickets",
        data: noOfTickets.map((ticketType) => ticketType.ticketCount),
        backgroundColor: ["#b7d1e2", "#FEC602", "#e8ecef"],
        borderWidth: 0,
      },
    ],
  };

  const options3 = {
    responsive: true,
    maintainAspectRatio: false, // Allows custom width/height
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.label}: ${tooltipItem.raw}`;
          },
        },
      },
    },
  };

  return (
    <>
      {error && <div>{error}</div>}
      <div className={className} style={style}>
        <Pie data={topTicketChartData} options={options3} />
      </div>
    </>
  );
}

