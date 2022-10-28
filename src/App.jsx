import { useContext, useState } from 'react'
import LanguageContext from './context/LanguageContext'
import ThemeContext from './context/ThemeContext'

function App() {

  const { theme, toggleTheme } = useContext(ThemeContext)
  const { lang, changeLang } = useContext(LanguageContext)

  return (
    <div className={`container bg-${theme}`}>
      <div className='menu'>
        <button
          className={`bg-${theme} text-${theme} border-${theme}`}
          onClick={() => changeLang('en')}
        >US </button>
        <button
          className={`bg-${theme} text-${theme} border-${theme}`}
          onClick={() => changeLang('es')}
        >VE </button>
      </div>
      <button
        className={`bg-${theme} text-${theme} border-${theme}`}
        onClick={() => toggleTheme()}
      >Modo {theme === 'light' ? 'oscuro' : 'claro'}</button>
      <h1
        className={`text-${theme}`}
      >{lang.title}</h1>
    </div>
  )
}

export default App
