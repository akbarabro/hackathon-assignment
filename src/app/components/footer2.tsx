import Image from "next/image"
import icons from "../Images/Social Links.svg"
import Link from "next/link"


export default function Foooter2(){
    return(
        <div className="w-[100%] h-[350px] bg-[#2A254B] flex items-center flex-col">
            <div className="footer-main h-[295px] w-[1280px] flex ">
                <ul className="w-[152px] h-[167px] flex flex-col justify-between mt-[53px]">
                    <li className="F-logo text-[36px] text-white">Avion</li>
                    <li className="f-disc text-[14px] text-white">21 New York Street</li>
                    <li className="f-disc text-[14px] text-white">New York City</li>
                    <li className="f-disc text-[14px] text-white">United States of America</li>
                    <li className="f-disc text-[14px] text-white">432 34</li>
                    </ul>
                <div className="mt-[53px]  ml-[197px]"><p className="f-social">Social links</p><Image src={icons} alt=""/></div>
                <ul className="footer-ul mt-[53px] ml-[120px]">
                    <li className="f-main">Menu</li>
                    <li className="f-tag">New arrivals</li>
                    <li className="f-tag">Best sellers</li>
                    <li className="f-tag">Recently viewed</li>
                    <li className="f-tag">Popular this week</li>
                    <li className="f-tag"><Link href="/productListing">All products</Link></li>
                </ul>
                <ul className="footer-ul mt-[53px] ml-[120px]">
                    <li className="f-main">Categories</li>
                    <li className="f-tag">Crockery</li>
                    <li className="f-tag">Furniture</li>
                    <li className="f-tag">Homeware</li>
                    <li className="f-tag">Plant pots</li>
                    <li className="f-tag">Chairs</li>
                    <li className="f-tag">Crockery</li>
                </ul>
                <ul className="footer-ul mt-[53px] ml-[120px] ">
                    <li className="f-main">Our company</li>
                    <li className="f-tag"> <Link href="/about">About us</Link></li>
                    <li className="f-tag">Vacancies</li>
                    <li className="f-tag">Contact us</li>
                    <li className="f-tag">Privacy</li>
                    <li className="f-tag">Returns policy</li>
                </ul>


            </div>
            <div className="h-[55px] w-[1280px] flex items-center justify-start text-white"><p className="f-botom">Copyright 2022 Avion LTD</p></div>

        </div>
    )
}