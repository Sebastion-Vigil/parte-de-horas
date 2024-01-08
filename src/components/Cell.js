import React, { useState, useEffect } from 'react';

import { interceptInputEvent } from '../utils/input-event-util';

const Cell = ({ value, onChange, amPm, toggle, placeholder }) => {
    const [mode, setMode] = useState('read');
    const [text, setText] = useState(value ?? '');
    useEffect(() => {
        setText(value);
    }, [value]);
    if (mode === 'edit') { 
        const handleInputChange = (e) => { // live user input event handler
            let val = e.target.value; // mutable store for input event
            let interceptedInput = interceptInputEvent(val);
            setText(interceptedInput);
        };
        const handleSaveClick = () => {
            setMode('read'); // restructure & avoid using alert()
            if (onChange) {
                // console.log(text)
                if (text.length < 3) { // check for input < 3
                    alert(
                        "Minimum 3-4 digits long, e.g., 7:47 or 12:34."
                    );
                    return;
                }
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
                        placeholder={placeholder}
                    />
                    <div className='am-pm-section flx-cl-cnt-cnt'>
                        <div className='am-pm-selector flx-cl-cnt-cnt' onClick={toggle}>
                            {amPm}
                        </div>
                    </div>
                    <button className='no-display-bttn' type="submit" />
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