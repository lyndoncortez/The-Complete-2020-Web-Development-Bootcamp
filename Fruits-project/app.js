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

// Fruit.deleteOne({name: "Peach"}, function(err){
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Successfully deleted the document");
//     }
// });

// Fruit.find(function(err, fruits){
//     if (err) {
//         console.log(err)
//     } else {

//         mongoose.connection.close();

//         for (var i = 0; i < fruits.length; i++) {
//             console.log(fruits[i].name);
//         }
//     }
    
// });

// Fruit.updateOne({_id: "5fec674ea7cc6deada2b7e17"}, {name: "Peach"}, function(err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Successfully updated the document");
//     }
// });

const personSchema = new mongoose.Schema ({
    name: String,
    age: Number,
    favoriteFruit: fruitSchema
});

const Person = mongoose.model("Person", personSchema);

const onepiece = new Fruit ({
    name: "Goma-Goma Fruit",
    score: 10,
    review: "Legandary fruit."
});

onepiece.save();

// const person = new Person ({
//     name: "Amy",
//     age: 12,
//     favoriteFruit: pineapple
// });

// person.save();

Person.updateOne({_id: "5fed6c1c2387c969f303725c"}, {favoriteFruit: onepiece}, function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log("Successfully updated the document");
    }
});




