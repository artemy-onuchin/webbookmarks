import React from 'react'

export default function Header({menuStatus, onClickBurger}) {
    return (
        <header className={`header${menuStatus ? '' : ' _isShadow'}`}>
            <div className="logo">
                <img src="../images/logo.svg" alt="WebBookmarks" />
            </div>

            <button
                className={`burger ${menuStatus ? '_isActive' : ''}`}
                onClick={() => onClickBurger(!menuStatus)}
            ></button>
        </header>
    )
}
