import React from 'react'

import style from '../css/about.module.css';
import maincss from '../css/main.module.css';
import shopcss from '../css/shop.module.css';
import blogcss from '../css/blog.module.css';
import journel2 from '../assets/journel2.avif'
import c_img1 from '../assets/customer1.jpg'
import c_img2 from '../assets/customer2.jpg'
import c_img3 from '../assets/customer3.jpg'
import c_img4 from '../assets/33.jpg'
import journel3 from '../assets/journel3.avif'
import journel1 from '../assets/journel1.avif'
import sign_img_one from '../assets/signature_one.jpeg'



const About = () => {
    return (
        <>
            <section className={`${blogcss.blog_hero} ${style.about_hero_section}`} >
                <div className={`${blogcss.overlay_blog}`}></div>
                <div className={`${maincss.second_last_first} ${style.shop_hero_cont} ${blogcss.blog_hero2}`}>
                    <div className={`${maincss.second_last_first_txt1} ${style.shop_hero_item}`}>
                        <div className={`${maincss.second_last_first_txt1} ${shopcss.shop_hero_heading} ${style.about_hero_heading}`}>
                            <h2>
                                About Timeout Ticker
                            </h2>
                            <a href=""> Home</a>
                            <span>
                                About Us
                            </span>
                        </div>
                    </div>
                </div>
            </section>


            <section className={`${style.about_content}`}>
                <div className={`${style.about_content_cont}`}>

                    <div className={`${style.about_content_text}`}>
                        <h2>
                            Our Story
                        </h2>

                        <p>
                            Founded in 2020 in the pristine landscapes of New Zealand, Timeout <br />Ticker was born from a passion for natural beauty and a commitment<br /> to sustainable skincare. Our founder, Sarah Wilson, a botanist and <br />skincare enthusiast, noticed a gap in the market for truly natural <br />products that harnessed the power of New Zealand's unique flora.
                        </p>

                        <p>What began as a small kitchen operation creating handmade balms<br /> for friends and family has grown into a beloved skincare brand<br /> trusted by thousands across New Zealand and beyond. We remain<br /> true to our roots, crafting small batches of each product to ensure<br /> quality and freshness.</p>

                        <p>At Timeout Ticker, we believe that skincare should be a moment of<br /> pause in your busy day - a timeout that nourishes both your skin and<br /> your spirit. Our products are designed to bring you back to nature,<br /> even in the midst of modern life.</p>
                    </div>
                    <div className={`${style.about_content_img}`}>

                        <img src={journel2} alt="" />

                    </div>

                </div>

            </section>

            <section className={`${style.our_values_section}`}>

                <div className={`${maincss.m_heading} ${maincss.why_heading} ${style.about_our_values_heading}`} >
                    <h2 className={maincss.mh2}>Our Values
                    </h2>
                    <p>
                        The principles that guide everything we do
                    </p>
                </div>

                <div className={`${maincss.why_content} ${style.about_values_card_cont}`}>
                    <div className={`${maincss.why_card_one} ${style.about_values_card_one}`}>
                        <div className={maincss.why_card_one_icon}>
                            <i className={`fas fa-leaf ${style.about_values_card_icons}`}></i>
                        </div>
                        <div >
                            <h3 className={maincss.why_card_one_h}>
                                Purity
                            </h3>
                            <p className={maincss.why_card_one_p}> We use only the purest natural ingredients, free from harsh<br />    x chemicals, synthetic fragrances, and unnecessary additives.</p>
                        </div>

                    </div>
                    <div className={`${maincss.why_card_one} ${style.about_values_card_one}`}>
                        <div className={maincss.why_card_one_icon}>
                            <i className={`fa fa-heart ${style.about_values_card_icons}`}></i>
                        </div>
                        <div >
                            <h3 className={maincss.why_card_one_h}>
                                Sustainability
                            </h3>
                            <p className={maincss.why_card_one_p}>From sourcing to packaging, we prioritize eco-friendly practices that protect New Zealand's precious environment.</p>
                        </div>

                    </div>
                    <div className={`${maincss.why_card_one} ${style.about_values_card_one}`}>
                        <div className={maincss.why_card_one_icon}>
                            <i className={`fas fa-hand-holding-heart ${style.about_values_card_icons}`}></i>
                        </div>
                        <div >
                            <h3 className={maincss.why_card_one_h}>
                                Transparency
                            </h3>
                            <p className={maincss.why_card_one_p}>We believe you have the right to know exactly what you're putting on your<br /> skin. Full ingredient disclosure is our standard.</p>
                        </div>

                    </div>
                    <div className={`${maincss.why_card_one} ${style.about_values_card_one}`}>
                        <div className={maincss.why_card_one_icon}>
                            <i className={`fas fa-seedling ${style.about_values_card_icons}`}></i>
                        </div>
                        <div >
                            <h3 className={maincss.why_card_one_h}>
                                Efficacy
                            </h3>
                            <p className={maincss.why_card_one_p}> Natural doesn't mean ineffective. Our products are formulated to deliver visible results you can see and feel.</p>
                        </div>

                    </div>
                    <div className={`${maincss.why_card_one} ${style.about_values_card_one}`}>
                        <div className={maincss.why_card_one_icon}>
                            <i className={`fas fa-paw ${style.about_values_card_icons}`}></i>
                        </div>
                        <div >
                            <h3 className={maincss.why_card_one_h}>
                                Cruelty-Free
                            </h3>
                            <p className={maincss.why_card_one_p}>We never test on animals and are<br />  proud to be certified by the Leaping Bunny program.</p>
                        </div>

                    </div>
                    <div className={`${maincss.why_card_one} ${style.about_values_card_one}`}>
                        <div className={maincss.why_card_one_icon}>
                            <i className={`fas fa-users ${style.about_values_card_icons}`}></i>
                        </div>
                        <div >
                            <h3 className={maincss.why_card_one_h}>
                                Community
                            </h3>
                            <p className={maincss.why_card_one_p}> We support local growers and producers, and give back to environmental causes that protect<br />  New Zealand's natural beauty.</p>
                        </div>

                    </div>
                </div>





            </section>


            <section className={`${style.about_our_team}`}>


                <div className={`${maincss.m_heading} ${maincss.why_heading} ${style.about_our_values_heading}`} >
                    <h2 className={maincss.mh2}>Meet Our Team
                    </h2>
                   
                    <p>
                        The passionate people behind Timeout Ticker
                    </p>
                </div>


                <div className={maincss.why_content}>
                    <div  className={`${style.about_our_team_card}`}>
                        <div className={`${style.about_team_img}`}>
                            <img src={c_img2} alt="" />
                        </div>
                        <div className={`${style.about_team_name}`}>
                            <h3 className={maincss.why_card_one_h}>
                            Sarah Wilson
                            </h3>
                            <span>
                            Founder & CEO
                            </span>
                            <p className={maincss.why_card_one_p}> Botanist and skincare formulator with 15 years of experience in natural cosmetics.</p>

                            <span className={`${style.about_team_name_ions}`}>
                                
                            <i className="fab fa-linkedin"></i>
                            <i className="fab fa-instagram"></i>
                            </span>
                        </div>

                    </div>
                    <div  className={`${style.about_our_team_card}`}>
                        <div className={`${style.about_team_img}`}>
                            <img src={c_img1} alt="" />
                        </div>
                        <div className={`${style.about_team_name}`}>
                            <h3 className={maincss.why_card_one_h}>
                            Michael Chen
                            </h3>
                            <span>
                            Head of Product Development
                            </span>
                            <p className={maincss.why_card_one_p}>Cosmetic chemist specializing in natural formulations and sustainable packaging.</p>
                            <span className={`${style.about_team_name_ions}`}>
                                
                                <i className="fab fa-linkedin"></i>
                                <i className="fab fa-instagram"></i>
                                </span>
                        </div>

                    </div>
                    <div  className={`${style.about_our_team_card}`}>
                        <div className={`${style.about_team_img}`}>
                            <img src={c_img3} alt="" />
                        </div>
                        <div className={`${style.about_team_name}`}>
                            <h3 className={maincss.why_card_one_h}>
                            Emma Wilson
                            </h3>
                            <span>
                            Sustainability Manager
                            </span>
                            <p className={maincss.why_card_one_p}>Environmental scientist ensuring our operations have minimal impact on the planet.</p>
                            <span className={`${style.about_team_name_ions}`}>
                                
                                <i className="fab fa-linkedin"></i>
                                <i className="fab fa-instagram"></i>
                                </span>
                        </div>

                    </div>
                    <div  className={`${style.about_our_team_card}`}>
                        <div className={`${style.about_team_img}`}>
                            <img src={c_img4} alt="" />
                        </div>
                        <div className={`${style.about_team_name}`}>
                            <h3 className={maincss.why_card_one_h}>
                            Lisa Thompson
                            </h3>
                            <span>
                            Customer Experience


                            </span>
                            <p className={maincss.why_card_one_p}> Skincare expert dedicated to helping customers find their perfect routine..</p>
                            <span className={`${style.about_team_name_ions}`}>
                                
                                <i className="fab fa-linkedin"></i>
                                <i className="fab fa-instagram"></i>
                                </span>
                        </div>

                    </div>
                </div>

            </section>


            <section className={`${style.about_signature} ${style.about_our_team}`}>


                <div className={`${maincss.m_heading} ${maincss.why_heading} ${style.about_our_values_heading}`} >
                    <h2 className={maincss.mh2}>Our Signature Ingredients
                    </h2>
                   
                    <p>
                    Harnessing the power of New Zealand's native plants
                    </p>
                </div>


                <div className={maincss.why_content}>
                    <div  className={`${style.about_our_team_card} ${style.about_signature_item}`}>

                        <div className={`${style.about_signature_img}`}>
                            <img src={sign_img_one} alt="" />
                        </div>

                        <div className={`${style.about_signature_txt}`}>
                            <h4>
                            Manuka Honey
                            </h4>
                            <p>
                            Renowned for its antibacterial and healing properties, our UMF 15+ Manuka honey soothes and repairs skin while providing natural hydration.
                            </p>
                        </div>
                  

                    </div>
                    <div  className={`${style.about_our_team_card} ${style.about_signature_item}`}>

                        <div className={`${style.about_signature_img}`}>
                            <img src={journel2} alt="" />
                        </div>

                        <div className={`${style.about_signature_txt}`}>
                            <h4>
                            Kawakawa
                            </h4>
                            <p>
                            This traditional Māori medicinal plant has anti-inflammatory properties that help calm irritated skin and reduce redness.
                            </p>
                        </div>
                  

                    </div>
                    <div  className={`${style.about_our_team_card} ${style.about_signature_item}`}>

                        <div className={`${style.about_signature_img}`}>
                            <img src={journel3} alt="" />
                        </div>

                        <div className={`${style.about_signature_txt}`}>
                            <h4>
                            Harakeke Flax
                            </h4>
                            <p>
                            The gel from New Zealand flax leaves forms a protective barrier on the skin, locking in moisture and supporting natural repair processes.
                            </p>
                        </div>
                  

                    </div>
                    <div  className={`${style.about_our_team_card} ${style.about_signature_item}`}>

                        <div className={`${style.about_signature_img}`}>
                            <img src={journel1} alt="" />
                        </div>

                        <div className={`${style.about_signature_txt}`}>
                            <h4>
                            Kanuka Oil
                            </h4>
                            <p>
                            Similar to tea tree oil but gentler, Kanuka oil has antimicrobial properties that help combat acne without drying out the skin.
                            </p>
                        </div>
                  

                    </div>
                 
             
                  
                </div>


                

            </section>

            <div className={`${maincss.second_last_first} ${style.about_second_last_cont}`}>
                 <div className={`${maincss.second_last_first_txt}`}>
       
                 <div className={`${maincss.second_last_first_txt1} ${style.about_second_last}`}>
                     <h2>
                     Ready to Experience Natural Skincare?
                     </h2>
                     <p>
                     Discover the Timeout Ticker difference with our carefully crafted products that bring you the best of New Zealand's nature.
                     </p>

                     <a href="">Shop Our Collection</a>
                   </div>
       
                  
       
                 </div>
       
               </div>

        </>
    )
}

export default About
