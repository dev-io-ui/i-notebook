const mongoose =require('mongoose');

const mongoURI ="mongodb+srv://akashpuranik:root@cluster0.6h4xikq.mongodb.net/books"

const connectToMongo =async () =>{
   try{
        await mongoose.connect(mongoURI);
        console.log("successfully connected to database");
   }
   catch(error)
   {
    console.error("Database connection fail");
    process.exit(0);
   }
}
module.exports = connectToMongo;