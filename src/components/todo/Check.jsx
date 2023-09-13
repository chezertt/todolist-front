import React from 'react';
import {BsCheckCircle} from "react-icons/bs";
import {BsCheckCircleFill} from "react-icons/bs";

const Check = ({isCompleted}) => {
    return (
        <div className='ml-2 mr-2'>
            {isCompleted ?
                <BsCheckCircleFill size={20}/> :
                <BsCheckCircle size={20}/>
            }
        </div>
    );
};

export default Check;