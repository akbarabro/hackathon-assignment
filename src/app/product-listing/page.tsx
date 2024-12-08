import Image from "next/image"
import Header from "../components/header"
import img_listing_top from ".././Images/Frame 143.png"
import down_arrow from ".././Images/Caret--down.svg"

import P1 from "../Images/Photo.png"
import P2 from "../Images/Photo (1).png"
import P3 from "../Images/Photo (3).png"
import P4 from "../Images/Photo (2).png"
import P5 from "../Images/Photo (10).png"
import P6 from "../Images/Photo (9).png"
import P7 from "../Images/Photo (5).png"
import P8 from "../Images/Photo (8).png"


export default function ProductListint(){
    return(
        <>
        <Header />
        <div className="container-90">
            <Image src={img_listing_top} alt="" className="img_top_listing" />
            <div className="sub_heaing-listing">
                <div className="h1_listing flex gap-[5em]">
                    <h3 className="sub-cat flex gap-[0.5em]">Catagory <Image src={down_arrow} alt=""/> </h3>
                    <h3 className="sub-cat flex gap-[0.5em]">Product Price <Image src={down_arrow} alt=""/> </h3>
                    <h3 className="sub-cat flex gap-[0.5em]">Price <Image src={down_arrow} alt=""/> </h3>
                    <h3 className="sub-cat flex gap-[0.5em]">Brand <Image src={down_arrow} alt=""/> </h3>
                </div>
                <div className="h2_listing gap-[2em]">
                <h3 className="sub-cat flex gap-[0.5em]">Sorting by: </h3>
                <h3 className="sub-cat flex gap-[0.5em]">Date added <Image src={down_arrow} alt=""/> </h3>
                </div>
            </div>

             {/* caremic section */}
             <div className="caramic_section">
                    <div className="w-[100%] flex items-center justify-center">
        <div className="new-carmics h-[761px] w-[1440px] flex flex-col items-center ">
            <div className="n-c-div h-[761px] w-[1280px]">
                 <div className="h-[462px] w-[1280px] flex justify-between">
                    <div className="w-[305px] h-[462px] flex flex-col justify-between pt-[25px]"><Image src={P1} alt=""/><p className="n-c-product">The Dandy chair</p><p className="n-c-price">£250</p></div>
                    <div className="w-[305px] h-[462px] flex flex-col justify-between pt-[25px]"><Image src={P2} alt=""/><p className="n-c-product">Rustic Vase Set</p><p className="n-c-price">£155</p></div>
                    <div className="w-[305px] h-[462px] flex flex-col justify-between pt-[25px]"><Image src={P3} alt=""/><p className="n-c-product">The Silky Vase</p><p className="n-c-price">£125</p></div>
                    <div className="w-[305px] h-[462px] flex flex-col justify-between pt-[25px]"><Image src={P4} alt=""/><p className="n-c-product">The Lucy Lamp</p><p className="n-c-price">£399</p></div>
                 </div>
                 <div className="h-[462px] w-[1280px] flex justify-between">
                    <div className="w-[305px] h-[462px] flex flex-col justify-between pt-[25px]"><Image src={P5} alt=""/><p className="n-c-product">The Dandy chair</p><p className="n-c-price">£250</p></div>
                    <div className="w-[305px] h-[462px] flex flex-col justify-between pt-[25px]"><Image src={P6} alt=""/><p className="n-c-product">Rustic Vase Set</p><p className="n-c-price">£155</p></div>
                    <div className="w-[305px] h-[462px] flex flex-col justify-between pt-[25px]"><Image src={P7} alt=""/><p className="n-c-product">The Silky Vase</p><p className="n-c-price">£125</p></div>
                    <div className="w-[305px] h-[462px] flex flex-col justify-between pt-[25px]"><Image src={P8} alt=""/><p className="n-c-product">The Lucy Lamp</p><p className="n-c-price">£399</p></div>
                 </div>
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
        </div>
        {/* <Footer/> */}
        </>
    )}
