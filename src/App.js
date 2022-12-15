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
                
                <h1 className= 'mt-3'>Company's Budget Allocation</h1>
            
                <div className = "row mt-3"> 
                    <div className="col-sm"><Budget /></div>
                    <div className="col-sm"><Remaining /></div>
                    <div class="col-sm"><ExpenseTotal /></div>
                    <div class="col-sm" style={{ alignItems:'left',height:60, backgroundColor: 'lightgrey', borderRadius: 5 }}><AddCurrencies /></div>
                    
                </div> 
                <h3 className='mt-3'>Allocation</h3>
                    <ExpenseList />             
                <h3 className='mt-3'>Change allocation</h3>
                    <AllocationForm />
             </div>
        </AppProvider>
    );
};
export default App;
