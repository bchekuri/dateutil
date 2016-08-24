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
 * <p>All the date operations are added to this exports variable</P>
 */
var dateutil = module.exports = {};

/**
 * <p>Month names with first letter capital<p>
 */
const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

/**
 * <p>Month short names with first letter capital (only first 3 characters)</p>
 */
const MONTHS_SHORT_NAME = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

/**
 * <p>Days full names with first letter capital</p>
 */
const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

/**
 * <p>Days short names with first letter capital (only first 3 characters)</p>
 */
const DAYS_SHORT_NAME = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

/**
 * <p>Function is used to find object is date or not<p>
 * 
 * @param 		Date - valid date 
 * 
 * @return 		true when input type is date object
 * 				false when input type is other then date object
 * 
 * @throws		no exception
 */
dateutil.isDate = function(date) {
	if(Object.prototype.toString().call(date) === "[object Date]") {
		return true;
	}
	return false;
};

/**
 * <p>Function is used to find object is not date or date<p>
 * 
 * @param 		Date - valid date input
 * 
 * @return 		false when input type is date object
 * 				true when input type is other then date object
 * 
 * @throws		no exception
 */
dateutil.isNotDate = function(date) {
	if(Object.prototype.toString().call(date) === "[object Date]") {
		return false;
	}
	return true;
};

/**
 * <p>Gives you current local system date object</p>
 * 
 * @return 		Date - returns valid current date
 * 
 * @throws 		no exception
 */
dateutil.now = function() {
	return new Date();
};

/**
 * <p>Returns array of week days full name</P>
 * 
 * @return		String[] - array of full day names
 * 
 * @throws		no exception
 */
dateutil.getDays = function(){
	return DAYS;
};

/**
 * <p>Returns array of week days short name (only first 3 characters)</p>
 * 
 * @return		String[] - array of day names in short form.
 * 
 * @throws		no exception
 */
dateutil.getShortDays = function(){
	return DAYS_SHORT_NAME;
};

/**
 * <p>Returns array of months full name</p>
 * 
 * @return		String[] - array of full month name
 * 
 * @throws		no exception
 */
dateutil.getMonths = function(){
	return MONTHS;
};

/**
 * <p>Returns array of months short name (only first 3 characters)</p>
 * 
 * @return		String[] - array of short month names
 * 
 * @throws		no exception
 */
dateutil.getShortMonths = function(){
	return MONTHS_SHORT_NAME;
};


/**
 * <p>
 * 		Private method to get month full name
 * 		input month number should start from 0
 *      0 <= input month number <= 11
 * </p>
 * 
 * @param	Number - month number
 * 
 * @return	String  - month full name
 * 
 * @throws Exception when we don't provide valid input month number
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
 * 		month index starts from 0
 * 		month >= 0 && month <= 11
 * </p>
 * 
 * @param	Number/Date - month number or date
 * 
 * @return	String  - month full name
 * 
 * @throws Exception when we don't provide valid input month number / date
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


dateutil.getMonthShortName = function(monthNumberOrDate) {
	
}


