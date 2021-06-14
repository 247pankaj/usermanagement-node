import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';


const Schema = mongoose.Schema;
autoIncrement.initialize(mongoose.connection);

export const UserSchema = new Schema({
    id: {
        type: Number
        
    },
    givenName: {
        type: String,
        
        trim: true
    },
    familyName: {
        type: String,
        
        trim: true
    },
    email: {
        type: String
       
    },
    created: {
        type: Date,
        default: Date.now
    }
});


UserSchema.plugin(autoIncrement.plugin, {
  model: "users", // collection or table name in which you want to apply auto increment
  field: "id", // field of model which you want to auto increment
  startAt: 1, // start your auto increment value from 1
  incrementBy: 1, // incremented by 1
});