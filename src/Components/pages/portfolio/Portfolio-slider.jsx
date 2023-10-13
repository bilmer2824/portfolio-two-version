import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import Context from '../../layout/context/Context';
import logo_1 from '../../img/Frame 2.png';
import logo_2 from '../../img/Frame night.png';

import rezume_1 from '../../svg/image 7.png';
import rezume_2 from '../../svg/image 8.png';
import rezume_3 from '../../svg/image 9.png';
import rezume_4 from '../../svg/image 10.png';
export default function App() {
    const { localhost } = useContext(Context)
    return (
        <>
            <Swiper 
                
                breakpoints={{
                    1800: {
                        slidesPerView: 4,
                    },
                    1400: {
                        slidesPerView: 3,
                    },
                    1200: {
                        slidesPerView: 2,
                    },
                    820: {
                        slidesPerView: 2,
                    },
                    700: {
                        slidesPerView: 2,
                    },
                    640: {
                        width: 640,
                        slidesPerView: 2,
                    },
                    600: {
                        slidesPerView: 1,
                    },
                }}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className={`portfolio_div_zba ${localhost ? "border-cl-plus  background-image-plus" : "background-image border-cl"}`}>
                        <img className="item_logo" src={rezume_1} alt="" />
                        <h2 className={`portfolio_swipper_title ${localhost ? "color-cl-plus" : "color-cl"}`} >todo list</h2>
                        <ul className="portfolio_swipper_list">
                            <li className="portfolio_swipper_item">
                                <h6 className={`portfolio_left_title ${localhost ? "color-cl-plus" : "color-cl"}`}>type</h6>
                                <h6 className={`portfolio_right_title ${localhost ? "color-cl-aqua" : "color-cl-orange"}`}>web</h6>
                            </li>
                            <li className="portfolio_swipper_item">
                                <h6 className={`portfolio_left_title ${localhost ? "color-cl-plus" : "color-cl"}`}>language</h6>
                                <h6 className={`portfolio_right_title ${localhost ? "color-cl-aqua" : "color-cl-orange"}`}>java<span>script</span></h6>
                            </li>
                            <li className="portfolio_swipper_item">
                                <h6 className={`portfolio_left_title ${localhost ? "color-cl-plus" : "color-cl"}`}>Framework</h6>
                                <h6 className={`portfolio_right_title ${localhost ? "color-cl-aqua" : "color-cl-orange"}`}>React</h6>
                            </li>
                            <li className="portfolio_swipper_item">
                                <h6 className={`portfolio_left_title ${localhost ? "color-cl-plus" : "color-cl"}`}>Complated On</h6>
                                <h6 className={`portfolio_right_title ${localhost ? "color-cl-aqua" : "color-cl-orange"}`}>20, June 2022</h6>
                            </li>
                            <li className="portfolio_swipper_item">
                                <h6 className={`portfolio_left_title ${localhost ? "color-cl-plus" : "color-cl"}`}>link</h6>
                                <a href="https://my-class-work.netlify.app/" className={`portfolio_right_title link ${localhost ? "color-cl-aqua" : "color-cl-orange"}`}>link</a>
                            </li>
                        </ul>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`portfolio_div_zba ${localhost ? "border-cl-plus  background-image-plus" : "background-image border-cl"}`}>
                        <img className="item_logo" src={rezume_2} alt="" />
                        <h2 className={`portfolio_swipper_title ${localhost ? "color-cl-plus" : "color-cl"}`} >portfolio</h2>
                        <ul className="portfolio_swipper_list">
                            <li className="portfolio_swipper_item">
                                <h6 className={`portfolio_left_title ${localhost ? "color-cl-plus" : "color-cl"}`}>type</h6>
                                <h6 className={`portfolio_right_title ${localhost ? "color-cl-aqua" : "color-cl-orange"}`}>web</h6>
                            </li>
                            <li className="portfolio_swipper_item">
                                <h6 className={`portfolio_left_title ${localhost ? "color-cl-plus" : "color-cl"}`}>language</h6>
                                <h6 className={`portfolio_right_title ${localhost ? "color-cl-aqua" : "color-cl-orange"}`}>java<span>script</span></h6>
                            </li>
                            <li className="portfolio_swipper_item">
                                <h6 className={`portfolio_left_title ${localhost ? "color-cl-plus" : "color-cl"}`}>Framework</h6>
                                <h6 className={`portfolio_right_title ${localhost ? "color-cl-aqua" : "color-cl-orange"}`}>React</h6>
                            </li>
                            <li className="portfolio_swipper_item">
                                <h6 className={`portfolio_left_title ${localhost ? "color-cl-plus" : "color-cl"}`}>Complated On</h6>
                                <h6 className={`portfolio_right_title ${localhost ? "color-cl-aqua" : "color-cl-orange"}`}>20, June 2022</h6>
                            </li>
                            <li className="portfolio_swipper_item">
                                <h6 className={`portfolio_left_title ${localhost ? "color-cl-plus" : "color-cl"}`}>link</h6>
                                <a href="https://abdulaziz-portfolio-webs.netlify.app/" className={`portfolio_right_title link ${localhost ? "color-cl-aqua" : "color-cl-orange"}`}>link</a>
                            </li>
                        </ul>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`portfolio_div_zba ${localhost ? "border-cl-plus  background-image-plus" : "background-image border-cl"}`}>
                        <img className="item_logo" src={rezume_3} alt="" />
                        <h2 className={`portfolio_swipper_title ${localhost ? "color-cl-plus" : "color-cl"}`} >portfolio</h2>
                        <ul className="portfolio_swipper_list">
                            <li className="portfolio_swipper_item">
                                <h6 className={`portfolio_left_title ${localhost ? "color-cl-plus" : "color-cl"}`}>type</h6>
                                <h6 className={`portfolio_right_title ${localhost ? "color-cl-aqua" : "color-cl-orange"}`}>web</h6>
                            </li>
                            <li className="portfolio_swipper_item">
                                <h6 className={`portfolio_left_title ${localhost ? "color-cl-plus" : "color-cl"}`}>language</h6>
                                <h6 className={`portfolio_right_title ${localhost ? "color-cl-aqua" : "color-cl-orange"}`}>java<span>script</span></h6>
                            </li>
                            <li className="portfolio_swipper_item">
                                <h6 className={`portfolio_left_title ${localhost ? "color-cl-plus" : "color-cl"}`}>Framework</h6>
                                <h6 className={`portfolio_right_title ${localhost ? "color-cl-aqua" : "color-cl-orange"}`}>none</h6>
                            </li>
                            <li className="portfolio_swipper_item">
                                <h6 className={`portfolio_left_title ${localhost ? "color-cl-plus" : "color-cl"}`}>Complated On</h6>
                                <h6 className={`portfolio_right_title ${localhost ? "color-cl-aqua" : "color-cl-orange"}`}>20, June 2022</h6>
                            </li>
                            <li className="portfolio_swipper_item">
                                <h6 className={`portfolio_left_title ${localhost ? "color-cl-plus" : "color-cl"}`}>link</h6>
                                <a href="https://my-portfolio-html.netlify.app/" className={`portfolio_right_title link ${localhost ? "color-cl-aqua" : "color-cl-orange"}`}>link</a>
                            </li>
                        </ul>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`portfolio_div_zba ${localhost ? "border-cl-plus  background-image-plus" : "background-image border-cl"}`}>
                        <img className="item_logo" src={rezume_4} alt="" />
                        <h2 className={`portfolio_swipper_title ${localhost ? "color-cl-plus" : "color-cl"}`} >open shop</h2>
                        <ul className="portfolio_swipper_list">
                            <li className="portfolio_swipper_item">
                                <h6 className={`portfolio_left_title ${localhost ? "color-cl-plus" : "color-cl"}`}>type</h6>
                                <h6 className={`portfolio_right_title ${localhost ? "color-cl-aqua" : "color-cl-orange"}`}>web</h6>
                            </li>
                            <li className="portfolio_swipper_item">
                                <h6 className={`portfolio_left_title ${localhost ? "color-cl-plus" : "color-cl"}`}>language</h6>
                                <h6 className={`portfolio_right_title ${localhost ? "color-cl-aqua" : "color-cl-orange"}`}>java<span>script</span></h6>
                            </li>
                            <li className="portfolio_swipper_item">
                                <h6 className={`portfolio_left_title ${localhost ? "color-cl-plus" : "color-cl"}`}>Framework</h6>
                                <h6 className={`portfolio_right_title ${localhost ? "color-cl-aqua" : "color-cl-orange"}`}>none</h6>
                            </li>
                            <li className="portfolio_swipper_item">
                                <h6 className={`portfolio_left_title ${localhost ? "color-cl-plus" : "color-cl"}`}>Complated On</h6>
                                <h6 className={`portfolio_right_title ${localhost ? "color-cl-aqua" : "color-cl-orange"}`}>20, June 2022</h6>
                            </li>
                            <li className="portfolio_swipper_item">
                                <h6 className={`portfolio_left_title ${localhost ? "color-cl-plus" : "color-cl"}`}>link</h6>
                                <a href="https://my-open-shop-bootstrap-project.netlify.app/index.2.html" className={`portfolio_right_title link ${localhost ? "color-cl-aqua" : "color-cl-orange"}`}>link</a>
                            </li>
                        </ul>
                    </div>
                </SwiperSlide>
                
                
                <SwiperSlide>
                    <div className={`portfolio_div_zba ${localhost ? "border-cl-plus  background-image-plus" : "background-image border-cl"}`}>
                        <img className="item_logo" src={`${localhost ? logo_2 : logo_1}`} alt="" />
                        <h2 className={`portfolio_swipper_title ${localhost ? "color-cl-plus" : "color-cl"}`} >project name</h2>
                        <ul className="portfolio_swipper_list">
                            <li className="portfolio_swipper_item">
                                <h6 className={`portfolio_left_title ${localhost ? "color-cl-plus" : "color-cl"}`}>type</h6>
                                <h6 className={`portfolio_right_title ${localhost ? "color-cl-aqua" : "color-cl-orange"}`}>web</h6>
                            </li>
                            <li className="portfolio_swipper_item">
                                <h6 className={`portfolio_left_title ${localhost ? "color-cl-plus" : "color-cl"}`}>language</h6>
                                <h6 className={`portfolio_right_title ${localhost ? "color-cl-aqua" : "color-cl-orange"}`}>java<span>script</span></h6>
                            </li>
                            <li className="portfolio_swipper_item">
                                <h6 className={`portfolio_left_title ${localhost ? "color-cl-plus" : "color-cl"}`}>Framework</h6>
                                <h6 className={`portfolio_right_title ${localhost ? "color-cl-aqua" : "color-cl-orange"}`}>React</h6>
                            </li>
                            <li className="portfolio_swipper_item">
                                <h6 className={`portfolio_left_title ${localhost ? "color-cl-plus" : "color-cl"}`}>Complated On</h6>
                                <h6 className={`portfolio_right_title ${localhost ? "color-cl-aqua" : "color-cl-orange"}`}>20, June 2022</h6>
                            </li>
                            <li className="portfolio_swipper_item">
                                <h6 className={`portfolio_left_title ${localhost ? "color-cl-plus" : "color-cl"}`}>link</h6>
                                <a href="#!" className={`portfolio_right_title link ${localhost ? "color-cl-aqua" : "color-cl-orange"}`}>link</a>
                            </li>
                        </ul>
                    </div>
                </SwiperSlide>
                
            </Swiper>
        </>
    );
}
