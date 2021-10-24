import React,{ Component } from 'react';

import CustomModel from '../../shared/component/model/model'
import AddAddress from './addAddress'
import AddIcon from '../../shared/component/icons/add/add'
import AddessComponent from './addressComponent';

interface AddressDetail {
    street : string,
    town : string,
    pincode: number,
    state : string,
    addressType: string,
}
interface Address {
    name: string
    phone: number
    address : AddressDetail
}
interface State {
    showModel: boolean,
    addressList : Address[]
}

class calender extends Component {
    state:State ={
        showModel: false,
        addressList: [
            {
                name: 'Saurin Patel',
                phone: 7201006565,
                address: {
                    street : 'b-204,sapath hexa near sola bridge',
                    town : 'Sola',
                    pincode: 380024,
                    state : 'gujarat',
                    addressType: 'office',
                }
            },
        ]
    }

    handleCloseModel = () => {
        this.setState({showModel : false})
    }

    handleOpenModel = () => {
        this.setState({showModel : true})
    }

    addNewAddress = (newAddress: any) => {
        const addressList = [...this.state.addressList];
        addressList.push(newAddress);

        this.setState({
            showModel: false,
            addressList: addressList
        })
    }

    render () {
        return (
            <section className=''>
                <div className='container'>
                    <h4 className='text-capitalize'>Address Component</h4>
                    <div className='address-from-wrapper d-flex flex-wrap'>
                    <CustomModel
                        show = {this.state.showModel}
                        closeModel = {this.handleCloseModel}
                        heading = 'Add Address'
                    >
                        <AddAddress addNewAddress={this.addNewAddress} />
                    </CustomModel>
                    
                    <div className='add-address-icon' onClick={this.handleOpenModel}>
                        <AddIcon className='' />
                    </div>
                    <div className='row w-100'>
                        {
                            this.state.addressList.map((address:any,index:number) => {
                                return <AddessComponent key={index} address={address} />;
                            })
                        }
                    </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default calender ;