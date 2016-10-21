/**
 * bchekuri
 */


var dateutil = require("./dateutil");


function log(msg) {
	console.log(msg);
}

function execute(func, ind) {
	if(!func()) {
		throw new Error("Test #" + ind + " Failed");
	} else {
		log("Test #" + ind + " Success");
	}
}


function testExe(){
	log("dateutil Test Starts");
	for(var i = 1; i <= Object.keys(test).length; i++) {
		log("###### Testing " + test["test" + i].name + " Function Starts ######");
		for(var j = 1; j <= Object.keys(test["test" + i]).length-1; j++) {
			execute(test["test" + i]["test" + j], j);
		}
		log("###### Testing " + test["test" + i].name + " Function Ends ######");
	}
	log("dateutil Test Ends");
}


/**
 *  return true is always success test
 */
var isDate = {
		name : "isDate",
		test1 : function() {
			var date;
			return !dateutil.isDate(date);
		},
		test2: function() {
			return !dateutil.isDate();
		},
		test3: function() {
			var date = 1; 
			return !dateutil.isDate(date);
		},
		test4: function() {
			var date = new Date(); 
			return dateutil.isDate(date);
		},
		test5: function() {
			var date = "cool"; 
			return !dateutil.isDate(date);
		}
};


var isNotDate = {
		name : "isNotDate",
		test1 : function() {
			var date;
			return dateutil.isNotDate(date);
		},
		test2: function() {
			return dateutil.isNotDate();
		},
		test3: function() {
			var date = 1; 
			return dateutil.isNotDate(date);
		},
		test4: function() {
			var date = new Date(); 
			return !dateutil.isNotDate(date);
		},
		test5: function() {
			var date = "cool"; 
			return dateutil.isNotDate(date);
		}
};

var now = {
		name : "now",
		test1 : function() {
			return dateutil.isDate(dateutil.now());
		}
};

var getDays = {
		name : "getDays",
		test1 : function() {
			return (7 === dateutil.getDays().length) ? true : false;
		},
		test2 : function() {
			var days = dateutil.getDays();
			if(days[0] === "Sunday" &&
					days[1] === "Monday" &&
						days[2] === "Tuesday" &&
							days[3] === "Wednesday" &&
								days[4] === "Thursday" &&
									days[5] === "Friday" &&
										days[6] === "Saturday") {
				return true;
			} else {
				return false;
			}
		}
};


var getShortDays = {
		name : "getShortDays",
		test1 : function() {
			return (7 === dateutil.getShortDays().length) ? true : false;
		},
		test2 : function() {
			var days = dateutil.getShortDays();
			if(days[0] === "Sun" &&
					days[1] === "Mon" &&
						days[2] === "Tue" &&
							days[3] === "Wed" &&
								days[4] === "Thu" &&
									days[5] === "Fri" &&
										days[6] === "Sat") {
				return true;
			} else {
				return false;
			}
		}
}

var getMonths = {
		name : "getMonths",
		test1 : function(){
			return dateutil.getMonths().length === 12;
		}
};


var getShortMonths = {
		name : "getShortMonths",
		test1 : function(){
			return dateutil.getShortMonths().length === 12;
		}
};


var getMonthName = {
		name : "getMonthName",
		test1 : function(){
			return (dateutil.getMonthName(0) === "January" 
						&& dateutil.getMonthName(1) === "February"
						&& dateutil.getMonthName(2) === "March"
						&& dateutil.getMonthName(3) === "April"
						&& dateutil.getMonthName(4) === "May"
						&& dateutil.getMonthName(5) === "June"
						&& dateutil.getMonthName(6) === "July"
						&& dateutil.getMonthName(7) === "August"
						&& dateutil.getMonthName(8) === "September"
						&& dateutil.getMonthName(9) === "October"
						&& dateutil.getMonthName(10) === "November"
						&& dateutil.getMonthName(11) === "December"); 
		},
		test2 : function() {
			try {
				dateutil.getMonthName();
				return false;
			} catch (e) {
				return true;
			}
		},
		test3 : function() {
			if(dateutil.getMonthName(0) === "January") {
				return true;
			} else {
				return false;
			}
		},
		test4 : function() {
			try {
				dateutil.getMonthName(12);
				return false;
			} catch (e) {
				return true;
			}
		},
		test5 : function() {
			try {
				dateutil.getMonthName("1")
				return false;
			} catch (e) {
				return true;
			}
		}
};


