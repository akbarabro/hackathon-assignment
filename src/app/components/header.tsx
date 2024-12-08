import Image from "next/image"
import Search_i from "../Images/Search.png"
import cart_i from "../Images/Shopping--cart.png"
import user_i from "../Images/User--avatar.png"

export default function Header(){
    return(
        <div className="header_Home w-[100%] flex items-center justify-center">
            <div className="header-main w-[1440px] h-[132px]">
                <div className="flex items-center justify-between relative ml-[28px] mr-[28px] h-[70px] border-b-[2px] border-[#EBE8F4]">
                    <div><Image className="h-[16px] w-[16px]" src={Search_i} alt=""/></div>
                     <div className="header-logo font-[Clash Display] fixid top-[20px] text-[24px] font-normal text-[#22202E]"><a href="/">Avion</a></div>
                    <div className="flex items-center justify-between "><a href="/cart"><Image src={cart_i} alt=""/></a><Image className="ml-[32px]" src={user_i} alt=""/></div>
                </div>

                <div className="font-[satoshi] w-[100%] flex items-center justify-center">
                    <ul className="Header-ul flex items-center justify-between w-[675px] h-[22px] mt-[20px] text-[#726E8D] font-normal">
                        <li><a href="/product">Plant pots</a></li>
                        <li>Ceramics</li>
                        <li>Tables</li>
                        <li>Chairs</li>
                        <li>Crockery</li>
                        <li>Tableware</li>
                        <li>Cutlery</li>
                    </ul>
                </div>

            </div>
        </div>
    )
}