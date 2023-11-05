import React, { useState, useEffect } from 'react';

const Cell = ({value, onChange}) => {
    const [mode, setMode] = useState('read');
    const [text, setText] = useState(value ?? '');
    useEffect(() => {
        setText(value);
    }, [value]);
    if (mode === 'edit') {
        const handleInputChange = (e) => {
            // console.log('Cell: handleInputChange: ', e.target.value)
            setText(e.target.value);
        };
        const handleSaveClick = () => {
            setMode('read');
            if (onChange) {
                onChange(text);
            }
        };
        return (
            <div className='cell flx-rw-cnt-cnt'>
                <form className='cell' onSubmit={handleSaveClick}>
                    <input
                      className='input-cell'
                      type="text"
                      value={text}
                      onChange={handleInputChange}
                    />
                    <div className='radio-fields'>
                        <input className='radio' type='radio' value='AM' />
                        <input className='radio' type='radio' value='PM' />
                    </div>
                    <button className='no-display-bttn' type="submit"/>
                </form>
            </div>
        )
    }
    if (mode === 'read') {
        const handleEditClick = () => {
            setMode('edit');
        };
        return (
            <div
              className='cell flx-cl-cnt-cnt' onClick={handleEditClick}>{value}</div>
        )
    }
    return null;
};

export default Cell;