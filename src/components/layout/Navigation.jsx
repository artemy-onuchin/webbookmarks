import React, { useState } from 'react';

import { Groups } from '../../data/data';

export default function Navigation({open, onClickTabs}) {
    const [activeTab, setActiveTab] = useState(Groups[0].id);

    console.log(activeTab);

    let tabs = Groups.map((item) => {
        return(
            <span
                key={item.id}
                onClick={() => onClickTabs(item.id, setActiveTab(item.id))}
                className={`link${activeTab === item.id ? ' _active' : ''}`}
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
