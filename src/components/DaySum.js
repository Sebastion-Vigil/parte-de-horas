import React, { useState } from 'react';

import Cell from './Cell.js';


const DaySum = () => {
    const [vals, setVals] = useState(['8:00', '12:00', '1:00', '5:00'])
    const [amPm, setAmPm] = useState(['AM', 'PM', 'PM', 'PM'])
    const [date, setDate] = useState('mm-dd-yyyy')
    const handleDateChange = (value) => {
        setDate(value);
    }
    // useEffect(() => {
    //     console.log('vals: ', vals);
    // }, [vals])
    return (
        <div className='day-summary-row flx-rw-evn-cnt'>
            <Cell value={date} onChange={handleDateChange} />
            {
                vals.map((value, index) => {
                    const handleChange = value => {
                        setVals(vals.map((v,i) => index === i ? value : v));
                    }
                    const xM = amPm[index]
                    const toggleAmPm = () => {
                        console.log('toggle clicked!')
                        console.log(amPm[index])
                        const toggled = amPm[index] === 'AM' ? 'PM' : 'AM';
                        const updatedAmPm = [...amPm];
                        updatedAmPm[index] = toggled;
                        console.log(updatedAmPm)
                        setAmPm(updatedAmPm);
                    }
                    return (
                        <Cell key={index} value={value} onChange={handleChange} amPm={xM} toggle={toggleAmPm} />
                    )
                })
            }
            <Cell value={`TOTAL`} />
        </div>
    )
}

export default DaySum;