/**
 * Dateutil is Nodejs module for date add-on operations.
 * 
 * @author 		BChekuri
 * @Version		1.0.0
 * 
 * @see util
 */

/**
 * Nodejs util is dependency module for Dateutil node module.
 * 
 * @ignore
 */
var util = require("util");

/**
 * Dateutil is Nodejs module for date add-on operations.
 * 
 * @module dateutil
 * 
 */
var dateutil = module.exports = {};

/**
 * Month full names with first letter capital.
 * 
 * @alias module:dateutil.MONTHS_FULL_NAME
 * @constant {String[]}
 * 
 */
dateutil.MONTHS_FULL_NAME = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

/**
 * Month short names with first letter capital (only first 3 characters).
 * 
 * @alias module:dateutil.MONTHS_SHORT_NAME
 * @constant {String[]}
 * 
 */
dateutil.MONTHS_SHORT_NAME = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

/**
 * Days full names with first letter capital.
 * 
 * @alias module:dateutil.DAYS_FULL_NAME
 * @constant {String[]}
 * 
 */
dateutil.DAYS_FULL_NAME = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

/**
 * Days short names with first letter capital (only first 3 characters).
 * 
 * @alias module:dateutil.DAYS_SHORT_NAME
 * @constant {String[]}
 * 
 */
dateutil.DAYS_SHORT_NAME = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

/**
 * Maximum days of each month in year.
 * 
 * @ignore
 * @constant {Number[]}
 * 
 */
const DAYS_OF_MONTHS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

/**
 * Maximum days of February month if year is leap year.
 * 
 * @ignore
 * @constant {Number}
 * 
 */
const FEB_MONTH_LEAP_YEAR_DAYS = 29;

/**
 * Constant for Zero.
 * 
 * @ignore
 * @constant {Number}
 * 
 */
const ZERO = 0;


/**
 * Last hour in the day.
 * 
 * @alias module:dateutil.LAST_HOUR_IN_DAY
 * @constant {Number}
 * 
 */
dateutil.LAST_HOUR_IN_DAY = 23;


/**
 * Last minute in the hour.
 * 
 * @alias module:dateutil.LAST_MINUTE_IN_HOUR
 * @constant {Number}
 * 
 */
dateutil.LAST_MINUTE_IN_HOUR = 59;


/**
 * Last second in the minute.
 * 
 * @alias module:dateutil.LAST_SECOND_IN_MINUTE
 * @constant {Number}
 * 
 */
dateutil.LAST_SECOND_IN_MINUTE = 59;


/**
 * Last millisecond in the second.
 * 
 * @alias module:dateutil.LAST_MILLISECOND_IN_SECOND
 * @constant {Number}
 * 
 */
dateutil.LAST_MILLISECOND_IN_SECOND = 999;

/**
 * Function is used to find object is date or not.
 * Returns true when input type is date object otherwise false.
 * 
 * @alias module:dateutil.isDate
 * @param {Date} date - The js object
 * @example
 * dateutil.isDate(new Date()); // return true
 * @example
 * dateutil.isDate(undefined); // return false
 * @example
 * dateutil.isDate(null); // return false
 * @example
 * dateutil.isDate(1); // return false
 * @example
 * dateutil.isDate("date"); // return false
 * @example
 * var date = new Date();
 * dateutil.isDate(date); // return true
 * @return {boolean} True when input type is date object otherwise false.
 * 
 */
dateutil.isDate = function(date) {
	if(Object.prototype.toString().call(date) === "[object Date]") {
		return true;
	}
	return false;
};

/**
 * Function is used to find object is not date or date.
 * Returns false when input type is date object otherwise true.
 * 
 * @alias module:dateutil.isNotDate
 * @param {Date} date - The js object
 * @return {boolean} False when input type is date object otherwise true.
 * 
 */
dateutil.isNotDate = function(date) {
	if(Object.prototype.toString().call(date) === "[object Date]") {
		return false;
	}
	return true;
};

/**
 * Returns current local system date object.
 * 
 * @alias module:dateutil.now
 * @return {Date} Valid current date
 * 
 */
dateutil.now = function() {
	return new Date();
};

