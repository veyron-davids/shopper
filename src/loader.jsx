import React from 'react'
import Spinner from "./images/spinner.gif"

const Loader = () => {
    return (
        <div className="fp-container">
            <img src={Spinner} className="fp-loader" alt="loader" />
        </div>
    )
}

export default Loader
