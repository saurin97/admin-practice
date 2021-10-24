import React from 'react';

interface Props {

}

const switchMode:React.FC<Props> = () => {
    return(
        <div className='switch-wrapper'>
            <div className="switch">
                <input id="switch-1" type="checkbox" className="switch-input" value='' />
                <label htmlFor="switch-1" className="switch-label"></label>
            </div>
        </div>
    )
}

export default switchMode;