import React from 'react';

import Card from '../general/Card';

const Content = () => {
    return (
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
    );
}

export default Content;
