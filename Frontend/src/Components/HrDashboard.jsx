import React, { useState, useEffect } from "react";
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
import "bootstrap/dist/css/bootstrap.min.css";
import stallsData from "./stalls.json";
import customersData from "./customers.json";
import TopTickets from "./TopTickets";
import EmployeeDetails from "./EmployeeDetails";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement,
  Tooltip,
  Legend
);

export default function HrDashboard() {
  const [stalls, setStalls] = useState([]);
  const [noOfCustomers, setNoOfCustomers] = useState([]);

  const scrollToEmployeeDetails = () => {
    const employeeSection = document.getElementById("employee-details-section");
    if (employeeSection) {
      employeeSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    setStalls(stallsData); // Using static data
    setNoOfCustomers(customersData); // Using static data
  }, []);

  const sortedStalls = stalls.sort((a, b) => b.revenue - a.revenue).slice(0, 5);
  const labels = sortedStalls.map((stall) => stall.stall_name);
  const data = sortedStalls.map((stall) => stall.sales);
  const backgroundColors = [
    "#FF6384",
    "#36A2EB",
    "#FFCE56",
    "#4BC0C0",
    "#9966FF",
  ];

  const chartDataOfStalls = {
    labels: labels,
    datasets: [
      {
        label: "Sales",
        data: data,
        backgroundColor: backgroundColors,
      },
    ],
  };

  const stallsOptions = {
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
      },
    },
  };

  const customerLabels = noOfCustomers.map((customer) => customer.month);
  const customerData = noOfCustomers.map((customer) => customer.value);
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

  return (
    <>
      <div className="row">
        <div className="col-lg-10 col-md-10 col-sm-12 row mx-auto">
          <div className="col-md-10 col-lg-4 mx-sm-0 col-sm-10 mx-md-auto mx-sm-auto mx-auto m-lg-3 mt-sm-4 mb-sm-4 my-3">
            <div className="card border-0 h-100" style={{ height: "100%" }}>
              <div
                className="card-body bg-primary rounded-4 h-100"
                style={{ borderBottomRightRadius: "0" }}
              >
                <h1 className="text-white text-start">Hello Anmol,</h1>
                <h3 className="card-text text-white text-start mt-3">
                  Welcome back! Here's to a productive day ahead.
                </h3>
                <div className="text-end mt-5">
                  <button className="btn btn-dark mt-5" onClick={scrollToEmployeeDetails}>
                    View Employees
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-sm-10 mx-sm-0 col-md-10 m-lg-3 mx-auto mx-md-auto mx-sm-auto">
            <div className="top5Stalls card">
              <div className="card-body">
                Top 5 Stalls
                <Bar
                  data={chartDataOfStalls}
                  options={stallsOptions}
                  width={400}
                  height={150}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-10 row mx-sm-auto mx-auto mx-md-auto mt-3 g-3 mx-sm-0">
          <div className="noOfCustomers card col-lg-4 col-md-4 col-sm-10 mx-md-auto mx-sm-auto mx-auto mx-lg-auto">
            <div className="card-body">
              No Of Customers
              <Bar data={customerChartData} options={options2} width={200} />
            </div>
          </div>
          <div className="topTicket card col-lg-4 col-md-4 col-sm-10 mx-md-auto mx-sm-auto">
            <div className="card-body">
              Top Tickets
              <TopTickets style={{ height: "80%" }} />
            </div>
          </div>
          <div className="totalEmployeeSalary card col-lg-4 col-md-4 col-sm-10 mx-md-auto mx-sm-auto">
            <div className="card-body">
              Head Count
              <div className="mx-sm-0 col-sm-10 mx-md-auto mx-sm-auto mx-auto">
                <div
                  className="noOfEmployee card m-3 mx-auto text-bg-primary mb-3"
                  style={{ height: "9rem" }}
                >
                  <div className="card-body">
                    No Of Employees <h1>100+</h1>
                  </div>
                </div>
                <div
                  className="noOfEmployee card m-3 mx-auto text-bg-primary mb-3"
                  style={{ height: "9rem" }}
                >
                  <div className="card-body">
                    No of Customers present in park <h1>200+</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="employee-details-section">
        <EmployeeDetails />
      </div>
    </>
  );
}
