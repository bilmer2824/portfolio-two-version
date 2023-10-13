import { createContext, useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';

import { eng } from '../language/Lang.ENG.jsx';
import { uz } from '../language/Lang.UZ.jsx';
import { ru } from '../language/Lang.RU.jsx';
import { kz } from '../language/Lang.KZ.jsx';
import { kr } from '../language/Lang.KR.jsx';

const Context = createContext()

export const Controller = ({ children }) => {
    const [localhost, setLocalhost] = useState(false)


    const Activate = () => {

        setLocalhost(!localhost)
        if (localhost) {
            console.log("day");
            document.querySelector('body').style.background = "#fff"
            // document.querySelector('header').style.boxShadow = "0px 5px 5px -5px orange"
        }
        else {
            console.log("night");
            document.querySelector('body').style.background = "#000"
            // document.querySelector('header').style.boxShadow = "0px 5px 5px -5px aqua"
        }
    }

    useEffect(() => { document.addEventListener('keydown', detectKeyDown, true,) });

    const detectKeyDown = (e) => {
        if (e.keyCode === 113) {
            setLocalhost(!localhost)
            if (localhost) {
                console.log("day");
                document.querySelector('body').style.background = "#fff"
            }
            else {
                console.log("night");
                document.querySelector('body').style.background = "#000"

            }
        }
    }


    // function scrollTop 
    const listenToScroll = () => {
        let heightToHidden_1 = 600;
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop
        if (winScroll > heightToHidden_1) {
            // console.log("hello")
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", listenToScroll)
    }, [])

    // send message to google gmail
    const form = useRef();

    

    const sendEmail = (e) => {
        e.preventDefault();


        if (userName.trim() !== '' && userNumber.trim() !== '' && userEmail.trim() !== '' && userMessage.trim() !== '') {
            console.log("networking");
            emailjs.sendForm('service_8r8k6eg', 'template_z2c7w6q', form.current, 'Er1a7Rkkn-N0YIJ-m')
                .then((result) => {
                    console.log(result.text);
                    console.log("message sent");

                    setUserName('');
                    setUserNumber('');
                    setUserEmail('');
                    setUserMessage('');


                    setDisable(true)
                    document.getElementById('sendBtn').style.opacity = '0.4';
                    setCheckId(true)



                    setTimeout(() => {
                        setDisable(false)
                        document.getElementById('sendBtn').style.opacity = '1'
                        setCheckId(false)
                    }, 3000);

                }, (error) => {
                    console.log(error.text);
                    console.log("message will not be sent");
                });
        }
        else {
            setErrors(true)
            setDisable(true)
            document.getElementById('sendBtn').style.opacity = '0.4';

            setTimeout(() => {
                setDisable(false)
                setErrors(false)
                document.getElementById('sendBtn').style.opacity = '1'
            }, 2000);


        }

    };
    const [errors, setErrors] = useState(false);

    const [checkId, setCheckId] = useState(false)

    const [Lang, setLang] = useState(false);

    const Language = () => {
        setLang(!Lang)
    }
    const [Letstate, setLetState] = useState(false);
    const ActiveClass = () => {
        setLetState(!Letstate);
    };


    const [Full, setFull] = useState(false);

    const OnFullScreen = () => {
        console.log("full screen");
        setFull(true)
        document.querySelector('body').style.overflow = 'hidden';
    }
    const OnMinScreen = () => {
        console.log("full screen");
        setFull(false)
        document.querySelector('body').style.overflow = 'auto';
    }

    const [userName, setUserName] = useState("")
    const [userNumber, setUserNumber] = useState("")
    const [userEmail, setUserEmail] = useState("")
    const [userMessage, setUserMessage] = useState("")

    const [Disable, setDisable] = useState(false)

    const onUserName = (e) => {
        setUserName(e.target.value)
        e.preventDefault()
    }
    const onUserNumber = (e) => {
        setUserNumber(e.target.value)
        e.preventDefault()
    }
    const onUserEmail = (e) => {
        setUserEmail(e.target.value)
        e.preventDefault()
    }
    const onUserMessage = (e) => {
        setUserMessage(e.target.value)
        e.preventDefault()
    }

    const onClearMessage = (e) => {
        e.preventDefault()
        setUserName('')
        setUserNumber('')
        setUserEmail('')
        setUserMessage('')
    }

    const [connection, setConnection] = useState(false)

    const HireBtn = () => {
        setConnection(true)

        setTimeout(() => {
            setConnection(false)
        }, 5000);
    }
    
    const [language, setLanguage] = useState(eng, uz, ru, kz, kr)
    
    
    
    
    const Lang_eng = () => {
        setLanguage(eng)
        console.log(setLanguage(eng))
    }
    const Lang_ru = () => {
        setLanguage(ru)
        console.log(setLanguage(ru))
    }
    const Lang_uz = () => {
        setLanguage(uz)
        console.log(setLanguage(uz))
    }
    const Lang_kz = () => {
        setLanguage(kz)
        console.log(setLanguage(kz))
    }
    const Lang_kr = () => {
        setLanguage(kr)
        console.log(setLanguage(kr))
    }
    


    return <Context.Provider value={{

        // function

        sendEmail,
        Activate,
        Language,
        ActiveClass,
        OnFullScreen,
        OnMinScreen,
        onUserName,
        onUserNumber,
        onUserEmail,
        onUserMessage,
        onClearMessage,
        HireBtn,
        Lang_eng,
        Lang_ru,
        Lang_uz,
        Lang_kz,
        Lang_kr,


        // variable
        form,
        localhost,
        Lang,
        Letstate,
        Full,
        userName,
        userNumber,
        userEmail,
        userMessage,
        Disable,
        checkId,
        connection,
        errors,
        language
    }}>
        {children}

    </Context.Provider>
}

export default Context