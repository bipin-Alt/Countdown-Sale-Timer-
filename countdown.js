const days = [
     'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday'
];
const months =[
     'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
];

//selection of elements //
const sale = document.querySelector('.sale');
const deadline = document.querySelector('.deadline');
const format =document.querySelectorAll('.deadline-format h4');

let date = new Date();
const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDay() ;

//set the date format//
const futureDate  = new Date(year, month, day + 20, 9 , 30,0);

const futureYear = futureDate.getFullYear();
const futureHour = futureDate.getHours();
const futureMinute = futureDate.getMinutes();

let futureMonth = futureDate.getMonth();
futureMonth = months[month];
const getFutureDate = futureDate.getDate();

const weekDay =  days[futureDate.getDay()];

//display the ending date//

sale.textContent =`Sale ends on ${weekDay}, ${futureMonth} ${futureYear} ${futureHour}:${futureMinute}PM`;

const futureTime = futureDate.getTime();

//function to calculate the remaining time//
const getRemainingTime = () =>{
    const now = new Date() . getTime();
    const remainingTime = futureTime - now;
    
 //days//
 const days = Math.floor((remainingTime/ ( 1000 * 60 * 60 * 24))); // 1000 is to convert milliseconds into seconds//
 const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)/ (1000 * 60 * 60)));
 const minutes = Math.floor((remainingTime %(1000 * 60 * 60))/ (1000 * 60 ));
 const seconds = Math.floor((remainingTime % (1000 * 60 ))/ (1000));

 //set the array containing the values //
 const valuesArr = [days, hours, minutes, seconds];
 const formatValue = (item) =>{
      if(item<10){
             return time = `0${item}`;
      }
      return item;
 }
  //display the remaining time in the format "DD:HH:MM:SS" //
 format.forEach((item,index) =>{
    item.innerHTML = formatValue(valuesArr[index]);

 });

  if (remainingTime < 0){
    clearInterval(countdown);
    deadline.innerHTML =`<h4 class ="expired">Sale ended!</h4>`;
  }
}

//countdown//

const countdown = setInterval(getRemainingTime, 1000);

//run the function to get the initial time//

getRemainingTime();


