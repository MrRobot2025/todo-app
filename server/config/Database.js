const mongoose = require("mongoose");
const app = require("../app");

module.exports.connectDataBase=()=>{
    mongoose.connect(process.env.MONGO_URI,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
        ).
    then((con)=>{
        console.log(`DataBase is connected ${con.connection.host}`);
        app.listen(process.env.PORT, () => {
            console.log(`App listening on port ${process.env.PORT}`);
        });
    }).catch((err)=>{
        console.log(`Error:${err}`);
    }
    )
}