import React from 'react'
import PropTypes from 'prop-types';
import {Card, Row, Col} from 'antd';
import classes from './ListCourse.module.scss';
import Course from '../Course';
function ListCourse({courses}) {
    return (
        <div className={classes.course}>
            <div className={classes.course_center}>
                <h2>Chủ đề phổ biến</h2>
                <div>                  
                    <Row gutter={[26,26]}>

                    {
                       courses.map((course,index)=>{
                         return  (
                         <Col key={index} md={6} sm={12} xs={24}>
                                <Course course={course}/>
                         </Col>)
                        })
                    }
                       </Row>

                </div>
              
            </div>
        </div>
    )
}

ListCourse.propTypes = {
    courses:PropTypes.array.isRequired
}

export default ListCourse;

