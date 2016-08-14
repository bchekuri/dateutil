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
 * All the date operations are added to this exports variable
 */
var dateutils = module.exports = {};

/**
 * Month names with first letter capital
 */
const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

/**
 * Month short names with first letter capital (only first 3 characters)
 */
const MONTHS_SHORT_NAME = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

/**
 * Days full names with first letter capital
 */
const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

/**
 * Days short names with first letter capital (only first 3 characters)
 */
const DAYS_SHORT_NAME = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

/**
 * function is used to find object is date or not
 * 
 * @param 		Date
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
 * function is used to find object is date or not
 * 
 * @param 		Date
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
 * gives you current local system date object
 * 
 * @return 		Date
 * 
 * @throws 		no exception
 */
dateutils.now = function() {
	return new Date();
}

/**
 * returns array of week days full name
 * 
 * @return		String[]
 * 
 * @throws		no exception
 */
dateutils.getDays = function(){
	return DAYS;
}

/**
 * returns array of week days short name (only first 3 characters)
 * 
 * @return		String[]
 * 
 * @throws		no exception
 */
dateutils.getShortDays = function(){
	return DAYS_SHORT_NAME;
}

/**
 * returns array of months full name
 * 
 * @return		String[]
 * 
 * @throws		no exception
 */
dateutils.getMonths = function(){
	return MONTHS;
}

/**
 * returns array of months short name (only first 3 characters)
 * 
 * @return		String[]
 * 
 * @throws		no exception
 */
dateutils.getShortMonths = function(){
	return MONTHS_SHORT_NAME;
}


