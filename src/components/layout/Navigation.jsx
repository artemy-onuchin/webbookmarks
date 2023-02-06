import React from 'react';

import { Groups } from '../../data/data';

export default function Navigation({open, onClickTabs, activeTab}) {

    let tabs = Groups.map((item) => {
        return(
            <span
                key={item.id}
                onClick={() => {
                    onClickTabs(item.id);
                }}
                className={`link${+activeTab === item.id ? ' _active' : ''}`}
                style={{order: item.position}}
            >
                {item.title}
            </span>
        )
    })

    return (
        <nav className={`nav${open ? ' _isOpen' : ''}`}>
            {tabs}
        </nav>
    )
}
