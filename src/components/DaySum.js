import React, { useState, useEffect } from 'react';

import Cell from './Cell.js';

// dayTotal = dayEnd - dayStart - (lunchEnd - lunchStart)

const DaySum = () => {
    const [vals, setVals] = useState(['', '', '', '']) // dayStart | lunchStart | lunchEnd | dayEnd
    const [valPlaceholders] = useState(['8:00', '12:00', '1:00', '5:00'])
    const [amPm, setAmPm] = useState(['AM', 'PM', 'PM', 'PM'])
    const [date, setDate] = useState('mm-dd-yyyy') // needs 2 change!
    const [dayTotal, setDayTotal] = useState(0); // dont forget ur dealing with an int
    const handleDateChange = (v) => {
        setDate(v);
    }
    
    useEffect(() => {
        const tookLunch = () => {
            if (vals.length === 4) { // assuming proper input/timepoint congruency 4 now 
                const dayStart = Number(vals[0]);
                const lunchStart = Number(vals[1]);
                const lunchEnd = Number(vals[2]);
                const dayEnd = Number(vals[3]);
                const daySummaryTotal = dayEnd - dayStart - (lunchEnd - lunchStart);
                setDayTotal(daySummaryTotal);
                console.log('dayStart, lunchStart, lunchEnd, dayEnd: ', dayStart, lunchStart, lunchEnd, dayEnd);
                // useEffect() missing dependency warning if use dayTotal instead of daySummaryTotal below
                console.log('dayTotal: ', daySummaryTotal);
            }
        }
        tookLunch();
    }, [vals])
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
                        const toggled = amPm[index] === 'AM' ? 'PM' : 'AM';
                        const updatedAmPm = [...amPm];
                        updatedAmPm[index] = toggled;
                        setAmPm(updatedAmPm);
                    }
                    const valPlaceholder = valPlaceholders[index];
                    return (
                        <Cell 
                        key={index} 
                        value={value} 
                        onChange={handleChange} 
                        amPm={xM} 
                        toggle={toggleAmPm} 
                        placeholder={valPlaceholder} 
                        />
                    )
                })
            }
            <Cell value={dayTotal} />
        </div>
    )
}

export default DaySum;

// All logic for calculating total hrs worked on a given day will go here
// rough logic:
            // clock in: (
            // clock out: )
            // total starts @ 0
            // wait for dayStart OR lunchStart
            // then wait for dayEnd OR lunchEnd
            // then subtract start from end
            // if no clock-ins OR no clock-outs, then we know cannot calc total