var getMonthShortName = {
		name : "getMonthShortName",
		test1 : function(){
			return (dateutil.getMonthShortName(0) === "Jan" 
						&& dateutil.getMonthShortName(1) === "Feb"
						&& dateutil.getMonthShortName(2) === "Mar"
						&& dateutil.getMonthShortName(3) === "Apr"
						&& dateutil.getMonthShortName(4) === "May"
						&& dateutil.getMonthShortName(5) === "Jun"
						&& dateutil.getMonthShortName(6) === "Jul"
						&& dateutil.getMonthShortName(7) === "Aug"
						&& dateutil.getMonthShortName(8) === "Sep"
						&& dateutil.getMonthShortName(9) === "Oct"
						&& dateutil.getMonthShortName(10) === "Nov"
						&& dateutil.getMonthShortName(11) === "Dec"); 
		},
		test2 : function() {
			try {
				dateutil.getMonthShortName();
				return false;
			} catch (e) {
				return true;
			}
		},
		test3 : function() {
			if(dateutil.getMonthShortName(0) === "Jan") {
				return true;
			} else {
				return false;
			}
		},
		test4 : function() {
			try {
				dateutil.getMonthShortName(12);
				return false;
			} catch (e) {
				return true;
			}
		},
		test5 : function() {
			if(dateutil.getMonthShortName(1) === "Feb") {
				return true;
			} else {
				return false;
			}
		}
};

var isSameDay = {
		name : "isSameDay",
		test1 : function() {
			var date1 = new Date("06/21/2016");
			var date2 = new Date("06/22/2016");
			if(dateutil.isSameDay(date1, date2)) {
				return false;
			} else {
				return true;
			}
		},
		test2 : function() {
			var date1 = new Date();
			var date2 = new Date();
			if(dateutil.isSameDay(date1, date2)) {
				return true;
			} else {
				return false;
			}
		},
		test3 : function() {
			var date1 = new Date("06/21/2016");
			var date2 = new Date("06/21/2016");
			if(dateutil.isSameDay(date1, date2)) {
				return true;
			} else {
				return false;
			}
		},
		test4 : function() {
			var date1 = null;
			var date2 = new Date("06/21/2016");
			try {
				dateutil.isSameDay(date1, date2);
				return false;
			} catch(err) {
				return true;
			}
		},
		test5 : function() {
			var date1 = new Date("06/21/2016");
			var date2 = null;
			try {
				dateutil.isSameDay(date1, date2);
				return false;
			} catch(err) {
				return true;
			}
		},
		test6 : function() {
			var date1 = null;
			var date2 = null;
			try {
				dateutil.isSameDay(date1, date2);
				return false;
			} catch(err) {
				return true;
			}
		},
		test7 : function() {
			var date1;
			var date2;
			try {
				dateutil.isSameDay(date1, date2);
				return false;
			} catch(err) {
				return true;
			}
		},
		test8 : function() {
			try {
				dateutil.isSameDay();
				return false;
			} catch(err) {
				return true;
			}
		},
		test9 : function() {
			var date1 = new Date("Jun 21 2016 9:30:35 GMT+0100");
			var date2 = new Date("Jun 21 2016 9:30:35 GMT+0500");
			if(dateutil.isSameDay(date1, date2)) {
				return true;
			} else {
				return false;
			}
		}
};


var equal = {
	name : "equal",
	test1 : function() {
		var date1 = new Date("Jun 21 2016 9:30:35 GMT+0100");
		var date2 = new Date("Jun 21 2016 9:30:35 GMT+0500");
		if(dateutil.equal(date1, date2)) {
			return false;
		} else {
			return true;
		}
	},
	test2 : function() {
		var date1 = new Date("Jun 21 2016 9:30:35 GMT+0100");
		var date2 = new Date("Jun 21 2016 9:30:35 GMT+0100");
		if(dateutil.equal(date1, date2)) {
			return true;
		} else {
			return false;
		}
	},
	test3 : function() {
		var date1 = new Date("Jun 21 2016 9:31:35");
		var date2 = new Date("Jun 21 2016 9:30:35");
		if(dateutil.equal(date1, date2)) {
			return false;
		} else {
			return true;
		}
	},
	test4 : function() {
		var date1 = new Date("Jun 21 2016");
		var date2 = new Date("Jun 21 2016");
		if(dateutil.equal(date1, date2)) {
			return true;
		} else {
			return false;
		}
	},
	test5 : function() {
		var date1 = new Date("Jun 21 2016 GMT+0100");
		var date2 = new Date("Jun 21 2016 GMT-0400");
		if(dateutil.equal(date1, date2)) {
			return false;
		} else {
			return true;
		}
	},
	test6 : function() {
		var date1 = null;
		var date2 = new Date("Jun 21 2016 GMT-0400");
		try {
			dateutil.equal(date1, date2);
			return false;
		} catch(err) {
			return true;
		}
	},
	test7 : function() {
		var date1 = new Date("Jun 21 2016 GMT-0400");
		var date2 = null;
		try {
			dateutil.equal(date1, date2);
			return false;
		} catch(err) {
			return true;
		}
	},
	test8 : function() {
		var date1;
		var date2;
		try {
			dateutil.equal(date1, date2);
			return false;
		} catch(err) {
			return true;
		}
	},
	test9 : function() {
		try {
			dateutil.equal();
			return false;
		} catch(err) {
			return true;
		}
	},
	test10 : function() {
		var date1 = new Date("Jun 21 2016 1:30:00 PM GMT-0400");
		var date2 = new Date("Jun 21 2016 11:00:00 PM GMT-0530");
		if(dateutil.equal(date1, date2)) {
			return false;
		} else {
			return true;
		}
	}
};


