import React from 'react';

// default value
const LangContext = React.createContext(
    'english'
)


export const LangStore = ({ children }) => {
    const [lang, setLang] = React.useState('english')
    const langChange = (la) => {
        setLang(la)
    }
    return (
        <LangContext.Provider value={{ lang, langChange: langChange }}>
            {children}
        </LangContext.Provider>
    )
}

export default LangContext;