import React, { useState } from 'react';

import ExampleCell from './Cell.js'

const ExampleTable = () => {

    const [values, setValues] = useState(['1', '2', '3', '4', '5', '6']);
    // console.log(...values);
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
                                <td><ExampleCell value={value} onChange={handleChange} /></td>
                            </tr>
                        );
                    })
                }
            </tbody>
        </table>
    );
};

export default ExampleTable;