var getMonthName_test_with_date_input = {
		name : "getMonthName_test_with_date_input",
		test1 : function() {
			var d = new Date("6/22/2016");
			if(dateutil.getMonthName(d) === "June") {
				return true;
			} else {
				return false;
			}
		},
		test2 : function() {
			var d = new Date("1/22/2016");
			if(dateutil.getMonthName(d) === "January") {
				return true;
			} else {
				return false;
			}
		},
		test3 : function() {
			try {
				dateutil.getMonthName();
				return false;
			} catch(err) {
				return true;
			}
		},
		test4 : function() {
			try {
				var d;
				dateutil.getMonthName(d);
				return false;
			} catch(err) {
				return true;
			}
		}
};


var getMonthShortName_with_date_input = {
		name : "getMonthShortName",
		test1 : function() {
			var d = new Date("6/22/2016");
			if(dateutil.getMonthShortName(d) === "Jun") {
				return true;
			} else {
				return false;
			}
		},
		test2 : function() {
			var d = new Date("1/22/2016");
			if(dateutil.getMonthShortName(d) === "Jan") {
				return true;
			} else {
				return false;
			}
		},
		test3 : function() {
			try {
				dateutil.getMonthShortName();
				return false;
			} catch(err) {
				return true;
			}
		},
		test4 : function() {
			try {
				var d;
				dateutil.getMonthShortName(d);
				return false;
			} catch(err) {
				return true;
			}
		}
};


var isSameLocalTime = {
		name : "isSameLocalTime",
		test1 : function() {
			var date1 = new Date("06/21/2016");
			var date2 = new Date("06/22/2016");
			if(dateutil.isSameLocalTime(date1, date2)) {
				return false;
			} else {
				return true;
			}
		},
		test2 : function() {
			var date1 = new Date();
			var date2 = new Date();
			if(dateutil.isSameLocalTime(date1, date2)) {
				return true;
			} else {
				return false;
			}
		},
		test3 : function() {
			var date1 = new Date("06/21/2016");
			var date2 = new Date("06/21/2016");
			if(dateutil.isSameLocalTime(date1, date2)) {
				return true;
			} else {
				return false;
			}
		},
		test4 : function() {
			var date1 = null;
			var date2 = new Date("06/21/2016");
			try {
				dateutil.isSameLocalTime(date1, date2);
				return false;
			} catch(err) {
				return true;
			}
		},
		test5 : function() {
			var date1 = new Date("06/21/2016");
			var date2 = null;
			try {
				dateutil.isSameLocalTime(date1, date2);
				return false;
			} catch(err) {
				return true;
			}
		},
		test6 : function() {
			var date1 = null;
			var date2 = null;
			try {
				dateutil.isSameLocalTime(date1, date2);
				return false;
			} catch(err) {
				return true;
			}
		},
		test7 : function() {
			var date1;
			var date2;
			try {
				dateutil.isSameLocalTime(date1, date2);
				return false;
			} catch(err) {
				return true;
			}
		},
		test8 : function() {
			try {
				dateutil.isSameLocalTime();
				return false;
			} catch(err) {
				return true;
			}
		},
		test9 : function() {
			var date1 = new Date("Jun 21 2016 9:30:35 GMT+0100");
			var date2 = new Date("Jun 21 2016 9:30:35 GMT+0500");
			if(dateutil.isSameDay(date1, date2)) {
				return true;
			} else {
				return false;
			}
		}
};

var isLeapYear = {
		name : "isLeapYear",
		test1 : function() {
			return dateutil.isLeapYear(2016);
		},
		test2 : function() {
			return !dateutil.isLeapYear(2003);
		},
		test3 : function() {
			return !dateutil.isLeapYear(2010);
		},
		test4 : function() {
			return dateutil.isLeapYear(2020);
		},
		test5 : function() {
			try {
				dateutil.isLeapYear();
				return false;
			} catch (e) {
				return true;
			}
		},
		test6 : function() {
			try {
				dateutil.isLeapYear('m');
				return false;
			} catch (e) {
				return true;
			}
		},
		test7 : function() {
			try {
				dateutil.isLeapYear(null);
				return false;
			} catch (e) {
				return true;
			}
		},
		test8 : function() {
			return dateutil.isLeapYear(-2016);
		},
		test9 : function() {
			return !dateutil.isLeapYear(-2015);
		}
};


