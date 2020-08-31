import React from 'react'
import PropTypes from 'prop-types'
import { Card, Typography } from 'antd';
import classes from '../Course/Course.module.scss';

function Course({ course }) {
    let {hinhAnh,tenKhoaHoc,moTa,biDanh,luotXem,ngayTao,nguoiTao} = course;
    console.log(course);
    return (
      <div className={classes.card_item}>
            <Card
            className={classes.card_item_card}
            hoverable
            style={{ width: '100%'}}
            cover={<img className={classes.card_item_img} alt="example" src={hinhAnh}/>}
        >
            <Card.Meta title={tenKhoaHoc}description={nguoiTao.hoTen} />   
            <div style={{margin:'5px 0'}}>
            <Typography.Text style={{color:'#be5a0e'}}>4.8 <span style={{marginLeft:8}}>
                    <i style={{color:'#eb8a2f'}} className="fa fa-star"></i>
                    <i style={{color:'#eb8a2f',margin:'0 3px'}} className="fa fa-star"></i>
                    <i style={{color:'#eb8a2f'}} className="fa fa-star"></i>
                    <i style={{color:'#eb8a2f',margin:'0 3px'}} className="fa fa-star"></i>
                    <i style={{color:'#eb8a2f'}} className="fa fa-star"></i>
                </span></Typography.Text> 
            </div>
             <Card.Meta title={(
             <div>
                 <Typography.Text
              delete>900.000 VNĐ
              </Typography.Text>
             <span> <Typography.Text style={{paddingLeft:8}} mark>Free</Typography.Text></span>
             </div>)} description={<p></p>}/>       
       
        </Card>
      </div>
    )
}

Course.propTypes = {
    course: PropTypes.object.isRequired
}

export default Course