/**
 * Returns week days full name in string array.
 * 
 * @alias module:dateutil.getDays
 * @return {String[]} Week days full name in array
 * 
 */
dateutil.getDays = function(){
	return DAYS;
};

/**
 * 
 * Returns week days short name in string array (only first 3 characters).
 * 
 * @alias module:dateutil.getShortDays
 * @return {String[]} Week days short name in array
 * 
 */
dateutil.getShortDays = function(){
	return DAYS_SHORT_NAME;
};

/**
 * <p>
 * 		Returns all months full name in string array.
 * </p>
 * <p>
 * 		@return		String[] - array of full month name
 * </p>
 * <p>
 * 		@throws		no exception
 * </p>
 */
dateutil.getMonths = function(){
	return MONTHS;
};

/**
 * <p>
 * 		Returns all months short name in string array (only first 3 characters).
 * </p>
 * <p>
 * 		@return		String[] - array of short month names
 * </p>
 * <p>
 * 		@throws		no exception
 * </p>
 */
dateutil.getShortMonths = function(){
	return MONTHS_SHORT_NAME;
};


/**
 * <p>
 * 		Private method to get month full name.
 * 		Input month number should start from 0.
 *      <br>
 *      0 <= input month number <= 11
 * </p>
 * <p>
 * 		@param	Number - month number
 * </p>
 * <p>
 * 		@return	String  - month full name
 * </p>
 * <p>
 * 		@throws Exception when invalid input month number
 * </p>
 */
function monthName(month) {
	if(month < 0 || month > 11) {
		throw new Error("The month number mush be grater then equal to 0 and lesser then equal to 11");
	}
	return MONTHS[month];
}


/**
 * <p>
 * 		Return month full name for given month number / date.
 * 		Month index starts from 0.
 * 		<br>
 * 		month >= 0 && month <= 11
 * </p>
 * <p>
 * 		@param	Number/Date - month number or date
 * </p>
 * <p>
 * 		@return	String  - month full name
 * </p>
 * <p>
 * 		@throws Exception when invalid input month number / date
 * </p>
 */
dateutil.getMonthName = function(monthNumberOrDate) {
	if(util.isNumber(monthNumberOrDate)) {
		return monthName(monthNumberOrDate);
	} else if(this.isDate(monthNumberOrDate)) {
		return monthName(monthNumberOrDate.getMonth());
	} else {
		throw new Error("Input must be number or date");
	}
};


/**
 * <p>
 * 		Private method will return month short name for given input month number.
 * 		First 3 characters of month full name will be called as month short name.
 * 		0 <= input month number <= 11
 * </p>
 * <p>
 * 		@param	Number - month number
 * </p>
 * <p>
 * 		@return	String  - month short name
 * </p>
 * <p>
 * 		@throws Exception when invalid input month number
 * </p>
 */
function monthShortName(month) {
	if(month < 0 || month > 11) {
		throw new Error("The month number mush be grater then equal to 0 and lesser then equal to 11");
	}
	return MONTHS_SHORT_NAME[month];
}

/**
 * <p>
 * 		Returns month short name for given input month number or date.
 * 		First 3 characters of month full name will be called as month short name.
 * 		month >= 0 && month <= 11
 * </p>
 * <p>
 * 		@param	Number / Date - month number or date
 * </p>
 * <p>
 * 		@return	String - month short name
 * </p>
 * <p>
 * 		@throws Exception when input month number / date are invalid
 * </p>
 */
dateutil.getMonthShortName = function(monthNumberOrDate) {
	if(util.isNumber(monthNumberOrDate)) {
		return monthShortName(monthNumberOrDate);
	} else if(this.isDate(monthNumberOrDate)) {
		return monthShortName(monthNumberOrDate.getMonth());
	} else {
		throw new Error("Input must be number or date");
	}
};


/**
 * <p>
 * 		Compares two dates. In comparison only Day, Month and Year are the values considered.
 * </p>
 * <p>
 * 		@param	Date - date to compare<br>
 * 		@param	Date - date to compare
 * </p>
 * <p>
 * 		@return boolean - true if both dates has same day, month and year<br>
 * 						  false if both dates has different day, month and year
 * </p>
 * <p>
 * 		@throws Exception when input dates are invalid
 * </p>
 */
