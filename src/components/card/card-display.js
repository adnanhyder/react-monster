import React from "react";
import './card-display.css';

export const CardDispaly = props => (
    <div className="card-container">
        <img alt="adnanrobot" className="image-adjust"  src={`https://robohash.org/${props.monster.id}&set=set2`}/>
        <h2>{props.monster.name}</h2>
        <p>{props.monster.email}</p>
    </div>
);