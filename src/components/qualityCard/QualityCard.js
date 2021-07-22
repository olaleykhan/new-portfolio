import React, { Children } from 'react'
import Icon from '../icon/Icon';
import './QualityCard.scss'

function QualityCard({...props}) {
    return (
        <div className="quality-card">
            <Icon {...props} />

            <p className="text">{props.children && props.children}</p>
            
        </div>
    )
}

export default QualityCard;
