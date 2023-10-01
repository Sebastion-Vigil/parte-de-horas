import React, { useState } from 'react';

import Cell from './Cell.js'

const Table = () => {

    const [values, setValues] = useState(['Text 1', 'Text 2', 'Text 3']);
    console.log(...values);
    return (
        <table style={{ width: '250px' }}>
            <tbody>
                {
                    values.map((value, index) => {
                        const handleChange = value => {
                            // update indicated value w/state copy
                            setValues(values.map((v, i) => index === i ? value : v));
                        };
                        return (
                            <tr key={index}>
                                <td><Cell value={value} onChange={handleChange} /></td>
                            </tr>
                        );
                    })
                }
            </tbody>
        </table>
    );
};

export default Table;