dateutil.isSameDay = function(date1, date2) {
	if(this.isNotDate(date1) || this.isNotDate(date2)) {
		throw new Error("The date1 and date2 mush be valid dates");
	}
	return (date1.getDate() === date2.getDate() && 
			date1.getMonth() === date2.getMonth() &&
			date1.getYear() === date2.getYear());
};


/**
 * <p>
 * 		Compare two dates instances and return true if both dates has same date and time otherwise false.
 * 		Compares day, month, year, hours, minutes, seconds and milliseconds of both the input dates.
 * </p>
 * <p>
 *		@param	Date - date input to compare<br>
 * 		@param	Date - date input to compare
 * <p>
 * <p>
 * 		@return	true when both the dates has same date and time including milliseconds<br>
 * 				false when both the dates has different date and time
 * </p>
 * <p>
 * 		@throws	Exception when invalid Dates as input.
 * </p> 
 */
dateutil.equal = function(date1, date2) {
	if(this.isNotDate(date1) || this.isNotDate(date2)) {
		throw new Error("The date1 and date2 mush be valid dates");
	}
	return (date1.getTime() === date2.getTime());
};


/**
 * <p>
 * 		Private method will return true when given year is leap year otherwise false.
 * </p>
 * <p>
 * 		@param	Number - year
 * </p>
 * <p>
 * 		@return	true when input year is leap year<br>
 * 				false when input year is not leap year
 * </p>
 */
function isLeap(year) {
	if(year % 4 === 0 || (year % 100 === 0 && year % 400 === 0)) {
		return true;
	}
	return false;
}


/**
 * <p>
 * 		Checks if input year number or date year is leap year or not. returns true if year is leap year
 * 		otherwise false.
 * </p>
 * <p>
 * 		@param	Number/Date - year
 * </p>
 * 
 * @return		true when input year is leap year
 * 				false when year is not leap year
 *
 * @throws	Exception when invalid input year number or date. 
 */
dateutil.isLeapYear = function(yearNumberOrDate) {
	if(util.isNumber(yearNumberOrDate)) {
		return isLeap(Math.abs(yearNumberOrDate));
	} else if(this.isDate(yearNumberOrDate)) {
		return isLeap(yearNumberOrDate.getFullYear());
	} else {
		throw new Error("The input must be valid number or date");
	}
};


/**
 * <p>
 * 		Function to reset hour, minute, second and millisecond to zero.
 * </p>
 * <p>
 * 		@param	Date - date input to reset time
 * </p>
 * <p>
 * 		@throws	Exception when invalid date input
 * </p>
 */
dateutil.resetTime = function(date) {
	if(this.isNotDate(date)) {
		throw new Error("The input must be valid date");
	}
	date.setHours(ZERO, ZERO, ZERO, ZERO);
};


/**
 * <p>
 * 		Function will set hour to 23 , minute to 59, second to 59 and millisecond to 999.
 * </p>
 * <p>
 * 		@param	Date - date input
 * </p>
 * <p>
 * 		@throws	Exception when invalid date input
 * </p>
 */
dateutil.resetTimetoMax = function(date) {
	if(this.isNotDate(date)) {
		throw new Error("The input must be valid date");
	}
	date.setHours(LAST_HOUR_IN_DAY, LAST_MINUTE_IN_HOUR, LAST_SECOND_IN_MINUTE, LAST_MILLISECOND_IN_SECOND);
};

/**
 * <p>
 * 		Private method, Returns duplicate copy of input date.
 * </p>
 * <p>
 * 		@param	Date - input date
 * </p>
 * <p>
 * 		@return	Date - returns copy of input date
 * </p>
 */
function copy(date) {
	var retDate = new Date(date.getTime());
	return retDate;
}

/**
 * <p>
 * 		Returns duplicate copy of input date.
 * </p>
 * <p>
 * 		@param	Date - input date
 * </p>
 * <p>
 * 		@return	Date - returns copy of input date
 * </p>
 * <p>
 * 		@throws	Exception when invalid Date as input
 * </p>
 */
