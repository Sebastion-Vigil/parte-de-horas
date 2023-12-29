import React from 'react';

import Header from './Header.js';
import EmployeeNameRow from './EmployeeNameRow.js';
import Week from './Week.js';

import '../css/timesheet.css';

const Timesheet = () => {
    return (
        <div className='timesheet flx-cl-st-cnt'>
            <Header />
            <EmployeeNameRow />
            <Week />
            <Week />
            <div className='total-row flx-rw-end'>
                <div className='total-txt flx-cl-cnt-cnt'>PAYPERIOD TOTALS:</div>
                <div className='total'>80 | 9 | 89</div>
            </div>
        </div>
    )
}
// the "80 | 9 | 89" ^ in 'total' div is just 2 C, 4 dev/style purposes
export default Timesheet;