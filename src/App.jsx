import { useContext, useEffect } from 'react'
import LanguageContext from './context/LanguageContext'
import ThemeContext from './context/ThemeContext'
import { en, es, de } from './languages/languages'

function App() {

  const { theme, toggleTheme } = useContext(ThemeContext)
  const { lang, changeLang, registerLangs } = useContext(LanguageContext)

  useEffect(() => {
    registerLangs(['en', en], ['es', es], ['de', de])
  }, [])

  return (
    <div className={`container bg-${theme}`}>
      <div className='menu'>
        <button
          className={`bg-${theme} text-${theme} border-${theme}`}
          onClick={() => changeLang('en')}
        >US</button>
        <button
          className={`bg-${theme} text-${theme} border-${theme}`}
          onClick={() => changeLang('es')}
        >VE</button>
        <button
          className={`bg-${theme} text-${theme} border-${theme}`}
          onClick={() => changeLang('de')}
        >DE</button>
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
