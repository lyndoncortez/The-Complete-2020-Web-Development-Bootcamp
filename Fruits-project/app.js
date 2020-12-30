//jshint esversion: 6

const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB", {
    useNewUrlParser: true, 
    useUnifiedTopology: true
});

const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please check your data entry, no name specified!"]
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const apple = new Fruit({
    name: "Apple",
    rating: 7,
    review: "Pretty solid as a fruit."
});

const banana = new Fruit({
    name: "Banana",
    rating: 7,
    review: "Pretty solid as a fruit."
});

const orange = new Fruit({
    name: "Orange",
    rating: 7,
    review: "Pretty solid as a fruit."
});


// Fruit.insertMany([apple, banana, orange], function(err){
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Successfully saved all the fruits to fruitsDB");
//     }
// });

Fruit.find(function(err, fruits){
    if (err) {
        console.log(err)
    } else {

        mongoose.connection.close();

        for (var i = 0; i < fruits.length; i++) {
            console.log(fruits[i].name);
        }
    }
    
});


