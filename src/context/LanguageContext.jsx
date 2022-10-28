import { createContext, useState } from "react";

const LanguageContext = createContext();

const es = {
  hello: 'Hola',
  world: 'Mundo',
  title: 'Título',
  changeLanguage: 'Cambiar idioma'
}

const en = {
  hello: 'Hello',
  world: 'World',
  title: 'Title',
  changeLanguage: 'Change language'
}

export const LanguageContextProvider = ({children}) => {

  const [lang, setLang] = useState(en)

  const changeLang = (language = 'es') => {
    if (language.toLowerCase() === 'en') {
      setLang(en)
    } else if(language.toLowerCase() === 'es') {
      setLang(es)
    } else {
      setLang(en)
    }
  }

  return (
    <LanguageContext.Provider value={{ lang, changeLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export default LanguageContext