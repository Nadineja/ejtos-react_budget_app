import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {AllocationForm} from './src/components';
import {Budget} from './src/components';
import {ExpenseItem} from './src/components';
import {ExpenseList} from './src/components';
import {ExpenseTotal} from './src/components';
import {Remaining} from '.src/components'

// Add code to import the components
import { AppProvider } from './context/AppContext';
const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                {AllocationForm, Budget, ExpenseItem,ExpenseList, ExpenseTotal, Remaining}
            </div>
        </AppProvider>
    );
};
export default App;
