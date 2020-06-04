import React from 'react';
import './card-list-component.css';
import {CardDispaly} from './card-display';
export const CardList = (props) => {
    return (
        <div className='cardlist'>
            {props.monsters.map(monster =>
                 <CardDispaly key={monster.id} monster={monster} />
                )}
        </div>
    )
}
