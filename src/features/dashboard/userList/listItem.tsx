import React from 'react';
import AvatarMini from './avatar-mini'


interface Props {
    profile: string
    name: string
    role: string
    experience: string
    companyimg: string
}

const listItem:React.FC<Props> = (props) => (
    <tr>
        <td><AvatarMini img={props.profile} /></td>
        <td>{props.name}</td>
        <td>{props.role}</td>
        <td>{props.experience}</td>
        <td>
            <img src={props.companyimg} alt=""/>
        </td>
    </tr>
)

export default listItem;