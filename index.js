const express = require('express');
const { User, Venue } = require('./Model/Event');
const cors = require('cors');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());




app.post('/registration', async (req, res) => {
   try {
     console.log("add")
     const newUser = await new User(req.body).save();
     res.status(200).send(newUser); // Sending the saved user object as a response (optional)
   } catch (error) {
     console.error("Error in registration:", error);
     res.status(500).send("Registration failed. Internal server error."); // Sending an error response
   }
 });
 
 const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

 app.post('/login', async (req, res) => {
   try {
     // Email validation
     if (!emailRegex.test(req.body.email)) {
       return res.status(400).send("Invalid email format");
     }
 
     const { email, password } = req.body;
 
     // Find user by email
     const user = await User.findOne({ email });
 
     // Check if the user exists
     if (!user) {
       return res.status(401).send("Invalid email or password");
     }
 
     // Compare the provided password with the password in the database
     if (password !== user.password) {
       return res.status(401).send("Invalid email or password");
     }
 
     res.status(200).json({ message: "Login successful" });
   } catch (error) {
     console.error('Login failed:', error.message);
     res.status(500).send("Internal Server Error");
   }
 });

 app.post('/addvenue', async (req, res) => {
  try {
    const { name, location, img, contact, price, details } = req.body;

    // Convert base64 image data to a Buffer
    const imgBuffer = Buffer.from(img, 'base64');

    // Create a new venue object
    const newVenue = new Venue({
      name,
      location,
      img: imgBuffer, // Use the Buffer as the image data
      contact,
      price,
      details,
    });

    // Save the new venue to the database
    await newVenue.save();

    res.status(201).json({ message: 'Venue added successfully!' });
  } catch (error) {
    console.error('Error adding venue:', error);
    res.status(500).json({ error: 'An error occurred while adding the venue.' });
  }
});
app.listen(8080,()=>{
   console.log(`Connected To Localhost port ${8080}`);
});