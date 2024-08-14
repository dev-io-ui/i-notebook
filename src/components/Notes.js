import React from 'react'
import { useContext } from 'react';
import noteContext from '../context/Notes/noteContext';
import Noteitem from './Noteitem';
const Notes = () => {

    const context = useContext(noteContext);

  const{note, setNotes} =context;

  return (
    <div className="row my-3">
    <h3>Your Notes</h3>
    {note.map((note) => {
      return <Noteitem note={note}/>
    })}
  </div>
  )
}

export default Notes
