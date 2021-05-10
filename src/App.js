import React, { useState } from 'react'

import LangContext from './Context/langContext'
import ColorContext from './Context/colorContext'
import UserCreate from './compoment/useCreate'

const App = () => {

    const [lang, SetLang] = useState('english')

    const langChange = (la) => {
        SetLang(la)
    }
    return (
        <div className="ui container">
            <div>
                Select a Language:
                <i className="flag in" onClick={() => langChange("english")} />
                <i className="flag nl" onClick={() => langChange("dutch")} />
            </div>
            <LangContext.Provider value={lang}>
                <ColorContext.Provider value="pink">
                    <UserCreate />
                </ColorContext.Provider>
            </LangContext.Provider>
        </div>
    );
}

export default App;
