import React from 'react';

const MySelect = ({options, defaultValue, value, onChange}) => {
    return (
        <select onChange={e => onChange(e.target.value)}
                defaultValue={value}
                className='mb-6 bg-gray-800 border-gray-800 border-2 rounded-xl p-2'>
            <option disabled value="">{defaultValue}</option>
            {options.map(option =>
                <option key={option.value} value={option.value}>{option.name}</option>
            )}
        </select>
    );
};

export default MySelect;