import { createContext, useState } from "react";

export const PostContext=createContext({});


export const PostContextProvider=({children})=>{
    const [refetch,setRefetch]=useState(false)
    return (
        <PostContext.Provider value={{refetch,setRefetch}}>
            {children}
        </PostContext.Provider>
    )
}