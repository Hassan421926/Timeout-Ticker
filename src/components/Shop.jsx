import React from 'react'
import style from '../css/shop.module.css';
import style2 from '../css/main.module.css'; 
import p_img1 from '../assets/p_img1.avif'
import p_img2 from '../assets/p_img2.avif'
import p_img3 from '../assets/p_img3.avif'
import shop_4 from '../assets/shop_4.avif'
import shop_5 from '../assets/shop_5.avif'
import shop_6 from '../assets/shop_6.avif'
import shop_7 from '../assets/shop_7.avif'
import shop_8 from '../assets/shop_8.jpg'
import shop_9 from '../assets/shop_9.avif'
import cata_img_2 from '../assets/cata_img_2.webp'

const Shop = (props) => {
  return (
    <>

      <section className={`${style.shop_hero}`}>
        <div className={`${style2.second_last_first} ${style.shop_hero_cont}`}>
          <div className={`${style2.second_last_first_txt1} ${style.shop_hero_item}`}>
            <div className={`${style2.second_last_first_txt1} ${style.shop_hero_heading}`}>
              <h2>
                Our Skincare Collection
              </h2>
              <a href=""> Home</a>
              <span>
                Shop
              </span>
            </div>   <div className={`${style2.second_last_first_txt1} ${style.shop_hero_heading}`}>
              <h2>
                Our Skincare Collection
              </h2>
              <a href=""> Home</a>
              <span>
                Shop
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className={`${style.shopping}`}>
        <div className={`${style.shopping_cont}`}>
          <div className={`${style.shopping_item_details}`}>
            <div className={`${style.shopping_item_details_heading}`}>
              <h2 className={`${style2.content_heading}`} >
                Natural Skincare Products
              </h2>
              <span>
                Showing 9 products
              </span>
            </div>

            <div className={`${style.shopping_item_details_sorting}`}>
              <select name="" id="">
                <option value=""  disabled>Sort by</option>
                <option value="">Price: Low to High</option>
                <option value="" >Price: High to Low</option>
                <option value="">Most Popular</option>
                <option value="">Newest Arrivals</option>
              </select>
              <select name="" id="">
                <option value="">All Categories</option>
                <option value="">Face Care</option>
                <option value="">Body Care</option>
                <option value="">Hair Care</option>
                <option value="">Gift Sets</option>
              </select>
            </div>
          </div>

          <div className={`${style.shopping_items}`}>
            <div className={`${style2.f_card_one} ${style.shopping_item}`}>
              <div className={style2.f_card_one_img}>

                <img src={p_img1} alt="" />
              </div>

              <div className={`${style2.f_card_one_content} ${style.shopping_item_card_part2}`}>
                <h2 className={style2.card_one_heading}>Hydrating Face Serum</h2>
                <p className={style2.card_one_p}>With Manuka honey and Kawakawa extract</p>

                <span className={`fa fa-star ${style2.checked}`}></span>
                <span className={`fa fa-star ${style2.checked}`}></span>
                <span className={`fa fa-star ${style2.checked}`}></span>
                <span className={`fa fa-star ${style2.checked}`}></span>
                <span className={`fa fa-star-half-alt ${style2.checked}`}></span>
                <span className={`${style.shopping_item_total_rating}`}>(42)</span>

                <p className={style2.card_one_p2}>$49.00</p>
                <button className={`${style2.card_one_a} ${style.shopping_item_cart_btn}`}  onClick={props.addtoCart}  >
                  Add to Cart
                </button>
              </div>

            </div>



            <div className={`${style2.f_card_two} ${style.shopping_item}`}>

              <div className={style2.f_card_two_img}>
                <img src={p_img2} alt="" />
              </div>

              <div className={`${style2.f_card_one_content} ${style.shopping_item_card_part2}`}>
                <h2 className={style2.card_one_heading}>Revitalizing Face Cream</h2>
                <p className={style2.card_one_p}>With Harakeke flax and Pohutukawa extract</p>

                <span className={`fa fa-star ${style2.checked}`}></span>
                <span className={`fa fa-star ${style2.checked}`}></span>
                <span className={`fa fa-star ${style2.checked}`}></span>
                <span className={`fa fa-star ${style2.checked}`}></span>
                <span className={`fa fa-star ${style2.borderedStar}`}></span>
                <span className={`${style.shopping_item_total_rating}`}>(36)</span>

                <p className={style2.card_one_p2}>$65.00</p>
                <button className={`${style2.card_one_a} ${style.shopping_item_cart_btn}`} onClick={props.addtoCart}>
                  Add to Cart
                </button>
              </div>
            </div>

            <div className={`${style2.f_card_three} ${style.shopping_item}`}>

              <div className={style2.f_card_three_img}>
                <img src={p_img3} alt="" />
              </div>

              <div className={`${style2.f_card_one_content} ${style.shopping_item_card_part2}`}>
                <h2 className={style2.card_one_heading}>Detoxifying Face Mask</h2>
                <p className={style2.card_one_p}>With Manuka honey and Kawakawa extract</p>

                <span className={`fa fa-star ${style2.checked}`}></span>
                <span className={`fa fa-star ${style2.checked}`}></span>
                <span className={`fa fa-star ${style2.checked}`}></span>
                <span className={`fa fa-star ${style2.checked}`}></span>
                <span className={`fa fa-star-half-alt ${style2.checked}`}></span>
                <span className={`${style.shopping_item_total_rating}`}>(28)</span>

                <p className={style2.card_one_p2}>$85.00</p>
                <button className={`${style2.card_one_a} ${style.shopping_item_cart_btn}`}  onClick={props.addtoCart}>
                  Add to Cart
                </button>
              </div>
            </div>


            <div className={`${style2.f_card_two} ${style.shopping_item}`}>

              <div className={style2.f_card_two_img}>
                <img src={shop_4} alt="" />
              </div>

              <div className={`${style2.f_card_one_content} ${style.shopping_item_card_part2}`}>
                <h2 className={style2.card_one_heading}>Revitalizing Face Cream</h2>
                <p className={style2.card_one_p}>With Harakeke flax and Pohutukawa extract</p>

                <span className={`fa fa-star ${style2.checked}`}></span>
                <span className={`fa fa-star ${style2.checked}`}></span>
                <span className={`fa fa-star ${style2.checked}`}></span>
                <span className={`fa fa-star ${style2.checked}`}></span>
                <span className={`fa fa-star-half-alt ${style2.checked}`}></span>
                <span className={`${style.shopping_item_total_rating}`}>(31)</span>

                <p className={style2.card_one_p2}>$65.00</p>
                <button className={`${style2.card_one_a} ${style.shopping_item_cart_btn}`}  onClick={props.addtoCart}>
                  Add to Cart
                </button>
              </div>
            </div>


            <div className={`${style2.f_card_two} ${style.shopping_item}`}>

              <div className={style2.f_card_two_img}>
                <img src={shop_5} alt="" />
              </div>

              <div className={`${style2.f_card_one_content} ${style.shopping_item_card_part2}`}>
                <h2 className={style2.card_one_heading}>Revitalizing Face Cream</h2>
                <p className={style2.card_one_p}>With Harakeke flax and Pohutukawa extract</p>

                <span className={`fa fa-star ${style2.checked}`}></span>
                <span className={`fa fa-star ${style2.checked}`}></span>
                <span className={`fa fa-star ${style2.checked}`}></span>
                <span className={`fa fa-star ${style2.checked}`}></span>
                <span className={`fa fa-star ${style2.borderedStar}`}></span>
                <span className={`${style.shopping_item_total_rating}`}>(25)</span>

                <p className={style2.card_one_p2}>$65.00</p>
                <button className={`${style2.card_one_a} ${style.shopping_item_cart_btn}`}  onClick={props.addtoCart}>
                  Add to Cart
                </button>
              </div>
            </div>


            <div className={`${style2.f_card_two} ${style.shopping_item}`}>

              <div className={style2.f_card_two_img}>
                <img src={shop_6} alt="" />
              </div>

              <div className={`${style2.f_card_one_content} ${style.shopping_item_card_part2}`}>
                <h2 className={style2.card_one_heading}>Revitalizing Face Cream</h2>
                <p className={style2.card_one_p}>With Harakeke flax and Pohutukawa extract</p>

                <span className={`fa fa-star ${style2.checked}`}></span>
                <span className={`fa fa-star ${style2.checked}`}></span>
                <span className={`fa fa-star ${style2.checked}`}></span>
                <span className={`fa fa-star ${style2.checked}`}></span>
                <span className={`fa fa-star ${style2.checked}`}></span>
                <span className={`${style.shopping_item_total_rating}`}>(19)</span>

                <p className={style2.card_one_p2}>$65.00</p>
                <button className={`${style2.card_one_a} ${style.shopping_item_cart_btn}`}  onClick={props.addtoCart}>
                  Add to Cart
                </button>
              </div>
            </div>


            <div className={`${style2.f_card_two} ${style.shopping_item}`}>

              <div className={style2.f_card_two_img}>
                <img src={shop_7} alt="" />
              </div>

              <div className={`${style2.f_card_one_content} ${style.shopping_item_card_part2}`}>
                <h2 className={style2.card_one_heading}>Revitalizing Face Cream</h2>
                <p className={style2.card_one_p}>With Harakeke flax and Pohutukawa extract</p>

                <span className={`fa fa-star ${style2.checked}`}></span>
                <span className={`fa fa-star ${style2.checked}`}></span>
                <span className={`fa fa-star ${style2.checked}`}></span>
                <span className={`fa fa-star-half-alt ${style2.checked}`}></span>
                <span className={`fa fa-star ${style2.borderedStar}`}></span>
                <span className={`${style.shopping_item_total_rating}`}>(22)</span>

                <p className={style2.card_one_p2}>$65.00</p>
                <button className={`${style2.card_one_a} ${style.shopping_item_cart_btn}`}  onClick={props.addtoCart}>
                  Add to Cart
                </button>
              </div>
            </div>


            <div className={`${style2.f_card_two} ${style.shopping_item}`}>

              <div className={style2.f_card_two_img}>
                <img src={shop_8} alt="" />
              </div>

              <div className={`${style2.f_card_one_content} ${style.shopping_item_card_part2}`}>
                <h2 className={style2.card_one_heading}>Revitalizing Face Cream</h2>
                <p className={style2.card_one_p}>With Harakeke flax and Pohutukawa extract</p>

                <span className={`fa fa-star ${style2.checked}`}></span>
                <span className={`fa fa-star ${style2.checked}`}></span>
                <span className={`fa fa-star ${style2.checked}`}></span>
                <span className={`fa fa-star ${style2.checked}`}></span>
                <span className={`fa fa-star ${style2.borderedStar}`}></span>
                <span className={`${style.shopping_item_total_rating}`}>(17)</span>

                <p className={style2.card_one_p2}>$65.00</p>
                <button className={`${style2.card_one_a} ${style.shopping_item_cart_btn}`}  onClick={props.addtoCart}>
                  Add to Cart
                </button>
              </div>
            </div>


            <div className={`${style2.f_card_two} ${style.shopping_item}`}>

              <div className={style2.f_card_two_img}>
                <img src={shop_9} alt="" />
              </div>

              <div className={`${style2.f_card_one_content} ${style.shopping_item_card_part2}`}>
                <h2 className={style2.card_one_heading}>Revitalizing Face Cream</h2>
                <p className={style2.card_one_p}>With Harakeke flax and Pohutukawa extract</p>

                <span className={`fa fa-star ${style2.checked}`}></span>
                <span className={`fa fa-star ${style2.checked}`}></span>
                <span className={`fa fa-star ${style2.checked}`}></span>
                <span className={`fa fa-star ${style2.checked}`}></span>
                <span className={`fa fa-star-half-alt ${style2.checked}`}></span>
                <span className={`${style.shopping_item_total_rating}`}>(14)</span>

                <p className={style2.card_one_p2}>$65.00</p>
                <button className={`${style2.card_one_a} ${style.shopping_item_cart_btn}`}  onClick={props.addtoCart}>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          <div className={`${style.shopping_item_page_btn_cont}`}>
            <div className={`${style.shopping_item_page_btns}`}>
              <button className={`${style.prev_btn}`}>

              </button>
              <button className={`${style.active_btn}`}>
                1
              </button>
              <button>
                2
              </button>
              <button>
                3
              </button>
              <button className={`${style.next_btn}`}>

              </button>

            </div>
          </div>
        </div>

      </section>


      <div className={`${style.shopping_cata}`}>

        <div className={`${style.shopping_cata_heading}`}>
          <h2 className={`${style2.content_heading}`} >
            Shop by Category
          </h2>
        </div>

        <div className={`${style.shopping_cata_images}`}>
          <div className={`${style.cata_image}`}>
            <img src={shop_9} alt="" />

            <div className={`${style.cata_image_heading}`}>
              <h2>  Face Care </h2>

            </div>
          </div>
          <div className={`${style.cata_image}`}>
            <img src={cata_img_2} alt="" />
            <div className={`${style.cata_image_heading}`}>
              <h2> Body Care
              </h2>

            </div>
          </div>
          <div className={`${style.cata_image}`}>
            <img src={shop_4} alt="" />
            <div className={`${style.cata_image_heading}`}>
              <h2>  Hair Care </h2>

            </div>
          </div>
          <div className={`${style.cata_image}`}>
            <img src={shop_7} alt="" />
            <div className={`${style.cata_image_heading}`}>
              <h2>  Gift Sets </h2>

            </div>
          </div>
        </div>

      </div>



      <div className={`${style.shopping_cata} ${style.customer_favourite}`}>

        <div className={`${style.shopping_cata_heading}`}>
          <h2 className={`${style2.content_heading}`} >
          Customer Favorites
          </h2>
        </div>

        <div className={`${style.shopping_cata_images} `}>

          <div className={`${style2.f_card_one} ${style.shopping_item}`}>
            <div className={style2.f_card_one_img}>

              <img src={p_img1} alt="" />
            </div>

            <div className={`${style2.f_card_one_content} ${style.shopping_item_card_part2}`}>
              <h2 className={style2.card_one_heading}>Hydrating Face Serum</h2>
              <p className={style2.card_one_p}>With Manuka honey and Kawakawa extract</p>

              <span className={`fa fa-star ${style2.checked}`}></span>
              <span className={`fa fa-star ${style2.checked}`}></span>
              <span className={`fa fa-star ${style2.checked}`}></span>
              <span className={`fa fa-star ${style2.checked}`}></span>
              <span className={`fa fa-star-half-alt ${style2.checked}`}></span>
              <span className={`${style.shopping_item_total_rating}`}>(42)</span>
              <p className={style2.card_one_p2}>$49.00</p>
              <button className={`${style2.card_one_a} ${style.shopping_item_cart_btn}`} onClick={props.addtoCart}>
                Add to Cart
              </button>
            </div>
          </div>


          <div className={`${style2.f_card_three} ${style.shopping_item}`}>

            <div className={style2.f_card_three_img}>
              <img src={p_img3} alt="" />
            </div>

            <div className={`${style2.f_card_one_content} ${style.shopping_item_card_part2}`}>
              <h2 className={style2.card_one_heading}>Detoxifying Face Mask</h2>
              <p className={style2.card_one_p}>With Manuka honey and Kawakawa extract</p>
              <span className={`fa fa-star ${style2.checked}`}></span>
              <span className={`fa fa-star ${style2.checked}`}></span>
              <span className={`fa fa-star ${style2.checked}`}></span>
              <span className={`fa fa-star ${style2.checked}`}></span>
              <span className={`fa fa-star-half-alt ${style2.checked}`}></span>
              <span className={`${style.shopping_item_total_rating}`}>(28)</span>
              <p className={style2.card_one_p2}>$85.00</p>
              <button className={`${style2.card_one_a} ${style.shopping_item_cart_btn}`} onClick={props.addtoCart}>
                Add to Cart
              </button>
            </div>
          </div>

          <div className={`${style2.f_card_two} ${style.shopping_item}`}>
            <div className={style2.f_card_two_img}>
              <img src={shop_5} alt="" />
            </div>

            <div className={`${style2.f_card_one_content} ${style.shopping_item_card_part2}`}>
              <h2 className={style2.card_one_heading}>Revitalizing Face Cream</h2>
              <p className={style2.card_one_p}>With Harakeke flax and Pohutukawa extract</p>
              <span className={`fa fa-star ${style2.checked}`}></span>
              <span className={`fa fa-star ${style2.checked}`}></span>
              <span className={`fa fa-star ${style2.checked}`}></span>
              <span className={`fa fa-star ${style2.checked}`}></span>
              <span className={`fa fa-star ${style2.borderedStar}`}></span>
              <span className={`${style.shopping_item_total_rating}`}>(25)</span>

              <p className={style2.card_one_p2}>$65.00</p>
              <button className={`${style2.card_one_a} ${style.shopping_item_cart_btn}`} onClick={props.onAddToCart}>
                Add to Cart
              </button>
            </div>
          </div>
        </div>

      </div>

      <section className={style2.why}>
            <div className={`${style2.m_heading} ${style2.why_heading} ${style.shop_why_heading}`} >
              <h2 className={style2.mh2}>Why Choose Timeout Ticker
              </h2>
            </div>
    
            <div className={`${style2.why_content} ${style.shopping_why_content}`}>
              <div className={style2.why_card_one}>
                <div className={style2.why_card_one_icon}>
                  <i className={`fas fa-leaf`}></i>
                </div>
                <div >
                  <h3 className={style2.why_card_one_h}>
                    100% Natural
                  </h3>
                  <p className={style2.why_card_one_p}> Our products contain only natural ingredients sourced from New Zealand's pristine environment.</p>
                </div>
    
              </div>
              <div className={style2.why_card_one}>
                <div className={style2.why_card_one_icon}>
                  <i className={`fa fa-heart`}></i>
                </div>
                <div >
                  <h3 className={style2.why_card_one_h}>
                    Cruelty-Free
                  </h3>
                  <p className={style2.why_card_one_p}>We never test on animals and are certified by the Leaping Bunny program.</p>
                </div>
    
              </div>
              <div className={style2.why_card_one}>
                <div className={style2.why_card_one_icon}>
                  <i className={`fas fa-recycle`}></i>
                </div>
                <div >
                  <h3 className={style2.why_card_one_h}>
                    Sustainable
                  </h3>
                  <p className={style2.why_card_one_p}>Eco-friendly packaging and responsible sourcing to minimize our environmental impact.</p>
                </div>
    
              </div>
              <div className={style2.why_card_one}>
                <div className={style2.why_card_one_icon}>
                  <i className={`fas fa-award`}></i>
                </div>
                <div >
                  <h3 className={style2.why_card_one_h}>
                    Proven Results
                  </h3>
                  <p className={style2.why_card_one_p}> Clinically tested formulas that deliver visible improvements to your skin.</p>
                </div>
    
              </div>
              {/* <i className={`fa fa-leaf`}></i>
            <i className={`fa fa-recycle`}></i>
            <i className={`fa fa-heart`}></i>
            <i className={`fa fa-award`}></i> */}
            </div>
          </section>

          <div className={`${style2.second_last_first}`}>
             <div className={`${style2.second_last_first_txt}`}>
   
               <div className={style2.second_last_first_txt1}>
                 <h2>
                   Join Our Beauty Community
                 </h2>
                 <p>
                   Subscribe to receive skincare tips, exclusive offers, and 10% off your first order.
                 </p>
               </div>
   
               <div className={style2.second_last_first_txt2}>
                 <input type="email" placeholder='Your Email Address' />
                 <a href="/">Subscribe</a>
               </div>
             </div>
           </div>

    </>
  )
}

export default Shop
