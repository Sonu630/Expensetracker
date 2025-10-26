import React from 'react'
import "./Add.css"
 export default function Add() {
  return (
    <div className='Add'>
    <div className="addcontainer d-flex flex-column justify-content-center align-items-center">
 <input type="date" className='date b' placeholder='Date'/>
  <input type="number" className='amount b' placeholder='Amount' min={0}/>
<select className='category b'>
  <option value="" disabled selected>Select Category</option>
  <option value="food">Food</option>
  <option value="transport">Transport</option>
  <option value="shopping">Shopping</option>
  <option value="entertainment">Entertainment</option>
</select>
  <input type="text" className='description b' placeholder='Description'/>
  <button className='addbtnx'>Add Expense</button>

    </div>
    </div>
  )
}