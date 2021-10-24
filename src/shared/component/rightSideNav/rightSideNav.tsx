import React from 'react';
import SearchComponent from '../searchComponent/searchComponent'
import CompanyProfile from '../companyInfo/companyInfo'
import AverageStates from '../averageStates/averageStates'
import LikeIcon from '../icons/like/like';
import CommentIcon from '../icons/comment/comment';
import ShareIcon from '../icons/share/share'

const rightSide = () => (
    <div className='right-side'>
        <SearchComponent />
        <CompanyProfile />
        <hr></hr>
        <AverageStates count='3K' name='Avarage Likes' progress={25} icon ={<LikeIcon />}/>
        <AverageStates count='22.3K' name='Avarage Comments' progress={80} icon ={<CommentIcon />}/>
        <AverageStates count='3K' name='Avarage Shares' progress={40} icon ={<ShareIcon />}/>
        <div className='followers-count'>
            <h2>234.000.K</h2>
            <span>Toatal Followers</span>
        </div>
    </div>
)

export default rightSide;