import React, { useState, useEffect } from 'react';

const Cell = ({value, onChange, amPm, toggle}) => {
    const [mode, setMode] = useState('read');
    const [text, setText] = useState(value ?? '');
    useEffect(() => {
        setText(value);
    }, [value]);
    if (mode === 'edit') {
        const handleInputChange = (e) => {
            // console.log('Cell: handleInputChange: ', e.target.value)
            let val = e.target.value;
            val = val.replace(/\D/g, "");
            setText(val);
        };
        const handleSaveClick = () => {
            setMode('read');
            if (onChange) {
                // console.log(text)
                if (text.length < 3) {
                    alert("Format pattern: hh:mm or h:mm, e.g., 12:30 or 7:25")
                    return
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