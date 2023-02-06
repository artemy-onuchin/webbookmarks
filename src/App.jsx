import { useState, useEffect } from 'react';

import Header from './components/layout/Header';
import Navigation from './components/layout/Navigation';
import Content from './components/layout/Content';
import Footer from './components/layout/Footer';
import { Groups } from './data/data';

function App() {
    const [menuStatus, setMenuStatus] = useState('');
    const [activeGroupId, setActiveGroupId] = useState(localStorage.getItem('group') || Groups[0].id)

    useEffect(() => {
        if(menuStatus) {
            document.body.className = 'no-scroll'
        } else {
            document.body.className = ''
        }
    }, [menuStatus])

    useEffect(() => {
        localStorage.setItem('group', activeGroupId)
    }, [activeGroupId]);

    return (
        <div className="wrapper">
            <Header menuStatus={menuStatus} onClickBurger={() => setMenuStatus(!menuStatus)}/>
            <Navigation open={menuStatus} activeTab={activeGroupId} onClickTabs={tab => {
                setActiveGroupId(tab)
                setMenuStatus(!menuStatus)
            }}/>
            <Content active={+activeGroupId}/>
            <Footer/>
        </div>
    );
}

export default App;