var isLeapYear_with_date_input = {
		name : "isLeapYearDate",
		test1 : function() {
			var date = new Date();
			date.setFullYear(2016);
			return dateutil.isLeapYear(date);
		},
		test2 : function() {
			var date = new Date();
			date.setFullYear(2013);
			return !dateutil.isLeapYear(date);
		},
		test3 : function() {
			var date = new Date();
			date.setFullYear(2010);
			return !dateutil.isLeapYear(date);
		},
		test4 : function() {
			var date = new Date();
			date.setFullYear(2020);
			return dateutil.isLeapYear(date);
		},
		test5 : function() {
			try {
				dateutil.isLeapYear();
				return false;
			} catch (e) {
				return true;
			}
		},
		test6 : function() {
			try {
				dateutil.isLeapYear('m');
				return false;
			} catch (e) {
				return true;
			}
		},
		test7 : function() {
			try {
				dateutil.isLeapYear(null);
				return false;
			} catch (e) {
				return true;
			}
		}
};

var resetTime = {
		name:"resetTime",
		test1 : function() {
			var d = new Date();
			dateutil.resetTime(d);
			if(d.getHours() === 0 && 
					d.getMinutes() === 0 && 
					d.getSeconds() === 0 && 
					d.getMilliseconds() === 0) {
				return true;
			} else {
				return false;
			}
		},
		test2 : function() {
			try {
				dateutil.resetTime();
				return false;
			}catch(err) {
				return true;
			}
		},
		test3 : function() {
			try {
				dateutil.resetTime(null);
				return false;
			}catch(err) {
				return true;
			}
		},
		test4 : function() {
			try {
				dateutil.resetTime(undefined);
				return false;
			}catch(err) {
				return true;
			}
		}
}

var addDays = {
	name:"addDays",
	test1: function(){
		var d = new Date("Jun 30 2016");
		var rd = dateutil.addDays(d, 1);
		if(rd.getDate() === 1 && rd.getMonth() === 6) {
			return true;
		} else {
			return false;
		}
	},
	test2: function() {
		var d = new Date("Dec 31 2016");
		var rd = dateutil.addDays(d, 1);
		if(rd.getDate() === 1 && rd.getMonth() === 0 && rd.getFullYear() === 2017 && rd.getYear() === 117) {
			return true;
		} else {
			return false;
		}
	},
	test3: function() {
		var d = new Date("01/01/2016");
		var rd = dateutil.addDays(d, 31);
		if(rd.getDate() === 1 && rd.getMonth() === 1 && rd.getFullYear() === 2016 && rd.getYear() === 116) {
			return true;
		} else {
			return false;
		}
	},
	test4 : function() {
		try {
			var rd = dateutil.addDays(undefined, 31);
			return false;
		} catch(err) {
			return true;
		}
	},
	test5 : function() {
		try {
			var rd = dateutil.addDays(new Date());
			return false;
		} catch(err) {
			return true;
		}
	}
};


var addMonths = {
		name:"addMonths",
		test1: function(){
			var d = new Date("Jun 30 2016");
			var rd = dateutil.addMonths(d, 1);
			if(rd.getDate() === 30 && rd.getMonth() === 6) {
				return true;
			} else {
				return false;
			}
		},
		test2: function() {
			var d = new Date("Dec 31 2016");
			var rd = dateutil.addMonths(d, 1);
			if(rd.getDate() === 31 && rd.getMonth() === 0 && rd.getFullYear() === 2017) {
				return true;
			} else {
				return false;
			}
		},
		test3: function() {
			var d = new Date("01/01/2016");
			var rd = dateutil.addMonths(d, 12);
			if(rd.getDate() === 1 && rd.getMonth() === 0 && rd.getFullYear() === 2017) {
				return true;
			} else {
				return false;
			}
		},
		test4: function() {
			try {
				dateutil.addMonths();
				return false;
			} catch(err) {
				return true;
			}
			
		}
};

var startOfMonth = {
		name : "startOfMonth",
		test1 : function() {
			var dateinp = new Date("Jun 21 2016 9:30:35");
			var dateout = dateutil.startOfMonth(dateinp);
			if(dateout.getDate() === 1 && 
					dateout.getMonth() === 5 &&
					dateout.getFullYear() === 2016) {
				return true;
			} else {
				return false;
			}
		},
		test2 : function() {
			var dateinp = new Date("Jan 21 2020 9:30:35");
			var dateout = dateutil.startOfMonth(dateinp);
			if(dateout.getDate() === 1 && 
					dateout.getMonth() === 0 &&
					dateout.getFullYear() === 2020) {
				return true;
			} else {
				return false;
			}
		},
		test3 : function(){
			try {
				dateutil.startOfMonth(undefined);
				return false;
			}catch(err) {
				return true;
			}
		}
		
};


