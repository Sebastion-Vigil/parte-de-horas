import React from 'react';

import WeekDescriptionRow from './WeekDescriptionRow.js';
import DaySum from './DaySum.js';

const Week = () => {
    return (
        <div className='week'>
            <WeekDescriptionRow />
            <DaySum />
            <DaySum />
            <DaySum />
            <DaySum />
            <DaySum />
            <DaySum />
            <DaySum />
            <div className='week-total-row flx-rw-flx-end'>
                <div className='week-total-txt flx-cl-cnt-cnt'>WEEKLY TOTALS</div>
                <div className='week-total'></div>
            </div>
        </div>
    )
}

export default Week;