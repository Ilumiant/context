import { useContext, useState } from 'react'
import ThemeContext from './context/ThemeContext'

function App() {

  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <div className={`container bg-${theme}`}>
      <button
        className={`bg-${theme} text-${theme} border-${theme}`}
        onClick={() => toggleTheme()}
      >Modo {theme === 'light' ? 'oscuro' : 'claro'}</button>
      <h1
        className={`text-${theme}`}
      >Example</h1>
    </div>
  )
}

export default App
