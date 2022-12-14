import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { currency } = useContext(AppContext);

    return (
        <div className='alert alert-secondary'>
            Currency ($Dollar)
            <select name="currency" id="currency">
            <option value="$ Dollar">$ Dollar</option>
            <option value="£ Pound">£ Pound</option>
            <option value="€ Euro">€ Euro</option>
            <option value="₹ Ruppee">₹ Ruppee</option>
            </select>
        </div>
    );
};

export default Currency;