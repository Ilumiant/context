import { useContext, useState } from 'react'
import ThemeContext from './context/ThemeContext'

function App() {

  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <div className={`container ${ theme === 'light' ? 'bg-light' : 'bg-dark' }`}>
      <button
        className={theme === 'light' ? 'bg-dark text-dark' : 'bg-light text-light'}
        onClick={() => {
          toggleTheme()
        }}
      >{theme === 'light' ? 'Modo oscuro' : 'Modo claro'}</button>
      <h1
        className={theme === 'light' ? 'text-light' : 'text-dark'}
      >Example</h1>
    </div>
  )
}

export default App
