import React from 'react';

const CommonButton = ({ button, className }) => {
    return (
        <button className={`${className} bg-darkCyan font-inter text-base text-white border-[2px] rounded border-darkCyan p-[13px_16px]  hover:text-darkCyan hover:bg-white duration-300`}>
            {button}
        </button>
    );
};

export default CommonButton;
