/**
  * @module QPXExpressAPILib
  *  
  * Lets you find the least expensive flights between an origin and a destination.
  */

var configuration = require('./configuration'),
    TripsController = require('./Controllers/TripsController'),
    PassengerCounts = require('./Models/PassengerCounts'),
    SliceInput = require('./Models/SliceInput'),
    TimeOfDayRange = require('./Models/TimeOfDayRange'),
    TripOptionsRequest = require('./Models/TripOptionsRequest'),
    TripsSearchRequest = require('./Models/TripsSearchRequest');


function initializer(){}

//Main functional components of QPXExpressAPILib
initializer.configuration = configuration;
initializer.TripsController = TripsController;

//Main Models of QPXExpressAPILib
initializer.PassengerCounts = PassengerCounts;
initializer.SliceInput = SliceInput;
initializer.TimeOfDayRange = TimeOfDayRange;
initializer.TripOptionsRequest = TripOptionsRequest;
initializer.TripsSearchRequest = TripsSearchRequest;

module.exports = initializer;