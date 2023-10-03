import React from 'react';

import Week from '../components/Week.js';

import '../css/timesheet.css';

const Timesheet = () => {
    return (
        <div className='timesheet flx-cl-spc-evn-cnt'>
            Timesheet
            <Week />
            <Week />
        </div>
    )
}

export default Timesheet;