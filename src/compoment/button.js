import React, { useContext } from 'react';

import LangContext from '../Context/langContext'

const Button = () => {
    const contextType = useContext(LangContext)
    console.log(contextType)
    return (
        <div>
            <button className="ui button primary">Submit</button>
        </div>
    )
}


export default Button