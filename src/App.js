
import { Controller } from './Components/layout/context/Context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// navigation 
import Footer from './Components/web/footer/Footer.jsx';
import Header from './Components/web/header/Header.jsx';
import Nav from './Components/web/header/MobileHeader.jsx';
// pages and layout 
import Home from './Components/pages/home/Home.jsx';
import About from './Components/pages/about/About.jsx';
import Contact from './Components/pages/contact/Contact.jsx';
import Education from './Components/pages/education/Education.jsx';
import Portfolio from './Components/pages/portfolio/Portfolio.jsx';
import Language from './Components/web/lang/Language';
import Component  from './Components/web/components/Conponet.jsx';
// import logo 
import BodyFon_desktop from './Components/img/Group 4.png';
import BodyFon_ipad from './Components/img/Group 7.png'
import BodyFon_phone from './Components/img/london.png';


function App() {
    return (
        <Controller>
            <Router>
                <img src={BodyFon_desktop} className="var_img" alt="logo" />
                <img src={BodyFon_ipad} className="var_img_2" alt="logo" />
                <img src={BodyFon_phone} className="var_img_3" alt="logo" />
                <Header/>
                <Nav/>
                <Language/>
                <Component/>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/about" element={<About/>} />
                    <Route path="/education" element={<Education/>} />
                    <Route path="/portfolio" element={<Portfolio/>} />
                    <Route path="/contact" element={<Contact/>} />
                </Routes>
                <Footer/>
            </Router>
        </Controller>
    );
}

export default App;
