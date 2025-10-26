import React,{useState} from "react";
import "./Add.css";
export default function Delete(expense) {
    const [category, setCategory] = useState("all");
    const [date, setDate] = useState("");
    const DeleteExpense=(expenseToDelete)=>{
      
      const updatedExpenses = expenses.filter((expense) => expense !== expenseToDelete);
      setExpenses(updatedExpenses);
    }
  const [expenses,setExpenses] = useState([
    { date: "2024-06-01", amount: 50, category: "Food", description: "Lunch" },
    {
      date: "2024-06-02",
      amount: 20,
      category: "Transport",
      description: "Bus fare",
    },
    {
      date: "2024-06-03",
      amount: 100,
      category: "Shopping",
      description: "Clothes",
    },
    {
      date: "2024-06-04",
      amount: 30,
      category: "Entertainment",
      description: "Movie",
    },
    {
      date: "2024-06-05",
      amount: 80,
      category: "Groceries",
      description: "Weekly shopping",
    },
    {
      date: "2024-06-06",
      amount: 15,
      category: "Coffee",
      description: "Cafe visit",
    },
    {
      date: "2024-06-07",
      amount: 60,
      category: "Utilities",
      description: "Electricity bill",
    },
    {
      date: "2024-06-08",
      amount: 40,
      category: "Dining",
      description: "Dinner out",
    },
  ]);
  return(
  <div className="Add">
    <div className="d-flex flex-column text-center justify-content-center align-items-center p-4"> 
      <h2>Delete Expenses</h2>
      <p>Select expenses to delete from the list below.</p>
    
      <div className="d-flex flex-row ">
        <div className="filter-container">
          <label htmlFor="category">Filter by Category:</label>
          <select
            id="category"
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="all">All</option>
            <option value="food">Food</option>
            <option value="transport">Transport</option>
            <option value="shopping">Shopping</option>
            <option value="entertainment">Entertainment</option>
          </select>
        </div>
        <div className="filter-container">
          <label htmlFor="Date">Filter by Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
      </div>
      <div className="tab">
      <table className="table mt-4 ">
        <thead>
          <tr>
            <th>Date</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {expenses
            .filter(
              (expense) =>
                (category === expense.category.toLowerCase() &&
                  date === expense.date) ||
                (category === "all" && date === "") ||
                (category === "all" && date === expense.date) ||
                (category === expense.category.toLowerCase() && date === "")
            )
            .map((expense, index) => (
              <tr key={index}>
                <td>{expense.date}</td>
                <td>{expense.amount}</td>
                <td>{expense.category}</td>
                <td>{expense.description}</td>
                <td><button onClick={()=>DeleteExpense(expense)} >Delete</button></td>
              </tr>
            ))}
        </tbody>
      </table></div>
      <button style={{width:"30vw"}} onClick={() => {setExpenses([])}}>Delete All Expenses</button>  
    </div>
</div>

) ;
}
