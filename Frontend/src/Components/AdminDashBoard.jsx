import React, { useState, useEffect } from "react";
// import {
//   Chart as ChartJS,
//   BarElement,
//   CategoryScale,
//   LinearScale,
//   Tooltip,
//   Legend,
// } from "chart.js";
// import { Bar } from "react-chartjs-2";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { useNavigate } from "react-router-dom";
import TopTickets from "./TopTickets";
import TopStalls from "./TopStalls";
// import { height } from "@fortawesome/free-solid-svg-icons/fa0";
import TopFiveSellingItems from "./TopFiveSellingItems";

// Register the necessary components for Chart.js
// ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [stalls, setStalls] = useState([]);
  const [noOfCustomers, setNoOfCustomers] = useState([]);
  const [currentCustomers, setCurrentCustomers] = useState(0);
  const [noOfEmployees, setNoOfEmployees] = useState(0);
  

  // Fetching top 5 stalls data
  useEffect(() => {
    fetch("http://localhost:8000/analytics/top-5-stalls")
      .then((response) => response.json())
      .then((data) => setStalls(data))
      .catch((error) => console.error("Error fetching stalls data:", error));

      fetch("http://localhost:8000/analytics/current-customers")
      .then((response) => response.json())
      .then((data) => setCurrentCustomers(data[0].current_customers))
      .catch((error) => console.error("Error fetching current customers data:", error));

      fetch("http://localhost:8000/analytics/employee-count")
      .then((response) => response.json())
      .then((data) => setNoOfEmployees(data[0].employee_count))
      .catch((error) => console.error("Error fetching employee count data:", error));

  }, []);

  // Prepare data and options for the chart
  const chartDataOfStalls = {
    labels: stalls.map((stall) => stall.name), // Replace 'name' with the actual field from your data
    datasets: [
      {
        label: "Sales",
        data: stalls.map((stall) => stall.sales), // Replace 'sales' with the actual field from your data
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const stallsOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        title: {
          display: true,
          text: "Stalls",
        },
      },
      y: {
        title: {
          display: true,
          text: "Total Sales",
        },
        beginAtZero: true,
      },
    },
  };

  const customerLabels = noOfCustomers.map((customer) => customer.month);
  const customerData = noOfCustomers.map((customer) => customer.no_of_customers);
  const backgroundColor2 = [
    "#9966FF",
    "#FFCE56",
    "#FF6384",
    "#4BC0C0",
    "#36A2EB",
  ];

  const options2 = {
    indexAxis: "y",
    scales: {
      x: {
        title: {
          display: true,
          text: "No Of Customers",
        },
      },
      y: {
        title: {
          display: true,
          text: "Months",
        },
      },
    },
  };

  const handleViewHrDetails = () => {
    navigate("/hr-info");
  };

  const handleAddNewHr = () => {
    navigate("/add-new-hr");
  };

  const handleEditHr = () => {
    navigate("/edit-hr");
  };

  const handleDeleteHr = () => {
    const confirmed = window.confirm("Are you sure you want to delete?");
    if (confirmed) {
      console.log("HR deleted");
    }
  };

  return (
    <>
      <div className="container">
        <h1>Admin Dashboard</h1>
        {/* Other components and content */}
      </div>

      <div className="row m-0">
        <div className="col-10 mx-auto ">
          <div className="row g-3 mb-3">
            <div className="col-lg-4 col-md-4">
              <div className="card" style={{ height: "15rem" }}>
                <div className="card-body">
                  <h1>Hello, Admin</h1>
                  <p>Ahhh</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="card" style={{ height: "15rem" }}>
                <div className="card-body text-white bg-success">
                  <h1>Total Ticket Sale</h1>
                  <h1>&#x20B9; 5Cr.</h1>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="card" style={{ height: "15rem" }}>
                <div className="card-body">
                  Most Sold Ticket
                  <div>
                    <TopTickets className={"w-100"} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-8 mb-3">
              <TopStalls />
            </div>
            <div className="col-md-4 mb-3">
              <div className="card h-100">
                <div className="card-body"> 
              <h1>No. of Tickets Sold for this month</h1>
              </div>
            </div>
          </div>
            
          </div>
          <div className="row g-3 mb-5">
            <div className="col-md-4">
              <div className="card" style={{ height: "15rem" }}>
                <div className="card-body bg-secondary text-white">No. of Employees
                <h1>{noOfEmployees}</h1>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card" style={{ height: "15rem" }}>
                <div className="card-body text-black bg-warning">
                  <h1>Total Item Sale</h1>
                  <h1>&#x20B9; 5Cr.</h1>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card" style={{ height: "15rem" }}>
                <div className="card-body text-white bg-primary">
                  No of customers present in park

                  <h1>{currentCustomers}</h1>
                </div>
              </div>
            </div>
          </div>

          <div className="row g-3 mb-3">
            <div className="col-12">
              <div className="card" style={{ height: "15rem" }}>
                <TopFiveSellingItems />
              </div>
            </div>
          </div>

          <div className="row g-3 mb-3">
            <div className="col-lg-6 col-md-6">
              <h6 className="text-center">Employees</h6>
              <div className="card" style={{ height: "25rem" }}>
                <div className="card-body">Employee Options</div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <h6 className="text-center">HR</h6>
              <div className="card" style={{ height: "25rem" }}>
                <div className="card-body">
                  <div className="d-grid gap-2">
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={handleViewHrDetails}
                    >
                      View HR Details
                    </button>
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={handleAddNewHr}
                    >
                      Add New HR
                    </button>
                    {/* <button
                      type="button"
                      className="btn btn-warning"
                      onClick={handleEditHr}
                    >
                      Edit HR
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={handleDeleteHr}
                    >
                      Delete HR
                    </button> */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row g-3 mb-5">
            <div className="col-lg-6 col-md-6">
              <h6 className="text-center">Stall Executives</h6>
              <div className="card" style={{ height: "25rem" }}>
                <div className="card-body">Stall Executive Options</div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <h6 className="text-center">Tickets</h6>
              <div className="card" style={{ height: "25rem" }}>
                <div className="card-body">Ticket Options</div>
              </div>
            </div>
          </div>

          <div className="row g-3 my-5">
            <div className="col-lg-4 col-md-4">
              <div className="d-grid gap-2">
                <button type="button" className="btn btn-primary">
                  Show Users
                </button>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="d-grid gap-2">
                <button type="button" className="btn btn-primary">
                  Show Orders
                </button>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="d-grid gap-2">
                <button type="button" className="btn btn-primary">
                  Show Ticket Booking
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
