import React from 'react';

import style from '../../styles/components_rules/Card.module.scss'

export default function Card({name}) {
    return (
        <div className={style.card}>{name}</div>
    )
}
