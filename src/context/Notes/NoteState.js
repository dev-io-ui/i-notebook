import React from "react";
import noteContext from './noteContext'; // Correct relative path


const NoteState = (props) => {
  const s1 = {
    name: "dev",
    class: "6b"
  };

  return (
    <noteContext.Provider value={s1}>
      {props.children}
    </noteContext.Provider>
  );
}

export default NoteState;