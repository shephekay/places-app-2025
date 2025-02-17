const express = require('express')
const placeController = express.Router()
const Place = require('../models/places')



/****** Routes ******/

//Index
placeController.get('/', (req, res) => {
  Place.find().then((allPlaces) => {
    res.render('Index',
      {places: allPlaces})
  })})

//About
placeController.get('/about', (req, res) => {
  res.render('About')
})

//Quadrant Index
placeController.get('/quad/:quadrant', (req, res) => {
  Place.find({quadrant: req.params.quadrant}).then((quadplaces) => {
    res.render('Index',
      {places: quadPlaces,
      title: req.params.quadrant})
    })
  })

//New
placeController.get('/new', (req, res) => {
  res.render('New',)
})

//Create
placeController.post('/', (req, res) => {
  Place.create(req.body).then((createdPlace) => {
    res.redirect('/places')
  }) 
})

//Delete
placeController.delete('/:id', (req, res) => {
  // console.log(req.params.id)
  Place.findByIdAndDelete(req.params.id).then(() => {
    res.redirect('/places')
  })
})

//Show
placeController.get('/:id', (req, res) => {
  Place.findById(req.params.id).then((place) => {
    res.render('Show', {place})
  })}
)

//Edit
placeController.get('/edit/:id', (req, res) => {
  Place.findById(req.params.id).then((place) => {
    res.render('Edit', {place})
  })
})

//Update
placeController.put('/edit/:id', (req, res) => {
  Place.findByIdAndUpdate(req.params.id, req.body).then((data) => {
    res.redirect('/places')
  })
})


module.exports = placeController