var endOfMonth = {
		name : "endOfMonth",
		test1 : function() {
			var dateinp = new Date("Jun 21 2016 9:30:35");
			var dateout = dateutil.endOfMonth(dateinp);
			if(dateout.getDate() === 30 && 
					dateout.getMonth() === 5 &&
					dateout.getFullYear() === 2016) {
				return true;
			} else {
				return false;
			}
		},
		test2 : function() {
			var dateinp = new Date("Jan 21 2020 9:30:35");
			var dateout = dateutil.endOfMonth(dateinp);
			if(dateout.getDate() === 31 && 
					dateout.getMonth() === 0 &&
					dateout.getFullYear() === 2020) {
				return true;
			} else {
				return false;
			}
		},
		test3 : function(){
			var dateinp = new Date("Feb 21 2016 9:30:35");
			var dateout = dateutil.endOfMonth(dateinp);
			if(dateout.getDate() === 29 && 
					dateout.getMonth() === 1 &&
					dateout.getFullYear() === 2016) {
				return true;
			} else {
				return false;
			}
		},
		test4 : function(){
			var dateinp = new Date("Feb 21 2017 9:30:35");
			var dateout = dateutil.endOfMonth(dateinp);
			if(dateout.getDate() === 28 && 
					dateout.getMonth() === 1 &&
					dateout.getFullYear() === 2017) {
				return true;
			} else {
				return false;
			}
		},
		test5 : function(){
			try {
				dateutil.startOfMonth(undefined);
				return false;
			} catch(err) {
				return true;
			}
		}
		
};


var isDayGrater = {
		name : "isDayGrater",
		test1 : function() {
			var date1 = new Date("07-20-2016");
			var date2 = new Date("07-20-2015");
			return dateutil.isDayGrater(date1, date2);
		},
		test2 : function() {
			var date1 = new Date("07-20-2016");
			var date2 = new Date("07-20-2016");
			return !dateutil.isDayGrater(date1, date2);
		},
		test3 : function() {
			var date1 = new Date("07-20-2015");
			var date2 = new Date("07-20-2016");
			return !dateutil.isDayGrater(date1, date2);
		},
		test4 : function() {
			var date1 = new Date();
			var date2 = new Date();
			return !dateutil.isDayGrater(date1, date2);
		},
		test5 : function() {
			var date1 = null;
			var date2 = null;
			try {
				dateutil.isDayGrater(date1, date2);
				return false;
			} catch(err) {
				return true;
			}
		},
		test6 : function() {
			try {
				dateutil.isDayGrater();
				return false;
			} catch(err) {
				return true;
			}
		}
};



var isDayGraterThanEqual = {
		name : "isDayGraterThanEqual",
		test1 : function() {
			var date1 = new Date("07-20-2016");
			var date2 = new Date("07-20-2015");
			return dateutil.isDayGraterThanEqual(date1, date2);
		},
		test2 : function() {
			var date1 = new Date("07-20-2016");
			var date2 = new Date("07-20-2016");
			return dateutil.isDayGraterThanEqual(date1, date2);
		},
		test3 : function() {
			var date1 = new Date("07-20-2015");
			var date2 = new Date("07-20-2016");
			return !dateutil.isDayGraterThanEqual(date1, date2);
		},
		test4 : function() {
			var date1 = new Date();
			var date2 = new Date();
			return dateutil.isDayGraterThanEqual(date1, date2);
		},
		test5 : function() {
			var date1 = null;
			var date2 = null;
			try {
				dateutil.isDayGraterThanEqual(date1, date2);
				return false;
			} catch(err) {
				return true;
			}
		},
		test6 : function() {
			try {
				dateutil.isDayGraterThanEqual();
				return false;
			} catch(err) {
				return true;
			}
		}
};


var isDayLesser = {
		name : "isDayLesser",
		test1 : function() {
			var date1 = new Date("07-20-2015");
			var date2 = new Date("07-20-2016");
			return dateutil.isDayLesser(date1, date2);
		},
		test2 : function() {
			var date1 = new Date("07-20-2016");
			var date2 = new Date("07-20-2016");
			return !dateutil.isDayLesser(date1, date2);
		},
		test3 : function() {
			var date1 = new Date("07-20-2016");
			var date2 = new Date("07-20-2015");
			return !dateutil.isDayLesser(date1, date2);
		},
		test4 : function() {
			var date1 = new Date();
			var date2 = new Date();
			return !dateutil.isDayLesser(date1, date2);
		},
		test5 : function() {
			var date1 = null;
			var date2 = null;
			try {
				dateutil.isDayLesser(date1, date2);
				return false;
			} catch(err) {
				return true;
			}
		},
		test6 : function() {
			try {
				dateutil.isDayLesser();
				return false;
			} catch(err) {
				return true;
			}
		}
};


