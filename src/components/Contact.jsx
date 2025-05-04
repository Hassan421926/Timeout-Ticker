import React from 'react'

import style from '../css/contact.module.css';
import style2 from '../css/main.module.css';
import style3 from '../css/blog.module.css';

const Contact = () => {
    return (
        <>

            <section className={`${style3.blog_hero} ${style.contact_hero}`} >
                <div className={`${style3.overlay_blog}`}></div>
                <div className={`${style2.second_last_first} ${style3.shop_hero_cont} ${style3.blog_hero2}`}>
                    <div className={`${style2.second_last_first_txt1} ${style3.shop_hero_item}`}>
                        <div className={`${style2.second_last_first_txt1} ${style3.shop_hero_heading} ${style3.blog_heading_hero}`}>
                            <h2>
                                Get In Touch
                            </h2>

                            <p>We'd love to hear from you about our natural skincare products</p>

                        </div>
                    </div>
                </div>
            </section>


            <section className={`${style.contact_main}`}>

                <div className={`${style2.m_heading} ${style.contact_main_heading}`} >
                    <h2 className={style2.mh2}>
                        Contact Us
                    </h2>
                    <p>
                        Have questions about our products or need assistance? Reach out to our friendly team.
                    </p>
                </div>



                <div className={`${style.contact_info_form_cont}`}>
                    {/* <div className={`${}`}> */}
                    <div className={`${style.contact_info}`}>

                        <h2 className={style2.content_heading} >
                            Contact Information
                        </h2>

                        <div className={`${style.contact_location_phone}`}>
                            <div className={`${style.contact_location_phone_sub_cont}`}>
                                <div className={`${style2.footer_last_card_location}`}>

                                    <i className="fa fa-map-marker-alt"></i>
                                    <h3>Our Location
                                    </h3>
                                    <p>
                                        22 Fellbridge Rise, Wakefield 7025, New Zealand

                                    </p>
                                </div>
                                <div className={`${style2.footer_last_card_phone}`}>

                                    <i className="fa fa-phone"></i>
                                    <h3>Phone
                                    </h3>

                                    <p>+64 272 851 651</p>
                                </div>
                                <div className={`${style2.footer_last_card_email}`}>

                                    <i className="fa fa-envelope"></i>
                                    <h3>Email
                                    </h3>

                                    <p>
                                        hello@timeoutticker.org

                                    </p>

                                </div>
                                <div className={`${style2.footer_last_card_email}`}>

                                    <i className="fas fa-clock"></i>
                                    <h3>Business Hours
                                    </h3>

                                    <p> Monday - Friday: 9am - 5pm<br />

                                        Saturday: 10am - 2pm<br />

                                        Sunday: Closed<br />

                                    </p>

                                </div>
                            </div>
                        </div>

                        <div className={`${style.contact_links}`}>
                            <h2 className={style2.content_heading} >
                                Follow Us
                            </h2>

                            <div className={`${style2.footer_icons}`}>
                                <i className={`fab fa-facebook-f ${style2.footer_icon_hover}`}></i>
                                <i className={`fab fa-instagram ${style2.footer_icon_hover}`}></i>
                                <i className={`fab fa-pinterest-p ${style2.footer_icon_hover}`}></i>
                                <i className={`fab fa-twitter ${style2.footer_icon_hover}`}></i>
                            </div>

                        </div>



                    </div>

                    <div className={`${style.contact_form}`}>

                        <div className={`${style.form_label}`}>
                            <h2 className={style2.content_heading} >
                                Send Us a Message
                            </h2>

                        </div>

                        <div className={`${style.form_name_label}`}>
                            <label htmlFor="">Your Name</label>
                            <input type="text" required />
                        </div>
                        <div className={`${style.form_name_label}`}>
                            <label htmlFor="" required>Email Address</label>
                            <input type="text" />
                        </div>
                        <div className={`${style.form_name_label}`}>
                            <label htmlFor="">Phone Number (Optional)</label>
                            <input type="phone" />
                        </div>
                        <div className={`${style.form_name_label}`}>
                            <label htmlFor="">Subject</label>
                            <select name="" id="">

                                <option value="" selected disabled>Select a subject</option>
                                <option value="">Product Question</option>
                                <option value="">Order Help</option>
                                <option value="">Skincare Advice</option>
                                <option value="">Wholesale Inquiry</option>
                                <option value="">Other</option>
                            </select>
                        </div>

                        <div className={`${style.form_name_label}`}>
                            <label htmlFor="">Your Message</label>
                            <textarea name="" id="" rows={9}></textarea>
                        </div>


                        <button className={` ${style2.journel_last_btn} ${style.form_submit}`}>

                            Send Message

                        </button>

                    </div>

                </div>

                



            </section>
            <section className={`${style2.faqs} ${style.contact_question_cont}`}>
                    <div className={`${style2.m_heading} ${style.contact_main_heading}`} >
                        <h2 className={style2.mh2}>
                            Common Questions
                        </h2>
                        <p>
                            Find quick answers to our most frequently asked questions below.
                        </p>
                    </div>

                    <div className={style2.faqs_container}>
                        <div className={style2.faqs_item}>
                            <div className={`${style2.faqs_item_q} ${style2.faqs_item_q_minus} ${style.contact_questons}`}>

                                <h5>
                                    How can I track my order?
                                </h5>
                            </div>
                            <div className={`${style2.faqs_item_q} ${style2.faqs_item_q_minus} ${style.contact_questons}`}>

                                <h5>
                                    Do you ship internationally?
                                </h5>
                            </div>
                            <div className={`${style2.faqs_item_q} ${style2.faqs_item_q_minus} ${style.contact_questons}`}>

                                <h5>
                                    What is your return policy?
                                </h5>
                            </div>
                            <div className={`${style2.faqs_item_q} ${style2.faqs_item_q_minus} ${style.contact_questons}`}>

                                <h5>
                                    How do I choose the right products for my skin type?
                                </h5>
                            </div>
                        </div>
                    </div>
                </section>
        </>
    )
}

export default Contact