dateutil.clone = function(date) {
	if(this.isNotDate(date)) {
		throw new Error("The date must be valid");
	}
	return copy(date);
};

/**
 * <p>
 * 		Returns start date of month for given input date. Creates new date object and returns.
 * </p>
 * <p>
 * 		@param	Date - input date
 * </p>
 * <p>
 * 		@return	Date - returns new date
 * </p>
 * <p>
 * 		@throws	Exception when invalid Date as input
 * </p>
 */
dateutil.startOfMonth = function(date) {
	if(this.isNotDate(date)) {
		throw new Error("The date must be valid");
	}
	var retdate = copy(date);
	retdate.setHours(ZERO, ZERO, ZERO, ZERO);
	retdate.setDate(1);
	return retdate;
};


/**
 * <p>
 * 		Returns end date of month for given input date. Creates new date object and returns.
 * </p>
 * <p>
 * 		@param	Date - input date
 * </p>
 * <p>
 * 		@return	Date - returns new date
 * </p>
 * <p>
 * 		@throws	Exception when invalid Date as input
 * </p>
 */
dateutil.endOfMonth = function(date) {
	if(this.isNotDate(date)) {
		throw new Error("The date must be valid");
	}
	var retdate = copy(date);
	if(date.getMonth() === 1) {
		retdate.setDate(isLeap(date.getFullYear()) ? FEB_MONTH_LEAP_YEAR_DAYS : DAYS_OF_MONTHS[date.getMonth()]);
	} else {
		retdate.setDate(DAYS_OF_MONTHS[date.getMonth()]);
	}
	retdate.setHours(LAST_HOUR_IN_DAY, LAST_MINUTE_IN_HOUR, LAST_SECOND_IN_MINUTE, LAST_MILLISECOND_IN_SECOND);
	return retdate;
};


/**
 * <p>
 * 		Returns start date of year for given input date. Creates new date object and returns.
 * </p>
 * <p>
 * 		@param	Date - input date
 * </p>
 * <p>
 * 		@return	Date - returns new date object
 * </p>
 * <p>
 * 		@throws	Exception when invalid date as input
 * </p>
 */
dateutil.startOfYear = function(date) {
	if(this.isNotDate(date)) {
		throw new Error("The date must be valid");
	}
	var retdate = copy(date);
	retdate.setHours(ZERO, ZERO, ZERO, ZERO);
	retdate.setDate(1);
	retdate.setMonth(0);
	return retdate;
};


/**
 * <p>
 * 		Returns end date of year for given input Date. Creates new date object and returns.
 * </p>
 * <p>
 * 		@param	Date - date input
 * </p>
 * <p>
 * 		@return	Date - returns new date object
 * </p>
 * <p>
 * 		@throws	Exception when invalid date as input
 * </p>
 */
dateutil.endOfYear = function(date) {
	if(this.isNotDate(date)) {
		throw new Error("The date must be valid");
	}
	var retdate = copy(date);
	retdate.setDate(31);
	retdate.setMonth(11);
	retdate.setHours(LAST_HOUR_IN_DAY, LAST_MINUTE_IN_HOUR, LAST_SECOND_IN_MINUTE, LAST_MILLISECOND_IN_SECOND);
	return retdate;
};


/**
 * <p>
 * 		Add days to input date. No new date object will be created, days will be added to input date.
 * </p>
 * <p>
 * 		@param	Date - input date which required days to be added<br>
 * 		@param	Number - number of days to be added
 * </p>
 * <p>
 * 		@return	Date - returns same input date reference with added days
 * </p>
 * <p>
 * 		@throws	Exception when invalid date or number of days is not number. 
 * </p>
 */
dateutil.addDays = function(date, days){
	if(this.isNotDate(date) || !util.isNumber(days)) {
		throw new Error("The date must be valid or days must be number");
	}
	date.setDate(date.getDate() + Math.abs(days));
	return date;
};


/**
 * <p>
 * 		Subtract days from input date. No new date object will be created, days will be subtracted from input date.
 * </p>
 * <p>
 * 		@param	Date - input date which required days to be subtracted<br>
 * 		@param	Number - number of days to be subtracted
 * </p>
 * <p>
 * 		@return	Date - returns same input date reference with subtracted days
 * </p>
 * <p>
 * 		@throws	Exception when invalid date or number of days is not number. 
 * </p>
 */
