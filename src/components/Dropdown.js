// src/components/Dropdown.js
import React from 'react';
import Select from 'react-select';
import { Controller } from 'react-hook-form';

const Dropdown = ({ label, options, id, name, control }) => {
    const generateHash = () => {
        return Math.random().toString(36).substr(2, 9);
    };

    const inputId = id || `dropdown-${generateHash()}`;

    const customStyles = {
        control: (provided) => ({
            ...provided,
            color: 'black',
        }),
        singleValue: (provided) => ({
            ...provided,
            color: 'black',
        }),
        option: (provided, state) => ({
            ...provided,
            color: 'black',
            backgroundColor: state.isSelected ? '#ddd' : '#fff',
        }),
        menu: (provided) => ({
            ...provided,
            color: 'black',
        }),
    };

    return (
        <div style={styles.container}>
            <label style={styles.label} htmlFor={inputId}>{label}</label>
            <Controller
                name={name}
                control={control}
                render={({ field }) => (
                    <Select
                        {...field}
                        id={inputId}
                        options={options}
                        styles={customStyles}
                    />
                )}
            />
        </div>
    );
};

const styles = {
    container: {
        marginBottom: '10px',
    },
    label: {
        display: 'block',
        marginBottom: '5px',
        color: 'black',
    },
};

export default Dropdown;