import React from 'react';

import style from '../../styles/components_rules/FooterTag.module.scss'

export default function FooterTag(props) {
    return (
        <a
            href={props.url}
            className={style.item}
            rel="noreferrer"
            target="_blank"
        >
            <img
                src={`icons/google/${props.icon}.svg`}
                alt={props.title}
                title={props.title}
            />
        </a>
    )
}
