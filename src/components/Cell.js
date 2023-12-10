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
            let maxLen;
            let val = e.target.value;
            // remove all non number chars
            val = val.replace(/\D/g, "");
            // prevent 0 as 1st digit
            if (val.length === 1 && Number(val) < 1) val = "";
            if (val.length === 1 && Number(val) > 1) {
                maxLen = 3;
            } else {
                maxLen = 4;
            }
            // check for input > 4
            if (val.length > 4) val = val.slice(0, 4);
            console.log("maxLen: ", maxLen);
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


// working checks in place thus far:
//   -> input len > 4 (the only check in handleSaveClick)
//   -> input len < 3
//   -> invalid time formats, e.g., 13:00, 30:00, 12:60, 1:70
// works but needs improvement:
//   -> fugly boolean line of code
//   -> prefer to not use alert (handleSaveClick alert still ok, for now)
//   -> user input completely reset; y not only strip offending char?
// ideas:
//   -> Disallow 0 as 1st char
//   -> determine early on whether input len 3 or 4
//   -> easier to immediately strip invalid input on the spot
//   -> if max len 4:
//      -> 1st char cannot be > 1
//      -> 2nd char cannot be > 2
//      -> 3rd char (min 10s) cannot be > 5
//      -> 4th char can be 1-9
//   -> if max len 3:
//      -> 1st char can be 1-9
//      -> 2nd char (min 10s) cannot be > 5
//      -> 3rd char can be 1-9
//   -> Determine max len of input str:
//      -> 1st char determines max len
//      -> if 1st char > 1:
//         -> max len 3
//      -> else:
//         -> max len 4