const mongoose = require('mongoose');

//connect DB

const dbConnect = () =>{
const dbUrl = process.env.MONGODB_URL;

try {
    mongoose.connect(
        dbUrl,
        {
          
          useUnifiedTopology: true,
        
          useNewUrlParser: true,
        },
        () => {
          console.log('DB connected');
        }
      );
    
} catch (error) {
    console.log(error);
    
}
}



module.exports = dbConnect;