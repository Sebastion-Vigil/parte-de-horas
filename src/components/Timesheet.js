import React from 'react';

import Week from './Week.js';

import '../css/timesheet.css';

const Timesheet = () => {
    return (
        <div className='timesheet flx-cl-spc-evn-cnt'>
            <Week />
        </div>
    )
}

export default Timesheet;