import React from 'react'
import { useDarkMode } from '../hooks/useDarkMode'

const DarkMode = () => {
 const [darkMode, setDarkMode] = useDarkMode(false)

const toggleHandler = e => {
    e.preventDefault();
    setDarkMode(!darkMode)
    }

    return(
        <div>
             <h2>Choose your Theme!!</h2>
            {darkMode ? <button onClick={toggleHandler}>Light Mode</button>: <button onClick={toggleHandler}>Darkmode</button>}
        </div>
    )
}


export default DarkMode 