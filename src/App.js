import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AllocationForm from './components/AllocationForm';
import Budget from './components/Budget';
import ExpenseItem from './components/ExpenseItem';
import ExpenseList from './components/ExpenseList';
import ExpenseTotal from './components/ExpenseTotal';
import Remaining from './components/Remaining';
import AddCurrencies from './components/AddCurrencies';

// Add code to import the components
import { AppProvider } from './context/AppContext';
const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                
                <h1 className= 'mt-3'>Company"s Budget Allocation</h1>
            
                <div className = "row mt-3"> 
                    <div className="col-sm"><Budget /></div>
                    <div className="col-sm"><Remaining /></div>
                    <div class="col-sm"><ExpenseTotal /></div>
                    <div class="col-sm"><AddCurrencies /></div>
                    
                </div>             
                <ExpenseItem/> <ExpenseList/> <AllocationForm/>
            </div>
        </AppProvider>
    );
};
export default App;
