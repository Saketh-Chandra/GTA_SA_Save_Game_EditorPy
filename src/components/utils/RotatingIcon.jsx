import React from 'react';

const RotatingIcon = ({ icon: IconComponent, duration = 2, color = 'inherit' }) => {
    return (
        <IconComponent
            sx={{
                animation: `rotateY ${duration}s linear infinite`, // Rotate in the y-axis continuously
                '@keyframes rotateY': {
                    '0%': { transform: 'rotateY(0deg)' },
                    '100%': { transform: 'rotateY(360deg)' },
                },
                color: color,
            }}
        />
    );
};



export default RotatingIcon