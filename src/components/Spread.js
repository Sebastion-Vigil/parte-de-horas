import React from 'react';
// entire spreadsheet for 1 week
import SpreadRow from './SpreadRow.js';

const Spread = () => {
    return (
        <div className='spread flx-cl-spc-evn-cnt'>
            {
                Array(7).fill(0).map((_, i) => <SpreadRow key={i} />)
            }
        </div>
    )
};

export default Spread;