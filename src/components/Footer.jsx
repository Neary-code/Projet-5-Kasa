import React from 'react';
import logoFooter from "../assets/images/logo-footer.png";

const Footer = () => {
        return (
            <div className='footer'>
                    <img src={logoFooter} alt="Logo Kasa" className="logo-footer" />
                    <p className="text-footer">© 2020 Kasa. All rights reserved</p>
                    </div>
        );
    };

export default Footer;