import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import TopTickets from "./TopTickets";
import TopStalls from "./TopStalls";
import TopFiveSellingItems from "./TopFiveSellingItems";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement,
  Tooltip,
  Legend
);

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [stalls, setStalls] = useState([]);
  const [noOfCustomers, setNoOfCustomers] = useState([]);
  const [currentCustomers, setCurrentCustomers] = useState(0);
  const [noOfEmployees, setNoOfEmployees] = useState(0);
  const [totalTicketSale, setTotalTicketSale] = useState(0);
  const [ticketsSoldThisMonth, setTicketsSoldThisMonth] = useState(0);
  const [totalItemSale, setTotalItemSale] = useState(0);
  const name = Cookies.get("name");

  useEffect(() => {
    // Fetch top 5 stalls data
    fetch("http://localhost:8000/analytics/top-5-stalls")
      .then((response) => response.json())
      .then((data) => setStalls(data))
      .catch((error) => console.error("Error fetching stalls data:", error));

    // Fetch current customers data
    fetch("http://localhost:8000/analytics/current-customers")
      .then((response) => response.json())
      .then((data) => setCurrentCustomers(data[0].current_customers))
      .catch((error) =>
        console.error("Error fetching current customers data:", error)
      );

    // Fetch employee count data
    fetch("http://localhost:8000/analytics/employee-count")
      .then((response) => response.json())
      .then((data) => setNoOfEmployees(data[0].employee_count))
      .catch((error) =>
        console.error("Error fetching employee count data:", error)
      );

    // Fetch total ticket sale data
    fetch("http://localhost:8000/analytics/total-ticket-sale")
      .then((response) => response.json())
      .then((data) => setTotalTicketSale(data[0].total_ticket_sale))
      .catch((error) =>
        console.error("Error fetching total ticket sale data:", error)
      );

    // Fetch tickets sold this month data
    fetch("http://localhost:8000/analytics/tickets-sold-this-month")
      .then((response) => response.json())
      .then((data) => setTicketsSoldThisMonth(data[0].total_ticket_sales))
      .catch((error) =>
        console.error("Error fetching tickets sold this month data:", error)
      );

    // Fetch total item sale data
    fetch("http://localhost:8000/analytics/items-this-month")
      .then((response) => response.json())
      .then((data) => setTotalItemSale(data[0].total_item_sale))
      .catch((error) =>
        console.error("Error fetching total item sale data:", error)
      );

    fetch("http://localhost:8000/analytics/last-5-months")
      .then((response) => response.json())
      .then((data) => setNoOfCustomers(data))
      .catch((error) => console.error("Error fetching customers data:", error));
  }, []);

  const customerLabels = noOfCustomers.map((customer) => customer.month);
  const customerData = noOfCustomers.map(
    (customer) => customer.no_of_customers
  );
  const backgroundColor2 = [
    "#9966FF",
    "#FFCE56",
    "#FF6384",
    "#4BC0C0",
    "#36A2EB",
  ];

  const options2 = {
    responsive: true,
    indexAxis: "y",
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: false,
        text: "No Of Customers",
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "No Of Customers",
          beginAtZero: true,
        },
      },
      y: {
        title: {
          display: true,
          text: "Months",
          beginAtZero: true,
        },
      },
    },
    maintainAspectRation: false,
  };

  const customerChartData = {
    labels: customerLabels,
    datasets: [
      {
        label: "Customers",
        data: customerData,
        backgroundColor: backgroundColor2,
      },
    ],
  };

  const handleViewStallExecutives = () => {
    navigate("/stall-executives");
  };

  const handleAddNewStallExecutive = () => {
    navigate("/add-new-stall-executive");
  };

  const handleEditStallExecutive = () => {
    navigate("/edit-stall-executive");
  };

  const handleDeleteStallExecutive = () => {
    const confirmed = window.confirm("Are you sure you want to delete?");
    if (confirmed) {
      console.log("Stall Executive deleted");
    }
  };

  return (
    <>
      <div className="container mt-4 mb-4 p-1 text-center text-light bg-primary" style={{borderRadius:"3px 3px 10px 10px"}}>
        <h1>Admin Dashboard</h1>
      </div>

      <div className="row m-0">
        <div className="col-10 mx-auto">
          <div className="row g-3 mb-3">
            <div className="col-lg-4 col-md-4">
              <div
                className="card text-white bg-primary"
                style={{ height: "15rem" }}
              >
                <div className="card-body">
                  <h1>Hello {name},</h1>
                  <h4>
                    The backbone of any organization is made up of dedicated
                    administrative professionals.
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="card bg-success" style={{ height: "15rem" }}>
                <div className="card-body text-white text-center">
                  <h1>Total Ticket Sale</h1>
                  <h1>&#x20B9; {totalTicketSale}</h1>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="card" style={{ height: "15rem" }}>
                <div className="card-body text-center">
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
              <div className="card h-100 bg-dark text-white">
                <div className="card-body">
                  <h1>Tickets Sold for this month</h1>
                  <h1>&#x20B9; {ticketsSoldThisMonth}</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="row g-3 mb-5">
            <div className="col-md-4">
              <div className="card" style={{ height: "15rem" }}>
                <div className="card-body bg-secondary text-white">
                  <h1>No. of Employees</h1>
                  <h1>{noOfEmployees}</h1>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card" style={{ height: "15rem" }}>
                <div className="card-body text-black bg-warning">
                  <h1>Total item sales this month</h1>
                  <h1>&#x20B9; {totalItemSale}</h1>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card" style={{ height: "15rem" }}>
                <div className="card-body text-white bg-primary">
                  <h1>No of customers present in park</h1>
                  <h1>{currentCustomers}</h1>
                </div>
              </div>
            </div>
          </div>

          <div className="row g-3 mb-3">
            <div className="col-md-6">
              <div className="card" style={{ height: "22rem" }}>
                <TopFiveSellingItems />
              </div>
            </div>
            <div className="col-md-6">
              <div className="card" style={{ height: "22rem" }}>
                <div className="card-body">
                  No Of Customers
                  <div
                    style={{
                      position: "relative",
                      height: "300px",
                      width: "100%",
                    }}
                  >
                    <Bar data={customerChartData} options={options2} />
                  </div>
                </div>
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
                <div className="card-body ">
                  <div className="d-grid gap-2 text-center ">
                    HR options
                    <button
                      type="button"
                      className="btn btn-primary"
                      // onClick={handleViewHrDetails}
                    >
                      View HR Details
                    </button>
                    <button
                      type="button"
                      className="btn btn-secondary"
                      // onClick={handleAddNewHr}
                    >
                      Add New HR
                    </button>
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
                {/* <div className="card-body">Stall Executive Options</div> */}
                <div className="d-grid gap-2 m-3 text-center">
                Stall Executive Options
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={handleViewStallExecutives}
                    >
                      View Stalls
                    </button>
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={handleAddNewStallExecutive}
                    >
                      Add New Stall
                    </button>
                  </div>
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
