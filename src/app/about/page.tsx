import Image from "next/image"
import top_img from "../Images/image-top.png"
import ourservice from "../Images/ourservice.png"
import Header2 from "../components/header2"
import Foooter2 from "../components/footer2"
import sprout from "../Images/Sprout.png"
import check from "../Images/check.png"
import purchase from "../Images/Purchase.png"
import delivery from "../Images/Delivery.png"

export default function Product(){
    return(
        <div>
            <Header2/>
            <div className="abouttop">
                <h2 className="texttop">A brand built on the love of craftmanship,<br /> quality and outstanding customer service</h2> <button className="Viewmore">View our Prodcts </button>
            </div>

            <hr className="hr"/>
            <div className="section1_about container-90">
                    <div className=" sec1-text">
                    <h2 className="heading_aboutsec">It started with a small idea</h2>
                    <p className="About_para">A global brand with local beginnings, our story begain in a <br />small studio in South London in early 2014</p>
                    <button className="btn-opacity">View collection</button>
                </div>
                <div className="sec1-img">
                    <Image src={top_img} alt=""/>
                </div>
            </div>


            <div className="ourservice_about">
                <div className="img_os_about"><Image src={ourservice} alt="" className="img_about2"/></div>
                <div className="text_osAbout">
                    <h3 className="h2 txt heding_service_about">Our service isn’t just personal, it’s actually <br /> hyper personally exquisite</h3>
                    <p className="para txt para_about ">When we started Avion, the idea was simple. Make high quality furniture <br /> affordable and available for the mass market. <br /> <br /> Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.</p>

                    <button className="btn-opacity btn-white">Get in Touch</button>
                </div>
            </div>


            <div className="container-90">
                <h2 className="h2">What makes our brand different</h2>
                <div className="section_defference ">
                    <div className="text_defferene bg-grey">
                        <Image src={delivery} alt=""/>
                        <h2 className="def_heading">Next day as standard</h2>
                        <p className="def_para">Order before 3pm and get your order <br />the next day as standard</p>
                    </div>
                    <div className="text_defferene bg-grey">
                        <Image src={check} alt=""/>
                        <h2 className="def_heading">Made by true artisans</h2>
                        <p className="def_para">Handmade crafted goods made with <br />real passion and craftmanship</p>
                    </div>
                    <div className="text_defferene bg-grey">
                        <Image src={purchase} alt=""/>
                        <h2 className="def_heading">Unbeatable prices</h2>
                        <p className="def_para">For our materials and quality you <br /> won’t find better prices anywhere</p>
                    </div>
                    <div className="text_defferene bg-grey">
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