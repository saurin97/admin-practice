import React from 'react';

interface Props {
    icon: any
    name: string
    count: string
    iconClass: string
}

const task:React.FC<Props> = (props) => {
    const iconClass = 'task-icon ' + props.iconClass;
    return(
        <div className='col-md-4'>
             <div className='column-wrapper d-flex'>
                <div className={iconClass}>
                    {props.children}
                </div>
                <div className='task-info d-flex justify-content-center flex-column'>
                    <h5>{props.count}</h5>
                    <span>{props.name}</span>
                </div>
             </div>
        </div>
    )
}

export default task;