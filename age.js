var floatAge, floatDays, intWeeks, floatMonths, intFortnights;
/* This program will roughly calculate how many days, months, weeks, and fortnights you lived so far*/
     floatAge = parseFloat(prompt("Enter your age"));
     floatDays = (floatAge*365.25).toFixed(2);// Calculate floatDays by multiplying age x 365.25
     floatMonths = (floatAge*12).toFixed(2);// Calculate floatMonths by multiplying age x 12
     intWeeks = (floatDays/7).toFixed(2);// Calculate intWeeks by divding days / 7
     floatFortnights = (floatDays/14).toFixed(2);// Calculate floatFortnights by divding days / 14
     alert("You living in this world for" + floatDays + "days" + ", "//I just want to put a "," here to make it to be read better
                                          + floatMonths + "months" + ", "
                                          + intWeeks + "weeks" + ", "
                                          + floatFortnights + "fortnights!");
     alert("Say Hello " + 2000 + " times fast!")
