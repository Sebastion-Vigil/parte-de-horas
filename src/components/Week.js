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
        </div>
    )
}

export default Week;