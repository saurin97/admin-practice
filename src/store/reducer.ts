import * as actionTypes from './actions';

interface Location {
    [key : string] : string
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
    [key : string] : CompanyDetail |null
}

interface InitialState {
    companyInfo : company | null,
    loading : boolean
}

const initialState : InitialState = {
    companyInfo : null,
    loading : true
}

const reducer = (state:InitialState = initialState,action:any)=> {
    switch (action.type) {
        
        case actionTypes.INIT_COMPANY_INFO_SUCCESS:
            return {
                ...state,
                loading : false,
                companyInfo: action.payload
            }
        default:
            return state;
    }
}

export default reducer