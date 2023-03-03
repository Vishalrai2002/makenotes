import React, { useContext } from 'react'

import noteContext from "../context/notes/noteContext"
import AddNote from './AddNote';
import Noteitem from './Noteitem';

const Notes = () => {
    const context =useContext(noteContext);
    const {notes}=context; 
  return (
    <>
    <AddNote/>
    <div className="container row my-3" >
      <h2>Your Notes</h2>
      {notes.map((note)=>{
        return <Noteitem key={note._id} note={note}/>
      })}
    </div>
    </>
  )
}

export default Notes
