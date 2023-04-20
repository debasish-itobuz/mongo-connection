const mongoose = require("mongoose");
//connection-step 1..
try {
    mongoose.connect("mongodb+srv://debaaot:deba123@cluster0.okqhkkb.mongodb.net/weatherDataBase?retryWrites=true&w=majority").then(()=>{
        console.log("Connection Successful");
    })
}
catch(err){
    console.log(err);
}

//schema-step 2
const schema = mongoose.Schema({
    location : {
        type : String,
        required : true
    },

    temp : {
        type : Number,
        required : true
    }

})

//create Models-step 3
//WeatherData is an object(Always start with Capital Letter)
const WeatherData = mongoose.model("WeatherData", schema)

//adding data-step 4
const location1 = new WeatherData({
    location : "kolkata",
    temp : 31
})

location1.save().then((data)=> {
console.log(data);
})
