import React from 'react';

import ListItem from './listItem';

const userList = () => {
    const userList = [
        {
            profile: 'https://ca.slack-edge.com/TBGLX779R-UQWH8MW8H-adea5b5e43cf-512',
            name: 'Mehul Patel',
            role: 'Solution Engineer',
            experience: '4 year',
            company: 'https://www.scaletech.xyz/images/icon.png'
        },
        {
            profile: 'https://ca.slack-edge.com/TBGLX779R-UTMAH7SHK-f3a6431efa96-512',
            name: 'Saurin Patel',
            role: 'Jr. Frontend Developer',
            experience: '1 year',
            company: 'https://www.scaletech.xyz/images/icon.png'
        },
        {
            profile: 'https://ca.slack-edge.com/TBGLX779R-UQSCYTQ4B-fec438bb591f-512',
            name: 'Jeet Rabadiya',
            role: 'Sr. Frontend Developer',
            experience: '2 year',
            company: 'https://www.scaletech.xyz/images/icon.png'
        },
        {
            profile: 'https://ca.slack-edge.com/TBGLX779R-UR53DQ41J-7aed138618fa-512',
            name: 'Daxay Makavana',
            role: 'Jr. Software developer',
            experience: '2 year',
            company: 'https://www.scaletech.xyz/images/icon.png'
        },
        {
            profile: 'https://ca.slack-edge.com/TBGLX779R-UR4KPKNFJ-g390b070c09e-512',
            name: 'Vedanki Dodiya',
            role: 'One & only HR',
            experience: '2-3 year',
            company: 'http://www.gonexttechnologies.com/img/black-logo.png'
        },
        {
            profile: 'https://ca.slack-edge.com/TBGLX779R-UR3ST4DCG-916a1c65ffe5-512',
            name: 'Gopal Sakhiya',
            role: 'Jr. QA engineer',
            experience: '1.5 year',
            company: 'https://www.scaletech.xyz/images/icon.png'
        },
    ]
    return (
        <div className='employee-list'>
            <h3>Employee List</h3>
            <table>
                <thead>
                    <tr>
                        <th>Profile</th>
                        <th>Name</th>
                        <th>Role</th>
                        <th>Experience</th>
                        <th>Company</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        userList.map((userInfo: any,index:number) => <ListItem key ={index}
                        profile= {userInfo.profile}
                        name= {userInfo.name}
                        role= {userInfo.role}
                        experience= {userInfo.experience}
                        companyimg= {userInfo.company}
                        />)
                    }
                </tbody>
            </table>
        </div>
    )
}

export default userList;