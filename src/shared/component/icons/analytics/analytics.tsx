import React from 'react';
interface Props {
	className : string
}

const analytics = (props : Props) => (
    <svg viewBox="0 0 24 24" className = {props.className}>
        <path d="m0 12c0 2.96 1.06 5.75 3 7.94l8.25-8.25v-11.66c-6.27.38-11.25 5.6-11.25 11.97zm12.75-11.97v11.97c0 .2-.08.39-.22.53l-8.47 8.47c1 .89 2.13 1.59 3.34 2.09 1.44.6 3 .91 4.6.91 6.62 0 12-5.38 12-12 0-6.37-4.98-11.59-11.25-11.97z"/>
    </svg>
)

export default analytics;
