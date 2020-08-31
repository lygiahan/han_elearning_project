import React from 'react'
import PropTypes from 'prop-types'
import classes from '../LearnHome/LearnHome.module.scss';
import { Row, Col, Button } from 'antd';
function LearnHome(props) {
    return (
        <div className={classes.learn}>
            {/* <img src="http://demo.foxthemes.net/courseplusv3.3/assets/images/feature.png"/> */}
            {/**http://demo.foxthemes.net/courseplusv3.3/assets/images/feature-2.png */}
         <div className={classes.learn_center}>
         <Row>
                <Col md={12}>
                   <img src="http://demo.foxthemes.net/courseplusv3.3/assets/images/feature.png"/>
                </Col>
                <Col md={12}>
                    <div className={classes.learn_center__item}>
                        <h1>Học cách viết mã mọi lúc Và bất cứ nơi đâu</h1>
                        <p>Bắt đầu chỉ với tên và địa chỉ email của bạn. Nó đơn giản như vậy - không cần thanh toán hoặc thông tin thẻ tín dụng.</p>
                        <Button>Bắt đầu</Button>
                    </div>
                </Col>
            </Row>
         </div>
         <hr style={{width:'70%',marginTop:'7%'}}></hr>
        </div>
    )
}

LearnHome.propTypes = {

}

export default LearnHome;

