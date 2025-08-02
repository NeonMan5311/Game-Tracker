import React,{useState, createContext,useContext} from "react";

const ArrayContext=createContext();

export function ArrayProvider({children}){
    const [gameList,setGameList]=useState([])
     
    const addGame=(game)=>{
        setGameList(prevList=>[...prevList,game]);
    }

    const value={gameList,addGame};

    return(
        <ArrayContext.Provider value={value}>
            {children}
        </ArrayContext.Provider>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useGameList(){
    return useContext(ArrayContext);
}