var isDayLesserThanEqual = {
		name : "isDayLesserThanEqual",
		test1 : function() {
			var date1 = new Date("07-20-2015");
			var date2 = new Date("07-20-2016");
			return dateutil.isDayLesserThanEqual(date1, date2);
		},
		test2 : function() {
			var date1 = new Date("07-20-2016");
			var date2 = new Date("07-20-2016");
			return dateutil.isDayLesserThanEqual(date1, date2);
		},
		test3 : function() {
			var date1 = new Date("07-20-2016");
			var date2 = new Date("07-20-2015");
			return !dateutil.isDayLesserThanEqual(date1, date2);
		},
		test4 : function() {
			var date1 = new Date();
			var date2 = new Date();
			return dateutil.isDayLesserThanEqual(date1, date2);
		},
		test5 : function() {
			var date1 = null;
			var date2 = null;
			try {
				dateutil.isDayLesserThanEqual(date1, date2);
				return false;
			} catch(err) {
				return true;
			}
		},
		test6 : function() {
			try {
				dateutil.isDayLesserThanEqual();
				return false;
			} catch(err) {
				return true;
			}
		}
};

var between = {
		name : "between",
		test1 : function(){
			var startDate = new Date("Jun 21 2009 11:00:00 PM GMT+0530");
			var endDate = new Date("Jul 21 2009 11:00:00 PM GMT+0530");
			var date = new Date("Jun 23 2009 11:00:00 PM GMT+0530");
			return dateutil.between(startDate, endDate, date);
		},
		test2 : function(){
			var startDate = new Date("Jul 21 2009 11:00:00 PM GMT+0530");
			var endDate = new Date("Jun 21 2009 11:00:00 PM GMT+0530");
			var date = new Date("Jun 23 2009 11:00:00 PM GMT+0530");
			return !dateutil.between(startDate, endDate, date);
		},
		test3 : function(){
			var startDate = new Date("Jun 21 2009 11:00:00 PM GMT+0530");
			var endDate = new Date("Jun 21 2009 11:00:00 PM GMT+0530");
			var date = new Date("Jun 21 2009 11:00:00 PM GMT+0530");
			return dateutil.between(startDate, endDate, date);
		},
		test4 : function(){
			var startDate = new Date("Jun 21 2009");
			var endDate = new Date("Jun 21 2009");
			var date = new Date("Jun 21 2009");
			return dateutil.between(startDate, endDate, date);
		},
		test5 : function(){
			var startDate = new Date("Jun 21 2009 11:00:00 PM GMT+0530");
			var endDate = new Date("Jun 21 2009 11:00:00 PM GMT+0500");
			var date = new Date("Jun 21 2009 11:00:00 PM GMT+0520");
			return dateutil.between(startDate, endDate, date);
		},
		test6 : function(){
			try {
				dateutil.between();
				return false;
			} catch (e) {
				return true;
			}
		},
		test7 : function(){
			var startDate = new Date("Jun 21 2009 11:00:00 PM");
			var endDate = new Date("Jun 21 2009 11:00:00 PM");
			var date = new Date("Jun 21 2009 12:00:00 PM");
			return !dateutil.between(startDate, endDate, date);
		},

};

var startOfYear = {
	name:"startOfYear",
	test1 : function() {
		var d = new Date();
		var ret = dateutil.startOfYear(d);
		if(ret.getDate() === 1 && ret.getMonth() === 0) {
			return true;
		} else {
			return false;
		}
	},
	test2 : function() {
		try {
			dateutil.startOfYear(undefined);
			return false;
		} catch(err) {
			return true;
		}
	},
	test3 : function() {
		var d = new Date("Aug 20 2016");
		var ret = dateutil.startOfYear(d);
		if(ret.getDate() === 1 && ret.getMonth() === 0 && ret.getFullYear() === 2016) {
			return true;
		} else {
			return false;
		}
	}
};


