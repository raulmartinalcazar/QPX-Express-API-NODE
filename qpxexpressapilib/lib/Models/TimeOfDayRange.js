
/**
 * QPXExpressAPILib
 *
 * This file was automatically generated by APIMATIC BETA v2.0 on 02/24/2016
 */
var BaseModel = require("./BaseModel");
/**
 * Creates a instance of TimeOfDayRange
 *
 * @constructor
 */
function TimeOfDayRange() {
    this.earliestTime = null;     
    this.kind  = "qpxexpress#timeOfDayRange";     
    this.latestTime = null;     
}

TimeOfDayRange.prototype = new BaseModel();
TimeOfDayRange.prototype.constructor = BaseModel;

/**
 * The earliest time of day in HH:MM format.
 *
 * @return {string|null}
 */
TimeOfDayRange.prototype.getEarliestTime = function() {
    return this.earliestTime;
};

/**
 * Setter for EarliestTime
 * 
 * @param {string|null} value 
 */
TimeOfDayRange.prototype.setEarliestTime = function(value) {
    this.earliestTime = value;
};

/**
 * Identifies this as a time of day range object, representing two times in a single day defining a time range. Value: the fixed string qpxexpress#timeOfDayRange.
 *
 * @return {string|null}
 */
TimeOfDayRange.prototype.getKind = function() {
    return this.kind;
};

/**
 * Setter for Kind
 * 
 * @param {string|null} value 
 */
TimeOfDayRange.prototype.setKind = function(value) {
    this.kind = value;
};

/**
 * The latest time of day in HH:MM format.
 *
 * @return {string|null}
 */
TimeOfDayRange.prototype.getLatestTime = function() {
    return this.latestTime;
};

/**
 * Setter for LatestTime
 * 
 * @param {string|null} value 
 */
TimeOfDayRange.prototype.setLatestTime = function(value) {
    this.latestTime = value;
};

module.exports = TimeOfDayRange;