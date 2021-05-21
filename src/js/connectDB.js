var roomList = {'a': Array('00-000', '00-000', '00-000', '00-000', '00-000', '00-000', '00-000', '00-000', '00-000', '00-000', '00-000', '00-000', '00-000', '00-000', '00-000'), 
                'b': Array('00-000', '00-000', '00-000', '00-000', '00-000', '00-000', '00-000', '00-000', '00-000', '00-000', '00-000', '00-000', '00-000', '00-000', '00-000'), 
                'c': Array('00-000', '00-000', '00-000', '00-000', '00-000', '00-000', '00-000', '00-000', '00-000', '00-000', '00-000', '00-000', '00-000', '00-000', '00-000'), 
                'd': Array('00-000', '00-000', '00-000', '00-000', '00-000', '00-000', '00-000', '00-000', '00-000', '00-000', '00-000', '00-000', '00-000', '00-000', '00-000'), 
                'e': Array('00-000', '00-000', '00-000', '00-000', '00-000', '00-000', '00-000', '00-000', '00-000', '00-000', '00-000', '00-000', '00-000', '00-000', '00-000')};

d = getTodayDate();
var dayLog_exists = fs.existsSync(rootPath+'/log/day_log/'+d+'.txt');
var userLog_exists = fs.existsSync(rootPath+'/log/user_log/'+d+'.txt');

if(dayLog_exists){ // if exist file, load day log
    console.log("exist :",dayLog_exists);
    loadDayLog();
} else { // if not exist file, create empty log file
    console.log("no exists :",dayLog_exists);
    createDayLogFile();
}

if(userLog_exists){
    console.log("exist : ", userLog_exists);
} else {
    createUserLogFile();
}