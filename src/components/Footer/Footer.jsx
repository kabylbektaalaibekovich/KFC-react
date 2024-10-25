import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
      <div id="footer">
        <div className="container">
            <div className="footer">
           <div className="mainText">
           <div className="text-1">
            <a href="https://www.kfc.kg/page/privacy-policy"><h2>Политика конфиденциальности </h2></a> <a  href="https://www.kfc.kg/page/terms"><span>Правила и условия</span></a>

              </div>
              <div className="text-2">
                <h2>Copyright 2024 <span>KFC.KG</span> All Rights Reserved.</h2>
              </div>
              <div className="text-3">
              <a href="https://www.fimble.io/"><img className='fimble' src="https://wp-website.safetyculture.com/wp-content/uploads/sites/3/2023/11/Fimble-logo.png" alt="Fimble!!!" /> </a>
              </div>
           </div>
            </div>
        </div>
        </div>
    );
};

export default Footer;