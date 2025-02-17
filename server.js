//___________________
//Dependencies
//___________________
const express = require('express');
const methodOverride  = require('method-override');
const mongoose = require ('mongoose');
const app = express();
const { MongoClient, ServerApiVersion } = require('mongodb');
const db = mongoose.connection;
const placeController = require('./controllers/places_controller.js')

//___________________
//Port
//___________________

// Allow use of host's port or your own local port, depending on the environment
const PORT = process.env.PORT || 3000;

//___________________
//Database
//___________________
// How to connect to the database from environmental variable
const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://spkelley26:kEbhISqT6oekXd8T@cluster1.jifgv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1";
// Connect to Mongo
mongoose.connect(MONGODB_URI)
// mongoose.connect(MONGODB_URI ,  { useNewUrlParser: true, useFindAndModify: true, useUnifiedTopology: true });

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(MONGODB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } 
  catch (error) {
  console.log(error);
  }
  finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

// Error / success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));
// open the connection to mongo
db.on('open' , ()=>{});

//___________________
//Middleware
//___________________

//use public folder for static assets
app.use(express.static('public'));
// populates req.body with parsed info from forms - if no data from forms will return an empty object {}
app.use(express.urlencoded({ extended: false }));// extended: false - does not allow nested objects in query strings
app.use(express.json());// returns middleware that only parses JSON - may or may not need it depending on your project
//use method override
app.use(methodOverride('_method'));// allow POST, PUT and DELETE from a form

//___________________
// View Engine
//___________________
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

//___________________
// Controllers
//___________________
app.use('/places', placeController)

//___________________
// Routes
//___________________
//localhost:3000 

app.get('/' , (req, res) => {
  res.redirect('/places');
});

//___________________
//Listener
//___________________
app.listen(PORT, () => console.log( 'Listening on port:', PORT));