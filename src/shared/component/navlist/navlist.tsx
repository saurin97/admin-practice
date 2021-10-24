import React,{ Component } from 'react';
import NavItem from './nav-item/nav-item';
import DashboardIcon from '../icons/dashboard/dashboard';
import AccountIcon from '../icons/user/user';
import AnalyticsIcon from '../icons/analytics/analytics';
import CalenderIcon from '../icons/calender/calender';
import CompanyIcon from '../icons/company/company';
import ChatIcon from '../icons/chat/chat';
// import classes from '*.module.sass';

// interface State {
//     open : boolean
// }

interface Params {
    url? : any
}

class navlist extends Component<Params> {
    state = {
        open : false
    }

    toggleClass = () => {
        this.setState ({open : !this.state.open})
    }

    openClass = () => {
        this.setState ({open : true})
    }

    closeClass = () => {
        this.setState ({open : false})
    }

    // componentWillMount () {
    //     const url = window.location.href.toString();
    //     if ( url.includes('dashboard')) {
    //         this.setState ({open : true})
    //     }
    //     else {
    //         this.setState ({open : false})
    //     }
    // }


    render () {
        return (
            <ul className='nav-list'>
                {/* <li className='nav-item'>
                    <DashboardIcon className='nav-item-icon'/>
                    <span onClick={this.toggleClass}>Dashboard</span>
                    <ul className={this.state.open? 'sub-list open' : 'sub-list'}>
                        <NavItem path='/dashboard/1' name='Dashboard-1' icon ={<DashboardIcon className='nav-item-icon' />}></NavItem>
                        <NavItem path='/dashboard/2' icon={<DashboardIcon className='nav-item-icon' />} name='Dashboard-2'></NavItem>
                    </ul>
                </li> */}
                <NavItem path='/dashboard' name='Dashboard' icon ={<DashboardIcon className='nav-item-icon' />}></NavItem>
                <NavItem path='/account' name='Account' icon ={<AccountIcon className='nav-item-icon' />}></NavItem>
                <NavItem path='/analytics' icon={<AnalyticsIcon className='nav-item-icon' />} name=' Analytics'></NavItem>
                <NavItem path='/address' icon={<CalenderIcon className='nav-item-icon' />} name=' Addresses'></NavItem>
                <NavItem path='/company' icon={<CompanyIcon className='nav-item-icon' />} name=' Company'></NavItem>
                <NavItem path='/questions' icon={<ChatIcon className='nav-item-icon' />} name=' Questions'></NavItem>
            </ul>
        )
    }
}





// const navlist = () => {

//     return (
        // <ul className='nav-list'>
        //     <NavItem path='/dashboard' name='Dashboard' icon={<DashboardIcon className='nav-item-icon'/>}>
        //         <ul className='sub-list'>
        //             <NavItem path='/dashboard/1' name='Dashboard-1' icon ={<AccountIcon className='nav-item-icon' />}></NavItem>
        //             <NavItem path='/dashboard/2' icon={<AnalyticsIcon className='nav-item-icon' />} name='Dashboard-2'></NavItem>
        //         </ul>
        //     </NavItem>
        //     <NavItem path='/account' name='Account' icon ={<AccountIcon className='nav-item-icon' />}></NavItem>
        //     <NavItem path='/analytics' icon={<AnalyticsIcon className='nav-item-icon' />} name=' Analytics'></NavItem>
        //     <NavItem path='/calender' icon={<CalenderIcon className='nav-item-icon' />} name=' Calender'></NavItem>
        //     <NavItem path='/company' icon={<CompanyIcon className='nav-item-icon' />} name=' Company'></NavItem>
        //     <NavItem path='/chat' icon={<ChatIcon className='nav-item-icon' />} name=' Chat'></NavItem>
        // </ul>
//     )
// }

export default navlist;