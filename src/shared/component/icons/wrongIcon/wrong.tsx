import React from 'react'

interface Props {
    className : string
}

const wrong = (props:Props) => (
    <svg viewBox="0 0 180.607 180.607" className={props.className} >
        <g>
            <path d="M180.607,10.607l-79.696,79.697l79.696,79.697L170,180.607l-79.696-79.696l-79.696,79.696L0,170.001l79.696-79.697L0,10.607  L10.607,0.001l79.696,79.696L170,0.001L180.607,10.607z"/>
        </g>
    </svg>

)

export default wrong;