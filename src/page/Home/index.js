import React, { useEffect } from 'react'
import { Fragment } from 'react';
import BannerHome from '../../Component/BannerHome';
import PropTypes from 'prop-types';
import LearnHome from '../../Component/LearnHome';
import Topic from '../../Component/Topic';
import ListCourse from '../../Component/ListCourse';
import Technical from '../../Component/Technical';
import Footer from '../../Layout/Footer';
import {useSelector, useDispatch} from 'react-redux';
import { actGetAll } from '../../action/creator';

function Home(props) {
    const course =useSelector(state=>state.CourseReducer.dsCourse);
    const dispatch = useDispatch();
    
    useEffect(()=>{
          dispatch(actGetAll());
    },[])
    return (
        <Fragment>
           <BannerHome />
           <LearnHome />
           <Topic />
           <ListCourse courses={course}/>
           <Technical />
           <Footer />
        </Fragment>
    )
}

Home.propTypes = {
    course:PropTypes.array
}


export default Home;

