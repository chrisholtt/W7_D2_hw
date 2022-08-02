import React from 'react'

const HideButton = ({ show, clickShowButton }) => {

    return (
        <div className='center'>
            <button className='hide-button' onClick={() => clickShowButton()}>{show ? 'Hide movie' : 'Show movies'}</button>
        </div>
    )
}

export default HideButton