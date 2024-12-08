import Image from "next/image"
import delivery from "../Images/Delivery.png" 
import close from "../Images/Close.png" 
import Search_i from "../Images/Search.png"
import cart_i from "../Images/Shopping--cart.png"
import user_i from "../Images/User--avatar.png"
export default function Header2(){
    return(
        <div>
            <div className="announcementBar">
                <div className="ann_text"><Image src={delivery} alt="" className="delivery_img"/> Free delivery on all orders over £50 with code easter checkout</div>
                <div className="close"><Image src={close} alt="" className="close_img"/></div>
            </div>

            <div className="header_all">
                     <div className="header-logo font-[Clash Display] text-[24px] font-normal text-[#22202E] "><a href="/">Avion</a></div>

                <div className="ml5 font-[satoshi] w-[100%] flex items-center justify-center">
                    <ul className="Header-ul flex items-center justify-between w-[675px] h-[22px] text-[#726E8D] font-normal">
                        <li><a href="/product">Plant pots</a></li>
                        <li>Ceramics</li>
                        <li>Tables</li>
                        <li>Chairs</li>
                        <li>Crockery</li>
                        <li>Tableware</li>
                        <li>Cutlery</li>
                    </ul>
                </div>
                <div className="flex items-center justify-between icons_header">
                    <a href="/cart" className="scale-[1.8]"><Image src={cart_i} alt=""/></a>
                    <a href="" className="scale-[1.8]"><Image src={user_i} alt=""/></a>
                    <a href="" className="scale-[1.8]"><Image src={Search_i} alt=""/></a>
                    </div>
                </div>
                </div>

                )}