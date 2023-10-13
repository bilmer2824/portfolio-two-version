import React, { useContext } from 'react'
import Context from '../../layout/context/Context';
const Language = () => {

    const {
        Lang,
        localhost,
        Lang_eng,
        Lang_ru,
        Lang_uz,
        Lang_kz,
        Lang_kr
     } = useContext(Context)

    return (
        <section className={`lang ${Lang ? "lang-active" : ""} ${localhost ? "border-cl-plus background-lang-plus" : "border-cl background-lang"}`}>
            <ul className="lang_list">
                <li onClick={Lang_eng} className={`lang_item ${localhost ? "color-cl-plus" : "color-cl"}`}>
                    English
                </li>
                <li onClick={Lang_ru} className={`lang_item ${localhost ? "color-cl-plus" : "color-cl"}`}>
                    Русский
                </li>
                <li onClick={Lang_uz} className={`lang_item ${localhost ? "color-cl-plus" : "color-cl"}`}>
                    Uzbek
                </li>
                <li onClick={Lang_kz} className={`lang_item ${localhost ? "color-cl-plus" : "color-cl"}`}>
                    Казахский
                </li>
                <li onClick={Lang_kr} className={`lang_item ${localhost ? "color-cl-plus" : "color-cl"}`}>
                    Korean
                </li>
            </ul>
        </section>
    )
}

export default Language