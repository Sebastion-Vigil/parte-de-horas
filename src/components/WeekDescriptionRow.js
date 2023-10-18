import React, { useState } from 'react';

const WeekDescriptionRow = () => {
    const descriptions = useState(['Date', 'Start Time', 'Break Start', 'Break End', 'End Time', 'Total/Reg/OT'])
    return (
        <div className='description-row'>
            {
                descriptions.map((v, i) => {
                    return (
                        <div key={i} className='description'>v</div>
                    )
                })
            }
        </div>
    )
}

export default WeekDescriptionRow;
// the v in {} threw f()s not valid as react child err
// <div key={i} className='description'>{v}</div>