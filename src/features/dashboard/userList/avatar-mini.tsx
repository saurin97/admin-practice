import React from 'react'

interface Props {
    img : string
}

const avatarMini:React.FC<Props> = (props) => {
    return (
        <div className='avatar-mini'>
            <img src={props.img} alt=""/>
        </div>
    )
};

export default avatarMini;