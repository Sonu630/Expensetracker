import React from "react";
import { Link } from "react-router-dom";
import "./head.css";
export default function Head() {
  return (
    <div className=" head d-flex justify-content-between align-items-center p-2">
      <Link className="headitem" to="/Main/Addexpense">Add Expenses</Link>
      <Link className="headitem" to="/Main/Expenseview">View Expenses</Link>
      <Link className="headitem" to="/Main/Filterexpense">Filter Expenses</Link>
      <Link className="headitem" to="/Main/Deleteexpense">Delete Expenses</Link>
      <div className="d-flex flex-column me-3 text-center" style={{color:"white"}}>
        <h3>Name</h3>
        <div style={{opacity:"0.8"}}>*********</div>
      </div>
    </div>
  );
}