var endOfYear = {
		name:"endOfYear",
		test1 : function() {
			var d = new Date();
			var ret = dateutil.endOfYear(d);
			if(ret.getDate() === 31 && ret.getMonth() === 11) {
				return true;
			} else {
				return false;
			}
		},
		test2 : function() {
			try {
				dateutil.endOfYear(undefined);
				return false;
			} catch(err) {
				return true;
			}
		},
		test3 : function() {
			var d = new Date("Aug 20 2016");
			var ret = dateutil.endOfYear(d);
			if(ret.getDate() === 31 && ret.getMonth() === 11 && ret.getFullYear() === 2016) {
				return true;
			} else {
				return false;
			}
		}
};


var addYears = {
		name:"addYears",
		test1: function(){
			var d = new Date("Feb 29 2016");
			var rd = dateutil.addYears(d, 1);
			if(rd.getDate() === 1 && rd.getMonth() === 2 && rd.getFullYear() === 2017) {
				return true;
			} else {
				return false;
			}
		},
		test2: function() {
			try {
				dateutil.addYears();
				return false;
			} catch(err) {
				return true;
			}
		},
		test3: function(){
			var d = new Date("Jun 29 2017");
			var rd = dateutil.addYears(d, 1);
			if(rd.getDate() === 29 && rd.getMonth() === 5 && rd.getFullYear() === 2018) {
				return true;
			} else {
				return false;
			}
		}
};


var addHours = {
		name:"addHours",
		test1: function(){
			var d = new Date("Feb 29 2016 23:30:30");
			var rd = dateutil.addHours(d, 1);
			if(rd.getDate() === 1 && rd.getMonth() === 2 && 
					rd.getFullYear() === 2016 &&
					rd.getHours() === 0 &&
					rd.getMinutes() === 30 &&
					rd.getSeconds() === 30) {
				return true;
			} else {
				return false;
			}
		},
		test2: function() {
			try {
				dateutil.addHours();
				return false;
			} catch(err) {
				return true;
			}
		},
		test3: function(){
			var d = new Date("Jan 29 2016 1:00:00");
			var rd = dateutil.addHours(d, 23);
			if(rd.getDate() === 30 && rd.getMonth() === 0 && 
					rd.getFullYear() === 2016 &&
					rd.getHours() === 0 &&
					rd.getMinutes() === 0 && 
					rd.getSeconds() === 0) {
				return true;
			} else {
				return false;
			}
		}
};


var addMinutes = {
		name:"addMinutes",
		test1: function(){
			var d = new Date("Feb 29 2016 23:59:30");
			var rd = dateutil.addMinutes(d, 1);
			if(rd.getDate() === 1 && rd.getMonth() === 2 && 
					rd.getFullYear() === 2016 &&
					rd.getHours() === 0 &&
					rd.getMinutes() === 0 &&
					rd.getSeconds() === 30) {
				return true;
			} else {
				return false;
			}
		},
		test2: function() {
			try {
				dateutil.addMinutes();
				return false;
			} catch(err) {
				return true;
			}
		},
		test3: function(){
			var d = new Date("Jan 29 2016 1:00:00");
			var rd = dateutil.addMinutes(d, 23);
			if(rd.getDate() === 29 && rd.getMonth() === 0 && 
					rd.getFullYear() === 2016 &&
					rd.getHours() === 1 &&
					rd.getMinutes() === 23 && 
					rd.getSeconds() === 0) {
				return true;
			} else {
				return false;
			}
		}
};


var addSeconds = {
		name:"addSeconds",
		test1: function(){
			var d = new Date("Feb 29 2016 23:59:59");
			var rd = dateutil.addSeconds(d, 1);
			if(rd.getDate() === 1 && rd.getMonth() === 2 && 
					rd.getFullYear() === 2016 &&
					rd.getHours() === 0 &&
					rd.getMinutes() === 0 &&
					rd.getSeconds() === 0) {
				return true;
			} else {
				return false;
			}
		},
		test2: function() {
			try {
				dateutil.addSeconds();
				return false;
			} catch(err) {
				return true;
			}
		},
		test3: function(){
			var d = new Date("Jan 29 2016 1:00:00");
			var rd = dateutil.addSeconds(d, 60);
			if(rd.getDate() === 29 && rd.getMonth() === 0 && 
					rd.getFullYear() === 2016 &&
					rd.getHours() === 1 &&
					rd.getMinutes() === 1 && 
					rd.getSeconds() === 0) {
				return true;
			} else {
				return false;
			}
		}
};

