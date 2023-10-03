import React, { useState, useEffect } from 'react'

const itemStyle = {
    padding: '2px',
    border: '1px solid silver',
    fontFamily: 'Arial',
    fontSize: '13px',
    display: 'flex',
    backgroundColor: 'slategrey'
};

const textStyle = {
    ...itemStyle,
    padding: '5px 4px',
};

const inputStyle = {
    padding: '0',
    flex: '1',
    fontFamily: 'Arial',
    fontSize: '13px',
    color: 'lightgreen',
    backgroundColor: 'darkslategrey'
};

const buttonStyle = {
    flex: 'none'
};

const Cell = ({ value, onChange }) => {
    const [mode, setMode] = useState('read');
    const [text, setText] = useState(value ?? '');
    useEffect(() => {
        setText(value);
    }, [value]); // <--- when value is changed text state is changed too
    if (mode === 'edit') {
        const handleInputChange = (e) => {
            setText(e.target.value);
        };
        const handleSaveClick = () => {
            setMode('read');
            if (onChange) {
                onChange(text);
            }
        };
        return (
            <div style={itemStyle} className='item'>
                <input style={inputStyle} type="text" value={text}
                    onChange={handleInputChange} />
                <button style={buttonStyle} onClick={handleSaveClick}>Ok</button>
            </div>
        );
    }
    if (mode === 'read') {
        const handleEditClick = () => {
            setMode('edit');
        };
        return (
            <div style={textStyle} onClick={handleEditClick}>{text}</div>
        );
    }
    return null;
};

export default Cell;