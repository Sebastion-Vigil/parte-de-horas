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
            <div className='cell flx-cl-cnt-cnt'>
                <form className='input-form flx-rw-st-cnt' onSubmit={handleSaveClick}>
                    <input
                      className='input-cell'
                      type="text"
                      value={text}
                      onChange={handleInputChange}
                    />
                    <form className='radio-form'>
                        <input type='radio' value={`AM`} className='radio-bttn' />
                        <input type='radio' value={`PM`} className='radio-bttn' />
                    </form>
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