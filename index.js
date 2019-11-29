const mongoose = require('mongoose');

const bluebird = require('bluebird');


const Dishes = require('./node-models/dishes');

const url = 'mongodb://localhost:27017/conFusion';
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.set('useCreateIndex', true);



const connect = mongoose.connect(url);


connect.then((db) => {

          console.log("Connected to server ");


          var newDish = Dishes ({

                 name : "Uthappizza232s",
                 description : "test"

          });


     newDish.save()


     .then((dish) => {

                         console.log(dish);
                        return Dishes.find({}).exec();


     })

     .then((dishes) => {

                     console.log(dishes);

                     return Dishes.deleteOne({});

     })


     .then(() =>{
           return mongoose.connection.close();


     })

     .catch((err) =>{

                       console.log(err);

     });

});
