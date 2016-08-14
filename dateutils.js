/**
 * DateUtils is java-script API for date add-on operations for NodeJs environment
 * 
 * @author 		BChekuri
 * @Version		1.0.0
 * 
 * @see
 */


var utils = require("utils");

/**
 * <p>All the date operations are added to this exports variable</P>
 */
var dateutils = module.exports = {};

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
 * <p>function is used to find object is date or not<p>
 * 
 * @param 		Date - valid date 
 * 
 * @return 		true when input type is date object
 * 				false when input type is other then date object
 * 
 * @throws		no exception
 */
dateutils.isDate = function(date) {
	if(Object.prototype.toString().call(date) === "[object Date]") {
		return true;
	}
	return false;
};

/**
 * <p>function is used to find object is not date or date<p>
 * 
 * @param 		Date - valid date input
 * 
 * @return 		false when input type is date object
 * 				true when input type is other then date object
 * 
 * @throws		no exception
 */
dateutils.isNotDate = function(date) {
	if(Object.prototype.toString().call(date) === "[object Date]") {
		return false;
	}
	return true;
};

/**
 * <p>gives you current local system date object</p>
 * 
 * @return 		Date - returns valid current date
 * 
 * @throws 		no exception
 */
dateutils.now = function() {
	return new Date();
}

/**
 * <p>returns array of week days full name</P>
 * 
 * @return		String[] - array of full day names
 * 
 * @throws		no exception
 */
dateutils.getDays = function(){
	return DAYS;
}

/**
 * <p>returns array of week days short name (only first 3 characters)</p>
 * 
 * @return		String[] - array of day names in short form.
 * 
 * @throws		no exception
 */
dateutils.getShortDays = function(){
	return DAYS_SHORT_NAME;
}

/**
 * <p>returns array of months full name</p>
 * 
 * @return		String[] - array of full month name
 * 
 * @throws		no exception
 */
dateutils.getMonths = function(){
	return MONTHS;
}

/**
 * <p>returns array of months short name (only first 3 characters)</p>
 * 
 * @return		String[] - array of short month names
 * 
 * @throws		no exception
 */
dateutils.getShortMonths = function(){
	return MONTHS_SHORT_NAME;
}


/**
 * <p>
 * 		private method to get month full name
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
function _provateGetMonthName(month) {
	if(month < 0 || month > 11) {
		throw new Error("The month number mush be grater then equal to 0 and lesser then equal to 11");
	}
	return MONTHS[month];
}


/**
 * 
 */
dateutils.getMonthName = function(monthNumberOrDate) {
	if(utils.is)
}

