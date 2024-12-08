import Header from "../components/header";
import Image from "next/image"
import productimg1 from "@/app/Images/img_product_cart.png"
import productimg2 from "@/app/Images/img_product_cart2.png"
import Footer from "../components/footer";

export default function Cart(){
    return(
        <div>
            <Header/>
            <div className="container-70">
                <h1 className="cart_heading h1 txt">Your shopping cart</h1>

                <div className="head-cart">
                    <h3 className="head_top">Product</h3>
                    <h3 className="head_top">Quantity</h3>
                    <h3 className="head_top">Total</h3>
                </div>
                <div className="row1">
                    <div className="td">
                        <Image src={productimg1} alt=""/>
                        <div className="content_add">
                            <h2 className="heading_cart">Graystone vase</h2>
                            <p className="para_cart">A timeless ceramic vase with <br /> a tri color grey glaze.</p>
                            <p className="price_cart">£85</p>
                        </div>
                    </div>
                    <div className="td qty_cart">1</div>
                    <div className="td">£85</div>
                </div>
                <div className="row1">
                    <div className="td">
                        <Image src={productimg2} alt=""/>
                        <div className="content_add">
                            <h2 className="heading_cart">Basic white vase</h2>
                            <p className="para_cart">Beautiful and simple this is <br /> one for the classics</p>
                            <p className="price_cart">£125</p>
                        </div>
                    </div>
                    <div className="td qty_cart">1</div>
                    <div className="td">£125</div> 

                </div>
            <div className= "raza-line h-[216px] w-[100%] flex flex-col justify-between items-end" >
                <div className="h-[67px] w-[282px] mt-[30px] flex-col flex items-end justify-between">
                    <div className="total-div flex items-center justify-between w-[150px] h-[34px]"><p className="total">Subtotal</p><p className="price">£210</p></div>
                    <div><p className="total-disc">Taxes and shipping are calculated at checkout</p></div>
                </div>
                <div className="">
                    <button className="btn-check h-[56px] w-[172px] mb-[50px] ">Go to checkout</button>
                </div>

            </div>
            </div>
            <Footer/>
        </div>
    )
}