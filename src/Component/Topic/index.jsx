import React from 'react'
import PropTypes from 'prop-types';
import classes from '../Topic/Topic.module.scss';
import Avatar from 'antd/lib/avatar/avatar';
import {List} from 'antd';
function Topic(props) {
    return (
        <div className={classes.topic}>
             <div className={classes.topic_center}>
                <div>
                    <h1>Chủ đề</h1>
                    <h2>Chọn 1 chủ đề</h2>
                </div>

                <div className={classes.topic_item}>
                {/* <List
    itemLayout="horizontal"
    // dataSource={data}
    renderItem={item => (
      <List.Item>
        <List.Item.Meta
          avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
          title={<a href="https://ant.design">{item.title}</a>}
          description="Ant Design, a design language for background applications, is refined by Ant UED Team"
        />
      </List.Item>
    )}
  /> */}
     <List>
     <List.Item>
         <List.Item.Meta 
           avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
           title="ahihni"
           description="Ant Design, a design "

           />
     </List.Item>
     </List>
     
                </div>
                <div className={classes.topic_item}>
                {/* <List
    itemLayout="horizontal"
    // dataSource={data}
    renderItem={item => (
      <List.Item>
        <List.Item.Meta
          avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
          title={<a href="https://ant.design">{item.title}</a>}
          description="Ant Design, a design language for background applications, is refined by Ant UED Team"
        />
      </List.Item>
    )}
  /> */}
     <List>
     <List.Item>
         <List.Item.Meta 
           avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
           title="ahihni"
           description="Ant Design, a design "

           />
     </List.Item>
     </List>
     
                </div>
                <div className={classes.topic_item}>
                {/* <List
    itemLayout="horizontal"
    // dataSource={data}
    renderItem={item => (
      <List.Item>
        <List.Item.Meta
          avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
          title={<a href="https://ant.design">{item.title}</a>}
          description="Ant Design, a design language for background applications, is refined by Ant UED Team"
        />
      </List.Item>
    )}
  /> */}
     <List>
     <List.Item>
         <List.Item.Meta 
           avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
           title="ahihni"
           description="Ant Design, a design"

           />
     </List.Item>
     </List>
     
                </div>
                <div className={classes.topic_item}>
                {/* <List
    itemLayout="horizontal"
    // dataSource={data}
    renderItem={item => (
      <List.Item>
        <List.Item.Meta
          avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
          title={<a href="https://ant.design">{item.title}</a>}
          description="Ant Design, a design language for background applications, is refined by Ant UED Team"
        />
      </List.Item>
    )}
  /> */}
     <List>
     <List.Item>
         <List.Item.Meta 
           avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
           title="ahihni"
           description="Ant Design, a design"

           />
     </List.Item>
     </List>
     
                </div>
             </div>
        </div>
    )
}

Topic.propTypes = {

}

export default Topic

