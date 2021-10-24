import React from 'react';
import { Row,Col} from 'react-bootstrap';
import Sidenav from '../../shared/component/sidenav/sidenav'
import RightSideNav from '../../shared/component/rightSideNav/rightSideNav'

interface Props {
    children : any
}

const layout = (props:Props) => (
    <div className='main-container container'>
        <Row>
            <Col xs='2' className='column-wrapper'>
                <Sidenav />
            </Col>
            <Col xs='7' className='column-wrapper'>
                {props.children}
            </Col>
            <Col xs='3' className='h-100vh overflow-y'>
                <RightSideNav />
            </Col>
        </Row>
    </div>
)

export default layout