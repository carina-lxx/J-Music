import React from 'react';
import { renderRoutes } from 'react-router-config';
import { Top, Tab, TabItem } from './style';
import { NavLink } from 'react-router-dom';


function Home (props) {
    const { route } = props;

    return (
        <div>
        <Top>
          <span className="iconfont menu">&#xe65c;</span>
          <span className="title">Web App</span>
          <span className="iconfont search">&#xe62b;</span>
        </Top>
        <Tab>
          <NavLink to="/recommend" activeClassName="selected"><TabItem><span > Recommendation </span></TabItem></NavLink>
          <NavLink to="/singers" activeClassName="selected"><TabItem><span > Singers </span></TabItem></NavLink>
          <NavLink to="/rank" activeClassName="selected"><TabItem><span > Rank </span></TabItem></NavLink>
        </Tab>
        { renderRoutes (route.routes) }
      </div>
        );
}

export default React.memo (Home);