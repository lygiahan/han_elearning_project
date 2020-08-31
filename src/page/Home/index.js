import React from './node_modules/react'
import { Layout } from 'antd';
import { Fragment } from 'react';
import BannerHome from '../../Layout/BannerHome';

function Home(props) {
    return (
        <Fragment>
           <BannerHome />
        </Fragment>
    )
}

Home.propTypes = {
   name:PropTypes.string
}

export default Home;

