// src/components/StarRating.js
import React, { useState } from 'react';
import ReactStars from 'react-rating-stars-component';

const StarRating = ({ label, id, name, setValue, register }) => {
    const [rating, setRating] = useState(0);

    const generateHash = () => {
        return Math.random().toString(36).substr(2, 9);
    };

    const inputId = id || `starRating-${generateHash()}`;

    const handleRatingChange = (newRating) => {
        setRating(newRating);
        setValue(name, newRating);
    };

    return (
        <div style={styles.container}>
            <label style={styles.label} htmlFor={inputId}>{label}</label>
            <ReactStars
                id={inputId}
                name={name}
                count={5}
                size={24}
                activeColor="#ffd700"
                value={rating}
                onChange={handleRatingChange}
            />
            <input type="hidden" {...register(name)} value={rating} />
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
    },
};

export default StarRating;