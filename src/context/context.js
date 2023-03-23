import React, { useState, createContext, useContext } from 'react'


export const OpenCommentContext = createContext([{}, () => { }])
export const ActualUserComments = createContext([{}, () => { }])


const AllContext = (props) => {

    const [openComment, setOpenComment] = useState(false);
    const [userComment, setUserComment] = useState("");

    return (
        <OpenCommentContext.Provider value={{ openComment, setOpenComment }}>
            <ActualUserComments.Provider value={{ userComment, setUserComment }}>
            {props.children}
            </ActualUserComments.Provider>
        </OpenCommentContext.Provider >)
}

export default AllContext

