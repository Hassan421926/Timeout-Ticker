import React from 'react'
import style2 from '../css/main.module.css';
import style3 from '../css/shop.module.css';
import style from '../css/blog.module.css';
import j_1 from '../assets/journel1.avif'
import j_2 from '../assets/journel2.avif'
import j_3 from '../assets/journel3.avif'
import p_img1 from '../assets/p_img1.avif'
import { Link } from 'react-router-dom';

const Blog = () => {
    return (
        <>
            <section className={`${style.blog_hero}`} >
                <div className={`${style.overlay_blog}`}></div>
                <div className={`${style2.second_last_first} ${style3.shop_hero_cont} ${style.blog_hero2}`}>
                    <div className={`${style2.second_last_first_txt1} ${style3.shop_hero_item}`}>
                        <div className={`${style2.second_last_first_txt1} ${style3.shop_hero_heading} ${style.blog_heading_hero}`}>
                            <h2>
                                Natural Beauty Journal
                            </h2>

                            <p>Discover expert skincare advice and beauty tips from our team</p>

                        </div>
                    </div>
                </div>
            </section>



            <section className={`${style.blog_content}`}>
                <div className={`${style.blog_articles}`}>
                    <div className={`${style.blog_articles_heading} ${style2.m_heading}`}> 
                        <h2 className={style2.mh2}>
                            Latest Articles
                        </h2> 
                    </div> 
                    <div className={`${style.blog_articles_cont}`}> 
                        <div className={`${style2.f_card_one}   ${style.blog_card1}`}>
                            <div className={`${style2.f_card_three_img} ${style.journel_card_img} ${style.blog_card_one_img}`}> 
                                <img src={j_1} alt="" />
                            </div> 
                            <div className={`${style2.f_card_one_content} ${style.journel_card_content}  ${style.blog_card_one_txt}`}>

                                <div className={`${style.blog_card_heading}`}>
                                    <span>
                                        Skincare Routine
                                    </span>
                                    <span>
                                        Jan 15, 2025
                                    </span>
                                </div>
                                <h2 className={style2.card_one_heading}>5 Steps to a Natural Skincare<br></br> Routine</h2>
                                <p className={`${style2.card_one_p} ${style2.journel_card_p}`}>Discover how to simplify your skincare<br /> routine using only natural products that <br /> actually work for your skin type.</p>

                                <Link className={`${style2.content_btn} ${style2.journel_card_btn}`} to='/blog'>
                                    Read More
                                </Link> 
                            </div> 
                        </div>


                        <div className={`${style2.f_card_one}   ${style.blog_card1}`}> 
                            <div className={`${style2.f_card_three_img} ${style.journel_card_img}  ${style.blog_card_one_img}`}>
                                <img src={j_2} alt="" />
                            </div> 
                            <div className={`${style2.f_card_one_content} ${style.journel_card_content}  ${style.blog_card_one_txt} ${style.blog_card_one_txt}`}> 
                                <div className={`${style.blog_card_heading}`}>
                                    <span>
                                        Skincare Routine
                                    </span>
                                    <span>
                                        Jan 15, 2025
                                    </span>
                                </div>
                                <h2 className={style2.card_one_heading}>The Power of New Zealand's Native Ingredients</h2>
                                <p className={`${style2.card_one_p} ${style2.journel_card_p}`}>Explore the unique benefits of Manuka <br />honey, Kawakawa, and other native<br /> plants in skincare formulations.</p>

                                <Link className={`${style2.content_btn} ${style2.journel_card_btn}`} to='/blog'>
                                    Read More
                                </Link>


                            </div>
                        </div>


                        <div className={`${style2.f_card_three}   ${style.blog_card1}`}>

                            <div className={`${style2.f_card_three_img} ${style2.journel_card_img}  ${style.blog_card_three_img}`}>
                                <img src={j_3} alt="" />
                            </div>

                            <div className={`${style2.f_card_one_content} ${style2.journel_card_content}  ${style.blog_card_one_txt} `}>
                                <div className={`${style.blog_card_heading}`}>
                                    <span>
                                        Skincare Routine
                                    </span>
                                    <span>
                                        Jan 15, 2025
                                    </span>
                                </div>
                                <h2 className={style2.card_one_heading}>Adjusting Your Skincare for Seasonal Changes</h2>
                                <p className={`${style2.card_one_p} ${style2.journel_card_p}`}>Learn how to modify your skincare routine<br /> as the seasons change to keep your skin <br />healthy year-round.</p>

                                <Link className={`${style2.content_btn} ${style2.journel_card_btn}`} to='/blog'>
                                    Read More
                                </Link> 
                            </div>
                        </div> 
                    </div>
                </div>



                <div className={`${style.blog_filter}`}> 
                    <div className={`${style.filter_cont}`}> 
                        <div className={`${style.blog_search_heading}`}>
                            <h2>
                                Search
                            </h2> 
                            <input type="search" />
                            <i className={`fas fa-search`}></i>
                        </div> 
                        <div className={`${style.blog_catagories} ${style.blog_search_heading}  `}> 
                            <div className={`${style.blog_list_animation}`}>
                                <h2>
                                    Catagories
                                </h2>
                                <ul>
                                    <li> <a href="">Skinncare Routine (12)</a> </li>
                                    <li> <a href="">Natural Ingredients (8)</a> </li>
                                    <li> <a href="">Product Guides (6)</a> </li>
                                    <li> <a href="">Sustainability (5)</a> </li>
                                    <li> <a href="">Seasonal Care (4)</a> </li>
                                    <li> <a href="">Wellness (3)</a> </li>

                                </ul>
                            </div>  
                        </div> 
                        <div className={`${style.blog_search_heading}`}>
                            <h2>
                                Popular Posts
                            </h2>
                        </div>

                        <div className={`${style.popular_posts_cont}`}> 
                            <div className={`${style.popular_post_1}`}> 
                                <div className={`${style.popular_post_1_img}`}>
                                    <img src={j_1} alt="" />
                                </div> 
                                <div className={`${style.popular_post_1_txt}`}>
                                    <h3>5 Steps to a Natural Skincare Routine</h3>
                                    <span>Jan 15, 2025</span>
                                </div> 
                            </div> 
                            <hr className={`${style.blog_hr}`} />

                            <div className={`${style.popular_post_1}`}>
                                <div className={`${style.popular_post_1_img} ${style.popular_post_1_img2}`}>
                                    <img src={j_2} alt="" />
                                </div>
                                <div className={`${style.popular_post_1_txt}`}>
                                    <h3>The Power of New Zealand's Native Ingredients</h3>
                                    <span>Feb 02, 2025</span>
                                </div>
                            </div>
                            <hr className={`${style.blog_hr}`} />
                            <div className={`${style.popular_post_1} ${style.popular_posts_bottom}`}>
                                <div className={`${style.popular_post_1_img} ${style.popular_post_1_img3}`}>
                                    <img src={p_img1} alt="" />
                                </div>

                                <div className={`${style.popular_post_1_txt}`}>
                                    <h3>
                                        How to Choose the Right Serum for Your Skin Type</h3>
                                    <span>Apr 05, 2025</span>
                                </div>

                            </div>
                            <div className={`${style.blog_search_heading}`}>
                                <h2>
                                    Popular Posts
                                </h2>
                            </div>

                            <div className={`${style.blog_tags}`}>
                                <a href="">Skincare</a>
                                <a href="">Natural</a>
                                <a href="">Routine</a>
                                <a href="">Ingredients</a>
                                <a href="">ECo-friendly</a>
                                <a href="">Wellness</a>
                                <a href="">DIY</a>
                                <a href="">Tips</a>
                            </div>
                            <div className={`${style.blog_newsletter}`}>
                                    <h2>
                                    Newsletter
                                    </h2>
                                    <p>Subscribe to get skincare tips and exclusive offers straight to your inbox.</p>

                                    <input type="text" placeholder='Your Name'/>
                                    <input type="email" name="" placeholder='YourEmail' id="" />
                                    <Link href="/contact">Subscribe</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Blog
