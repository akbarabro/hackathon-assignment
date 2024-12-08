import Image from "next/image"
import delivery from "../Images/Delivery.png" 
import product_img from "../Images/produc_ig.png"
import P1 from "../Images/Photo.png"
import P2 from "../Images/Photo (1).png"
import P3 from "../Images/Photo (3).png"
import P4 from "../Images/Photo (2).png"
import sprout from "../Images/Sprout.png"
import check from "../Images/check.png"
import purchase from "../Images/Purchase.png"
import Foooter2 from "../components/footer2"
import Header2 from "../components/header2"

export default function Product(){
    return(
        <div>
           <Header2/>
                <div className="product_detail">
                    <div className="product_img_box">
                        <Image src={product_img} alt="" className="product_img"/>
                    </div>
                    <div className="product_info">
                        <h1 className="product_name">The Dandy Chair</h1>
                        <h3 className="Prouct_price">£250</h3>
                        <div className="description">
                            <div className="desc-title">Description</div>
                            <p className="desc-para">A timeless design, with premium materials features as one of our most popular and iconic pieces. The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.</p>
                        <div className="features">
                            <h3 className="feature"><div className="dot"></div> Premium material</h3>
                            <h3 className="feature"><div className="dot"></div> Handmade upholstery</h3>
                            <h3 className="feature"><div className="dot"></div>Quality timeless classic</h3>
                        </div>
                        <div className="dimens">
                            <div className="Dimension">Dimensions</div>
                            <div className="dimen-titles">
                                <h3>Height</h3>
                                <h3>Width</h3>
                                <h3>Depth</h3>
                            </div>
                            <div className=" dimen-titles dimen-values">
                                <h3>110cm</h3>
                                <h3>75cm</h3>
                                <h3>50cm</h3>
                            </div>
                        </div>
                        <div className="qty_cart">
                            <div className="qty_text"><span className="amount">Amount:</span> <div className="box">-<input type="number" className="qty_input" placeholder="1"/>+</div></div>
                            <button className="addTOCart">Add to Cart</button>
                        </div>
                        </div>
                    </div>

                </div>

                {/* caremic section */}
                    <div className="caramic_section">
                    <div className="w-[100%] flex items-center justify-center">
        <div className="new-carmics h-[761px] w-[1440px] flex flex-col items-center ">
            <div className="n-c-div h-[761px] w-[1280px]">
                <div className="n-c-title">You might also like</div>
                 <div className="h-[462px] w-[1280px] flex justify-between">
                    <div className="w-[305px] h-[462px] flex flex-col justify-between pt-[25px]"><Image src={P1} alt=""/><p className="n-c-product">The Dandy chair</p><p className="n-c-price">£250</p></div>
                    <div className="w-[305px] h-[462px] flex flex-col justify-between pt-[25px]"><Image src={P2} alt=""/><p className="n-c-product">Rustic Vase Set</p><p className="n-c-price">£155</p></div>
                    <div className="w-[305px] h-[462px] flex flex-col justify-between pt-[25px]"><Image src={P3} alt=""/><p className="n-c-product">The Silky Vase</p><p className="n-c-price">£125</p></div>
                    <div className="w-[305px] h-[462px] flex flex-col justify-between pt-[25px]"><Image src={P4} alt=""/><p className="n-c-product">The Lucy Lamp</p><p className="n-c-price">£399</p></div>
                 </div>
                 <div className="h-[170px] flex items-center justify-center">
                    <button className="n-c-button">View collection</button>
                 </div>
             </div>
         </div>
        </div>
                    </div>

                {/* What makes our brand different */}
                <div className="container-90">
                <h2 className="h2">What makes our brand different</h2>
                <div className="section_defference">
                    <div className="text_defferene">
                        <Image src={delivery} alt=""/>
                        <h2 className="def_heading">Next day as standard</h2>
                        <p className="def_para">Order before 3pm and get your order <br />the next day as standard</p>
                    </div>
                    <div className="text_defferene">
                        <Image src={check} alt=""/>
                        <h2 className="def_heading">Made by true artisans</h2>
                        <p className="def_para">Handmade crafted goods made with <br />real passion and craftmanship</p>
                    </div>
                    <div className="text_defferene">
                        <Image src={purchase} alt=""/>
                        <h2 className="def_heading">Unbeatable prices</h2>
                        <p className="def_para">For our materials and quality you <br /> won’t find better prices anywhere</p>
                    </div>
                    <div className="text_defferene">
                        <Image src={sprout} alt=""/>
                        <h2 className="def_heading">Recycled packaging</h2>
                        <p className="def_para">We use 100% recycled packaging to <br />ensure our footprint is manageable</p>
                    </div>
                </div>
                </div>

                {/* newsletter section */}
                <div className="main_newsletter">
                    <div className="sub_newsletter">
                        <h2 className="h1">Join the club and get the benefits</h2>
                        <p className="para">Sign up for our newsletter and receive exclusive offers on new <br />ranges, sales, pop up stores and more</p>

                        <div className="newslertter">
                            <input type="text" className="input_news" placeholder="your@email.com"/>
                            <button className="addTOCart dum">Sign Up</button>
                        </div>
                    </div>
                </div>
                <Foooter2/>
        </div>
)}