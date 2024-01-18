import React, { useState, useEffect } from 'react';
import { militaryToStandard, standardToMilitary } from '../utils/time-util.js';
import Cell from './Cell.js';

const DaySum = () => {
    const [vals, setVals] = useState(['', '', '', '']) // dayStart | lunchStart | lunchEnd | dayEnd
    const [valPlaceholders] = useState(['8:00', '12:00', '1:00', '5:00'])
    const [amPm, setAmPm] = useState(['AM', 'PM', 'PM', 'PM'])
    const [date, setDate] = useState('mm-dd-yyyy') // needs 2 change!
    const [dayTotal, setDayTotal] = useState('0'); // dont forget ur dealing with an STR
    const handleDateChange = (v) => {
        setDate(v);
    }

    useEffect(() => {

        const calcDayTotal = () => {
            // gotta make '9:30:PM' || '12:30:AM'
            // dayTotal = dayEnd - dayStart - (lunchEnd - lunchStart)
            const dayStart = standardToMilitary(vals[0] + ':' + amPm[0]);
            const lunchStart = standardToMilitary(vals[1] + ':' + amPm[1]);
            const lunchEnd = standardToMilitary(vals[2] + ':' + amPm[2]);
            const dayEnd = standardToMilitary(vals[3] + ':' + amPm[3]);
            // well duh! me problem was trying 2 do math w/":" in string, returning NaN
            console.log('dayStart: ', dayStart, 'lunchStart: ', lunchStart, 'lunchEnd: ', lunchEnd, 'dayEnd: ', dayEnd);
            console.log('respective types: ', typeof dayStart, typeof lunchStart, typeof lunchEnd, typeof dayEnd);
            
        }
        calcDayTotal();
    }, [vals])
    return (
        <div className='day-summary-row flx-rw-evn-cnt'>
            <Cell value={date} onChange={handleDateChange} />
            {
                vals.map((value, index) => {
                    const handleChange = value => {
                        setVals(vals.map((v, i) => index === i ? value : v));
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