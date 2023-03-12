import React, { useState, createContext, useContext } from 'react'


export const LangContext = createContext([{}, () => { }])
export const UserPanelCompCounter = createContext([{}, () => { }])
export const AddCardCounter = createContext([{}, () => { }])
export const TokensContext = createContext([0, () => { }])

const LangProvider = (props) => {

    const [lang, setLang] = useState(0)
    const [openPanel, setOpenPanel] = useState(0)
    const [openAddCard, setOpenAddCard] = useState(false)
    const [tokens, setTokens] = useState(0)



    return (
        <LangContext.Provider value={{ lang, setLang }}>
            <UserPanelCompCounter.Provider value={{ openPanel, setOpenPanel }}>
                <AddCardCounter.Provider value={{ openAddCard, setOpenAddCard }}>
                    <TokensContext.Provider value={{tokens, setTokens}}>
                        {props.children}
                    </TokensContext.Provider>
                </AddCardCounter.Provider>
            </UserPanelCompCounter.Provider>
        </LangContext.Provider >)
}

export default LangProvider

