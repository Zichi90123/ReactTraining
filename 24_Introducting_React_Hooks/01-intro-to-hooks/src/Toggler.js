import React from 'react';
import useToggle from './hooks/useToggle'

function Toggler() {
    const [isHappy, toggleIsHappy] = useToggle(true)
    const [isHeartbroken, toggleiIsHeartbroken] = useToggle(false)
    return (
        <div>
            <h1 onClick={toggleIsHappy}>{isHappy ? ":)" : ":("}</h1>
            <h1 onClick={toggleiIsHeartbroken}>{isHeartbroken ? "</3" : "<3"}</h1>
        </div>
    )
}

export default Toggler