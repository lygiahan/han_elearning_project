import React from 'react';
import { Button } from 'antd';
import classes from './BannerHome.module.scss';
function BannerHome() {
    return (
        <div className={classes.banner}>
            <div className={classes.banner_item}>
                <h1>Tìm hiểu HTML, CSS, Ứng dụng Iphone, v.v.</h1>
                <p>Tìm hiểu cách tạo trang web & ứng dụng Viết mã hoặc bắt đầu kinh doanh</p>
                <Button >Giới thiệu </Button>
            </div>
        </div>
    )
}


export default BannerHome;

