import React, { useState } from "react";
import "./homePage.css";
import { useEffect } from "react";
function HomePage() {
    const imgs = ["	https://www.leoasher.dev/static/media/banner2.caec085c.png", "	https://www.leoasher.dev/static/media/banner1.237a7309.png"];
    let index = 0;
    const changeImage = function() {
        index = index === 1 ? 0 : 1;
        document.getElementById("img-page").src = imgs[index];
        console.log(index)
    }
    setInterval(changeImage, 10000,0);
    return (
        <div>
            <div className="home-page-img">
                <img className="homepage-img1" id="img-page" src="https://www.leoasher.dev/static/media/banner2.caec085c.png" alt=""  ></img>
                <div >
                    <i className="bi bi-chevron-double-left next-left" onClick={changeImage}></i>
                </div>
                <div >
                    <i className="bi bi-chevron-double-right next-right" onClick={changeImage}></i>
                </div>
                <div>
                    <i id = "next1" className={index === 1 ? "bi bi-dash-lg chosse-page1" : "bi bi-dash-lg next-1"}></i>
                </div>
                <div>
                    <i id = "next2" className= {index === 0 ? "bi bi-dash-lg chosse-page2" : "bi bi-dash-lg next-2"}></i>
                </div>
            </div>
            <div>

                <img className="homepage-img2" src="https://www.leoasher.dev/static/media/bannerFooter.4b09af08.png" alt=""></img>
            </div>
        </div>
    )
}
export default HomePage