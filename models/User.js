const mongoose = require('mongoose');
// mongoose has a property called Schema, assign Schema to this property. Same as saying const Schema = mongoose.schema;
const { Schema } = mongoose;

const userSchema = new Schema ({
  googleID: String
});

mongoose.model('users', userSchema);