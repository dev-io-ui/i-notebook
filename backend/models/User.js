const { type } = require('@testing-library/user-event/dist/type');
const mongoose =require('mongoose');
const {Schema} =mongoose;

const userSchema = new Schema ({

    name :{
        type : String,
        require : true
    },
    email :{
        type : String,
        require : true,
        unique : true
    },
    password :{
        type : String,
        require : true
    },
    Date :{
        type : Date,
        default : Date.now
    }
})

module.exports = mongoose.model('user',userSchema)