/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}


const createEmployeeRecord = arr => ({
  firstName: arr[0],
  familyName: arr[1],
  title: arr[2],
  payPerHour: arr[3],
  timeInEvents: [],
  timeOutEvents: []
})

const createEmployees = arr => arr.map(createEmployeeRecord);
const createTimeInEvent = function (string) {
  const [date, hour]  = string.split(" ");
  this.timeInEvents.push({type: "TimeIn",
                          hour: ~~hour,
                          date: date})
  return this
}

const createTimeOutEvent = function (string) {
  const [date, hour]  = string.split(" ");
  this.timeOutEvents.push({type: "TimeOut",
                          hour: ~~hour,
                          date: date})
  return this
}

const hoursWorkedOnDate = function (dateS) {
  const i = this.timeOutEvents.findIndex(({date}) => date === dateS);
  return (this.timeOutEvents[i].hour - this.timeInEvents[i].hour)/100;
}

const wagesEarnedOnDate = function (dateS) {
  return this.payPerHour * hoursWorkedOnDate.call(this, dateS)
}


const calculatePayroll = arr => arr.reduce((sum, e) => sum + e.timeOutEvents.reduce((total, {date}) => total + wagesEarnedOnDate.call(e, date), 0), 0);

const createEmployeeRecords = createEmployees;

const findEmployeebyFirstName = (emps, name) => emps.find(({firstName}) => firstName === name);
