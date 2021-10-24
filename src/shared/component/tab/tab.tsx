import React from 'react';

interface Props {
    tabList : string[]
}

const tab = (props:Props) => {
    const tabList = props.tabList
    return (
        <ul className='tab'>
            {
                tabList.map((tabName:string) => {
                return <li key={tabName}>{tabName}</li>
                })
            }
        </ul>
    )
}

export default tab;