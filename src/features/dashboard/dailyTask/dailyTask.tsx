import React from 'react';

import Task from './task';
import StepIcon from '../../../shared/component/icons/steps/steps';
import FireIcon from '../../../shared/component/icons/fire/fire';
import SleepIcon from '../../../shared/component/icons/sleep/sleep';

const dailyTask = () => {
    return (
        <div className='tasks'>
            <h3>Daily Tasks</h3>
            <div className='row'>
                <Task icon={StepIcon} name='Step' count='1000 steps' iconClass='step-icon'>
                    <StepIcon />
                </Task>                
                <Task icon={FireIcon} name='Calories' count='100 kcal' iconClass='fire-icon'>
                    <FireIcon />
                </Task>                
                <Task icon={SleepIcon} name='Sleep' count='500 minutes' iconClass='sleep-icon'>
                    <SleepIcon />
                </Task>                
            </div>

        </div>
    )
}

export default dailyTask;