dateutil.subtractDays = function(date, days){
	if(this.isNotDate(date) || !util.isNumber(days)) {
		throw new Error("The date must be valid or days must be number");
	}
	date.setDate(date.getDate() - Math.abs(days));
	return date;
};

/**
 * <p>
 * 		Add months to input date. No new date object will be created, months will be added to input date.
 * </p>
 * <p>
 * 		@param	Date - input date which required months to be added<br>
 * 		@param	Number - number of months to be added
 * </p>
 * <p>
 * 		@return	Date - returns same input date reference with months added
 * </p>
 * <p>
 * 		@throws	Exception when invalid date or number of months is not number. 
 * </p>
 */
dateutil.addMonths = function(date, months){
	if(this.isNotDate(date) || !util.isNumber(months)) {
		throw new Error("The date must be valid or months must be number");
	}
	date.setMonth(date.getMonth() + Math.abs(months));
	return date;
};


/**
 * <p>
 * 		Subtract months from input date. No new date object will be created, months will be subtracted from input date reference.
 * </p>
 * <p>
 * 		@param	Date - input date which required months to be subtracted<br>
 * 		@param	Number - number of months to be subtracted
 * </p>
 * <p>
 * 		@return	Date - returns same input date reference with subtracted months
 * </p>
 * <p>
 * 		@throws	Exception when invalid date or number of months is not number. 
 * </p>
 */
dateutil.subtractMonths = function(date, months){
	if(this.isNotDate(date) || !util.isNumber(months)) {
		throw new Error("The date must be valid or months must be number");
	}
	date.setMonth(date.getMonth() - Math.abs(months));
	return date;
};


/**
 * <p>
 * 		Add years to input date. No new date object will be created, years will be added to input date reference.
 * </p>
 * <p>
 * 		@param	Date - input date which required years to be added<br>
 * 		@param	Number - number of years to be added
 * </p>
 * <p>
 * 		@return	Date - returns same input date reference with years added
 * </p>
 * <p>
 * 		@throws	Exception when invalid date or number of years is not number. 
 * </p>
 */
dateutil.addYears = function(date, years){
	if(this.isNotDate(date) || !util.isNumber(years)) {
		throw new Error("The date must be valid or years must be number");
	}
	date.setFullYear(date.getFullYear() + Math.abs(years));
	return date;
};


/**
 * <p>
 * 		Subtract years from input date. No new date object will be created, years will be subtracted from input date reference.
 * </p>
 * <p>
 * 		@param	Date - input date which required years to be subtracted<br>
 * 		@param	Number - number of years to be subtracted
 * </p>
 * <p>
 * 		@return	Date - returns same input date reference with subtracted years
 * </p>
 * <p>
 * 		@throws	Exception when invalid date or number of years is not number. 
 * </p>
 */
dateutil.subtractYears = function(date, years){
	if(this.isNotDate(date) || !util.isNumber(years)) {
		throw new Error("The date must be valid or years must be number");
	}
	date.setFullYear(date.getFullYear() - Math.abs(years));
	return date;
};


/**
 * <p>
 * 		Add hours to input date. No new date object will be created, hours will be added to input date reference.
 * </p>
 * <p>
 * 		@param	Date - input date which required hours to be added<br>
 * 		@param	Number - number of hours to be added
 * </p>
 * <p>
 * 		@return	Date - returns same input date reference with hours added
 * </p>
 * <p>
 * 		@throws	Exception when invalid date or number of hours is not number. 
 * </p>
 */
dateutil.addHours = function(date, hours){
	if(this.isNotDate(date) || !util.isNumber(hours)) {
		throw new Error("The date must be valid or hours must be number");
	}
	date.setHours(date.getHours() + Math.abs(hours));
	return date;
};


