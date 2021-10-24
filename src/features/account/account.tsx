import React,{ Component } from 'react';
import ProfileInfo from '../../shared/component/profileInfo/profileInfo'
import CustomModel from '../../shared/component/model/model'
import EditProfileForm from '../../shared/component/editProfileForm/editProfileForm'
import img from '../../assets/images/download.jpeg';

interface Profile {
    img : string
}

interface PersonalInfo {
    name : string
    role : string
    birthDate : string
    phone : number
    email : string,
    profile : Profile
}

interface State {
    showModel : boolean
    personalInfo : PersonalInfo 
}

class account extends Component {
    state:State ={
        showModel : false,
        personalInfo : {
            name : 'Saurin Patel',
            role : 'FRONTEND DEVELOPER',
            birthDate : '6 DEC 1997',
            phone : 7201006565,
            email : 'saurin@scaletech.xyz',
            profile : {img}
        }
    }

    handleCloseModel = () => {
        this.setState({showModel : false})
    }

    handleOpenModel = () => {
        this.setState({showModel : true})
    }

    changePersonalInfo = (personalInfo: any) => {
        this.setState({
            showModel : false,
            personalInfo :{
                name : personalInfo.fullName,
                role : 'FRONTEND DEVELOPER',
                birthDate : '6 DEC 1997',
                phone : personalInfo.phone,
                email : personalInfo.email,
                profile : personalInfo.profile === '' ?  {img} :  {
                    img : personalInfo.profile
                } 
            }
        })
    }

    handleOnChangeProfile = (filePath : any) => {
        this.setState({
            personalInfo : {
                profile : {
                    img : filePath
                }
            }
        })
    }

    render () {
        return (
            <section className=''>
                <CustomModel
                    show = {this.state.showModel}
                    closeModel = {this.handleCloseModel}
                    heading = 'Personal Information'
                >
                    <EditProfileForm 
                        personalInfo = {this.state.personalInfo}
                        changePersonalInfo = {this.changePersonalInfo}
                        handleOnChangeProfile = {this.handleOnChangeProfile}
                    />

                </CustomModel>
                <div className='container'>
                    <h4 className='text-capitalize'>account Component</h4>
                    <ProfileInfo
                        personalInfo = {this.state.personalInfo}
                        handleCloseModel = {this.handleCloseModel}
                        handleOpenModel = {this.handleOpenModel}
                    />
                </div>
            </section>
        )
    }
}

export default account;