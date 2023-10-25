import React from 'react';

const Cell = ({value, i, onChange}) => {
    const clickCell = () => {
        console.log('index: ', i)
    }
    return (
        <div
          className='cell flx-cl-cnt-cnt'
          onClick={clickCell}
        >
            {value}
        </div>
    )
};

export default Cell;