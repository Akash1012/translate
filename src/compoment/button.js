import React, { useContext } from 'react';

import LangContext from '../Context/langContext'
import ColorContext from '../Context/colorContext'

const Button = () => {
    const contextType = useContext(LangContext)
    const colorContext = useContext(ColorContext)

    console.log(colorContext)

    const text = contextType.lang === 'english' ? 'Submit' : 'Voorleggen'
    return (
        <div>
            <button className={`ui button ${colorContext}`}>{text} </button>
        </div>
    )
}


export default Button