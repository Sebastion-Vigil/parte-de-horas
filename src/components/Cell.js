import React, { useState, useEffect } from 'react';

const Cell = ({ value, onChange, amPm, toggle, placeholder }) => {
    const [mode, setMode] = useState('read');
    const [text, setText] = useState(value ?? '');
    useEffect(() => {
        setText(value);
    }, [value]);
    if (mode === 'edit') {
        // live user input event handler
        const handleInputChange = (e) => {
            // console.log('Cell: handleInputChange: ', e.target.value)
            let val = e.target.value;
            // remove all non number chars
            val = val.replace(/\D/g, "");
            if ((val.length === 4 && (Number(val[0]) > 1 || Number(val[1]) > 2 || Number(val[2]) > 5)) || (val.length === 3 && Number(val[1]) > 5)) {
                val = "";
                alert(
                    "Standard time only, e.g., 12:30 or 7:47."
                )
            }
            // check for input > 4
            if (val.length > 4) val = val.slice(0, 4);
            setText(val);
        };
        const handleSaveClick = () => {
            setMode('read');
            if (onChange) {
                // console.log(text)
                if (text.length < 3) { // check for input < 3
                    alert(
                        "Minimum 3-4 digits long, e.g., 12:30 or 7:47."
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

// All logic for sanitizing input and checking it for invalid user entries will go here
// This makes sense as Cell.js is two components in one: input cell & output cell
// Don't like how the f()s are spread across the file, though I get why they are put where they are
// Before, when building React apps using class syntax, I would always have the class methods (f()s)
// starting near the top of the file, just under class state, with the markup always being last
// but in this we have f() and markup mixed up together. 