/**
 * <p>
 * 		Subtract hours from input date. No new date object will be created, hours will be subtracted from input date reference itself.
 * </p>
 * <p>
 * 		@param	Date - input date which required hours to be subtracted<br>
 * 		@param	Number - number of hours to be subtracted
 * </p>
 * <p>
 * 		@return	Date - returns same input date reference with subtracted hours
 * </p>
 * <p>
 * 		@throws	Exception when invalid date or number of hours is not number. 
 * </p>
 */
dateutil.subtractHours = function(date, hours){
	if(this.isNotDate(date) || !util.isNumber(hours)) {
		throw new Error("The date must be valid or hours must be number");
	}
	date.setHours(date.getHours() - Math.abs(hours));
	return date;
};


/**
 * <p>
 * 		Add minutes to input date. No new date object will be created, minutes will be added to input date reference itself.
 * </p>
 * <p>
 * 		@param	Date - input date which required minutes to be added<br>
 * 		@param	Number - number of minutes to be added
 * </p>
 * <p>
 * 		@return	Date - returns same input date reference with minutes added
 * </p>
 * <p>
 * 		@throws	Exception when invalid date or number of minutes is not number. 
 * </p>
 */
dateutil.addMinutes = function(date, minutes){
	if(this.isNotDate(date) || !util.isNumber(minutes)) {
		throw new Error("The date must be valid or minutes must be number");
	}
	date.setMinutes(date.getMinutes() + Math.abs(minutes));
	return date;
};


/**
 * <p>
 * 		Subtract minutes from input date. No new date object will be created, minutes will be subtracted from input date reference itself.
 * </p>
 * <p>
 * 		@param	Date - input date which required minutes to be subtracted<br>
 * 		@param	Number - number of minutes to be subtracted
 * </p>
 * <p>
 * 		@return	Date - returns same input date reference with minutes subtracted
 * </p>
 * <p>
 * 		@throws	Exception when invalid date or number of minutes is not number. 
 * </p>
 */
dateutil.subtractMinutes = function(date, minutes){
	if(this.isNotDate(date) || !util.isNumber(minutes)) {
		throw new Error("The date must be valid or minutes must be number");
	}
	date.setMinutes(date.getMinutes() - Math.abs(minutes));
	return date;
};


/**
 * <p>
 * 		Add seconds to input date. No new date object will be created, seconds will be added to input date reference itself.
 * </p>
 * <p>
 * 		@param	Date - input date which required seconds to be added<br>
 * 		@param	Number - number of seconds to be added
 * </p>
 * <p>
 * 		@return	Date - returns same input date reference with seconds added
 * </p>
 * <p>
 * 		@throws	Exception when invalid date or number of seconds is not number. 
 * </p>
 */
dateutil.addSeconds = function(date, seconds){
	if(this.isNotDate(date) || !util.isNumber(seconds)) {
		throw new Error("The date must be valid or seconds must be number");
	}
	date.setSeconds(date.getSeconds() + Math.abs(seconds));
	return date;
};


/**
 * <p>
 * 		Subtract seconds from input date. No new date object will be created, seconds will be subtracted from input date reference itself.
 * </p>
 * <p>
 * 		@param	Date - input date which required seconds to be subtracted<br>
 * 		@param	Number - number of seconds to be subtracted
 * </p>
 * <p>
 * 		@return	Date - returns same input date reference with seconds subtracted
 * </p>
 * <p>
 * 		@throws	Exception when invalid date or number of seconds is not number. 
 * </p>
 */
dateutil.subtractSeconds = function(date, seconds){
	if(this.isNotDate(date) || !util.isNumber(seconds)) {
		throw new Error("The date must be valid or seconds must be number");
	}
	date.setSeconds(date.getSeconds() - Math.abs(seconds));
	return date;
};


/**
 * <p>
 * 		Add milliseconds to input date. No new date object will be created, milliseconds will be added to input date reference itself.
 * </p>
 * <p>
 * 		@param	Date - input date which required milliseconds to be added<br>
 * 		@param	Number - number of milliseconds to be added
 * </p>
 * <p>
 * 		@return	Date - returns same input date reference with milliseconds added
 * </p>
 * <p>
 * 		@throws	Exception when invalid date or number of milliseconds is not number. 
 * </p>
 */
