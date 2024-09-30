import React from 'react';

const CommonButton = ({ button, className }) => {
    return (
        <button className={`${className} font-inter text-base p-[13px_16px] bg-darkCyan text-white border-[2px] border-darkCyan hover:text-darkCyan hover:bg-white duration-300`}>
            {button}
        </button>
    );
};

export default CommonButton;
