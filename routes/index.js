var express = require('express');
const app = require('../app');
var router = express.Router();
const postModel = require('../model/post');
const timeSetDate = require('../model/timecount');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'MySis' });
});

/* GET calendar page. */
router.get('/calendar', (req, res) => {
  timeSetDate.find({},(err, Mtime) => {
    if(err) throw err;

    let itemCount = Mtime.length;
    let nextDay, dateinForm, setDay, setMonth, setYear; 

    // Find the lasted record
    for(var x=0;x<itemCount;x++){
      nextDay = Mtime[x].dateSet;     
    }

    // Calculate Date to increase 28 day
    nextDay = addDays(nextDay, 28);

    // Set format date to show in calendar
    setDay = new Date(nextDay).getDate();
    setMonth = new Date(nextDay).getMonth(); 
    setYear = new Date(nextDay).getFullYear(); 
    dateinForm = setDay + "/" + setMonth + "/" + setYear;

    res.render('calendar',{nextDay, dateinForm});      
    console.log(Mtime);
    console.log('Next Day: '+nextDay);           
  });  
  // res.render('calendar');
});

function addDays(date, days) {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

/* GET community page. */
router.get('/commu', (req, res) => {
  postModel.find({},(err, docs) => { 
    if(err) throw err;
    let itemCount = docs.length;

    docs.sort(function(a,b){    
      return new Date(b.postTime) - new Date(a.postTime);
    });

    let newDocs = [];
    docs.forEach((e) => {
      const newE = {...e, postTime: e._doc.postTime.toLocaleDateString("en-US")};
      newDocs.push(newE);
    });
    console.log("Check New Docs");
    console.log(newDocs);

    res.render('commu',{docs, countItem: itemCount, newDocs});     
    console.log(docs);  
  });
  // res.render('commu');
});

/* GET contact page. */
router.get('/contact', (req, res) => {
  res.render('contact')
});

module.exports = router;
