import React from "react";
import { Row, Col, Typography } from "antd";
import {
  PhoneFilled,
  HomeFilled,
  MailFilled,
  
} from "@ant-design/icons";
import PropTypes from 'prop-types'
import classes from '../Footer/Footer.module.scss';
function Footer() {
  return (
    <div className={classes.App_footer}>
      <div className={classes.App_footer_content}>
    <Row>
      <Col md={8} sm={24} xs={24}>
           <div className={classes.App_footer_content_logo}>
                <img alt="img" style={{marginTop:55,width:'10%'}} src="http://demo.foxthemes.net/courseplusv3.3/assets/images/logo-dark.svg"/>
                <h3>Hdemy</h3>
            </div>
     </Col>
      <Col md={8} sm={24}xs={24} className={classes.Footer_adress}>
        <Typography.Title level={4} >Địa chỉ</Typography.Title>
        <ul style={{ fontSize: 15, lineHeight: 3 }}>
          <li>
            <HomeFilled style={{ marginRight: 10 }} />
            TP-HCM,Gò vấp,Hẻm 496/1,DươngQuảngHàm
          </li>
          <li>
            <MailFilled style={{ marginRight: 10 }} />
            hanjimj000@gmail.com
          </li>
          <li>
            {" "}
            <PhoneFilled style={{ marginRight: 10 }} /> + 08 68 60 2253
          </li>
        </ul>
      </Col>
      <Col md={8} sm={24}xs={24}>
        <Typography.Title level={4}>Theo dõi</Typography.Title>
        <ul style={{listStyle:'none'}}>
          <div className={classes.Footer_icon}>
            <li className={classes.Footer_icon_item}>
              <a href="https://www.facebook.com/lyhuy016"target="_blank" className="fa fa-facebook"></a>
            </li>
            <li className={classes.Footer_icon_item2}>
              <a href="https://twitter.com/GiaHan79629411"target="_blank" className="fa fa-twitter"></a>
            </li>
            <li className={classes.Footer_icon_item3}>
              <a href="" className="fa fa-youtube"></a>
            </li>
            <li className={classes.Footer_icon_item4}>
                <a href="" className="fa fa-google"></a></li>
          </div>
        </ul>
      </Col>
    </Row>
    </div>
    </div>
  );
}
Footer.propTypes = {

}
export default  Footer;