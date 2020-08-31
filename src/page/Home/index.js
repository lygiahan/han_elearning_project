import React, { useEffect } from 'react'
import { Layout } from 'antd';
import { Fragment } from 'react';
import BannerHome from '../../Component/BannerHome';
import PropTypes from 'prop-types';
import LearnHome from '../../Component/LearnHome';
import Topic from '../../Component/Topic';
import Course from '../../Component/Course';
import Technical from '../../Component/Technical';
import Footer from '../../Layout/Footer';
import {useSelector} from 'react-redux';
function Home(props) {
    const course =useSelector(state=>state.CourseReducer.dsCourse);
    console.log(course);
    
    useEffect(()=>{
          
    },[])
    return (
        <Fragment>
           <BannerHome />
           <LearnHome />
           <Topic />
           <Course />
           <Technical />
           <Footer />
        </Fragment>
    )
}

Home.propTypes = {
    course:PropTypes.array.isRequired
}


export default Home;

