const mongoose = require('mongoose');

// Database connection
mongoose.connect('mongodb+srv://akarshasnj:AaSsB@cluster0.3jssvp5.mongodb.net/Wedding?retryWrites=true&w=majority')
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => console.log(err));

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  email: String,
  contact: Number,
});

const User = mongoose.model("User", userSchema);

const venueSchema = new mongoose.Schema({
  name: String,
  location: String,
  img: String,
  contact: Number,
  price:Number,
  details:String,
});

const Venue = mongoose.model("Venue", venueSchema);

module.exports = {
  User,
  Venue,
};
