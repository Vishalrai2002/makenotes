import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState=(props)=>{
    const s1={
        "name":"vishal",
        "class":"10th"
    }
    const [state, setstate] = useState(s1);
    const update=()=>{
        setTimeout(() => {
            setstate({
                "name":"vishal Rai",
                "class":"12th" 
            })
        }, 1000);
    }
    return (
        <NoteContext.Provider value={{state,update}}>
           {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;