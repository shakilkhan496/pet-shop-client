import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobile } from '@fortawesome/free-solid-svg-icons';

const SmallSpin = () => {
    return (
        <div>
            <div className='flex animate-spin text-black text-3xl justify-center items-center'>
                <FontAwesomeIcon icon={faMobile}></FontAwesomeIcon>
            </div>
        </div>
    );
};

export default SmallSpin;