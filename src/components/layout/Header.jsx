import React from 'react'

export default function Header() {
    return (
        <header className="header">
            <div className="header__inner container">
                <div className="logo"></div>
                <button className="button burger" data-classname="burger"></button>
                <div className="buttons">
                    <button className="button reg"></button>
                    <button className="button login"></button>
                </div>
            </div>
        </header>
    )
}
