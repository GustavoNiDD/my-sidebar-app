// src/components/Sidebar.js
import React from 'react';

const Sidebar = ({ components = [], id }) => {
    const generateHash = () => {
        return Math.random().toString(36).substr(2, 9);
    };

    const sidebarId = id || `sidebar-${generateHash()}`;

    return (
        <div id={sidebarId} style={styles.sidebar}>
            <div style={styles.content}>
                {components.map((Component, index) => (
                    <div key={index} style={styles.componentContainer}>
                        {Component}
                    </div>
                ))}
            </div>
        </div>
    );
};

const styles = {
    sidebar: {
        backgroundColor: '#f4f4f4',
        display: 'flex',
        flexDirection: 'column',
        borderRight: '1px solid #ddd',
        position: 'fixed',
        right: 0,
        top: 0,
        width: '300px',
        height: '100%',
        boxSizing: 'border-box',
        overflowY: 'auto',
    },
    content: {
        padding: '10px',
    },
    componentContainer: {
        padding: '10px',
        border: '1px solid #ddd',
        borderRadius: '4px',
        marginBottom: '10px',
    },
};

export default Sidebar;