import React, { useContext } from 'react'
import { Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import { FaUserAlt } from 'react-icons/fa';
import { MdDocumentScanner } from 'react-icons/md';
import { RiFilePdfFill } from 'react-icons/ri';
import { BsPhoneFill } from 'react-icons/bs';
import Context from '../../layout/context/Context';



const MobileHeader = () => {
    
    const { Activate, localhost, Language, language } = useContext(Context)
    return (
        <>
            <nav className='nav'>
                <Container>
                    <ul className="nav_list">
                        <li className="nav_item">
                            <NavLink className={`nav_link ${localhost ? "color-cl-plus color-cl-plus-active" : "color-cl color-cl-active"}`} to="/" >
                                <AiFillHome />
                            </NavLink>
                        </li>
                        <li className="nav_item">
                            <NavLink className={`nav_link ${localhost ? "color-cl-plus color-cl-plus-active" : "color-cl color-cl-active"}`} to="/about" >
                                <FaUserAlt />
                            </NavLink>
                        </li>
                        <li className="nav_item">
                            <NavLink className={`nav_link ${localhost ? "color-cl-plus color-cl-plus-active" : "color-cl color-cl-active"}`} to="/education" >
                                <MdDocumentScanner />
                            </NavLink>
                        </li>
                        <li className="nav_item">
                            <NavLink className={`nav_link ${localhost ? "color-cl-plus color-cl-plus-active" : "color-cl color-cl-active"}`} to="/portfolio" >
                                <RiFilePdfFill />
                            </NavLink>
                        </li>
                        <li className="nav_item">
                            <NavLink className={`nav_link ${localhost ? "color-cl-plus color-cl-plus-active" : "color-cl color-cl-active"}`} to="/contact" >
                                <BsPhoneFill />
                            </NavLink>
                        </li>
                    </ul>
                </Container>
            </nav>
        </>
    )
}

export default MobileHeader