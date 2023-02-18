import React, {useState} from 'react';

import Card from '../general/Card';
import { Data, Groups } from '../../data/data';

const Content = ({active}) => {
    const [visibleDesc, setVisibleDesc] = useState(false);
    const el = document.querySelector('.card__list-desc-text')

    let cardList = Data.map((item) => {
        return(
            <Card
                key={item.id}
                title={item.title}
                url={item.url}
                thumbnail={item.thumbnail}
                thumbnailRemote={item.thumbnailRemote}
                icon={item.icon}
                group={item.group}
                description={item.description}
                active={active}
                position={item.position}
                idgroup={item.idgroup}
                hideTitle={item.hideTitle}
            />
        )
    })

    let groupName = Groups.map((item)=>{
        return(
            item.id === active && item.title
        )
    })

    let groupDesc = Groups.map((item)=>{
        return(
            item.id === active && item.description
        )
    })

    return (
        <main className="main">
            <h1 className="card__list-name">
                {groupName}&nbsp;
                <span
                    className="card__list-info"
                    onClick={() => setVisibleDesc(!visibleDesc)}
                >
                    <img width="12" height="12" src="/icons/info.svg" alt="Information"/>
                    {/*<span className={`card__list-triangle${visibleDesc ? ' _isVisible' : ''}`}></span>*/}
                </span>

                <span className="card__list-tooltip">
                    <span className={`card__list-desc${visibleDesc ? ' _isVisible' : ''}`}>
                        <span className={`card__list-desc-text ${(el?.scrollHeight > el?.clientHeight) ? 'has-overflow' : 'no-overflow'}`}>
                            {groupDesc}
                        </span>
                        <span
                            className="card__list-desc-close"
                            onClick={() => setVisibleDesc(false)}
                        >
                            close
                        </span>
                    </span>
                </span>

            </h1>

            <div className="card__list">
                {cardList}
            </div>
        </main>
    );
}

export default Content;
