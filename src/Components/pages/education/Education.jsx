import React, { useContext } from "react";
import Context from '../../layout/context/Context';
import { MdLanguage } from "react-icons/md";
import { FiCoffee, FiStar } from "react-icons/fi";
import { BsXDiamondFill } from 'react-icons/bs';
import { AiOutlineExpand, AiOutlineCompress } from "react-icons/ai";

// import img Certificate

import Certificate from '../../img/SCAN0003.jpg';


import { Container } from "react-bootstrap";
const Education = () => {
    const { localhost, OnFullScreen, Full, OnMinScreen, language } = useContext(Context)
    return (
        <>
            <section className="education">
                <h2 className={`education_main_title ${localhost ? "color-cl-plus" : "color-cl"}`}>
                    <span className={`education_spanes ${localhost ? "color-cl-aqua" : "color-cl-orange"}`}>
                        {language.educationTitle_1}
                    </span>&nbsp;
                    {language.educationTitle_2}
                </h2>
                <Container>
                    {/* <div className="education_top">
                        <div className="education_title_gpa">
                            <div className="education_tt">
                                <BsXDiamondFill className={`education_skills_icon ${localhost ? "color-cl-aqua" : "color-cl-orange"}`} />
                            </div>
                            <h2 className={`education_title ${localhost ? "color-cl-plus " : "color-cl"}`}>
                                {language.educationTitle_3}
                            </h2>
                        </div>
                        <p className={`education_text ${localhost ? "color-cl-plus border-cl-plus" : "color-cl border-cl"}`}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla itaque dolorum rerum nihil incidunt facilis veniam necessitatibus, aliquam, recusandae quam accusantium impedit tenetur cupiditate. Possimus tenetur neque animi cumque commodi autem non voluptatum laboriosam harum unde, dolorum fugit fugiat quos, qui voluptates ipsum dicta ratione? Recusandae eveniet tempore iure hic at voluptatibus velit quisquam aliquid aspernatur cupiditate, distinctio autem asperiores animi facilis quibusdam id neque optio itaque cumque placeat officia. Assumenda eos quibusdam dignissimos quasi et? Non quis repudiandae praesentium molestias aut consequatur. Quod quidem numquam quia? Quo nulla quaerat repudiandae rerum, dicta nisi. Labore commodi tempore at maiores ea.
                        </p>
                    </div> */}
                    <div className="education_skills">
                        <div className="education_title_gpa">
                            <div className="education_tt">
                                <FiCoffee className={`education_skills_icon ${localhost ? "color-cl-aqua" : "color-cl-orange"}`} />
                            </div>
                            <h2 className={`education_title ${localhost ? "color-cl-plus" : "color-cl"}`}>
                                {language.educationTitle_4}
                            </h2>
                        </div>
                        <div className="education_skills_text_pp">
                            <div className="education_front">
                                <h4 className={`education_skills_title ${localhost ? "color-cl-aqua" : "color-cl-orange"}`}>
                                    {language.educationTitle_5}
                                </h4>
                                <p className={`education_skills_text ${localhost ? "color-cl-plus" : "color-cl"}`}>html/pug</p>
                            </div>
                            <div className="education_front">
                                <h4 className={`education_skills_title ${localhost ? "color-cl-aqua" : "color-cl-orange"}`}>
                                    {language.educationTitle_6}
                                </h4>
                                <p className={`education_skills_text ${localhost ? "color-cl-plus" : "color-cl"}`}>bootstrap/react-bootstrap/reactstrap</p>
                            </div>
                            <div className="education_front">
                                <h4 className={`education_skills_title ${localhost ? "color-cl-aqua" : "color-cl-orange"}`}>
                                    {language.educationTitle_7}
                                </h4>
                                <p className={`education_skills_text ${localhost ? "color-cl-plus" : "color-cl"}`}>css/scss</p>
                            </div>
                            <div className="education_front">
                                <h4 className={`education_skills_title ${localhost ? "color-cl-aqua" : "color-cl-orange"}`}>
                                    {language.educationTitle_8}
                                </h4>
                                <p className={`education_skills_text ${localhost ? "color-cl-plus" : "color-cl"}`}>javaScript</p>
                            </div>
                            <div className="education_front">
                                <h4 className={`education_skills_title ${localhost ? "color-cl-aqua" : "color-cl-orange"}`}>
                                    {language.educationTitle_9}
                                </h4>
                                <p className={`education_skills_text ${localhost ? "color-cl-plus" : "color-cl"}`}>react.js/react-native</p>
                            </div>
                            <div className="education_front">
                                <h4 className={`education_skills_title ${localhost ? "color-cl-aqua" : "color-cl-orange"}`}>
                                    {language.educationTitle_10}
                                </h4>
                                <p className={`education_skills_text ${localhost ? "color-cl-plus" : "color-cl"}`}>npm/yarn</p>
                            </div>
                            <div className="education_front">
                                <h4 className={`education_skills_title ${localhost ? "color-cl-aqua" : "color-cl-orange"}`}>
                                    {language.educationTitle_11}
                                </h4>
                                <p className={`education_skills_text ${localhost ? "color-cl-plus" : "color-cl"}`}>
                                    github/netlife/vs-code
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="education_lang">
                        <div className="education_title_gpa">
                            <div className="education_tt">
                                <MdLanguage className={`education_skills_icon ${localhost ? "color-cl-aqua" : "color-cl-orange"}`} />
                            </div>
                            <h2 className={`education_title ${localhost ? "color-cl-plus" : "color-cl"}`}>
                                {language.educationTitle_14}
                            </h2>
                        </div>
                        <div className="education_language">
                            <div className="education_front">
                                <h4 className={`education_skills_title ${localhost ? "color-cl-aqua" : "color-cl-orange"}`}>
                                    Uzbek<span className={`education_basic_span  ${localhost ? "color-cl-plus" : "color-cl"}`}>
                                        &nbsp;  ({language.educationTitle_12})
                                    </span>
                                </h4>
                                <div className="education_range">
                                    <div className={` education_range_bacic cvg_1 ${localhost ? "background-cl-plus" : "background-cl"}`}></div>
                                </div>
                            </div>
                            <div className="education_front">
                                <h4 className={`education_skills_title ${localhost ? "color-cl-aqua" : "color-cl-orange"}`}>
                                    Kazakh<span className={`education_basic_span  ${localhost ? "color-cl-plus" : "color-cl"}`}>
                                        &nbsp;  ({language.educationTitle_12})
                                    </span>
                                </h4>
                                <div className="education_range">
                                    <div className={` education_range_bacic cvg_2 ${localhost ? "background-cl-plus" : "background-cl"}`}></div>
                                </div>
                            </div>
                            <div className="education_front">
                                <h4 className={`education_skills_title ${localhost ? "color-cl-aqua" : "color-cl-orange"}`}>
                                    english<span className={`education_basic_span  ${localhost ? "color-cl-plus" : "color-cl"}`}>
                                        &nbsp;  ({language.educationTitle_15})
                                    </span>
                                </h4>
                                <div className="education_range">
                                    <div className={` education_range_bacic cvg_3 ${localhost ? "background-cl-plus" : "background-cl"}`}></div>
                                </div>
                            </div>
                            <div className="education_front">
                                <h4 className={`education_skills_title ${localhost ? "color-cl-aqua" : "color-cl-orange"}`}>
                                    russian<span className={`education_basic_span  ${localhost ? "color-cl-plus" : "color-cl"}`}>
                                        &nbsp;  ({language.educationTitle_15})
                                    </span>
                                </h4>
                                <div className="education_range">
                                    <div className={` education_range_bacic cvg_4 ${localhost ? "background-cl-plus" : "background-cl"}`}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="education_certificate">
                        <div className="education_title_gpa">
                            <div className="education_tt">
                                <FiStar className={`education_skills_icon ${localhost ? "color-cl-aqua" : "color-cl-orange"}`} />
                            </div>
                            <h2 className={`education_title ${localhost ? "color-cl-plus" : "color-cl"}`}>
                                {language.educationTitle_13}
                            </h2>
                        </div>
                        <div className="education_logo_pages_bg">
                            <div className={`education_certificate_img ${localhost ? "border-cl-plus" : "border-cl"}`}>
                                <img src={Certificate} className={`education_certificate_logo  `} alt="logo" />
                                <AiOutlineExpand onClick={OnFullScreen} className={`education_full_screen_icon`} />
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
            <section className={`full ${Full ? "full_open" : ""}`}>
                <AiOutlineCompress onClick={OnMinScreen} className={`full_icon`} />
                <div className="full_top">
                    <img className="full_img" src={Certificate} alt="fullPageImg" />
                </div>
            </section>
        </>
    )
}

export default Education