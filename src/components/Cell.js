import React, { useState, useEffect } from 'react';

const Cell = ({value, onChange}) => {
    const [mode, setMode] = useState('read');
    const [text, setText] = useState(value ?? '');
    const [amPm, setAmPm] = useState('AM')
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
        const toggleAmPm = () => {
            const toggled = amPm === 'AM' ? 'PM' : 'AM';
            setAmPm(toggled);
        }
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
                        <div className='am-pm-selector flx-cl-cnt-cnt' onClick={toggleAmPm}>
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