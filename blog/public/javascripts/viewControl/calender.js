/* 입력받은 message를 id가 calender인 태그에 붙여주는 test code*/
function writeToScreen(message) {
    let pre = document.createElement("div");
    pre.innerHTML = message;
    calender.appendChild(pre);
}

const month = {
    1  : 31,
    2  : 28,
    3  : 31,
    4  : 30,
    5  : 31,
    6  : 30,
    7  : 31,
    8  : 31,
    9  : 30,
    10 : 31,
    11 : 30,
    12 : 31,
};

/**
 * 
 * @param {int} year   년
 * @param {int} month  월
 */
function makeHeader (year, month) {
    if(month == 13) month = 1;
    return `${year}년 ${month}월`;
}

/**
 * 
 * @param {int} day    일
 */
function setColor(day, mon) {
    if (day <= 0 || day > month[`${mon}`]) return '&nbsp;';
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

let standard = curDate = new Date();

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
    `<div class = "header">` + makeHeader(year, month) +
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
    writeToScreen(makeCalender(standard.getFullYear(), standard.getMonth()+1));
    writeToScreen(makeCalender(standard.getFullYear(), standard.getMonth()+2));
}

function nextMonth () {
    removeAllChild();
    standard.setMonth(standard.getMonth() + 1);
    writeToScreen(makeCalender(standard.getFullYear(), standard.getMonth()+1));
    writeToScreen(makeCalender(standard.getFullYear(), standard.getMonth()+2));
}

function printId() {
    console.log(this.id);
}

/*
const days = document.querySelector('#calender');
days.addEventListener('click', function (e) {
    console.log(e.target.id);
    document.getElementById('start').innerHTML= (e.target.id.split('month')[1]);
})
*/
 

writeToScreen(makeCalender(curDate.getFullYear(), curDate.getMonth() + 1));
writeToScreen(makeCalender(curDate.getFullYear(), curDate.getMonth() + 2));