import React from 'react';

import WeekDescriptionRow from './WeekDescriptionRow.js';
import DaySum from './DaySum.js';

const Week = () => {
    return (
        <div className='week flx-cl-rnd'>
            <WeekDescriptionRow />
            <DaySum />
            <DaySum />
            <DaySum />
            <DaySum />
            <DaySum />
            <DaySum />
            <DaySum />
            <div className='total-row flx-rw-end'>
                <div className='total-txt flx-cl-cnt-cnt'>WEEKLY TOTALS</div>
                <div className='total'></div>
            </div>
        </div>
    )
}

export default Week;