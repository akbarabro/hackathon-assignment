import Image from "next/image"
import P1 from "../Images/Photo.png"
import P2 from "../Images/Photo (1).png"
import P3 from "../Images/Photo (3).png"
import P4 from "../Images/Photo (2).png"
import P5 from "../Images/Large.png"
import P6 from "../Images/Photo (4).png"
import P7 from "../Images/Image.png"
import Footer from "./footer"


export default function New_caramic(){
    return(<>
        <div className="w-[100%] flex items-center justify-center">
        <div className="new-carmics h-[761px] w-[1440px] flex flex-col items-center ">
            <div className="n-c-div h-[761px] w-[1280px]">
                <div className="n-c-title">New ceramics</div>
                 <div className="h-[462px] w-[1280px] flex justify-between">
                    <div className="w-[305px] h-[462px] flex flex-col justify-between pt-[25px]"><a href="/product"><Image src={P1} alt=""/></a><p className="n-c-product">The Dandy chair</p><p className="n-c-price">£250</p></div>
                    <div className="w-[305px] h-[462px] flex flex-col justify-between pt-[25px]"><a href="/product"><Image src={P2} alt=""/></a><p className="n-c-product">Rustic Vase Set</p><p className="n-c-price">£155</p></div>
                    <div className="w-[305px] h-[462px] flex flex-col justify-between pt-[25px]"><a href="/product"><Image src={P3} alt=""/></a><p className="n-c-product">The Silky Vase</p><p className="n-c-price">£125</p></div>
                    <div className="w-[305px] h-[462px] flex flex-col justify-between pt-[25px]"><a href="/product"><Image src={P4} alt=""/></a><p className="n-c-product">The Lucy Lamp</p><p className="n-c-price">£399</p></div>
                 </div>
                 <div className="h-[170px] flex items-center justify-center">
                    <button className="n-c-button"><a href="/product-listing">View collection</a></button>
                 </div>
             </div>
         </div>
        </div>





        <div className="w-[100%] flex items-center justify-center">
        <div className="new-carmics h-[774px] w-[1440px] flex flex-col items-center ">
            <div className="n-c-div h-[774px] w-[1280px]">
                <div className="n-c-title">Our popular products</div>
                 <div className="h-[462px] w-[1280px] flex justify-between">
                    <div className="w-[630px] h-[462px] flex flex-col justify-between pt-[25px]"><a href="/product"><Image src={P5} alt=""/></a><p className="n-c-product">The Poplar suede sofa</p><p className="n-c-price">£980</p></div>
                    <div className="w-[305px] h-[462px] flex flex-col justify-between pt-[25px]"><a href="/product"><Image src={P1} alt=""/></a><p className="n-c-product">The Dandy chair</p><p className="n-c-price">£250</p></div>
                    <div className="w-[305px] h-[462px] flex flex-col justify-between pt-[25px]"><a href="/product"><Image src={P6} alt=""/></a><p className="n-c-product">The Dandy chair</p><p className="n-c-price">£250</p></div>
                 </div>
                 <div className="h-[170px] flex items-center justify-center">
                    <button className="n-c-button"><a href="/product-listing">View collection</a></button>
                    
                 </div>
             </div>
         </div>
        </div>




        <div className="w-[100%] flex items-center justify-center">
        <div className="new-carmics h-[481px] w-[1440px] flex justify-center items-center bg-[#F9F9F9]">
            <div className="n-c-div h-[364px] w-[1280px] flex items-center bg-white flex-col justify-between pt-[68px] pb-[68px]">
                <div className="home-join h-[114px] w-[571px] flex items-center flex-col justify-between">
                    <p className="h-j-title">Join the club and get the benefits</p>
                    <p className="h-j-disc">Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more</p>
                </div>
                <div className="home-join h-[56px] w-[472px]">
                    <input className="h-j-mail" type="email" name="your@email.com" id="" placeholder="your@email.com"/>
                    <button className="h-j-sign-btn">Sign up</button>     
                </div>
             </div>
         </div>
        </div>








        <div className="w-[100%] flex items-center justify-center">
               <div className="h-[603px] w-[720px]  flex justify-between flex-col " >
                <div className="home-last h-[225px] w-[536px] ">
                    <p className="h-l-disc1">From a studio in London to a global brand with over 400 outlets</p>
                    <p className="h-l-disc2">When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market.</p>
                    <p>Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.</p>
                </div>
                
                <button className="h-l-btn">Get in touch</button>
               </div>
            <div className="h-[603px] w-[720px] ml-[100px]"><Image src={P7} alt=""/></div>
        </div>
            <Footer/>
        </>
    )
}