const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const dishSchema = new Schema ( {

     name:{
               type : String ,
               required : true,
               unique : false


     },

     description:{

                     type : String,
                     required : true,
                     unique : false


     }
   },{

       timestamps : true
     });


     var Dishes = mongoose.model('Dish',dishSchema);

     module.exports = Dishes;
