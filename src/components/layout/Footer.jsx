import React from 'react'

import FooterTag from '../general/FooterTag';
import { FooterLinks } from '../../data/data';

export default function Footer() {
    return (
        <footer className="footer">
            {FooterLinks.map((link, id) => {
                return (
                    link.id &&
                    <FooterTag key={id} title={link.title} url={link.url} icon={link.icon} position={link.position}/>
                )
            })}
        </footer>
    )
}


