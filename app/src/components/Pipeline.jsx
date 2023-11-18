import React from 'react';

const Pipeline = ({ children }) => {
    return (
        <div className="mr-10 bg-white border border-gray-300 p-20 rounded-lg h-40 transition-transform hover:scale-105 duration-500 ease-in-out">
            {children}
        </div>
    );
};

export default Pipeline;