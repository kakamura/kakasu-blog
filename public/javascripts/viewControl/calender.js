/* 입력받은 message를 id가 calender인 태그에 붙여주는 test code*/
function wirteToCalender(message) {
    let pre = document.createElement("div");
    pre.innerHTML = message;
    calender.appendChild(pre);
}

/**
 * 
 * @param {int} year   년
 * @param {int} month  월
 */
function makeCalenderHead (year, month) {
    if(month == 13) month = 1;
    return `${year}년 ${month}월`;
}

/**
 * 
 * @param {int} day    일
 */
function setColor(day, mon) {
    if (day <= 0 || day > month(`${mon}`)) return '&nbsp;';
    return day;
}

/**
 * 
 * @param {int} day    그 월의 해당 요일 첫번째 값을 받는다 (음수로 받을 수도 있다.)
 */
function makeDay(day, month) {
    let message = 
    `<div id = ${month + 'month' +  day}day>` + `${setColor(day, month)}           </div>` +
    `<div id = ${month + 'month' +  day}day>` + `${setColor(day = day + 7, month)} </div>` +
    `<div id = ${month + 'month' +  day}day>` + `${setColor(day = day + 7, month)} </div>` +
    `<div id = ${month + 'month' +  day}day>` + `${setColor(day = day + 7, month)} </div>` +
    `<div id = ${month + 'month' +  day}day>` + `${setColor(day = day + 7, month)} </div>` ;
    return message;
}

/**
 * 해당 달의 첫번째 월요일이 언제인지 찾아서 출력해주는 함수 (음수 값도 가능하다.)
 */
function getStandard(year, month) {
    standardDay = new Date(year, month);
    return (1 - standardDay.getDay()) + 1;
}

/**
 * 달력의 형태에 맞는 레이아웃을, message 형태로 출력하는 함수
 */
function makeCalender (year, month) {
    standardDay = getStandard(year, month);

    let message = 
    `<div class = "CalenderHead" style="height:180px">` + makeCalenderHead(year, month) +
        `<div class ="days" style = "display:flex;">`  +
            `<div class = "day"> 월` +     makeDay(standardDay++, month) + `</div>` +
            `<div class = "day"> 화` +     makeDay(standardDay++, month) + `</div>` +
            `<div class = "day"> 수` +     makeDay(standardDay++, month) + `</div>` +
            `<div class = "day"> 목` +     makeDay(standardDay++, month) + `</div>` +
            `<div class = "day"> 금` +     makeDay(standardDay++, month) + `</div>` +
            `<div class = "day sat"> 토` + makeDay(standardDay++, month) + `</div>` +
            `<div class = "day sun"> 일` + makeDay(standardDay++, month) + `</div>` +    
        `</div>` +
    `</div>`;
    return message;
}

function removeAllChild() {
    const parent = document.getElementById("calender");
    while (parent.hasChildNodes()) {
        parent.removeChild( parent.firstChild );
    }
}

function preMonth () {
    removeAllChild();
    standard.setMonth(standard.getMonth() - 1);
    wirteToCalender(makeCalender(standard.getFullYear(), standard.getMonth()+1));
    //wirteToCalender(makeCalender(standard.getFullYear(), standard.getMonth()+2));
}

function nextMonth () {
    removeAllChild();
    standard.setMonth(standard.getMonth() + 1);
    wirteToCalender(makeCalender(standard.getFullYear(), standard.getMonth()+1));
    // wirteToCalender(makeCalender(standard.getFullYear(), standard.getMonth()+2));
}

/*
const days = document.querySelector('#calender');
days.addEventListener('click', function (e) {
    console.log(e.target.id);
    document.getElementById('start').innerHTML= (e.target.id.split('month')[1]);
})
*/

/**
 * 
 * @param {string} mon
 */
function month(mon) {
    switch (mon) {
        case '1':
        case '3':
        case '5':
        case '7':
        case '8':
        case '10':
        case '12':
            return '31';
        case '2':
            return FebDayOfLeafYear();
        default:
            return '30';
    }
};

function FebDayOfLeafYear() {
    if(standard.getFullYear() % 4 === 0) return '29';
    return '28';
}

let standard = curDate = new Date();
wirteToCalender(makeCalender(curDate.getFullYear(), curDate.getMonth() + 1));
//wirteToCalender(makeCalender(curDate.getFullYear(), curDate.getMonth() + 2));