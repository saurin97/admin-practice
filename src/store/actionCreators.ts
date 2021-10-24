import * as actionTypes from './actions';
import axios from '../axios-orders';

import companyInfo from './company';

export const fetchCompanyInfoFailed = () => {
    return {
        type : actionTypes.INIT_COMPANY_INFO_FAILED
    }
} 

export const setCompanyInfo:any = (companyInfo:any) => {
    return {
        type : actionTypes.INIT_COMPANY_INFO_SUCCESS,
        payload : companyInfo
    }
} 
export const initCompanyInfo:any = () => {
    
    return (dispatch:any) => {
            axios.get('/questions')
            .then (Response => {
                dispatch (setCompanyInfo(companyInfo))
            })
            .catch (error => {
                console.log('error');
            });
    }
}