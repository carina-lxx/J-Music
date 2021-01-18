import React from 'react';
import { getCount } from "../../api/utils";
import { 
  ListWrapper,
  ListItem,
  List
} from './style';

function RecommendList (props) {
  return (
    <ListWrapper>
      <h1 className="title"> Recommendation List </h1>
      <List>
        {
          props.recommendList.map ((item, index) => {
            return (
              <ListItem key={item.id + index}>
                <div className="img_wrapper">
                  <div className="decorate"></div>
                    {/* able to decrease the size of source */}
                    <img src={item.picUrl + "?param=300x300"} width="100%" height="100%" alt="music"/>
                  <div className="play_count">
                    <i className="iconfont play">&#xe885;</i>
                    <span className="count">{getCount (item.playCount)}</span>
                  </div>
                </div>
                <div className="desc">{item.name}</div>
              </ListItem>
            )
          })
        }
      </List>
    </ListWrapper>
  );
  }
 
export default React.memo (RecommendList);