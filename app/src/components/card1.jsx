import React from 'react';

const Card1 = ({ children }) => {
    return (
        <div className="card mr-10 w-96 h-40 boxbg-white rounded-lg transition-transform hover:scale-105 duration-500 ease-in-out">
            {children}
        </div>
    );
};

export default Card1;
