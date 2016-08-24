/**
 * Dateutil is java-script API for date add-on operations for NodeJs environment
 * 
 * @author 		BChekuri
 * @Version		1.0.0
 * 
 * @see
 */


var util = require("util");

/**
 * <p>
 * 		All the date operations are added to this exports variable
 * </P>
 */
var dateutil = module.exports = {};

/**
 * <p>
 * 		Month names with first letter capital.
 * <p>
 */
const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

/**
 * <p>
 * 		Month short names with first letter capital (only first 3 characters).
 * </p>
 */
const MONTHS_SHORT_NAME = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

/**
 * <p>
 * 		Days full names with first letter capital.
 * </p>
 */
const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

/**
 * <p>
 * 		Days short names with first letter capital (only first 3 characters).
 * </p>
 */
const DAYS_SHORT_NAME = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

/**
 * <p>
 * 		Function is used to find object is date or not.
 * </p>
 * <p>
 * 		@param 		Date - valid date 
 * </p>
 * <p>
 * 		@return 	true when input type is date object,<br>
 * 					false when input type is other then date object
 * </p>
 * <p>
 * 		@throws		no exception
 * </p>
 */
dateutil.isDate = function(date) {
	if(Object.prototype.toString().call(date) === "[object Date]") {
		return true;
	}
	return false;
};

/**
 * <p>
 * 		Function is used to find object is not date or date.
 * </p>
 * <p>
 * 		@param 		Date - valid date input
 * </p>
 * <p>
 * 		@return 	false when input type is date object,<br>
 * 					true when input type is other then date object
 * </p>
 * <p>
 * 		@throws		no exception
 * </p>
 */
dateutil.isNotDate = function(date) {
	if(Object.prototype.toString().call(date) === "[object Date]") {
		return false;
	}
	return true;
};

/**
 * <p>
 * 		Returns current local system date object.
 * </p>
 * <p>
 * 		@return 	Date - returns valid current date
 * </p>
 * <p>
 * 		@throws 	no exception
 * </p>
 */
dateutil.now = function() {
	return new Date();
};

/**
 * <p>
 * 		Returns week days full name in string array.
 * </P>
 * <p>
 * 		@return		String[] - array of full day names
 * </p>
 * <p>
 * 		@throws		no exception
 * </p>
 */
dateutil.getDays = function(){
	return DAYS;
};

/**
 * <p>
 * 		Returns week days short name in string array (only first 3 characters).
 * </p>
 * <p>
 * 		@return		String[] - array of day names in short form
 * </p>
 * <p>
 * 		@throws		no exception
 * </p>
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
 * 		@throws Exception when we don't provide valid input month number
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
 * 		@throws Exception when we don't provide valid input month number / date
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
 * 
 * @param	Number - month number
 * 
 * @return	String  - month short name
 * 
 * @throws Exception when we don't provide valid input month number
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
 * 		@throws Exception when we don't provide valid input month number / date
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
 * 		Compares two dates (only Day, Month and Year are the values considered in this function for comparison)
 * </p>
 */
dateutil.isSameDay = function(date1, date2) {
	
}



