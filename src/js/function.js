let fs = require('fs');
let rootPath = require('electron-root-path').rootPath;

// get today date return 2021-02-25(Thu)
function getTodayDate() {
    // Date 2021-02-25-17:45:34 Thu
    // year = splitDate[3] "2021"
    // month = splitDate[1] "Feb"
    // weekDay = splitDate[0] "Thu"
    // day = splitDate[2] "25"
    // time = splitDate[4] "17:45:34"

    var date = new Date();
    splitDate = String(date).split(' ');

    month = {"Jan":'01', "Feb":'02', "Mar":'03', "Apr":'04',
            "May":'05', "Jun":'06',"Jul":'07', "Aug":'08',
            "Sep":'09', "Oct":'10', "Nov":'11', "Dec":'12'};

    todayDate = splitDate[3] + '-' + month[splitDate[1]] + '-' + 
                splitDate[2] + '(' + splitDate[0]+')'
    return todayDate;
}
  
// get parameter (room)
function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

// time table function
// when click time, chage coloar & array
function applyTable(t) {
    var room = getParameterByName('room');
    var qeury = 'td:nth-child(' + String(t+1) + ')';
    table = document.querySelector(qeury);

    console.log(roomList[room][t]);
    if (roomList[room][t] == '00-000') {
        roomList[room][t] = 1;
        table.style.backgroundColor = "#ff0000";
    } else if (roomList[room][t] == 1) {
        roomList[room][t] = '00-000';
        table.style.backgroundColor = "#ffffff";
    }
}

// apply day log on reservation page's time table
function reservationTable() {
    var room = getParameterByName('room');

    for(i=0; i<15; i++) {
        var qeury = 'td:nth-child(' + String(i+1) + ')';
        
        table = document.querySelector(qeury);
        if (!roomList[room][i].includes('00-000')) {
            table.style.backgroundColor = "#555555";
        }
    }
    console.log('apply table');
}

// apply day log on overall page's time table
function overallTable() {
    var roomAraay = Array('a','b','c','d','e');

    for(i=0; i<5; i++) {
        for(j=0; j<15; j++) {
            r = roomAraay[i].toUpperCase();
            // query = ".sA td:nth-child(3)"
            var qeury = '.s' + r + ' td:nth-child(' + String(j+1) + ')';
            table = document.querySelector(qeury);
            if(!roomList[roomAraay[i]][j].includes('00-000')) {
                table.style.backgroundColor = "blue";
            }
        }
    }
    console.log('apply overall table');
}

// day log file
// a : 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
// b : 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
// c : 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
// d : 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
// e : 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0

// create text file
function createEmptyFile() {
    d = getTodayDate();
    textPath = rootPath+'/log/day_log/'+d+'.txt';
    data = 'a : 00-000, 00-000, 00-000, 00-000, 00-000, 00-000, 00-000, 00-000, 00-000, 00-000, 00-000, 00-000, 00-000, 00-000, 00-000\n'+
            'b : 00-000, 00-000, 00-000, 00-000, 00-000, 00-000, 00-000, 00-000, 00-000, 00-000, 00-000, 00-000, 00-000, 00-000, 00-000\n'+
            'c : 00-000, 00-000, 00-000, 00-000, 00-000, 00-000, 00-000, 00-000, 00-000, 00-000, 00-000, 00-000, 00-000, 00-000, 00-000\n'+
            'd : 00-000, 00-000, 00-000, 00-000, 00-000, 00-000, 00-000, 00-000, 00-000, 00-000, 00-000, 00-000, 00-000, 00-000, 00-000\n'+
            'e : 00-000, 00-000, 00-000, 00-000, 00-000, 00-000, 00-000, 00-000, 00-000, 00-000, 00-000, 00-000, 00-000, 00-000, 00-000';
    
    fs.writeFile(textPath, data, function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("create empty day log file");
    });
}

// read text file
function loadDayLog() {
    d = getTodayDate();
    textPath = rootPath+'/log/day_log/'+d+'.txt';

    data = fs.readFileSync(textPath, {encoding: 'utf8'});
    s = data.split('\n');
    var i = 0;
    for(key in roomList) {
        // a : 0,0,0 => [0,0,0]
        roomList[key] = s[i].slice(4,).split(', ');
        i = i+1;
    }
    console.log('load text data');
}

// if element == 1, change stu_number and save day log file
function saveDayLogByArray(stu_number) {
    d = getTodayDate();
    textPath = rootPath+'/log/day_log/'+d+'.txt';
    data = ''
    room = getParameterByName('room');
    
    // if element == 1, change stu_number
    for(i=0; i<roomList[room].length; i++) {
        if (roomList[room][i] == 1) {
            roomList[room][i] = stu_number;
        }
    }

    // save day log file
    for(key in roomList) {
        data = data + key + ' : ' + roomList[key].join(', ') + '\n';
    }

    fs.writeFile(textPath, data, function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("save  day log file");
    });
}

function availableTime(stu_number) {
    count = 0;
    for(key in roomList) {
        for(i=0; i<roomList[key].length; i++) {
            if (roomList[key][i] == stu_number || roomList[key][i] == 1) {
                count++;
            }
        }
    }
    console.log(count);
    if (count<=3) {
        return true;
    }
    return false;
}

// output: 해당 학생이 예약한 시간 리스트
function reserveTime(stu_number) {
    result = [];
    for(key in roomList) {
        for(i=0; i<roomList[key].length; i++) {
            if (roomList[key][i] == stu_number) {
                result.push([key, i]);
            }
        }
    }
    return result;
}

function print() {
    for(key in roomList){
        console.log(key, roomList[key]);
    }
}


// modal when don't input information
function appear_modal(option) {
    document.querySelector('.modal_wrap').style.display ='block';
    document.querySelector('.black_bg').style.display ='block';
    var modal = document.querySelector('.modal_content');
    if (option=='not_info')     modal.innerText = '학번과 이름 다시 입력 ㄱㄱ';
    if (option == 'over_time')   modal.innerText = '세미나실을 최대 3시간 이용 가능합니다';
    if (option == 'not_reserve')    modal.innerText = '예약을 하지 않았습니다.'
}

function close_modal() {
    document.querySelector('.modal_wrap').style.display ='none';
    document.querySelector('.black_bg').style.display ='none';
}


// reservatoin button
function reservation() {
    var reserveForm = document.reserveForm;
    var stu_number = reserveForm.number.value;
    var stu_name = reserveForm.name.value;

    // if don't input number or name, show modal
    document.querySelector('.modal_close').addEventListener('click', close_modal);
    if (!stu_number || !stu_name) {
        appear_modal('not_info');
    } else if (!availableTime(stu_number)) {
        appear_modal('over_time');
    } else {
        saveDayLogByArray(stu_number);
        reserveForm.submit();
    }
}


// cancel reservation functions
function checkbox_load() {
    var form = document.cancelInputForm;
    var stu_number = form.number.value;
    var stu_name = form.name.value;

    reserveList = reserveTime(stu_number);
    document.querySelector('.modal_close').addEventListener('click', close_modal);
    if(!stu_number || !stu_name) {
        appear_modal('not_info');
    } else if (reserveList.length == 0) {
        appear_modal('not_reserve')
    }
    console.log(reserveList);
}