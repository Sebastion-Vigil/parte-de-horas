import React, { useState, useEffect } from 'react';

import Cell from './Cell.js';

// dayTotal = dayEnd - dayStart - (lunchEnd - lunchStart)

const DaySum = () => {
    const [vals, setVals] = useState(['', '', '', '']) // dayStart | lunchStart | lunchEnd | dayEnd
    const [valPlaceholders] = useState(['8:00', '12:00', '1:00', '5:00'])
    const [amPm, setAmPm] = useState(['AM', 'PM', 'PM', 'PM'])
    const [date, setDate] = useState('mm-dd-yyyy')
    const [dayTotal, setDayTotal] = useState(0); // dont forget ur dealing with an int
    const handleDateChange = (v) => {
        setDate(v);
    } // will I need useEffect? yes indeedy->most recent state accessible here yo!
    
    useEffect(() => {
        const tookLunch = () => {
            if (!(vals[0] && vals[2]) || !(vals[1] && vals[3])) console.log('unable to calc total!');
            if (vals[1] && vals[2]) console.log("took lunch!");
            if (vals.length === 4) { // assuming proper input/timepoint congruency 4 now 
                const dayStart = Number(vals[0]);
                const lunchStart = Number(vals[1]);
                const lunchEnd = Number(vals[2]);
                const dayEnd = Number(vals[3]);
                const daySummaryTotal = dayEnd - dayStart - (lunchEnd - lunchStart);
                setDayTotal(daySummaryTotal);
                console.log('dayStart, lunchStart, lunchEnd, dayEnd: ', dayStart, lunchStart, lunchEnd, dayEnd);
                console.log('dayTotal: (not yet converted to military, raw format) : ', daySummaryTotal);
            }
            // similar logic to 'lunchTotal'...
            // clock in: (
            // clock out: )
            // total starts @ 0
            // wait for dayStart OR lunchStart
            // then wait for dayEnd OR lunchEnd
            // then subtract start from end
            // if no clock-ins OR no clock-outs, then we know cannot calc total
        }
        const calcDayTotal = () => {
            vals.forEach((v) => {
                if (v) console.log('truthy!: ', v); //annotate each line pass/no-pass
                // Time Point: dayStart lunchStart lunchEnd dayEnd
                //      Index:    0         1          2       3
                ////////////////////////// TEST CASES /////////////
                //                ''        ''         ''      '' 
                //              8:00        ''         ''      ''
                //                ''      12:00        ''      ''
                //                ''        ''        1:00     ''
                //                ''        ''         ''     5:00
                //              8:00      12:00       1:00    5:00
                //              8:00      12:00       1:00     ''
                //              8:00      12:00        ''     5:00
                //              8:00        ''        1:00    5:00
                //                ''      12:00       1:00    5:00
                //                ''      12:00        ''     5:00
                //                ''      12:00       5:00     '' 
                // assume complete input (all 4 cells) @ 1st 2 wrap head around
                // after, here are some acceptable inputs where not all 4 cells filled:
                //              (anything w/clock-in & clock-out)
                //              8:00        ''        1:00     ''
                //                ''        ''        1:00    5:00
                //              8:00        ''         ''     5:00
                //              8:00      12:00        ''      ''      
            });
            console.log('vals: ', vals);
        }
        calcDayTotal();
        tookLunch();
        // console.log('useEffect vals: ', vals);
    }, [vals])
    return (
        <div className='day-summary-row flx-rw-evn-cnt'>
            <Cell value={date} onChange={handleDateChange} />
            {
                vals.map((value, index) => {
                    const handleChange = value => {
                        // console.log("DaySum vals: ", vals)
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
            <Cell value={`TOTAL`} />
        </div>
    )
}

export default DaySum;

// All logic for calculating total hrs worked on a given day will go here