import React, { useState } from 'react';

import Cell from './Cell.js';


const DaySum = () => {
    const [vals, setVals] = useState(['8:00', '12:00', '1:00', '5:00'])
    return (
        <div className='day-summary-row flx-rw-evn-cnt'>
            <Cell value={`mm--dd--yyyy`} />
            {
                vals.map((value, index) => {
                    const handleChange = value => {
                        console.log('handleChange!', value)
                        setVals(vals.map((v,i) => index === i ? value : v));
                    }
                    return (
                        <Cell key={index} value={value} onChange={handleChange} />
                    )
                })
            }
            <Cell value={`TOTAL`} />
        </div>
    )
}

export default DaySum;