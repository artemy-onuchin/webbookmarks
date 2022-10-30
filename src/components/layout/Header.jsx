import React from 'react'

export default function Header({menuStatus, onClickBurger}) {
    return (
        <header className="header">
            <div className="logo"></div>

            <button
                className={`burger ${menuStatus ? '_isActive' : ''}`}
                onClick={() => onClickBurger(!menuStatus)}
            ></button>

            <div className="buttons">
                <button className="button reg"></button>
                <button className="button login"></button>
            </div>
        </header>
    )
}
