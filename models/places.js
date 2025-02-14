const mongoose = require('mongoose')
const {Schema} = mongoose

const placeSchema = new Schema({
  name: {type: String, required: true},
  address: {type: String},
  quadrant: {type: String, enum: ['Southeast', 'Northeast', 'North', 'Southwest', 'Northwest', 'Elsewhere']},
  type: {type: String},
  keywords: [String],
  website: String,
  description: String,
  // admission: Number,
  image: String
})

const Place = mongoose.model('Place', placeSchema)

async function run() {
  await mongoose.connect("mongodb+srv://spkelley26:kEbhISqT6oekXd8T@cluster1.jifgv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1");
  mongoose.model('Place', placeSchema);

  await mongoose.model('Place').findOne(); // Works!
}

module.exports = Place