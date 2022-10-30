import React from 'react'

export default function Navigation({open}) {
    return (
        <nav className={`nav${open ? ' _isOpen' : ''}`}>
            <a href="sonelink" className="link">Link #1</a>
            <a href="sonelink" className="link">Link #2</a>
            <a href="sonelink" className="link">Link #3</a>
            <a href="sonelink" className="link">Link #4</a>
            <a href="sonelink" className="link">Link #5</a>
            <a href="sonelink" className="link">Link #6</a>
            <a href="sonelink" className="link">Link #7</a>
            <a href="sonelink" className="link">Link #8</a>
        </nav>
    )
}
