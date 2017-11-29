function DayMaker(id, c_day) {
var Day = document.getElementById(id);
var date = new Date();

var currentYear = date.getFullYear();
//년도를 구함

var currentMonth = date.getMonth() + 1;
//연을 구함. 월은 0부터 시작하므로 +1, 12월은 11을 출력

var currentDate = c_day;
//var currentDate = date.getDate();
//오늘 일자.

date.setDate(1);
var currentDay = date.getDay();
//이번달 1일의 요일은 출력. 0은 일요일 6은 토요일

var dateString = new Array('sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat');
var lastDate = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
if( (currentYear % 4 === 0 && currentYear % 100 !== 0) || currentYear % 400 === 0 )
    lastDate[1] = 29;
//각 달의 마지막 일을 계산, 윤년의 경우 년도가 4의 배수이고 100의 배수가 아닐 때 혹은 400의 배수일 때 2월달이 29일 임.

var currentLastDate = lastDate[currentMonth-1];
var week = Math.ceil(( currentDay + currentLastDate ) / 7 );

//총 몇 주인지 구함.

if(currentMonth != 1){
    var prevDate = currentYear + '-' + ( currentMonth - 1 ) + '-' + currentDate;
  }else{
    var prevDate = ( currentYear - 1 ) + '-' + 12 + '-' + currentDate;
  }
//만약 이번달이 1월이라면 1년 전 12월로 출력.

if(currentMonth != 12){
    var nextDate = currentYear + '-' + ( currentMonth + 1 ) + '-' + currentDate;
}else{
    var nextDate = ( currentYear + 1 ) + '-' + 1 + '-' + currentDate;
}
//만약 이번달이 12월이라면 1년 후 1월로 출력.


if(currentDate > lastDate[currentMonth-1]){
    var nextDay = 1;
}else{
    var nextDay = currentDate + 1;
}

if( currentMonth < 10 )
    var currentMonth = '0' + currentMonth;
//10월 이하라면 앞에 0을 붙여준다.

var calendar = '';
var count = 7;
calendar += '<div id="cal_header">';
calendar += '			<span><a href="#" class="button left" onclick="DayMaker(\'' +  id + '\', \'' + nextDay + '\')"><</a></span>';
calendar += '			<span id="date">' + currentYear + '년 ' + currentMonth + '월 '+ currentDate +'일 </span>';
calendar += '			<span><a href="#" class="button right" onclick="DayMaker(\'' + id + '\',\'' + nextDay + '\')">></a></span>';
calendar += '		</div>';
calendar += '<div id="day_table">';
calendar += '		<table border="0" cellspacing="0" cellpadding="0">';
calendar += '			<tbody>';
    calendar += '			<tr>';
    for(var i = count; i < 25; i++){
        calendar += '				<td class="dayList"><span><a href="detail.html" style="cursor:pointer;">'+i+':00</a></span></td>';
    }
    /*for(var j = 0; j < 7; j++, dateNum++) {
        if(dateNum < 1 || dateNum > currentLastDate ) {
            if(dateNum < 1){
                temp = dateNum + 30;
            }else if(dateNum > currentLastDate){
                temp = dateNum - 31;
            }
            
            continue;
        }
            calendar += '				<td class="day_' + dateString[j] + '"><span><a hred="#" style="cursor:pointer;">' + dateNum + '</a></span></td>';
    }*/
    calendar += '			</tr>';




calendar += '			</tbody>';
calendar += '		</table>';
calendar += '		</div>';
Day.innerHTML = calendar;
}