import React from 'react';

import Card from '../general/Card';
import { Data, Groups } from '../../data/data';

const Content = ({active}) => {

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
                describtion={item.describtion}
                active={active}
                position={item.position}
                idgroup={item.idgroup}
                hideTitle={item.hideTitle}
            />
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
                {groupDesc}
            </h1>
            <div className="card__list">
                {cardList}
            </div>
        </main>
    );
}

export default Content;