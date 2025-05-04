import React from 'react';
import style from '../css/navbar.module.css';
import { useState, useEffect } from 'react' 
import { Link } from 'react-router-dom';


const Navbar = (props) => {
  const [hasShadow, setHasShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Change 100 to match the bottom of your hero section
      setHasShadow(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);







  return (
    <>
      <header className={`${style.nheader} ${hasShadow ? style.shadow : ''}`}>
        <div className={style.head} >
          <button className={style.na}  >Timeout Ticker.</button>
          <nav className={style.nnav} >
            <ul className={style.header_menu}>
              <li className={style.nli}><Link className={style.na} to="/">Home</Link></li>
              <li className={style.nli}><Link className={style.na} to="/shop">Shop</Link></li>
              <li className={style.nli}><Link className={style.na} to="/about">About</Link></li>
              <li className={style.nli}><Link className={style.na} to="/blog">Blog</Link></li>
              <li className={style.nli}><Link className={style.na} to="/contact">Contact</Link></li>
            </ul>
          </nav>


          <button className={style.navbar_cart}>
            <i className="fa fa-shopping-cart"></i>
            <span>{props.cartCount}</span>


          </button>
        </div>
      </header>


    </>
  );
};

export default Navbar;