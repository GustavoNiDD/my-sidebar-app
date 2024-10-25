// src/components/TextInput.js
import React from 'react';

const TextInput = ({ label, placeholder, id, name, register, styleType, errors }) => {
    const generateHash = () => {
        return Math.random().toString(36).substr(2, 9);
    };

    const inputId = id || `textInput-${generateHash()}`;

    const getStyle = (type) => {
        return styles[type] || {};
    };

    const containerStyle = getStyle(styleType).container || styles.container;
    const labelStyle = getStyle(styleType).label || styles.label;
    const inputStyle = getStyle(styleType).input || styles.input;

    return (
        <div style={containerStyle}>
            <label style={labelStyle} htmlFor={inputId}>{label}</label>
            <input
                style={inputStyle}
                type="text"
                id={inputId}
                name={name}
                placeholder={placeholder}
                {...register(name)}
            />
            {errors && errors[name] && <span>{errors[name].message}</span>}
        </div>
    );
};

const styles = {
    container: {
        marginBottom: '10px',
        display: 'flex',
        alignItems: 'center',
    },
    label: {
        marginRight: '10px',
        flexShrink: 0,
    },
    input: {
        flex: 1,
        padding: '8px',
        borderRadius: '4px',
        border: '1px solid #ccc',
    },
    customStyle1: {
        container: {
            marginBottom: '20px',
        },
        label: {
            color: 'red',
        },
        input: {
            borderColor: 'blue',
        },
    },
    customStyle2: {
        container: {
            marginBottom: '15px',
        },
        label: {
            color: 'green',
        },
        input: {
            borderColor: 'orange',
        },
    },
};

export default TextInput;