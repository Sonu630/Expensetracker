import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Expensedash from "./expenses/Expensedash";
import Add from "./expenses/Add";
import Filter from "./expenses/Filter";
import Delete from "./expenses/Delete"; 
import Head from "./expenses/Head";
export default function Expense() {
  return (
    <div>
      <Head />
      <Routes>
        <Route path="/" element={<Navigate to="Expenseview" />} />
        <Route path="Expenseview" element={<Expensedash />} />
        <Route path="Addexpense" element={<Add/>} />
        <Route path="Filterexpense" element={<Filter/>} />
        <Route path="Deleteexpense" element={<Delete/>} />
      </Routes>
    </div>
  );
}
