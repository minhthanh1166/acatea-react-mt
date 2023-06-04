import React, { useEffect, useState } from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import mockData from '../data/mockData';
import bgrsp from "./img/trang-chu-img/bgSanpham.png";
import "./css/trang-chu/trangchu.css";

export default function TrangChu() {
    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     arrows: false, // Ẩn mũi tên
    // }

    const settingsProduct = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        // auto chạy
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false, // Ẩn mũi tên
    }
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false, // Ẩn mũi tên
        autoplaySpeed: 2000,

        beforeChange: (oldIndex, newIndex) => {
            setCurrentSlideIndex(newIndex);
        },
        afterChange: (currentSlide) => {
            setCurrentSlideIndex(currentSlide);
        },
    };


    return (
        <section id='main'>
            {/* Slider */}
            <section className='banner-slider'>
                <Slider {...settings} >
                    <div className='banner-one'>
                        <div className='banner-box'>
                            <div className='banner-caption '>
                                <h2 className="wow animate__bounceInDown">Acatea</h2>
                            </div>
                            <div className='banner-caption__pretty'>
                                <h2 className='wow animate__bounceInLeft'>Trà thảo dược - Nâng tầm cuộc sống</h2>
                            </div>
                            <div className='content'>
                                <p className='wow animate__bounceInLeft'>
                                    Sự hòa quyện tuyệt vời giữa hương thơm ngan ngát của trà thảo dược&nbsp;và vị đậm đà của trà cúc chi và đông trùng hạ thảo.
                                </p>
                            </div>
                            <div className='button-custom'>
                                <button className='wow animate__bounceInUp'>Thử ngay</button>
                            </div>
                        </div>
                    </div>
                    <div className='banner-two'>
                        <div className='banner-box'>
                            <div className='banner-caption'>
                                <h2 className="wow animate__bounceInDown">Acatea</h2>
                            </div>
                            <div className='banner-caption__pretty'>
                                <h2 className='wow animate__bounceInLeft'>Tinh hoa ẩm thực việt nam</h2>
                            </div>
                            <div className='content'>
                                <p className='wow animate__bounceInLeft'>
                                    Sự hòa quyện tuyệt vời giữa hương thơm ngan ngát của acatea&nbsp;và vị đậm đà của trà thảo dược.
                                </p>
                            </div>
                            <div className='button-custom'>
                                <button className='wow animate__bounceInUp'>Thử ngay</button>
                            </div>
                        </div>
                    </div>
                    <div className='banner-three'>
                        <div className='banner-box'>
                            <div className='banner-caption'>
                                <h2 className="wow animate__bounceInDown">Trà thảo dược</h2>
                            </div>
                            <div className='banner-caption__pretty'>
                                <h2 className='wow animate__bounceInLeft'>Nâng tầm cuộc sống</h2>
                            </div>
                            <div className='content'>
                                <p className='wow animate__bounceInLeft'>
                                    Ngày nay, trà thảo dược đang thu hút rất nhiều sự chú ý trên toàn thế giới với mong muốn tìm ra giải pháp phòng và chữa bệnh an toàn, bền vững, mang lại lợi ích sức khoẻ cho con người, tránh được hiện tượng kháng thuốc hay việc lạm dụng thuốc dẫn đến nhiều tác dụng phụ không mong muốn, đặc biệt là các bệnh mãn tính, tiểu đường và béo phì...
                                </p>
                            </div>
                            <div className='button-custom'>
                                <button className='wow animate__bounceInUp'>Thử ngay</button>
                            </div>
                        </div>
                    </div>
                </Slider>
            </section>
            {/* End Slider */}
            {/* Product new */}
            <section className='product'>
                <img className='bgr-img' src={bgrsp} alt=' bgr sản phẩm' />
                <div className='product-new'>
                    <div className='title'>
                        <h2 className='wow animate__bounceInDown'>Sản phẩm nổi bật</h2>
                    </div>
                    <Slider {...settingsProduct}>
                        {mockData.map((item, index) => (
                            <div className='product-item wow animate__bounceInUp' key={index}>
                                <div className='product-img'>
                                    <img src={item.imageUrl} alt='image-01' />
                                </div>
                                <div className='product-caption'>
                                    <h3>{item.name}</h3>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </section>
            {/* End Product new */}

            {/* introduce */}
            <section className='introduce'>
                <div className='introduce-content'></div>
            </section>
            {/* End introduce */}
        </section>
    )
}
