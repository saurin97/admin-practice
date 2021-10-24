import React,{ Component } from 'react';
import WelcomeMsg from './welcomeMessage';
import DailyTask from './dailyTask/dailyTask'
import UserList from './userList/userList'


class dashboard extends Component {
    state ={

    }

    render () {
        return (
            <section className='dashboard'>
                <div className='container'>
                    <h4 className='text-capitalize'>dashboard Component</h4>
                    <WelcomeMsg />
                    <DailyTask />
                    <UserList />
                </div>
            </section>
        )
    }
}

export default  dashboard;