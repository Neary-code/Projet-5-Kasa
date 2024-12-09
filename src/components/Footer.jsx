import React from 'react';
import logoFooter from '../assets/images/logo-footer.png';

const Footer = () => {
        return (
            <div className='footer'>
                <div className="logo-footer">
                    <img src={logoFooter} alt="Logo Kasa" className="logo-footer" />
                    </div>
            </div>
        );
    };

export default Footer;