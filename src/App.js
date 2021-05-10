import React, { useState } from 'react'

import { LangStore } from './Context/langContext'
import ColorContext from './Context/colorContext'
import UserCreate from './compoment/useCreate'
import LangSelector from './compoment/LangSelector'


const App = () => {

    return (
        <div className="ui container">
            <LangStore>
                <LangSelector />
                <ColorContext.Provider value="pink">
                    <UserCreate />
                </ColorContext.Provider>
            </LangStore>

        </div>
    );
}

export default App;
