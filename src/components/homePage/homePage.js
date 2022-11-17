import React, { useState } from 'react';
import "./homePage.css"
function HomePage() {
    const imgs = ["	https://www.leoasher.dev/static/media/banner2.caec085c.png", "	https://www.leoasher.dev/static/media/banner1.237a7309.png"];
    const [hidenNext, setHidenNext] = useState(false);
    const [index, setIndex] = useState(1);
    function changeImage(){
        setIndex(() => index === 1 ? 0 : 1);
        document.getElementById("img-page").src = imgs[index];
        index === 1 ? setHidenNext(() => true) : setHidenNext(() => false);
    };
    const next = () => {
        changeImage();
    };
    return (
        <div>
            <div className="home-page-img">
                <div className="icon-left">
                    <span className="bi bi-chevron-double-left next-left" onClick={() => next()}></span>
                </div>
                <div className="icon-right">
                    <i className="bi bi-chevron-double-right next-right" onClick={() => next()}></i>
                </div>
                <img className="homepage-img1" id="img-page" src="https://www.leoasher.dev/static/media/banner2.caec085c.png" alt=""  ></img>
                <div className="next">
                    <i id="next1" className={hidenNext ? "bi bi-dash-lg next-1" : "bi bi-dash-lg next-2"} onClick={() => next()}></i>
                    <i id="next2" className={hidenNext ? "bi bi-dash-lg next-2" : "bi bi-dash-lg next-1"} onClick={() => next()}></i>
                </div>
            </div>
            <div className="booter">
                <img className="booter-img-1" src="https://www.leoasher.dev/static/media/bannerFooter.4b09af08.png" alt=""></img>
                <div className="booter-petsla">
                    <div className="booter-petsla-title">
                        Về Petsla
                    </div>
                    <div className="booter-petsla-text">
                        PetsLa ra đời với sứ mệnh Pets hóa thế giới loài người bằng cách mang đến cho cộng đồng những content thú vị, đáng yêu về pets.
                    </div>
                </div>
                <div className="booter-petsla">

                </div>
                <div className="booter-petsla">
                    <div className="booter-petsla-title">
                        Follow Us
                    </div>
                    <div className="booter-petsla-text">
                        <i className="bi bi-facebook"></i>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default HomePage