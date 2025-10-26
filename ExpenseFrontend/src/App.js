
import  {Routes,Route,Navigate} from 'react-router-dom'
import Expense from './Expense';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/Main"/>}/>
      <Route path="/Main/*" element={<Expense/>}/>
    </Routes>
    
  );
}

export default App;
