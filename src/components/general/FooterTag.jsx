import React from 'react';

import style from '../../styles/components_rules/FooterTag.module.scss'

export default function FooterTag({name}) {
    return (
        <div className={style.item}>{name}</div>
    )
}
