import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function TrangChu() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }


    return (
        <section id='main'>
            {/* Slider */}
            <Slider {...settings} className='banner-slider'>
                <div className='banner-one'>
                    <div className='banner-caption'>
                        <h2>Trà thảo dược</h2>
                    </div>
                    <div className='banner-caption__pretty'>
                        <h2>Nâng tầm cuộc sống</h2>
                    </div>
                    <div className='content'>
                        <p>
                            Ngày nay, trà thảo dược đang thu hút rất nhiều sự chú ý trên toàn thế giới với mong muốn tìm ra giải pháp phòng và chữa bệnh an toàn, bền vững, mang lại lợi ích sức khoẻ cho con người, tránh được hiện tượng kháng thuốc hay việc lạm dụng thuốc dẫn đến nhiều tác dụng phụ không mong muốn, đặc biệt là các bệnh mãn tính, tiểu đường và béo phì...
                        </p>
                    </div>
                </div>
                <div className='banner-two'>
                <div className='banner-caption'>
                        <h2>Trà thảo dược</h2>
                    </div>
                    <div className='banner-caption__pretty'>
                        <h2>Nâng tầm cuộc sống</h2>
                    </div>
                    <div className='content'>
                        <p>
                            Ngày nay, trà thảo dược đang thu hút rất nhiều sự chú ý trên toàn thế giới với mong muốn tìm ra giải pháp phòng và chữa bệnh an toàn, bền vững, mang lại lợi ích sức khoẻ cho con người, tránh được hiện tượng kháng thuốc hay việc lạm dụng thuốc dẫn đến nhiều tác dụng phụ không mong muốn, đặc biệt là các bệnh mãn tính, tiểu đường và béo phì...
                        </p>
                    </div>
                </div>
                <div className='banner-three'>
                <div className='banner-caption'>
                        <h2>Trà thảo dược</h2>
                    </div>
                    <div className='banner-caption__pretty'>
                        <h2>Nâng tầm cuộc sống</h2>
                    </div>
                    <div className='content'>
                        <p>
                            Ngày nay, trà thảo dược đang thu hút rất nhiều sự chú ý trên toàn thế giới với mong muốn tìm ra giải pháp phòng và chữa bệnh an toàn, bền vững, mang lại lợi ích sức khoẻ cho con người, tránh được hiện tượng kháng thuốc hay việc lạm dụng thuốc dẫn đến nhiều tác dụng phụ không mong muốn, đặc biệt là các bệnh mãn tính, tiểu đường và béo phì...
                        </p>
                    </div>
                </div>
            </Slider>
            {/* End Slider */}
        </section>
    )
}
