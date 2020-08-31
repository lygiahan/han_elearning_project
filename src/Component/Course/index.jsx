import React from 'react'
import PropTypes from 'prop-types';
import {Card} from 'antd';
import classes from '../Course/Course.module.scss';
function Course(props) {
    return (
        <div className={classes.course}>
            <div className={classes.course_center}>
                <h2>Chủ đề phổ biến</h2>
                <div>
                    <Card
                        hoverable
                        style={{ width: 240 }}
                        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                    >
                        <Card.Meta title="Europe Street beat" description="www.instagram.com" />
                    </Card>
                </div>
              
            </div>
        </div>
    )
}

Course.propTypes = {

}

export default Course

