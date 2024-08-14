import React, { useState } from "react";
import noteContext from './noteContext'; // Correct relative path


const NoteState = (props) => {
  const notesInitial =[
    {
      "_id": "66bb2452c06a616f1e391f6d",
      "user": "66b5bf2d4b3e3333c04f19ee",
      "title": "My",
      "description": "DO it today",
      "tag": "Personal",
      "__v": 0
    },
    {
      "_id": "66bb2480312c6d55458f3819",
      "user": "66b5bf2d4b3e3333c04f19ee",
      "title": "My note",
      "description": "DO it today",
      "tag": "Personal",
      "__v": 0
    },
    {
      "_id": "66bb2484312c6d55458f381b",
      "user": "66b5bf2d4b3e3333c04f19ee",
      "title": "My note",
      "description": "DO it today",
      "tag": "Personal",
      "__v": 0
    },
    {
      "_id": "66bb2485312c6d55458f381d",
      "user": "66b5bf2d4b3e3333c04f19ee",
      "title": "My note",
      "description": "DO it today",
      "tag": "Personal",
      "__v": 0
    },
    {
      "_id": "66bb2485312c6d55458f381f",
      "user": "66b5bf2d4b3e3333c04f19ee",
      "title": "My note",
      "description": "DO it today",
      "tag": "Personal",
      "__v": 0
    },
    {
      "_id": "66bb2485312c6d55458f3821",
      "user": "66b5bf2d4b3e3333c04f19ee",
      "title": "My note",
      "description": "DO it today",
      "tag": "Personal",
      "__v": 0
    },
    {
      "_id": "66bb2485312c6d55458f3823",
      "user": "66b5bf2d4b3e3333c04f19ee",
      "title": "My note",
      "description": "DO it today",
      "tag": "Personal",
      "__v": 0
    },
    
    {
      "_id": "66bb2485312c6d55458f381d",
      "user": "66b5bf2d4b3e3333c04f19ee",
      "title": "My note",
      "description": "DO it today",
      "tag": "Personal",
      "__v": 0
    },
    {
      "_id": "66bb2485312c6d55458f381f",
      "user": "66b5bf2d4b3e3333c04f19ee",
      "title": "My note",
      "description": "DO it today",
      "tag": "Personal",
      "__v": 0
    }
  ]

  const [note ,setNotes] = useState(notesInitial)



  return (
    <noteContext.Provider value={{note,setNotes}}>
      {props.children}
    </noteContext.Provider>
  );
}

export default NoteState;