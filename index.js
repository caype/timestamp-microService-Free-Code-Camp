var express = require("express");
var app = express();
var port = process.env.PORT;
var Months=["","January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

app.get('/:targetDate?',function(req,res){
    var regex = /[a-z]/i;
    if (req.params.targetDate != undefined) {
        if (regex.exec(req.params.targetDate)!=null) {
        var receivedDate = (req.params.targetDate).replace(',','').split(' ');
        var FormattedDate = receivedDate[2]+'.'+Months.indexOf(receivedDate[0])+'.'+receivedDate[1];
        var unixTimestamp = new Date(FormattedDate).getTime() / 1000;
        res.send({"unix":unixTimestamp,"natural":req.params.targetDate});
        }else{
            var dateTime = new Date(req.params.targetDate*1000);
            var NaturalDate = Months[dateTime.getMonth()+1]+" "+dateTime.getDate()+", "+dateTime.getFullYear();
            res.send({"unix":dateTime.getTime()/1000,"Natural":NaturalDate});
        }
    }else{
        res.send({'Try The Following User Stories':{"1":"https://learn-something-new-chayakrishnaprasad.c9users.io/1478563200","2":"https://learn-something-new-chayakrishnaprasad.c9users.io/November%208,%202016"}});
    }
    
});

app.listen(port,function(){
 console.log('Application Running at : https://learn-something-new-chayakrishnaprasad.c9users.io/ ');
});
