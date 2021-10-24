import React from 'react';
import App from './App';
import Layout from './hoc/layout/layout';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './assets/styles/app.scss'

const root = () => (
    <Layout>
        <App />
    </Layout>
)

export default root;