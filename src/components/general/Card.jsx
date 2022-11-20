import React from 'react';

import style from '../../styles/components_rules/Card.module.scss'

const Card = ({
    title, active, idgroup, position, url, thumbnailRemote, thumbnail, icon
}) => {

    let backgroundImage = () => {
        if (thumbnailRemote) {
            return `url('${thumbnailRemote}')`
        }
        if (thumbnail) {
            return `url('images/${thumbnail}')`
        }
        if (icon) {
            return `url('icons/${icon}.svg')`
        }
        return ''
    }

    let pictureClass = () => {
        if (thumbnailRemote || thumbnail) {
            return style._thumbnail
        }
        if (icon) {
            return style._icon
        }
        return style._empty
    }

    return (
        (active === idgroup &&
        <a
            href={url}
            title={title}
            target="_blank"
            rel="noreferrer"
            className={style.card}
            style={{order: position}}
        >
            <span
                className={`${style.card__picture} ${pictureClass()}`}
                style={{backgroundImage: backgroundImage()}}
            ></span>
            <span className={style.card__title}>
                <span>{title}</span>
            </span>

        </a>)
    );
}

export default Card;
