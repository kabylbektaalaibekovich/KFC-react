import React, { useEffect, useState } from 'react';
import { Link} from 'react-router-dom';
import { FaUser } from "react-icons/fa";
import './Headre.css'
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile , setIsMobile] = useState(true)

  const changeIsMobile = () => {
    setIsMobile(window.innerWidth <= 1020)
    }
   
const toggleMobileMenu = () => {
  setMobileMenuOpen(!isMobileMenuOpen);
}; 

       
useEffect(() => {
    changeIsMobile();
  window.addEventListener('resize' , changeIsMobile);
  return () => {
    window.removeEventListener('resize' , changeIsMobile)
  }
  },[])

      
    return (
    <div id='header'>
        <div className="container">
            <div className="header">
            <Link to='/'> <img src="https://1000logos.net/wp-content/uploads/2017/03/Kfc_logo.png" alt="" /></Link>
               {
                !isMobile ? (
                    <nav>
                    <Link to='/menu'><h3>Меню</h3></Link>
                    <Link to='/restoran'><button className='resBtn'>Рестораны</button></Link>
                    <Link to='/menu'><button className='menuBtn'>Просмотр Меню</button></Link>
                    <Link><h4>+996 (552) 10-21-79</h4></Link>
                    <Link to='/basket'><ion-icon name="cart-outline"></ion-icon></Link>
                    <Link  to='/admin'><button className='btn3'><FaUser /></button></Link>
                    
                     
                </nav>
                ): <div className='burgerMenu'>
                  
<button className='menuBtn' onClick={toggleMobileMenu}>
<GiHamburgerMenu />
</button>
{isMobileMenuOpen && (
<div className="mobile-menu">
<ul className="space-y-4">
<li> <Link to='/menu'     onClick={toggleMobileMenu}><h3>Меню</h3></Link></li>
<li> <Link to='/restoran' onClick={toggleMobileMenu}><h3>Рестораны</h3></Link></li>
<li> <Link><h4>+996 (552) 10-21-79</h4></Link></li>
<li><Link  to='/admin' onClick={toggleMobileMenu}><button className='adminBtn'><FaUser /></button></Link></li>
<li> <Link to='/basket'   onClick={toggleMobileMenu}><ion-icon name="cart-outline"></ion-icon></Link></li>
</ul>
</div>
)} 

                </div>

               }
            </div>
        </div>


    </div>
    );
};

export default Header;