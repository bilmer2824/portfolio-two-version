import React, {useContext} from 'react'
import Context from '../../layout/context/Context';
import Alert from '@mui/material/Alert';
const Language = () => {
    
    const { connection, language } = useContext(Context)
    
    return (
        <>
            <Alert className={`contact_caution_remedy ${connection ? "active" : ""}`} severity="info">{language.contactTitle_27}</Alert>
        </>
    )
}

export default Language