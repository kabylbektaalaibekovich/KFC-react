import React, { useState, useEffect } from 'react';
import { BsTelephone } from "react-icons/bs";
import { SiInstagram, SiWhatsapp } from "react-icons/si";
import { FaFacebookSquare } from "react-icons/fa";
import { Link } from 'react-router-dom';
import './Infa.css';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const Infa = () => {
    const [infa, setInfa] = useState(true);
    


    const changeIsMobile = () => {
        setInfa(window.innerWidth <= 1024);
    }

    useEffect(() => {
        changeIsMobile()
        window.addEventListener('resize', changeIsMobile);
        return () => {
            window.removeEventListener('resize', changeIsMobile);
        }
    }, []);

    return (
        <div id="infa">
            <div className="container">
                <div className="infarmation">
                {
                        !infa ? (
                            <>
                    <div className="infa1">
                        <img src="https://devkfcwebsites.fimble.io/admin/files/4672.svg" alt="" />
                        <span><BsTelephone /> +996 (552)10-21-79</span>
                    </div>
               
                        
                                <div className="infa2">
                                    <h5>Информация.</h5>
                                    <Link to='/about'><h6>История</h6></Link>
                                    <Link to='/ingred'><h6>11 ингредиентов</h6></Link>
                                    <a href="https://www.kfc.kg/admin/files/5824.pdf"><h6>Аллергены</h6></a>
                                    <Link to='/restoran'><h6>Рестораны</h6></Link>
                                </div>
                                <div className="infa3">
                                    <h5>Нужно помощь?</h5>
                                    <a href="https://www.kfc.kg/contact-us"><h6>Свяжитесь с нами</h6></a>
                                    <a href=""><h6>Карьера в KFC</h6></a>
                                    <a href="https://www.kfc.kg/page/terms-and-conditions"><h6>Правила и условия</h6></a>
                                </div>
                                <div className="infa4">
                                    <h5>Способы связи.</h5>
                                    <div className="span">
                                        <a href="https://www.instagram.com/taalaibekows?igsh=NmFkZXNpcDk3NDR5&utm_source=qr"><span><SiInstagram /></span></a>
                                        <a href="https://www.facebook.com/kamchybek.samatov.3"><span><FaFacebookSquare /></span></a>
                                        <a href="https://wa.me/message/GF2E6PMLCSV2H1"><span><SiWhatsapp /></span></a>
                                    </div>
                                </div>
                                <div className="infa5">
                                    <img className='visa' src='https://brandlogos.net/wp-content/uploads/2016/11/visa-logo-preview-400x400.png' alt="" />
                                    <a href='https://apps.apple.com/app/id1459828752'><img className='kom' src="https://www.kompanion.kg/assets/img/logo.png" alt="" /></a>
                                    <a href="https://apps.apple.com/app/id922922121"><img src="https://mbank.kg/media/logo/mbank_logo_full_E3tUOOl.png" alt="" /></a>
                                </div>
                            </>
                        ) : (
                            <div className='infaMobile'>
                        <div className="infa1">
                        <img src="https://devkfcwebsites.fimble.io/admin/files/4672.svg" alt="" />
                        <span><BsTelephone /> +996 (552)10-21-79</span>
                        </div>
                       <div className='accarDiv'>
                       <Accordion className='accardion'>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel2-content"
                                        id="panel2-header"
                                    >
                                       Информация.
                                    </AccordionSummary>
                                    <AccordionDetails>
                                    <Link to='/about'><h6>История</h6></Link>
                                    <Link to='/ingred'><h6>11 ингредиентов</h6></Link>
                                    <a href="https://www.kfc.kg/admin/files/5824.pdf"><h6>Аллергены</h6></a>
                                    <Link to='/restoran'><h6>Рестораны</h6></Link>
                                    </AccordionDetails>
                                </Accordion>
                                    
                              <Accordion className='accardion'>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel2-content"
                                        id="panel2-header"
                                    >
                                       Нужно помощь?
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                                    </AccordionDetails>
                                </Accordion>
                       </div>

                           
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Infa;
