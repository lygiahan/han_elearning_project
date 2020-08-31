import React from 'react'
import PropTypes from 'prop-types'
import classes from '../Technical/Technical.module.scss';
function Technical(props) {
    return (
        <div className={classes.technical}>
            <h1>Chúng tôi đã có nội dung kỹ thuật được đề cập.</h1>
             <div className={classes.technical_center}>

             </div>
        </div>
    )
}

Technical.propTypes = {

}

export default Technical

