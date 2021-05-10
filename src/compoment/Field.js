import React from 'react';

import LangContext from '../Context/langContext';


const Field = () => {
    const contextType = React.useContext(LangContext)

    console.log(contextType)

    const text = contextType === 'english' ? 'Name' : 'Naam'
    return (
        <div className="ui field">
            <label>{text}</label>
            <input />
        </div>
    )
}


export default Field