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

function createEmployeeRecord(employee_details){
    const employee = {};
    [employee.firstName, employee.familyName, employee.title, employee.payPerHour] = employee_details;
    employee.timeInEvents = [];
    employee.timeOutEvents = [];
    return employee;
}

function createEmployees(employees) {
    return employees.map(createEmployeeRecord);
}

function createEmployeeRecords(employees) {
    return employees.map(createEmployeeRecord);
}

function createTimeEvent(date_stamp, type) {
    const event = {
        type: type,
        date: date_stamp.split(" ")[0],
        hour: parseInt(date_stamp.split(" ")[1])
    };
    return event;
}
  
function createTimeInEvent(date_stamp) {
    const event = createTimeEvent(date_stamp, "TimeIn");
    this.timeInEvents.push(event);
    return this;
}
  
function createTimeOutEvent(date_stamp) {
    const event = createTimeEvent(date_stamp, "TimeOut");
    this.timeOutEvents.push(event);
    return this;
}


function hoursWorkedOnDate(date) {
    for (let i=0; i < this.timeInEvents.length; i++) {
      if (this.timeInEvents[i].date === date) {
        const timeIn = this.timeInEvents[i].hour;
        const timeOut = this.timeOutEvents[i].hour;
        return (timeOut - timeIn) / 100;
      }
    }
  }
  
  function wagesEarnedOnDate(date) {
    return (this.payPerHour * hoursWorkedOnDate.call(this, date));
  }
  
  function findEmployeebyFirstName(employee_records, firstName) {
  return employee_records.find(employee => employee.firstName === firstName)
  }
  
  function calculatePayroll(employee_records) {
  return employee_records.map(employee => allWagesFor.call(employee)).reduce((total, wages) => total + wages)
  }