var addMilliSeconds = {
		name:"addMilliSeconds",
		test1: function(){
			var d = new Date("Feb 29 2016 23:59:59");
			var rd = dateutil.addMilliSeconds(d, 1000);
			if(rd.getDate() === 1 && rd.getMonth() === 2 && 
					rd.getFullYear() === 2016 &&
					rd.getHours() === 0 &&
					rd.getMinutes() === 0 &&
					rd.getSeconds() === 0 &&
					rd.getMilliseconds() === 0) {
				return true;
			} else {
				return false;
			}
		},
		test2: function() {
			try {
				dateutil.addMilliSeconds();
				return false;
			} catch(err) {
				return true;
			}
		},
		test3: function(){
			var d = new Date("Jan 29 2016 1:00:00");
			var rd = dateutil.addMilliSeconds(d, 999);
			if(rd.getDate() === 29 && rd.getMonth() === 0 && 
					rd.getFullYear() === 2016 &&
					rd.getHours() === 1 &&
					rd.getMinutes() === 0 && 
					rd.getSeconds() === 0 &&
					rd.getMilliseconds() === 999) {
				return true;
			} else {
				return false;
			}
		}
};


var betweenDay = {
		name : "betweenDay",
		test1 : function(){
			var startDate = new Date("Jun 21 2009 11:00:00 PM GMT+0530");
			var endDate = new Date("Jul 21 2009 11:00:00 PM GMT+0530");
			var date = new Date("Jun 23 2009 11:00:00 PM GMT+0530");
			return dateutil.betweenDay(startDate, endDate, date);
		},
		test2 : function(){
			try {
				dateutil.betweenDay();
				return false;
			} catch (e) {
				return true;
			}
		},
		test3 : function(){
			var startDate = new Date("Jun 21 2009 11:00:00 PM");
			var endDate = new Date("Jun 21 2009 11:00:00 PM");
			var date = new Date("Jun 21 2009 12:00:00 PM");
			return dateutil.betweenDay(startDate, endDate, date);
		},

};

var clone = {
		name : "clone",
		test1 : function(){
			var d = new Date();
			var rd = dateutil.clone(d);
			return dateutil.equal(d, rd) ? true : false;
		},
		test2 : function() {
			var d = new Date("Jun 30 2016");
			var rd = dateutil.clone(d);
			return dateutil.equal(d, rd) ? true : false;
		},
		test3 : function() {
			try {
				dateutil.clone();
				return false;
			} catch(err) {
				return true;
			}
		}
};

var compare = {
		name : "compare",
		test1 : function() {
			var ret = dateutil.compare(new Date("Mar 13 2016 3:00:00 AM GMT-0400"), new Date("Mar 13 2016 2:00:00 AM GMT-0400"));
			return ret > 0 ? true : false;
		},
		test2 : function() {
			var ret = dateutil.compare(new Date("Mar 13 2016 2:00:00 AM GMT-0400"), new Date("Mar 13 2016 3:00:00 AM GMT-0400"));
			return ret < 0 ? true : false;
		},
		test3 : function() {
			var ret = dateutil.compare(new Date("Jun 13 2016 2:59:59 AM GMT-0400"), new Date("Jun 13 2016 2:59:58 AM GMT-0400"));
			return ret === 1000 ? true : false;
		}
};

var differenceInDays = {
	name : "differenceInDays",
	test1 : function() {
		var date1 = new Date("Mar 13 2016 2:00:00 AM GMT-0400");
		var date2 = new Date("Mar 14 2016 2:00:00 AM GMT-0400");
		var ret = dateutil.differenceInDays(date1, date2);
		return ret === 1 ? true : false;
	},
	test2 : function() {
		var date1 = new Date("Mar 13 2016 1:00:00 AM GMT-0400");
		var date2 = new Date("Mar 14 2016 12:00:00 AM GMT-0400");
		var ret = dateutil.differenceInDays(date1, date2);
		return ret === 1 ? true : false;
	}
};

var test = {
		test1 : isDate,
		test2 : getMonths,
		test3 : getMonthName,
		test4 : isNotDate,
		test5 : getShortMonths,
		test6 : getMonthShortName,
		test7 : isSameDay,
		test8 : equal,
		test9 : getMonthName_test_with_date_input,
		test10 : getMonthShortName_with_date_input,
		test11 : addDays,
		test12 : isSameLocalTime,
		test13 : now,
		test14 : getDays,
		test15 : getShortDays,
		test16 : isLeapYear,
		test17 : isLeapYear_with_date_input,
		test18 : startOfMonth,
		test19 : isDayGrater,
		test20 : isDayGraterThanEqual,
		test21 : isDayLesser,
		test22 : isDayLesserThanEqual,
		test23 : between,
		test24 : resetTime,
		test25 : endOfMonth,
		test26 : startOfYear,
		test27 : endOfYear,
		test28 : addMonths,
		test29 : addYears,
		test30 : addHours,
		test31 : addMinutes,
		test32 : addSeconds,
		test33 : addMilliSeconds,
		test34 : betweenDay,
		test35 : clone,
		test36 : compare,
		test37 : differenceInDays
};

/**
 * <p>
 * 		Method to start the testing
 * </p>
 */
testExe();
