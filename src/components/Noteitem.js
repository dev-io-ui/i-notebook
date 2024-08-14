import React from 'react'

const Noteitem = (props) => {
   const {note} =props;
  return (
    <>

      <div className="col-md-4 mt-3">
            <div className="card" >
                <div className="card-body">
                    <h5 className="card-title">{note.title}</h5>
                    <p className="card-text">
                      {note.description}
                    </p>
                    <p className="card-text">
                      {note.tag}
                    </p>
                </div>
            </div>
    </div>
    </>
  )
}

export default Noteitem
