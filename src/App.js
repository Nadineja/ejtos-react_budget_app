import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AllocationForm from './components/AllocationForm';
import Budget from './components/Budget';
import ExpenseItem from './components/ExpenseItem';
import ExpenseList from './components/ExpenseList';
import ExpenseTotal from './components/ExpenseTotal';
import Remaining from './components/Remaining';

// Add code to import the components
import { AppProvider } from './context/AppContext';
const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <header>
                    <h1>Company"s Budget Allocation</h1>
                </header>
                <div class = "d-flex bd-highlight"> 
                    <div class="p-2 flex-grow-1 bd-highlight"><Budget /></div>
                    <div class="p-2 flex-grow-1 bd-highlight"><Remaining /></div>
                    <div class="p-2 flex-grow-1 bd-highlight"><ExpenseTotal /></div> 
                </div>             
                <ExpenseItem/> <ExpenseList/> <AllocationForm/>
            </div>
        </AppProvider>
    );
};
export default App;
