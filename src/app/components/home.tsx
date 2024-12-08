import Image from "next/image";
import delivery from "../Images/Delivery.png" 
import sprout from "../Images/Sprout.png"
import check from "../Images/check.png"
import purchase from "../Images/Purchase.png"



export default function HomeC(){
    return(
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





    )
}