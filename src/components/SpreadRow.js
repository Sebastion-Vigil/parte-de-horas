import React from 'react';

import Cell from './Cell.js';
// a spreadsheet row component
const SpreadRow = () => {
    return (
        <div className='spread-row flx-rw-spc-evn-cnt'>
            {
                Array(7).fill(0).map((_, i) => <Cell key={i} />)
            }
        </div>
    )
}

export default SpreadRow;