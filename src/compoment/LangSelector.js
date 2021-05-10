import React from 'react';
import LangContext from '../Context/langContext'

const LangSelector = (props) => {
    const getFunction = React.useContext(LangContext)
    console.log("Context", getFunction)
    return (
        <div>
            Select a Language:
            <i className="flag in" onClick={() => getFunction.langChange("english")} />
            <i className="flag nl" onClick={() => getFunction.langChange("dutch")} />
        </div>
    )
}

export default LangSelector