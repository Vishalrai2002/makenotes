import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState=(props)=>{
    const notesInitial=[
        {
          "_id": "63fc6ecb2a9841aa91435e3",
          "user": "63fb3ab03872e1b87424a668",
          "title": "My title",
          "description": "Wake up early in the morning!",
          "tag": "personal",
          "date": "2023-02-27T08:50:19.073Z",
          "__v": 0
        },
        {
          "_id": "63fc73a109007dcdd86aaf",
          "user": "63fb3ab03872e1b87424a668",
          "title": "My title",
          "description": "Wake up early in the morning!",
          "tag": "personal",
          "date": "2023-02-27T09:10:57.749Z",
          "__v": 0
        },
        {
          "_id": "63fc75706846f3fd35d8a3",
          "user": "63fb3ab03872e1b87424a668",
          "title": "My title",
          "description": "Wake up early in the morning!",
          "tag": "personal",
          "date": "2023-02-27T09:18:40.748Z",
          "__v": 0
        },
        {
          "_id": "63fc6ecb2a98aa941435e4",
          "user": "63fb3ab03872e1b87424a668",
          "title": "My title",
          "description": "Wake up early in the morning!",
          "tag": "personal",
          "date": "2023-02-27T08:50:19.073Z",
          "__v": 0
        },
        {
          "_id": "63fc73a10900713dd86aa5",
          "user": "63fb3ab03872e1b87424a668",
          "title": "My title",
          "description": "Wake up early in the morning!",
          "tag": "personal",
          "date": "2023-02-27T09:10:57.749Z",
          "__v": 0
        },
        {
          "_id": "63fc7570684936f3f5d8a8",
          "user": "63fb3ab03872e1b87424a668",
          "title": "My title",
          "description": "Wake up early in the morning!",
          "tag": "personal",
          "date": "2023-02-27T09:18:40.748Z",
          "__v": 0
        }
      ]
const [notes, setNotes] = useState(notesInitial)
    return (
        <NoteContext.Provider value={{notes,setNotes}}>
           {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;