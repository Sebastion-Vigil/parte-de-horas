import React, { useState } from 'react';

import Cell from './Cell.js';

import '../css/timesheet.css';

const Timesheet = () => {
    const [values, setValues] = useState(['1', '2', '3', '4', '5'])
    return (
        <div className='timesheet'>
            {
                values.map((value, index) => {
                    const handleChange = value => {
                        setValues(values.map((v, i) => index === i ? value : v));
                    };
                    return (
                        <Cell key={index} value={value} onChange={handleChange} />
                    )
                })
            }
        </div>
    )
}

export default Timesheet;