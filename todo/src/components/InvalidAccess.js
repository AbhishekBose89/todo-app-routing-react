import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function InvalidAccess() {
    let navigator = useNavigate()
    let clickHandler = () => {
        navigator("/login", true)
    }

    return (
        <div>
            <p>You entered wrong credencial. Please Check again</p>
            <div>
                <button onClick={clickHandler}>Log Back in</button>
            </div>
        </div>
    )
}