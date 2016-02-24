
/**
 * QPXExpressAPILib
 *
 * This file was automatically generated by APIMATIC BETA v2.0 on 02/24/2016
 */
var BaseModel = require("./BaseModel");
/**
 * Creates a instance of TripOptionsRequest
 *
 * @constructor
 */
function TripOptionsRequest() {
    this.maxPrice = null;     
    this.passengers = null;     
    this.refundable = null;     
    this.saleCountry = null;     
    this.slice = null;     
    this.solutions = null;     
}

TripOptionsRequest.prototype = new BaseModel();
TripOptionsRequest.prototype.constructor = BaseModel;

/**
 * Do not return solutions that cost more than this price. The alphabetical part of the price is in ISO 4217. The format, in regex, is [A-Z]{3}\d+(\.\d+)? Example: $102.07
 *
 * @return {string|null}
 */
TripOptionsRequest.prototype.getMaxPrice = function() {
    return this.maxPrice;
};

/**
 * Setter for MaxPrice
 * 
 * @param {string|null} value 
 */
TripOptionsRequest.prototype.setMaxPrice = function(value) {
    this.maxPrice = value;
};

/**
 * Counts for each passenger type in the request.
 *
 * @return {PassengerCounts|null}
 */
TripOptionsRequest.prototype.getPassengers = function() {
    return this.passengers;
};

/**
 * Setter for Passengers
 * 
 * @param {PassengerCounts|null} value 
 */
TripOptionsRequest.prototype.setPassengers = function(value) {
    this.passengers = value;
};

/**
 * Return only solutions with refundable fares.
 *
 * @return {bool|null}
 */
TripOptionsRequest.prototype.getRefundable = function() {
    return this.refundable;
};

/**
 * Setter for Refundable
 * 
 * @param {bool|null} value 
 */
TripOptionsRequest.prototype.setRefundable = function(value) {
    this.refundable = value;
};

/**
 * IATA country code representing the point of sale. This determines the "equivalent amount paid" currency for the ticket.
 *
 * @return {string|null}
 */
TripOptionsRequest.prototype.getSaleCountry = function() {
    return this.saleCountry;
};

/**
 * Setter for SaleCountry
 * 
 * @param {string|null} value 
 */
TripOptionsRequest.prototype.setSaleCountry = function(value) {
    this.saleCountry = value;
};

/**
 * The slices that make up the itinerary of this trip. A slice represents a traveler's intent, the portion of a low-fare search corresponding to a traveler's request to get between two points. One-way journeys are generally expressed using one slice, round-trips using two. An example of a one slice trip with three segments might be BOS-SYD, SYD-LAX, LAX-BOS if the traveler only stopped in SYD and LAX just long enough to change planes.
 *
 * @return {array|null}
 */
TripOptionsRequest.prototype.getSlice = function() {
    return this.slice;
};

/**
 * Setter for Slice
 * 
 * @param {array|null} value 
 */
TripOptionsRequest.prototype.setSlice = function(value) {
    this.slice = value;
};

/**
 * The number of solutions to return, maximum 500.
 *
 * @return {int|null}
 */
TripOptionsRequest.prototype.getSolutions = function() {
    return this.solutions;
};

/**
 * Setter for Solutions
 * 
 * @param {int|null} value 
 */
TripOptionsRequest.prototype.setSolutions = function(value) {
    this.solutions = value;
};

module.exports = TripOptionsRequest;