dateutil.addMilliSeconds = function(date, milliSeconds) {
	if(this.isNotDate(date) || !util.isNumber(milliSeconds)) {
		throw new Error("The date must be valid or milliSeconds must be number");
	}
	date.setMilliseconds(date.getMilliseconds() + Math.abs(milliSeconds));
	return date;
};


/**
 * <p>
 * 		Subtract milliseconds from input date. No new date object will be created, milliseconds will be subtracted from input date reference itself.
 * </p>
 * <p>
 * 		@param	Date - input date which required milliseconds to be subtracted<br>
 * 		@param	Number - number of milliseconds to be subtracted
 * </p>
 * <p>
 * 		@return	Date - returns same input date reference with milliseconds subtracted
 * </p>
 * <p>
 * 		@throws	Exception when invalid date or number of milliseconds is not number. 
 * </p>
 */
dateutil.subtractMilliSeconds = function(date, milliSeconds) {
	if(this.isNotDate(date) || !util.isNumber(milliSeconds)) {
		throw new Error("The date must be valid or milliSeconds must be number");
	}
	date.setMilliseconds(date.getMilliseconds() - Math.abs(milliSeconds));
	return date;
};



dateutil.between = function(startDate, endDate, date) {
	if(this.isNotDate(startDate) || this.isNotDate(endDate) || this.isNotDate(date)) {
		throw new Error("Inputs startDate, endDate and date must be valid dates");
	}
	return startDate <= date && date <= endDate;
};



dateutil.betweenDay = function(startDate, endDate, date) {
	return this.isDayGraterThanEqual(date, startDate) && this.isDayLesserThanEqual(date, endDate);
};


dateutil.isDayGrater = function(date1, date2) {
	if(this.isNotDate(date1) || this.isNotDate(date2)) {
		throw new Error("The date1 and date2 must be valid");
	}
	if(date1.getFullYear() > date2.getFullYear() || 
			(date1.getFullYear() === date2.getFullYear() && 
					date1.getMonth() > date2.getMonth()) || 
			(date1.getFullYear() === date2.getFullYear() && 
					date1.getMonth() === date2.getMonth() && 
					date1.getDate() > date2.getDate())) {
		return true;
	}
	return false;
};


dateutil.isDayGraterThanEqual = function(date1, date2) {
	if(this.isNotDate(date1) || this.isNotDate(date2)) {
		throw new Error("The date1 and date2 must be valid");
	}
	if(date1.getFullYear() > date2.getFullYear() || 
			(date1.getFullYear() === date2.getFullYear() && 
					date1.getMonth() > date2.getMonth()) || 
			(date1.getFullYear() === date2.getFullYear() && 
					date1.getMonth() === date2.getMonth() && 
					date1.getDate() >= date2.getDate())) {
		return true;
	}
	return false;
};

dateutil.isDayLesser = function(date1, date2) {
	if(this.isNotDate(date1) || this.isNotDate(date2)) {
		throw new Error("The date1 and date2 must be valid");
	}
	if(date1.getFullYear() < date2.getFullYear() || 
			(date1.getFullYear() === date2.getFullYear() && 
					date1.getMonth() < date2.getMonth()) || 
			(date1.getFullYear() === date2.getFullYear() && 
					date1.getMonth() === date2.getMonth() && 
					date1.getDate() < date2.getDate())) {
		return true;
	}
	return false;
};

dateutil.isDayLesserThanEqual = function(date1, date2) {
	if(this.isNotDate(date1) || this.isNotDate(date2)) {
		throw new Error("The date1 and date2 must be valid");
	}
	if(date1.getFullYear() < date2.getFullYear() || 
			(date1.getFullYear() === date2.getFullYear() && 
					date1.getMonth() < date2.getMonth()) || 
			(date1.getFullYear() === date2.getFullYear() && 
					date1.getMonth() === date2.getMonth() && 
					date1.getDate() <= date2.getDate())) {
		return true;
	}
	return false;
};


dateutil.compare = function(date1, date2) {
	if(this.isNotDate(date1) || this.isNotDate(date2)) {
		throw new Error("The date1 and date2 must be valid");
	}
	return date1.getTime() - date2.getTime();
};