import React from 'react'
import PropTypes from 'prop-types';
import  classes from './Header.module.scss';
import {Input} from 'antd';

function Header(props) {
    return (
        <header className={classes.header}>
          <nav className={classes.header__nav}>
          <div className={classes.header__center}>
                <div className={classes.header__center__logo}>
                    <ul className={classes.header__center__logo__links}>
                        <li>
                            <a href="#">Logo</a>
                        </li>
                        <li>
                            <a href="#">The loai</a>
                        </li>
                        <li className={classes.header__input_center}>
                            <Input size="large" placeholder="Tim khoa hoc" className={classes.header__input} />
                        </li>
                    </ul>
                     
                </div>
                    <ul className={classes.header__center__links}>
                        <li>
                            <a href="#">Khoa hoc cua toi</a>
                        </li>
                        <li>
                            <a href="#">Gio hang</a>
                        </li>
                        <li>
                            <a href="#">Dang nhap</a>
                        </li>
                        <li>
                            <a href="#">Dang xuat</a>
                        </li>
                    </ul>
             </div>
          </nav>
        </header>
    )
}

Header.propTypes = {
    
}

export default Header;

