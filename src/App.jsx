import { useState, useEffect } from 'react';

import Header from './components/layout/Header';
import Navigation from './components/layout/Navigation';
import Card from './components/general/Card';
import Footer from './components/layout/Footer';
import { Groups } from './data/data';

function App() {
    const [menuStatus, setMenuStatus] = useState('');
    const [activeGroupId, setActiveGroupId] = useState(Groups[0].id)

    useEffect(() => {
        if(menuStatus) {
            document.body.className = 'no-scroll'
        } else {
            document.body.className = ''
        }
    }, [menuStatus])

    return (
        <div className="wrapper">
            <Header menuStatus={menuStatus} onClickBurger={() => setMenuStatus(!menuStatus)}/>
            <Navigation open={menuStatus} onClickTabs={tab => setActiveGroupId(tab)}/>
            <main className="main">
                <h1 className="card__list-name">Tab group #1</h1>
                <div className="card__list">
                    <Card name="YouTube"/>
                    <Card name="Google"/>
                    <Card name="Instagram"/>
                    <Card name="Facebook"/>
                    <Card name="Yahoo"/>
                    <Card name="Microsoft"/>
                    <Card name="Wikipedia"/>
                    <Card name="Twitter"/>
                    <Card name="Amazon"/>
                    <Card name="Ebay"/>
                    <Card name="Apple"/>
                    <Card name="Paypal"/>
                    <Card name="Rapidshare"/>
                    <Card name="Adobe"/>
                    <Card name="TikTok"/>
                    <Card name="Minecraft"/>
                    <Card name="Steam"/>
                    <Card name="Dribbble"/>
                    <Card name="Behance"/>
                </div>
            </main>
            <Footer/>
        </div>
    );
}

export default App;
