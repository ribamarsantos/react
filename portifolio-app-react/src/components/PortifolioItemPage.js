import React from 'react';

const PortifolioItemPage = (props) => (
    <div>
       <h1> Work #{props.match.params.id}</h1>
       <p> This project was created in order to help the company called ... to accomplish ...</p>
       <h3> Technologies used: </h3>
       <ul>
         <li> ReactJS </li>
         <li> NodeJS </li>
         <li> MongoDB </li>
         <li> Heroku </li>   
       </ul> 
    </div>
);

export default PortifolioItemPage;