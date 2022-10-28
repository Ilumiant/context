import { createContext, useState } from "react";

const LanguageContext = createContext();

export const LanguageContextProvider = ({children}) => {

  const [langs, setLangs] = useState([])
  const [lang, setLang] = useState({})

  const changeLang = (language) => {
    const langToChange = langs.find(lang => lang[0] === language.toLowerCase())

    if (langToChange) setLang(langToChange[1])
    else setLang(langs[0][1])
  }

  const registerLangs = (...params) => {
    setLangs(params)
    setLang(params[0][1])
  }

  return (
    <LanguageContext.Provider value={{ 
      lang, changeLang, registerLangs
    }}>
      {children}
    </LanguageContext.Provider>
  )
}

export default LanguageContext