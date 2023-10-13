import React, { useContext, useState } from 'react'
// import react-bootstrap 
import { Container } from 'react-bootstrap';
import Context from '../../layout/context/Context';
// import react icons 
import { BsFillPhoneFill } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import { BsInstagram } from 'react-icons/bs';
import { ImTelegram } from 'react-icons/im';
import { BsFacebook } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { GrPinterest } from 'react-icons/gr';
import { AiOutlineSend } from 'react-icons/ai';
import { AiOutlineClear } from 'react-icons/ai';
// import material ui 
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';

const Contact = () => {
    const { localhost, errors, language } = useContext(Context)
    const { form, sendEmail } = useContext(Context)
    
    const {
        userName,
        onUserName,
        userNumber,
        onUserNumber,
        userEmail,
        onUserEmail,
        userMessage,
        onUserMessage,

        Disable,
        onClearMessage,
        checkId
    }
    = useContext(Context)
    return (
        <>
            <section className='contact'>
                <h2 className={`education_main_title ${localhost ? "color-cl-plus" : "color-cl"}`} >
                    <span className={`education_spanes ${localhost ? "color-cl-aqua" : "color-cl-orange"}`} >{language.contactTitle_1}</span>&nbsp; {language.contactTitle_2}
                </h2>
                <Container>
                    <div className="contact_top">
                        <ul className="contact_list">
                            <li className="contact_item">
                                <div className="contact_icons">
                                    <BsFillPhoneFill className={`contact_icon ${localhost ? "color-cl-aqua" : "color-cl-orange"}`} />
                                    <p className={`contact_item_text ${localhost ? "color-cl-aqua" : "color-cl-orange"}`}>{language.contactTitle_3}</p>
                                </div>
                                <div className="contact_text">
                                    <a href="tel:+998 95 019 28 24" alt="phone number" className={`contact_p_text ${localhost ? "color-cl-plus" : "color-cl"}`} >{language.contactTitle_15} +998 95 019 28 24</a>
                                    <a href="tel:+998 99 019 28 24" alt="phone number" className={`contact_p_text ${localhost ? "color-cl-plus" : "color-cl"}`} >{language.contactTitle_15} +998 99 019 28 24</a>
                                </div>
                            </li>

                            <span className={`contact_list_span ${localhost ? "background-cl-plus" : "background-cl"}`} />

                            <li className="contact_item">
                                <div className="contact_icons">
                                    <AiOutlineMail className={`contact_icon ${localhost ? "color-cl-aqua" : "color-cl-orange"}`} />
                                    <p className={`contact_item_text ${localhost ? "color-cl-aqua" : "color-cl-orange"}`}>{language.contactTitle_4}</p>
                                </div>
                                <div className="contact_text">
                                    <a href="https://sabitislamov2004@gmail.com" alt="email address" className={`contact_p_text ${localhost ? "color-cl-plus" : "color-cl"}`}>sabitislamov2004@gmail.com</a>
                                    <a href="https://bilmerdicertdars@gmail.com" alt="email address" className={`contact_p_text ${localhost ? "color-cl-plus" : "color-cl"}`}>bilmerdicertdars@gmail.com</a>
                                </div>
                            </li>
                        </ul>
                        <h2 className={`contact_title_group ${localhost ? "color-cl-plus" : "color-cl"}`}>
                            <p>{language.contactTitle_16}</p>
                            <p>{language.contactTitle_17}</p>
                        </h2>
                        <form className='contact_form' ref={form} onSubmit={sendEmail}>
                            <input
                                required
                                type="text"
                                placeholder={language.contactTitle_18}
                                className={`contact_user_info
                                 ${localhost ? "background-image-plus border-cl-plus color-cl-plus" : "background-image border-cl color-cl"}`}
                                name="from_name"
                                value={userName}
                                onChange={onUserName}
                            />


                            <input
                                required
                                type="text"
                                placeholder={language.contactTitle_19}
                                className={`contact_user_info 
                                ${localhost ? "background-image-plus border-cl-plus color-cl-plus" : "background-image border-cl color-cl"}`}
                                name="from_phone"
                                value={userNumber}
                                onChange={onUserNumber}
                            />


                            <input
                                required
                                placeholder={language.contactTitle_20}
                                className={`contact_user_email 
                                ${localhost ? "background-image-plus border-cl-plus color-cl-plus" : "background-image border-cl color-cl"}`}
                                type="email"
                                name="from_email"
                                value={userEmail}
                                onChange={onUserEmail}
                            />


                            <textarea
                                required
                                placeholder={language.contactTitle_21}
                                className={`contact_message_info 
                               ${localhost ? "background-image-plus border-cl-plus color-cl-plus" : "background-image border-cl color-cl"}`}
                                name="from_message"
                                value={userMessage}
                                onChange={onUserMessage}
                            />


                            <div className="contact-btn_group">
                                <Button
                                    variant="contained"
                                    className={`contact_send_btn 
                                    ${localhost ? "background-cl-plus boxShadowColor-plus" : "background-cl boxShadowColor"}`}
                                    type={`submit `}
                                    disabled={Disable}
                                    id="sendBtn"
                                >
                                    {language.contactTitle_22}
                                    <AiOutlineSend className='contact_send_icons' />
                                </Button>
                                <Button
                                    onClick={onClearMessage}
                                    variant="contained"
                                    className={`contact_down_btn 
                                   ${localhost ? "background-cl-plus boxShadowColor-plus" : "background-cl boxShadowColor"}`}
                                    type="reset"
                                >
                                    {language.contactTitle_23}
                                    <AiOutlineClear className='contact_send_icons' />
                                </Button>
                            </div>
                        </form>
                        {/* <h2 className={`contact_title_group title-2 ${localhost ? "color-cl-plus" : "color-cl"}`}>
                            Connect with us!
                        </h2> */}

                        {/* <ul className="contact_bt_list">
                            <IconButton
                                aria-label="delete"
                                className={`contact_bt_item 
                                    ${localhost ? "background-cl-plus" : "background-cl"}
                                `}
                            >
                                < BsInstagram className='contact_bt_link' />
                            </IconButton>
                            <IconButton
                                aria-label="delete"
                                className={`contact_bt_item 
                                    ${localhost ? "background-cl-plus" : "background-cl"}
                                `}
                            >
                                < ImTelegram className='contact_bt_link' />
                            </IconButton>
                            <IconButton
                                aria-label="delete"
                                className={`contact_bt_item 
                                    ${localhost ? "background-cl-plus" : "background-cl"}
                                `}
                            >
                                < BsFacebook className='contact_bt_link' />
                            </IconButton>
                            <IconButton
                                aria-label="delete"
                                className={`contact_bt_item 
                                    ${localhost ? "background-cl-plus" : "background-cl"}
                                `}
                            >
                                < BsGithub className='contact_bt_link' />
                            </IconButton>
                            <IconButton
                                aria-label="delete"
                                className={`contact_bt_item 
                                    ${localhost ? "background-cl-plus" : "background-cl"}
                                `}
                            >
                                < GrPinterest className='contact_bt_link' />
                            </IconButton>
                        </ul> */}
                    </div>
                </Container>
                <Alert id="check_id" className={`contact_check_block ${checkId ? "active" : ""}`} severity="success">{language.contactTitle_25}</Alert>
                <Alert className={`contact_error_block ${errors ? "active" : ""}`} severity="error">{language.contactTitle_26}</Alert>
                
            </section>
        </>
    )
}

export default Contact 