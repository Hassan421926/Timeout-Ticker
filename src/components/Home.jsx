import React from 'react'
import style from '../css/main.module.css'
import img from '../assets/contentImg.avif'
import p_img1 from '../assets/p_img1.avif'
import p_img2 from '../assets/p_img2.avif'
import p_img3 from '../assets/p_img3.avif'
import c_img1 from '../assets/customer1.jpg'
import c_img2 from '../assets/customer2.jpg'
import c_img3 from '../assets/customer3.jpg'
import { useState, useEffect } from 'react'
import j_1 from '../assets/journel1.avif'
import j_2 from '../assets/journel2.avif'
import j_3 from '../assets/journel3.avif'
import Hero from './/Hero' 
import { Link } from 'react-router-dom';




const Main = (props) => {

  const [openIndex, setOpenIndex] = useState(null);


  const faqs = [
    {
      question: "Are your products suitable for sensitive skin?",
      answer: "Yes! All our products are formulated with sensitive skin in mind. We avoid common irritants like synthetic fragrances, parabens, and sulfates. However, we always recommend doing a patch test before full application, especially if you have known allergies.",
    },

    {
      question: "How long does shipping take within New Zealand?",
      answer: "We typically process orders within 1-2 business days. Standard shipping takes 2-3 business days to reach urban areas, and 3-5 business days for rural locations. Express shipping options are also available at checkout.",
    },
    {
      question: "Are your products vegan?",
      answer: "Most of our products are vegan, with the exception of those containing Manuka honey or beeswax. These ingredients are clearly labeled in the product description. All our products are cruelty-free.",
    },
    {
      question: "Can I return products if they don't work for me?",
      answer: "Absolutely. We offer a 30-day satisfaction guarantee. If you're not completely happy with your purchase, you can return it for a full refund or exchange, even if the product has been opened and used.",
    },
    {
      question: "How should I store my skincare products?",
      answer: "For best results, store products in a cool, dry place away from direct sunlight. Some products may benefit from refrigeration, which will be noted on the packaging. Always keep lids tightly closed to preserve product integrity.",
    },
  ];

  const [openStates, setOpenStates] = useState(Array(faqs.length).fill(false));


  return (
    <>
      <Hero />  
      <section className={style.n_section}>
        <div className={style.m_heading} >
          <h2 className={style.mh2}>
            Our Story
          </h2>
        </div>
        <div className={style.m_content}  >
          <div className={style.content_text} >
            <h2 className={style.content_heading} >
              Pure Ingredients, Powerful Results
            </h2>
            <p className={style.content_p1} >Timeout Ticker was founded in 2020 with a simple mission: to bring the purest natural skincare solutions to your daily routine. Our products are carefully formulated using organic ingredients sourced from New Zealand's pristine environment.</p>

            <p className={style.content_p2} >
              We believe in skincare that's free from harsh chemicals, cruelty, and compromise. Each product is crafted with care to deliver visible results while respecting your skin and the planet.
            </p>

            <Link className={style.content_btn} to='/blog'>
              Learn More
            </Link>
          </div>
          <div className={style.content_img} >
            <img src={img} alt="" />
          </div>
        </div>
      </section>


      <div className={style.f_section}>
        <div className={style.m_heading} >
          <h2 className={style.mh2}
          >Featured Products 
          </h2>
        </div> 
        <div className={style.f_sub_section}> 
          <div className={style.f_card_one}>
            <div className={style.f_card_one_img}> 
              <img src={p_img1} alt="" />
            </div> 
            <div className={style.f_card_one_content}>
              <h2 className={style.card_one_heading}>Hydrating Face Serum</h2>
              <p className={style.card_one_p}>With Manuka honey and Kawakawa extract</p> 
              <span className={`fa fa-star ${style.checked}`}></span>
              <span className={`fa fa-star ${style.checked}`}></span>
              <span className={`fa fa-star ${style.checked}`}></span>
              <span className={`fa fa-star ${style.checked}`}></span>
              <span className={`fa fa-star-half-alt ${style.checked}`}></span> 
              <p className={style.card_one_p2}>$49.00</p>
              <button  className={style.card_one_a} onClick={props.addtoCart}>
                Add to Cart
              </button>
            </div> 
          </div>
          <div className={style.f_card_two}> 
            <div className={style.f_card_two_img}>
              <img src={p_img2} alt="" />
            </div> 
            <div className={style.f_card_one_content}>
              <h2 className={style.card_one_heading}>Revitalizing Face Cream</h2>
              <p className={style.card_one_p}>With Harakeke flax and Pohutukawa extract</p> 
              <span className={`fa fa-star ${style.checked}`}></span>
              <span className={`fa fa-star ${style.checked}`}></span>
              <span className={`fa fa-star ${style.checked}`}></span>
              <span className={`fa fa-star ${style.checked}`}></span>
              <span className={`fa fa-star ${style.borderedStar}`}></span> 
              <p className={style.card_one_p2}>$65.00</p>
              <button   className={style.card_one_a}  onClick={props.addtoCart}>
                Add to Cart
              </button>
            </div>
          </div>
          <div className={style.f_card_three}> 
            <div className={style.f_card_three_img}>
              <img src={p_img3} alt="" />
            </div>  
            <div className={style.f_card_one_content}>
              <h2 className={style.card_one_heading}>Detoxifying Face Mask</h2>
              <p className={style.card_one_p}>With Manuka honey and Kawakawa extract</p> 
              <span className={`fa fa-star ${style.checked}`}></span>
              <span className={`fa fa-star ${style.checked}`}></span>
              <span className={`fa fa-star ${style.checked}`}></span>
              <span className={`fa fa-star ${style.checked}`}></span>
              <span className={`fa fa-star-half-alt ${style.checked}`}></span> 
              <p className={style.card_one_p2}>$49.00</p>
              <button  className={style.card_one_a}  onClick={props.addtoCart}>
                Add to Cart
              </button>
            </div>
          </div> 
        </div>
        <div className={style.f_section_a}>
          <Link to="/shop" > View All Products</Link>
        </div> 
      </div>  


      <section className={style.why}>
        <div className={`${style.m_heading} ${style.why_heading}`} >
          <h2 className={style.mh2}>Why Choose Timeout Ticker
          </h2>
        </div> 
        <div className={style.why_content}>
          <div className={style.why_card_one}>
            <div className={style.why_card_one_icon}>
              <i className={`fas fa-leaf`}></i>
            </div>
            <div >
              <h3 className={style.why_card_one_h}>
                100% Natural
              </h3>
              <p className={style.why_card_one_p}> Our products contain only natural ingredients sourced from New Zealand's pristine environment.</p>
            </div> 
          </div>
          <div className={style.why_card_one}>
            <div className={style.why_card_one_icon}>
              <i className={`fa fa-heart`}></i>
            </div>
            <div >
              <h3 className={style.why_card_one_h}>
                Cruelty-Free
              </h3>
              <p className={style.why_card_one_p}>We never test on animals and are certified by the Leaping Bunny program.</p>
            </div> 
          </div>
          <div className={style.why_card_one}>
            <div className={style.why_card_one_icon}>
              <i className={`fas fa-recycle`}></i>
            </div>
            <div >
              <h3 className={style.why_card_one_h}>
                Sustainable
              </h3>
              <p className={style.why_card_one_p}>Eco-friendly packaging and responsible sourcing to minimize our environmental impact.</p>
            </div> 
          </div>
          <div className={style.why_card_one}>
            <div className={style.why_card_one_icon}>
              <i className={`fas fa-award`}></i>
            </div>
            <div >
              <h3 className={style.why_card_one_h}>
                Proven Results
              </h3>
              <p className={style.why_card_one_p}> Clinically tested formulas that deliver visible improvements to your skin.</p>
            </div> 
          </div> 
        </div>
      </section>


      <section className={style.customers}>
        <div className={`${style.m_heading} ${style.customer_heading}`} >
          <h2 className={style.mh2}>What Our Customers Say
          </h2>
        </div> 
        <div className={style.customers_content}> 
          <div className={style.customers_card_one}>
            <div className={style.customers_card_one_p}>
              <p>The hydrating serum has completely transformed my skin. After just two weeks of use, my dry patches are gone and my complexion looks so much brighter. I'm never going back to chemical-filled products!</p>
            </div> 
            <div className={style.customer_name}>
              <img src={c_img2} className={style.customer_image} alt="" />
              <div className={style.customers_image_space}> 
                <h3 className={`${style.why_card_one_h} ${style.customer_card_heading}`}>
                  Sarah Johnson
                </h3>
                <span className={` ${style.customer_card_span}`}>
                  Auckland
                </span>
              </div>
            </div>
          </div> 
          <div className={style.customers_card_one}>
            <div className={style.customers_card_one_p}>
              <p>As someone with sensitive skin, I'm always cautious about trying new products. Timeout Ticker's face cream is the only one that doesn't irritate my skin while actually improving its texture. Highly recommend!</p>
            </div> 
            <div className={style.customer_name}> 
              <img src={c_img1} className={style.customer_image} alt="" />
              <div className={style.customers_image_space}>
                <h3 className={`${style.why_card_one_h} ${style.customer_card_heading}`}>
                  Michael Chen
                </h3>
                <span className={` ${style.customer_card_span}`}>
                  Wellington
                </span>
              </div>
            </div> 
          </div> 
          <div className={style.customers_card_one}>
            <div className={style.customers_card_one_p}>
              <p >The detoxifying mask is my weekly treat. It leaves my skin feeling refreshed and clean without any tightness. I love that I'm using something natural that actually works better than the chemical alternatives.</p>
            </div> 
            <div className={style.customer_name}>
              <img src={c_img3} className={style.customer_image} alt="" />
              <div className={style.customers_image_space}>
                <h3 className={`${style.why_card_one_h} ${style.customer_card_heading}`}>Emma Wilson  </h3>
                <span className={` ${style.customer_card_span}`}>
                  Christchurch
                </span>
              </div>
            </div>
          </div> 
        </div>
      </section>

      <section className={style.faqs}>
        <div className={`${style.m_heading} ${style.why_heading}`} >
          <h2 className={style.mh2}>Frequently Asked Questions
          </h2>
        </div>
        <div className={style.faqs_container}> 
          {faqs.map((faq, index) => {
            return <div className={style.faqs_item} key={index}>
              <div className={`${style.faqs_item_q} ${openIndex === index ? style.faqs_item_q_plus : style.faqs_item_q_minus}`} onClick={() => {
                setOpenIndex(openIndex === index ? null : index);
                const newOpenStates = [...openStates];
                newOpenStates[index] = !newOpenStates[index];
                setOpenStates(newOpenStates);
              }
              }>
                {faq.question}

              </div> 
              <div className={`${style.faqs_item_p} ${openStates[index] ? style.faqs_answer : ''}`}> 
                <p>{faq.answer}</p> 
              </div> 
            </div>
          }
          ) 
          } 
        </div> 
      </section>

      <div className={`${style.f_section} ${style.journel_container}`}>
        <div className={style.m_heading} >
          <h2 className={style.mh2}>From Our Journal
          </h2>
        </div> 
        <div className={style.f_sub_section}> 
          <div className={`${style.f_card_one} ${style.journel_card}`}>
            <div className={`${style.f_card_three_img} ${style.journel_card_img}`}> 
              <img src={j_1} alt="" />
            </div>

            <div className={`${style.f_card_one_content} ${style.journel_card_content}`}>
              <h2 className={style.card_one_heading}>5 Steps to a Natural Skincare<br></br> Routine</h2>
              <p className={`${style.card_one_p} ${style.journel_card_p}`}>Discover how to simplify your skincare routine using only natural products that actually work for your skin type.</p>

              <Link className={`${style.content_btn} ${style.journel_card_btn}`} to='/blog'>
                Learn More
              </Link> 
            </div> 
          </div>
          <div className={style.f_card_two}> 
            <div className={`${style.f_card_three_img} ${style.journel_card_img}`}>
              <img src={j_2} alt="" />
            </div> 
            <div className={`${style.f_card_one_content} ${style.journel_card_content}`}>
              <h2 className={style.card_one_heading}>The Power of New Zealand's Native Ingredients</h2>
              <p className={`${style.card_one_p} ${style.journel_card_p}`}>Explore the unique benefits of Manuka honey, Kawakawa, and other native plants in skincare formulations.</p>

              <Link className={`${style.content_btn} ${style.journel_card_btn}`} to='/blog'>
                Learn More
              </Link> 
            </div>
          </div>
          <div className={style.f_card_three}> 
            <div className={`${style.f_card_three_img} ${style.journel_card_img}`}>
              <img src={j_3} alt="" />
            </div> 
            <div className={`${style.f_card_one_content} ${style.journel_card_content}`}>
              <h2 className={style.card_one_heading}>Adjusting Your Skincare for Seasonal Changes</h2>
              <p className={`${style.card_one_p} ${style.journel_card_p}`}>Learn how to modify your skincare routine as the seasons change to keep your skin healthy year-round.</p> 
              <Link className={`${style.content_btn} ${style.journel_card_btn}`} to='/blog'>
                Learn More
              </Link> 
            </div>
          </div> 
        </div> 
        <Link to="/blog" className={` ${style.journel_last_btn}`}>
          Read More Blogs
        </Link>
      </div>


      <section className={`${style.second_last}`}>
        <div className={`${style.second_last_first}`}>
          <div className={`${style.second_last_first_txt}`}>

            <div className={style.second_last_first_txt1}>
              <h2>
                Join Our Beauty Community
              </h2>
              <p>
                Subscribe to receive skincare tips, exclusive offers, and 10% off your first order.
              </p>
            </div>

            <div className={style.second_last_first_txt2}>
              <input type="email" placeholder='Your Email Address' />
              <a href="/">Subscribe</a>
            </div> 
          </div> 
        </div>
        <div className={`${style.second_last_sec}`}>
          <div className={` ${style.second_last_first_txt1_color}`}>
            <h2>
              Have Questions About Our Products?
            </h2>
            <p>
              Our skincare specialists are here to help you find the perfect products for your skin type and concerns.
            </p> 
            <Link to="/contact" className={`${style.journel_last_btn} ${style.second_last_sec_btn} `}>
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Main
