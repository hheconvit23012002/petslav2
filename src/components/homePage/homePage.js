
import "./homePage.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function HomePage() {
    const imgs = [
        {
            id: 1,
            linkImg: "https://www.leoasher.dev/static/media/banner2.caec085c.png"
        },

        {
            id: 2,
            linkImg: "https://www.leoasher.dev/static/media/banner1.237a7309.png"
        }
    ];
    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,

    };
    return (
        <div className='img-page-khung' >
            <Slider {...settings}>
                {
                    imgs.map((item,index) => {
                        return (
                            <img className="img-page" src={item.linkImg} alt=""  key = {index}/>

                        )
                    })
                }
            </Slider>
            <div className="booter">
                <div className="booter-zoom">
                    <img className="booter-img" src="https://www.leoasher.dev/static/media/bannerFooter.4b09af08.png" alt=""></img>
                </div>
                <div className="booter-petsla-khung">
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
                        <div className="icon-khung">
                            <div className="booter-petsla-icon">
                                <i className="bi bi-facebook booter-petsla-icon-img" ></i>
                            </div>
                            <div className="booter-petsla-icon">
                                <i className="bi bi-instagram booter-petsla-icon-img"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
function SampleNextArrow({ onClick }) {
    return (
        <div className="icon-left">
            <span className="bi bi-chevron-left next-left" onClick={onClick}></span>
        </div>
    );
}

function SamplePrevArrow({ onClick }) {
    return (
        <div className="icon-right">
            <i className="bi bi-chevron-right next-right" onClick={onClick}></i>
        </div>
    );
}

export default HomePage
