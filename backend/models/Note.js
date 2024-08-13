const { type } = require('@testing-library/user-event/dist/type');
const mongoose =require('mongoose');
const {Schema} =mongoose;
const notesSchema = new Schema ({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    title :{
        type : String,
        require : true
    },
    description :{
        type : String,
        require : true,
       
    },
    tag :{
        type : String,
        default:'genral'
    }
})

module.exports = mongoose.model('Notes',notesSchema)