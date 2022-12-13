import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget } = useContext(AppContext);
     const handleSetBudget = (event) => {
		dispatch({
			type: 'SET_BUDGET',
			payload: event.target.value,
		});

    return (
        <div className='alert alert-secondary'>
            <span>Budget: £{budget}</span>
            <input
						required='required'
						type='number'
						id='budget'
						value={budget}
                        step='10'
                        size = '6'
                        style={{ marginLeft: '2rem' , size: 6}}
						onChange={handleSetBudget}
                        >
						</input>
        </div>
    );
};

export default Budget;
