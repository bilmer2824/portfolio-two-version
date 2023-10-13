import { useContext, useState } from 'react'
import Context from '../../layout/context/Context';
import { Link } from 'react-router-dom'
// react bootstrap \\
import { Container } from 'react-bootstrap';

// react icons \\
import { FaGithub } from 'react-icons/fa';
import { SiNetlify } from 'react-icons/si';
import { ImTelegram } from 'react-icons/im';
import { BsInstagram } from 'react-icons/bs';


import * as React from 'react';
import Button from '@mui/material/Button';

// import img_1 from '../../img/Group_1.png';
// import img_2 from '../../img/Group_2.png';

import logo from './Резюме-1.png'


const Home = () => {
    const { localhost, HireBtn, language } = useContext(Context)

    const Download = (e) => {
        // e.preventDefault()
    }

    return (
        <>
            <section className='home'>
                <Container>
                    <div className="home_top">
                        <div className="home_title_group">
                            <h1 className={`home_title_№-1 ${localhost ? "color-cl-plus" : "color-cl"}`}>
                                {language.homeTitle_1}
                            </h1>
                            <h1 className={`home_title_№-2 ${localhost ? "color-cl-aqua" : "color-cl-orange"}`}>
                                {language.homeTitle_2}
                            </h1>
                            <p className={`home_text ${localhost ? "color-cl-plus" : "color-cl"}`}>
                                {language.homeTitle_3}
                            </p>
                            <div className="home_btn-group">
                                <Link to="contact">
                                    <Button
                                        onClick={HireBtn}
                                        variant="contained"
                                        className={`home_hire_btn 
                                        ${localhost ? "background-cl-plus boxShadowColor-plus" : "background-cl boxShadowColor"}
                                    `}
                                    >
                                        {language.homeTitle_4}
                                    </Button>
                                </Link>
                                <a onClick={Download} href={logo} download>
                                    <Button

                                        variant="contained"
                                        className={`home_down_btn 
                                        ${localhost ? "background-cl-plus boxShadowColor-plus" : "background-cl boxShadowColor"}
                                    `}
                                    >
                                        {language.homeTitle_5}
                                    </Button>
                                </a>
                            </div>
                            <ul className="home_icon_group">
                                <li className="home_item">
                                    <a href="https://github.com/blackbilmer" className="">
                                        <FaGithub className={`home_link_icon ${localhost ? "color-cl-aqua" : "color-cl-orange"}`} />
                                    </a>
                                </li>
                                <li className="home_item">
                                    <a href="https://app.netlify.com/teams/blackbilmer/overview" className="">
                                        <SiNetlify className={`home_link_icon ${localhost ? "color-cl-aqua" : "color-cl-orange"}`} />
                                    </a>
                                </li>
                                <li className="home_item">
                                    <a href="https://t.me/Islamov_Sabit" className="">
                                        <ImTelegram className={`home_link_icon ${localhost ? "color-cl-aqua" : "color-cl-orange"}`} />
                                    </a>
                                </li>
                                <li className="home_item">
                                    <a href="https://www.instagram.com/mkd_bilmer" className="">
                                        <BsInstagram className={`home_link_icon ${localhost ? "color-cl-aqua" : "color-cl-orange"}`} />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Container>
                {/* <div className="home_scroll_down">
                    <img src={`${localhost ? img_1 : img_2}`} alt="mouse_img" className='home_mouse' />
                    <p className={`home_scroll_text  ${localhost ? "color-cl-plus" : "color-cl"}`}>scroll down</p>
                    <FaChevronLeft className={`home_scroll_icon ${localhost ? "color-cl-aqua" : "color-cl-orange"}`}/>
                </div> */}
            </section>
        </>
    )
}

export default Home