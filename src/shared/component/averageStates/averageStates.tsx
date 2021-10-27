import React from 'react'
import {ProgressBar} from 'react-bootstrap'
interface Props {
    count : string,
    name : string,
    progress : number,
    icon : any
}

const averageStates = (props : Props) => (
    <div className='average-state d-flex align-items-center'>
        <div className='left-side'>
            <h3><strong>{props.count}</strong></h3>
            <span>{props.name}</span>
        </div>
        <div className='right-side'>
            <span>Aug-25 to sep-25</span>
            <ProgressBar now={props.progress} label={`${props.progress}%`} />
            {props.icon}
        </div>
    </div>
)

export default averageStates;