import React from 'react';
import { Link } from 'react-router-dom';

const PortifolioPage = () => (
    <div>
       <h1> Portifolio </h1>
        <h2> Here is some of my works</h2>
        <ul>
          <li><Link to="/portifolio/1"> Project 01</Link> </li> 
          <li><Link to="/portifolio/2"> Project 02</Link> </li> 
          <li><Link to="/portifolio/3"> Project 03</Link> </li> 
          <li><Link to="/portifolio/4"> Project 04</Link> </li> 
          <li><Link to="/portifolio/5"> Project 05</Link> </li> 
        </ul>
    </div>
);

export default PortifolioPage;