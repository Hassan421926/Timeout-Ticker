import React from 'react';
import style from '../css/hero.module.css';
import main_img from "../assets/imgh.jpg";
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <>

            <div className={style.hcontainer}>
                <section className={style.hsection} style={{ backgroundImage: `url(${main_img})` }}>
                    <div className={style.hh}>
                        <div className={style.hero}> <h1 className={style.hheading} >Natural Beauty, Radiant Skin</h1>
                            <p className={style.hpara}  >
                                Discover premium skincare products crafted with organic ingredients from New Zealand's pristine nature
                            </p>
                            <Link className={style.hbtn} to="shop">
                                Shop Now

                            </Link>
                        </div>
                    </div>
                </section>

            </div>


        </>
    )
}

export default Hero
