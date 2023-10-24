import React from 'react';

const Cell = (props) => {
    return (
        <div className='cell flx-cl-cnt-cnt'>{props.value}</div>
    )
};

export default Cell;