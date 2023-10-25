import React from 'react';

const Cell = ({value, onChange}) => {
    return (
        <div
          className='cell flx-cl-cnt-cnt'>{value}</div>
    )
};

export default Cell;