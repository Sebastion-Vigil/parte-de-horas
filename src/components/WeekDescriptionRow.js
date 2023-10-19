import React, { useState } from 'react';

const WeekDescriptionRow = () => {
    const descriptions = useState(['Date', 'Start Time', 'Break Start', 'Break End', 'End Time', 'Total / Reg / OT'])
    return (
        <div className='desc-row flx-rw-spc-btw-cnt'>
            {
                descriptions[0].map((v, i) => {
                    return (
                        <div key={i} className='desc-cell flx-cl-cnt-cnt'>{v}</div>
                    )
                })
            }
        </div>
    )
}

export default WeekDescriptionRow;
// the v in {} threw f()s not valid as react child err
// <div key={i} className='description'>{v}</div>
// descriptions is an obj w/len 2; 0th item is arr of vals
// now w/[0] in front of it the {v} doesn't throw err