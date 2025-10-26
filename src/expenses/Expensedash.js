import React from "react";
import "./expensedash.css";

export default function Expensedash() {
  const currentDate = new Date().toLocaleString("en-US", {
    timeZone: "Asia/Kolkata",
    dateStyle: "full",
    timeStyle: "short",
  });
  const expenses = [
{ date: "2024-06-01", amount: 50, category: "Food", description: "Lunch" },
{ date: "2024-06-02", amount: 20, category: "Transport", description: "Bus fare" }, 
  { date: "2024-06-03", amount: 100, category: "Shopping", description: "Clothes" },
  { date: "2024-06-04", amount: 30, category: "Entertainment", description: "Movie" },
    
  ]; 
  return (
    <div className="dash">
      <div className="bb">
        <div className="d-flex text-center">
          <div>Current Time:</div>
          <div>{currentDate}</div>
        </div>
      </div>
      <table className="table"> 
        <thead>
          <tr>
            <th >Date</th>
            <th >Amount</th>
            <th >Category</th>
            <th >Description</th>
          </tr>
        </thead>
        <tbody>
         {expenses.map((expense,index) =>(<tr key={index}>
            <td>{expense.date}</td>
            <td>{expense.amount}</td>
            <td>{expense.category}</td>
            <td>{expense.description}</td>
          </tr>))}
        </tbody>
      </table>
    </div>
  );
}
