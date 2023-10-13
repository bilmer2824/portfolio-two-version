import React, { useContext } from 'react'
import Context from '../../layout/context/Context';
import Slider from "./Portfolio-slider.jsx";
import { Container } from "react-bootstrap";

const Portfolio = () => {
    const { localhost, language } = useContext(Context)
    return (
        <>
            <section className="portfolio">
                <h2 className={`education_main_title ${localhost ? "color-cl-plus" : "color-cl"}`}>
                    <span className={`education_spanes ${localhost ? "color-cl-aqua" : "color-cl-orange"}`}>
                        {language.portTitle_1}
                    </span>&nbsp;
                    {language.portTitle_2}
                </h2>
                <Container>
                    <div className="portfolio_top">
                        <div className={`portfolio_info_page ${localhost ? "border-cl-plus" : "border-cl"}`}>
                            <h2 className={`portfolio_title ${localhost ? "color-cl-aqua" : "color-cl-orange"}`}>
                                {language.portTitle_3}
                            </h2>
                            <p className={`portfolio_text ${localhost ? "color-cl-plus" : "color-cl"}`}>
                                &nbsp;&nbsp;&nbsp;A portfolio is collected during studies. None of them are available on your hosting. If you have any questions, leave a message through the contact page. ( warning: dates given are incorrect )
                            </p>
                        </div>
                        <h4 className={`portfolio_last_title ${localhost ? "color-cl-aqua" : "color-cl-orange"}`}>
                            {language.portTitle_4}
                        </h4>
                        <div className="portfolio_slider">
                            <Slider />
                        </div>
                    </div>
                </Container>
            </section>

        </>
    )
}

export default Portfolio