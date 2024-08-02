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
import { Bar, Pie } from "react-chartjs-2";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import HrDashboard from "..Components/HrDashboard";
import TopTickets from "..Components/TopTickets";
import TopStalls from "..Components/TopStallls";

export default function AdminDashboard() {
  return (
    <>
      <div className="row m-0">
        <div className="col-10 mx-auto">
          <div className="row g-3 mb-3">
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
                <div className="card-body text-black bg-warning">
                  <h1>Total Item Sale</h1>
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

          <div className="row g-3 mb-3">
            <div className="col-12">
              <div className="card" style={{ height: "15rem" }}>
                <div className="card-body">
                  Top 5 Selling Items
                </div>
              </div>
            </div>
          </div>

          <div className="row g-3 mb-5">
            <div className="col-4">
              <div className="card" style={{ height: "15rem" }}>
                <div className="card-body">
                  No. of Employees
                </div>
              </div>
            </div>
            <div className="col-8">
              <div className="card" style={{ height: "15rem" }}>
                <div className="card-body">
                  Top 5 Stalls
                  <div>
                    <TopStalls />
                    </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row g-3 mb-3">
            <div className="col-lg-6 col-md-6">
              <h6 className="text-center">Employees</h6>
              <div className="card" style={{ height: "25rem" }}>
                <div className="card-body">
                  Employee Options
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <h6 className="text-center">HR</h6>
              <div className="card" style={{ height: "25rem" }}>
                <div className="card-body">
                  HR Options
                </div>
              </div>
            </div>
          </div>

          <div className="row g-3 mb-5">
            <div className="col-lg-6 col-md-6">
              <h6 className="text-center">Stall Executives</h6>
              <div className="card" style={{ height: "25rem" }}>
                <div className="card-body">
                  Stall Executive Options
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <h6 className="text-center">Tickets</h6>
              <div className="card" style={{ height: "25rem" }}>
                <div className="card-body">
                  Ticket Options
                </div>
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