import React from 'react';

interface Props {
    children : any
    className? : string
}

const componentWrapper = (props:Props) => {
    return (
        <div className={props.className}>
            {props.children}
        </div>
    )
} 

export default componentWrapper;
