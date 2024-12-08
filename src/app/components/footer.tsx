import Image from "next/image"
import icons from "../Images/Social Links.svg"


export default function Footer(){
    return(
            <div>
            <div className="footer">
                <div className="footer-top container-90">
                    <div className="section_footer"><ul>
                        <li className="hedding_footer">Manu</li>
                        <li>New Arrival</li>
                        <li>Best Sellers</li>
                        <li>Reccently Viewed</li>
                        <li>Popular This Week</li>
                        <li><a href="/product-listing">All Products</a></li>
                        </ul></div>
                    <div className="section_footer"><ul>
                        <li className="hedding_footer">Catagories</li>
                        <li>Crockery</li>
                        <li>Furniture</li>
                        <li>Homeware</li>
                        <li>Plant Pots</li>
                        <li>Chairs</li>
                        <li>Crockery</li>
                        </ul></div>
                    <div className="section_footer"><ul>
                        <li className="hedding_footer">Our Company</li>
                        <li><a href="/about">About us</a></li>
                        <li>Vacancies</li>
                        <li>Contact us</li>
                        <li>Privacy</li>
                        <li>Return Policy</li>
                        </ul></div>
                    <div className="section_footer w-[40%]">
                        <h3 className="hedding_footer">Join our mailing list</h3>
                    <div className="newslertter mt-0">
                            <input type="text" className="input_news input_footer" placeholder="your@email.com"/>
                            <button className="addTOCart dum btn_footer">Sign Up</button>
                        </div>
                        </div>

                    
                </div>
                <div className="footer-bottom container-90">
                    <hr className="hr_footer"/>
                    <div className="last_footer_line">
                        <p>Copyright 2022 Avion LTD</p>
                        <div className="icons"><Image src={icons} alt=""/></div>
                            
                    </div>
                </div>
            </div>
            </div>
    )}





























