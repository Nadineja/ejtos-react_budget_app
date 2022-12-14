import React, { useState } from 'react';
import Budget from './Budget'


function BudgetUpdate(){
    const[count, setCount] = useState(0)
    return(
        <div>
        <button onClick={() => setCount(count + 10)}>
            +
        </button>
        <button onClick={() => setCount(count - 10)}>-</button>
        </div>
    )
}

export default BudgetUpdate;