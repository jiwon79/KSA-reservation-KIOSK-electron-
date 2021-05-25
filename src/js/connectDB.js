var roomList = {'a': Array('00-000', '00-000', '00-000', '00-000', '00-000', '00-000', '00-000', '00-000', '00-000', '00-000', '00-000', '00-000', '00-000', '00-000', '00-000'), 
                'b': Array('00-000', '00-000', '00-000', '00-000', '00-000', '00-000', '00-000', '00-000', '00-000', '00-000', '00-000', '00-000', '00-000', '00-000', '00-000'), 
                'c': Array('00-000', '00-000', '00-000', '00-000', '00-000', '00-000', '00-000', '00-000', '00-000', '00-000', '00-000', '00-000', '00-000', '00-000', '00-000'), 
                'd': Array('00-000', '00-000', '00-000', '00-000', '00-000', '00-000', '00-000', '00-000', '00-000', '00-000', '00-000', '00-000', '00-000', '00-000', '00-000'), 
                'e': Array('00-000', '00-000', '00-000', '00-000', '00-000', '00-000', '00-000', '00-000', '00-000', '00-000', '00-000', '00-000', '00-000', '00-000', '00-000')};

d = getTodayDate();
var dayLog_exists = fs.existsSync(rootPath+'/log/day_log/'+d+'.txt');
var userLog_exists = fs.existsSync(rootPath+'/log/user_log/'+d+'.txt');

// day log file
if(dayLog_exists){ // if exist file, load day log
    console.log("exist :",dayLog_exists);
    loadDayLog();
} else { // if not exist file, create empty log file
    console.log("no exists :",dayLog_exists);
    createDayLogFile();
}

//user log file
if(userLog_exists){
    console.log("exist : ", userLog_exists);
} else {
    createUserLogFile();
}

// student excel data
var studentList = {}
xlsxFile(rootPath+'/src/students.xlsx').then((rows) => {
    for (i=0; i<rows.length; i++) {
        s = String(rows[i][0]);
        number = s.slice(0,2) + '-' + s.slice(2,5);
        studentList[number] = rows[i][1];
    }
})