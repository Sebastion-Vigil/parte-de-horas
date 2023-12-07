import React, { useState, useEffect } from 'react';

const Cell = ({value, onChange, amPm, toggle, placeholder}) => {
    const [mode, setMode] = useState('read');
    const [text, setText] = useState(value ?? '');
    useEffect(() => {
        setText(value);
    }, [value]);
    if (mode === 'edit') {
        // live user input event handler
        const handleInputChange = (e) => {
            console.log('Cell: handleInputChange: ', e.target.value)
            let val = e.target.value;
            // check for input > 4
            if (val.length > 4) val = val.slice(0, 4);
            // remove all non number chars
            val = val.replace(/\D/g, "");
            setText(val);
        };
        const handleSaveClick = () => {
            setMode('read');
            if (onChange) {
                // console.log(text)
                if (text.length < 3) { // check for input < 3
                    alert(
                        "Input must be 3-4, e.g., 12:30 or 7:47"
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