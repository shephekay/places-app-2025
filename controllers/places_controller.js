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


//Quadrant Index
placeController.get('/quad/:quadrant', (req, res) => {
  Place.find({quadrant: req.params.quadrant}, (error, quadPlaces) => {
    res.render('Index',
      {places: quadPlaces,
      title: req.params.quadrant})
  })
})

//New
placeController.get('/new', (req, res) => {
  res.render('New',
  )
})

//Create
placeController.post('/', (req, res) => {
  Place.create(req.body, (error, createdPlace) => {
    res.redirect('/places')
  }) 
})

//Delete
placeController.delete('/:id', (req, res) => {
  console.log(req.params.id)
  Place.findByIdAndRemove(req.params.id, (error, data) => {
    res.redirect('/places')
  })
})

//Show
placeController.get('/:id', (req, res) => {
  Place.findById(req.params.id, (error, place) => {
    res.render('Show', {place})
  })
})

//Edit
placeController.get('/edit/:id', (req, res) => {
  Place.findById(req.params.id, (error, place) => {
    res.render('Edit', {place})
  })
})

//Update
placeController.put('/edit/:id', (req, res) => {
  Place.findByIdAndUpdate(req.params.id, req.body, (error, data) => {
    res.redirect('/places')
  })
})


module.exports = placeController