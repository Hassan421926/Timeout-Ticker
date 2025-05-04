import React from 'react' 
import { Link } from 'react-router-dom';
import style2 from '../css/main.module.css';

const text = () => {
    return (
        <>
            <footer className={style2.main_footer} >
                <div className={`${style2.main_footer_card}`}>

                    <div className={`${style2.main_footer_card1_text}`}>
                        <a href='/'>
                            Timeout Ticker
                            <span>
                                .
                            </span>
                        </a>
                        <p>
                            Bringing you the purest natural skincare products from New Zealand's pristine environment since 2020.
                        </p>

                    </div>
                    <div className={`${style2.footer_icons}`}>
                        <i className={`fab fa-facebook-f ${style2.footer_icon_hover}`}></i>
                        <i className={`fab fa-instagram ${style2.footer_icon_hover}`}></i>
                        <i className={`fab fa-pinterest-p ${style2.footer_icon_hover}`}></i>
                        <i className={`fab fa-twitter ${style2.footer_icon_hover}`}></i>
                    </div>

                </div>
                <div className={`${style2.main_footer_card2}`}>
                    <span className={`${style2.footer_quick_link}`}>Quick Links
                    </span>

                    <div className={`${style2.footer_quick_links}`}>

                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="shop">Shop</Link></li>
                            <li><Link to="about">About Us</Link></li>
                            <li><Link to="blog">Blog</Link></li>
                            <li><Link to="contact">Contact</Link></li>
                        </ul>

                    </div>
                </div>
                <div className={`${style2.main_footer_card3}`}>
                    <span className={`${style2.footer_quick_link2_heading}`}>Customer Service
                    </span>

                    <div className={` ${style2.footer_quick_link2}`}>

                        <ul>
                            <li><Link to="blog">Privacy Policy</Link></li>
                            <li><Link to="blog">Terms & Conditions</Link></li>
                        </ul>

                    </div>
                </div>
                <div className={`${style2.main_footer_card4}`}>
                    <span className={`${style2.footer_last_card_heading}`}>
                        Contact Us

                    </span>
                    <div>
                        <span className={`${style2.footer_last_card_location}`}>

                            <i className="fa fa-map-marker-alt"></i>
                            22 Fellbridge Rise, Wakefield &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7025, New Zealand


                        </span>
                        <span className={`${style2.footer_last_card_phone}`}>

                            <i className="fa fa-phone"></i>

                            +64 272 851 651</span>
                        <span className={`${style2.footer_last_card_email}`}>

                            <i className="fa fa-envelope"></i>

                            hello@timeoutticker.org</span>
                    </div>
                </div>


            </footer>
            <footer style={{ backgroundColor: '#333333' }}>

                <div className={style2.last_footer}>
                    <hr />
                    <p>© 2025 Timeout Ticker. All rights reserved. Proudly made in New Zealand.</p>
                </div>

            </footer>



        </>
    )
}

export default text
