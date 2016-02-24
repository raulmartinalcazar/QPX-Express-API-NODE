
/**
 * QPXExpressAPILib
 *
 * This file was automatically generated by APIMATIC BETA v2.0 on 02/24/2016
 */
var BaseModel = require("./BaseModel");
/**
 * Creates a instance of PassengerCounts
 *
 * @constructor
 */
function PassengerCounts() {
    this.adultCount = null;     
    this.childCount = null;     
    this.infantInLapCount = null;     
    this.infantInSeatCount = null;     
    this.kind  = "qpxexpress#passengerCounts";     
    this.seniorCount = null;     
}

PassengerCounts.prototype = new BaseModel();
PassengerCounts.prototype.constructor = BaseModel;

/**
 * The number of passengers that are adults.
 *
 * @return {int|null}
 */
PassengerCounts.prototype.getAdultCount = function() {
    return this.adultCount;
};

/**
 * Setter for AdultCount
 * 
 * @param {int|null} value 
 */
PassengerCounts.prototype.setAdultCount = function(value) {
    this.adultCount = value;
};

/**
 * The number of passengers that are children.
 *
 * @return {int|null}
 */
PassengerCounts.prototype.getChildCount = function() {
    return this.childCount;
};

/**
 * Setter for ChildCount
 * 
 * @param {int|null} value 
 */
PassengerCounts.prototype.setChildCount = function(value) {
    this.childCount = value;
};

/**
 * The number of passengers that are infants travelling in the lap of an adult.
 *
 * @return {int|null}
 */
PassengerCounts.prototype.getInfantInLapCount = function() {
    return this.infantInLapCount;
};

/**
 * Setter for InfantInLapCount
 * 
 * @param {int|null} value 
 */
PassengerCounts.prototype.setInfantInLapCount = function(value) {
    this.infantInLapCount = value;
};

/**
 * The number of passengers that are infants each assigned a seat.
 *
 * @return {int|null}
 */
PassengerCounts.prototype.getInfantInSeatCount = function() {
    return this.infantInSeatCount;
};

/**
 * Setter for InfantInSeatCount
 * 
 * @param {int|null} value 
 */
PassengerCounts.prototype.setInfantInSeatCount = function(value) {
    this.infantInSeatCount = value;
};

/**
 * Identifies this as a passenger count object, representing the number of passengers. Value: the fixed string qpxexpress#passengerCounts.
 *
 * @return {string|null}
 */
PassengerCounts.prototype.getKind = function() {
    return this.kind;
};

/**
 * Setter for Kind
 * 
 * @param {string|null} value 
 */
PassengerCounts.prototype.setKind = function(value) {
    this.kind = value;
};

/**
 * The number of passengers that are senior citizens.
 *
 * @return {int|null}
 */
PassengerCounts.prototype.getSeniorCount = function() {
    return this.seniorCount;
};

/**
 * Setter for SeniorCount
 * 
 * @param {int|null} value 
 */
PassengerCounts.prototype.setSeniorCount = function(value) {
    this.seniorCount = value;
};

module.exports = PassengerCounts;