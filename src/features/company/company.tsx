import React,{ Component } from 'react';
import { connect } from 'react-redux'
import {ThunkDispatch} from 'redux-thunk'
import * as actionCreators from  '../../store/actionCreators'
import { Tabs,Tab } from 'react-bootstrap'

import CompanyInfo from './companyInfo/companyInfo';
import ProjectCard from  './projectCard/projectCard'
import Spinner from '../../shared/component/spinner/spinner';
// import  Tab from '../../shared/component/tab/tab'
import ComponentWrapper from '../../shared/component/componentWrapper/componentWrapper'

interface State {
    activeTab : boolean
}

class company extends Component<DispatchProps> {
    state:State = {
        activeTab : true
    }

    componentDidMount () {
        this.props.onloadCompanyInfo();
    }
    
    render () {        
        const companyInfo:any = this.props.companyInfo
        const company:any = [];
       
        if (!this.props.loading) {
            for (const key in companyInfo) {
                company.push({
                    companyName : key,
                    companyInfo : companyInfo[key].companyInfo,
                    projects :  companyInfo[key].projects
                })
            }
        }

        return (
            <section className='main-section'>
                <div className='container'>
                    {/* <Tab  tabList={["scaletech","gonext"]} /> */}
                    {this.props.loading && <Spinner />}
                    {
                        <Tabs defaultActiveKey="scaletech" id="company">
                            {
                            !this.props.loading  && company.map((Company:any,index:number) => {
                                return <Tab eventKey={Company.companyName} title={Company.companyName} key= {index}>
                                    
                                <ComponentWrapper key={index} className ='comapany-card'>
                                    <CompanyInfo 
                                        name = {Company.companyName}
                                        logo = {Company.companyInfo.logo}
                                        director = {Company.companyInfo.director}
                                        totalEmployee = {Company.companyInfo.totalEmployee}
                                        address = {Company.companyInfo.location}
                                    />
                                    <ProjectCard
                                        projectlist = {Company.projects}
                                    />
                                </ComponentWrapper>
                            </Tab>              
                            }) 
                            }
                        </Tabs>
                    }
                </div>
            </section>
        )
    }
}

const mapStateToProps = (state:InitialState) => {
    return {
        companyInfo : state.companyInfo,
        loading : state.loading
    }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, Action>): DispatchProps => {

    return {
        onloadCompanyInfo : () => dispatch (actionCreators.initCompanyInfo())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(company);

interface Location {
    [key : string] : string
}
interface DispatchProps {
    onloadCompanyInfo : any,
    companyInfo? : InitialState,
    loading? : boolean
}
interface Action {
    type : string,
    payload : any
}
interface basicDetail {
    logo : string,
    director : string,
    location : Location,
    totalEmployee : number
}
interface project {
    [key : string] : string
}
interface CompanyDetail {
    companyInfo : basicDetail,
    projects : project 
}
interface company {
    scaletech : CompanyDetail | null,
    gonext : CompanyDetail | null
}
interface InitialState {
    companyInfo : company | null,
    loading : boolean
}