import React, { useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';
import Day from '../../svg/Group day.png'
import Night from '../../svg/Group night.png';
// import react icons

import { TbLanguage } from 'react-icons/tb';
import { CgSun } from 'react-icons/cg';
import { MdNightsStay } from 'react-icons/md';

// import mui icons
import TranslateIcon from '@mui/icons-material/Translate';
import BedtimeIcon from '@mui/icons-material/Bedtime';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

// import material ui
import IconButton from '@mui/material/IconButton';


import Context from '../../layout/context/Context';


const Header = () => {

    const { Activate, localhost, Language, language } = useContext(Context)

    return (
        <>
            <header className='header'>
                <Container>
                    <div className="header_top">
                        <Link to="/" >
                            <div className={`header_page ${localhost ? "border-cl-plus" : "border-cl"}`}>
                                <img
                                    className="header_logo"
                                    src={`${localhost ? Night : Day}`}
                                    alt="logo" />
                            </div>
                        </Link>
                        <div className="header_list_group">
                            <ul className="header_list">
                                <li className="header_item">
                                    <NavLink className={`header_link ${localhost ? "color-cl-plus color-cl-plus-active" : "color-cl color-cl-active"}`} to="/">{language.headerTitle_1}</NavLink>
                                </li>
                                <li className="header_item">
                                    <NavLink className={`header_link ${localhost ? "color-cl-plus color-cl-plus-active" : "color-cl color-cl-active"}`} to="/about">{language.headerTitle_2}</NavLink>
                                </li>
                                <li className="header_item">
                                    <NavLink className={`header_link ${localhost ? "color-cl-plus color-cl-plus-active" : "color-cl color-cl-active"}`} to="/education">{language.headerTitle_3}</NavLink>
                                </li>
                                <li className="header_item">
                                    <NavLink className={`header_link ${localhost ? "color-cl-plus color-cl-plus-active" : "color-cl color-cl-active"}`} to="/portfolio">{language.headerTitle_4}</NavLink>
                                </li>
                                <li className="header_item">
                                    <NavLink className={`header_link ${localhost ? "color-cl-plus color-cl-plus-active" : "color-cl color-cl-active"}`} to="/contact">{language.headerTitle_5}</NavLink>
                                </li>
                            </ul>
                            <div className="header-btn_group">
                                <IconButton
                                    aria-label="delete"
                                    onClick={Language}
                                    className={`header_btn  
                                        ${localhost ? "border-cl-plus" : "border-cl"}
                                   `}>
                                    <TranslateIcon className={`header_lang_icon header_lang_btn header_icon ${localhost ? "color-cl-plus" : "color-cl"}`} />
                                </IconButton>
                                <IconButton
                                    id="dayModeBtn"
                                    aria-label="delete"
                                    onClick={Activate}
                                    className={`header_btn 
                                        ${localhost ? "border-cl-plus" : "border-cl"}
                                    `}>
                                    <BedtimeIcon className={`header_night_icon header_icon ${localhost ? "day-night color-cl-plus" : "color-cl"}`} />
                                    <WbSunnyIcon className={`header_day_icon header_icon ${localhost ? "day-night color-cl-plus" : "color-cl"}`} />
                                </IconButton>

                            </div>
                        </div>
                    </div>
                </Container>
            </header>
        </>
    )   
}

export default Header