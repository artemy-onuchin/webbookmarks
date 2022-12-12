import React from 'react'

import FooterTag from '../general/FooterTag';
import { FooterLinks } from '../../data/data';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__icons">
                {FooterLinks.map((link, id) => {
                    return (
                        link.id &&
                        <FooterTag key={id} title={link.title} url={link.url} icon={link.icon} position={link.position}/>
                    )
                })}
            </div>

            <div className="footer__copyright">
                <div className="footer__copyright-react">
                    Build on <a href="https://reactjs.org/" rel="noreferrer" target="_blank">React</a> with <a href="https://github.com/artemy-onuchin" rel="noreferrer" target="_blank">love</a>.
                </div>
                <a href="https://buymeacoffee.com/twy0voz" className="footer__copyright-coffee" rel="noreferrer" target="_blank">
                    <img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style={{height: '25px', width: '90px'}} />
                </a>
            </div>
        </footer>
    )
}


