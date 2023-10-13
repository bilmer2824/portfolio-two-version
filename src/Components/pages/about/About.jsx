import { useContext } from 'react';
import { Container } from 'react-bootstrap';
import Context from '../../layout/context/Context';

// import react icons
import { AiOutlineDownload } from 'react-icons/ai';
import { GoChevronRight } from 'react-icons/go';

import * as React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';

import logo from '../../img/Frame night.png';

import rezume from './Резюме-1.png'

const About = () => {
    const { localhost, ActiveClass, Letstate, language } = useContext(Context)
    return (
        <>
            <section className="about">
                <h2 className={`education_main_title ${localhost ? "color-cl-plus" : "color-cl"}  `} >
                    {language.aboutTitle_1}
                </h2>
                <Container>
                    <div className="about_top">
                        <div className={`about_logo_page ${localhost ? "border-cl-plus" : "border-cl"}`}>
                            {/* <img src={`${localhost ? Logo : logo}`} className="about_logo_img" alt="" /> */}
                        </div>
                        <div className="about_title_gpa">
                            <h1 className={`about_bg_title ${localhost ? "color-cl-aqua" : "color-cl-orange"}`}>
                                {language.aboutTitle_2}
                                <span className={`about_lesson ${localhost ? "background-cl-plus" : "background-cl"}`} />
                            </h1>
                            <ul className="about_list">
                                <li className="about_item">
                                    <p className={`about_item_p ${localhost ? "color-cl-plus" : "color-cl"}`} >{language.aboutTitle_3}:</p>
                                    <span className={`about_item_span ${localhost ? "color-cl-aqua" : "color-cl-orange"}`}>{language.aboutTitle_4}</span>
                                </li>
                                <li className="about_item">
                                    <p className={`about_item_p ${localhost ? "color-cl-plus" : "color-cl"}`}>{language.aboutTitle_5}:</p>
                                    <span className={`about_item_span ${localhost ? "color-cl-aqua" : "color-cl-orange"}`}>{language.aboutTitle_7}</span>
                                </li>
                                <li className="about_item">
                                    <p className={`about_item_p ${localhost ? "color-cl-plus" : "color-cl"}`}>{language.aboutTitle_6}:</p>
                                    <span className={`about_item_span ${localhost ? "color-cl-aqua" : "color-cl-orange"}`}>{language.aboutTitle_8}</span>
                                </li>
                                <li className="about_item">
                                    <p className={`about_item_p ${localhost ? "color-cl-plus" : "color-cl"}`}>{language.aboutTitle_9}:</p>
                                    <span className={`about_item_span ${localhost ? "color-cl-aqua" : "color-cl-orange"}`}>+998 (95) 019 28 24</span>
                                </li>
                                <li className="about_item">
                                    <p className={`about_item_p ${localhost ? "color-cl-plus" : "color-cl"}`}>{language.aboutTitle_10}:</p>
                                    <span className={`about_item_span ${localhost ? "color-cl-aqua" : "color-cl-orange"}`}>18 {language.aboutTitle_11}</span>
                                </li>
                                <li className="about_item">
                                    <p className={`about_item_p ${localhost ? "color-cl-plus" : "color-cl"}`}>{language.aboutTitle_12}:</p>
                                    <span className={`about_item_span ${localhost ? "color-cl-aqua" : "color-cl-orange"}`}>{language.aboutTitle_13}</span>
                                </li>
                                <li className="about_item">
                                    <p className={`about_item_p ${localhost ? "color-cl-plus" : "color-cl"}`}>{language.aboutTitle_14}:</p>
                                    <a href='https://sabitislamov2004@gmail.com' className={`about_item_span about_email_href ${localhost ? "color-cl-aqua" : "color-cl-orange"}`}>sabitislamov2004@gmail.com</a>
                                </li>
                            </ul>
                            <div className="about_link_ss">
                                <a href={rezume} download>
                                    <Button variant="outlined" className={`about_button ${localhost ? "background-cl-plus boxShadowColor-plus" : "background-cl boxShadowColor"}`}>
                                    {language.aboutTitle_15}
                                    </Button>
                                </a>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
            <section className="aboutUsing">
                <Container>
                    {/* <div
                        className={`aboutUsing_button ${Letstate && "active"} ${localhost ? "border-cl-plus" : "border-cl"}`}
                        onClick={ActiveClass}
                    >
                        <h4 className={`about_mire_link ${localhost ? "color-cl-aqua" : "color-cl-orange"}`}>
                        {language.aboutTitle_16}
                            <GoChevronRight className="aboutUsing_icon" />
                        </h4>
                        <p className={`aboutUsing_text ${localhost ? "color-cl-plus" : "color-cl"}`}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
                            asperiores doloremque soluta? Aliquam sint nostrum laboriosam quis
                            distinctio, ullam illo recusandae quisquam consectetur sit odio.
                            Qui doloribus odio minima dignissimos! Lorem ipsum dolor sit, amet
                            consectetur adipisicing elit. Illum, quam quibusdam. Aliquid
                            dolores tenetur ipsa. Amet eveniet velit ducimus molestias eius,
                            deserunt adipisci recusandae atque sint dolorum ratione sit
                            commodi.
                        </p>
                    </div> */}
                </Container>
            </section>
        </>
    )
}

export default About