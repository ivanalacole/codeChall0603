//create date variables

let date1 = new Date('07/05/2020');
let date2 = new Date('07/05/1997');


const days = (date1, date2) =>{
    let difference = date1.getTime() - date2.getTime();
    //get.Time method returns the number of milliseconds from 6/20/19

    let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
    //math.ceil method rounds number to the next largest intager
    //we want the difference between the dates so divided the
    //difference with correct formula for converting milliseconds into a date

    return TotalDays;
}
console.log(days(date1, date2));