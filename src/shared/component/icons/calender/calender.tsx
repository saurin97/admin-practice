import React from 'react';
interface Props {
	className : string
}

const calender = (props : Props) => (
    // <svg viewBox="0 0 24 24" className = {props.className}>
    //     <path d="m0 12c0 2.96 1.06 5.75 3 7.94l8.25-8.25v-11.66c-6.27.38-11.25 5.6-11.25 11.97zm12.75-11.97v11.97c0 .2-.08.39-.22.53l-8.47 8.47c1 .89 2.13 1.59 3.34 2.09 1.44.6 3 .91 4.6.91 6.62 0 12-5.38 12-12 0-6.37-4.98-11.59-11.25-11.97z"/>
    // </svg>
    <svg viewBox="0 0 477.867 477.867" className = {props.className}>
        <g>
            <path d="M426.667,51.2h-51.2V17.067C375.467,7.641,367.826,0,358.4,0s-17.067,7.641-17.067,17.067V51.2h-204.8V17.067    C136.533,7.641,128.892,0,119.467,0S102.4,7.641,102.4,17.067V51.2H51.2C22.923,51.2,0,74.123,0,102.4v324.267    c0,28.277,22.923,51.2,51.2,51.2h375.467c28.277,0,51.2-22.923,51.2-51.2V102.4C477.867,74.123,454.944,51.2,426.667,51.2z     M443.733,426.667c0,9.426-7.641,17.067-17.067,17.067H51.2c-9.426,0-17.067-7.641-17.067-17.067V204.8h409.6V426.667z     M443.733,170.667h-409.6V102.4c0-9.426,7.641-17.067,17.067-17.067h51.2v34.133c0,9.426,7.641,17.067,17.067,17.067    s17.067-7.641,17.067-17.067V85.333h204.8v34.133c0,9.426,7.641,17.067,17.067,17.067s17.067-7.641,17.067-17.067V85.333h51.2    c9.426,0,17.067,7.641,17.067,17.067V170.667z"/>
        </g>
        <g>
            <path d="M136.533,238.933H102.4c-9.426,0-17.067,7.641-17.067,17.067c0,9.426,7.641,17.067,17.067,17.067h34.133    c9.426,0,17.067-7.641,17.067-17.067C153.6,246.574,145.959,238.933,136.533,238.933z"/>
        </g>
        <g>
            <path d="M256,238.933h-34.133c-9.426,0-17.067,7.641-17.067,17.067c0,9.426,7.641,17.067,17.067,17.067H256    c9.426,0,17.067-7.641,17.067-17.067C273.067,246.574,265.426,238.933,256,238.933z"/>
        </g>
        <g>
            <path d="M375.467,238.933h-34.133c-9.426,0-17.067,7.641-17.067,17.067c0,9.426,7.641,17.067,17.067,17.067h34.133    c9.426,0,17.067-7.641,17.067-17.067C392.533,246.574,384.892,238.933,375.467,238.933z"/>
        </g>
        <g>
            <path d="M136.533,307.2H102.4c-9.426,0-17.067,7.641-17.067,17.067c0,9.426,7.641,17.067,17.067,17.067h34.133    c9.426,0,17.067-7.641,17.067-17.067C153.6,314.841,145.959,307.2,136.533,307.2z"/>
        </g>
        <g>
            <path d="M256,307.2h-34.133c-9.426,0-17.067,7.641-17.067,17.067c0,9.426,7.641,17.067,17.067,17.067H256    c9.426,0,17.067-7.641,17.067-17.067C273.067,314.841,265.426,307.2,256,307.2z"/>
        </g>
        <g>
            <path d="M375.467,307.2h-34.133c-9.426,0-17.067,7.641-17.067,17.067c0,9.426,7.641,17.067,17.067,17.067h34.133    c9.426,0,17.067-7.641,17.067-17.067C392.533,314.841,384.892,307.2,375.467,307.2z"/>
        </g>
        <g>
            <path d="M136.533,375.467H102.4c-9.426,0-17.067,7.641-17.067,17.067S92.974,409.6,102.4,409.6h34.133    c9.426,0,17.067-7.641,17.067-17.067S145.959,375.467,136.533,375.467z"/>
        </g>
        <g>
            <path d="M256,375.467h-34.133c-9.426,0-17.067,7.641-17.067,17.067s7.641,17.067,17.067,17.067H256    c9.426,0,17.067-7.641,17.067-17.067S265.426,375.467,256,375.467z"/>
        </g>
        <g>
            <path d="M375.467,375.467h-34.133c-9.426,0-17.067,7.641-17.067,17.067s7.641,17.067,17.067,17.067h34.133    c9.426,0,17.067-7.641,17.067-17.067S384.892,375.467,375.467,375.467z"/>
        </g>
    </svg>
)

export default calender;
