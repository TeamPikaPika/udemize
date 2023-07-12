const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Hint: Why is bcrypt required here?
 */
const SALT_WORK_FACTOR = 10;
const bcrypt = require('bcryptjs');

//const userSchema = new Schema({ ... });: This line creates a new instance of the Schema class provided by Mongoose.
//The Schema class is used to define the structure of a document in a MongoDB collection.
const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

//This line exports the User model, which is created by calling mongoose.model(). It associates the User model with the userSchema we defined. The 'User' string is the name of the model, and it will be used to reference and interact with the User collection in the MongoDB database.
module.exports = mongoose.model('User', userSchema);
