var express = require('express'),
server = require('http').Server(app),
bodyParser = require('body-parser'),
http = require('http'),
path = require('path'),
app = express(),
PORT = 3000;
let dbConfig = require('../server/src/Utilities/mysqlConfig');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false }));

// Add headers
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});




app.get('/', function(req, res) {
    res.status(200).send('connected sucessfully');
});



//Requiring feedback for performance review list
app.get('/get-performanceList', (req, res) => {
  dbConfig.getDB().query('select * from performancedetail where feedback = "" ', (err, rows, fields) => {
    if (!err){
      res.send(rows);
    }    
    else
    console.log(err);
    })
});



//Update performance review details using empID
 app.put('/update-performnceReviewDetails', (req, res) => {
        let setData = "";
        let conditions = '';
        req.body.empID ? conditions = `employeeId = ${req.body.empID}` : '';
        dbConfig.getDB().query(`UPDATE performancedetail SET performanceCategory = '${req.body.performanceCategory}' where ${conditions}`,(err, rows, fields) =>{
          if (!err){
            dbConfig.getDB().query(`UPDATE performancedetail SET feedback = '${req.body.feedback}' where ${conditions}`,(err, rows, fields) =>{
              if (!err){
            res.send(rows);
          }    
          else
          console.log(err);

        })
      }
      else
          console.log(err);

      })
})

  
//get all employee list
app.get('/get-employeeList', (req, res) => {
  dbConfig.getDB().query(' Select e.id,e.full_name,p.performanceCategory,p.feedback,e.performanceDetailId,e.leadEmployeeId,e.mail,e.designation from employeeDetail e inner join performancedetail p on e.performanceDetailId = p.id;', (err, rows, fields) => {
    if (!err){
      res.send(rows);
    }    
    else
    console.log(err);
    })
});



//Update employee details using emp id
app.put('/update-employeeDetails', (req, res) => {
        let setData = "";
        let conditions = '';
        let nextCondition = ''
        req.body.id ? conditions = `id = ${req.body.id}` : '';
        req.body.performanceDetailId ? nextCondition = `id = ${req.body.performanceDetailId}` : '';
        console.log(`UPDATE employeedetail SET full_name = '${req.body.full_name}' where ${conditions}`);
          dbConfig.getDB().query(`UPDATE employeedetail SET full_name = '${req.body.full_name}' where ${conditions}`,(err, rows, fields) =>{
          if (!err){
            dbConfig.getDB().query(`UPDATE performancedetail SET performanceCategory = '${req.body.performanceCategory}' where ${nextCondition}`,(err, rows, fields) =>{
              if (!err){
                dbConfig.getDB().query(`UPDATE performancedetail SET feedback = '${req.body.feedback}' where ${nextCondition}`,(err, rows, fields) =>{
                  if (!err){
                    dbConfig.getDB().query(`UPDATE employeedetail SET mail = '${req.body.mail}' where ${nextCondition}`,(err, rows, fields) =>{
                      if (!err){
                        dbConfig.getDB().query(`UPDATE employeedetail SET designation = '${req.body.designation}' where ${nextCondition}`,(err, rows, fields) =>{
                          if (!err){
                            res.send(rows);
                          }    
                         else
                           console.log(err);
                         })
                      }    
                     else
                       console.log(err);
                     })
                  } 
                  else
                  console.log(err);   
                })
               }
               else
                console.log(err);
              })
            }
             else            
          console.log(err);

        })
  })



//Get performance review full list with feed back
app.get('/get-performanceReviewFullList', (req, res) => {
        dbConfig.getDB().query('select * from performancedetail', (err, rows, fields) => {
          if (!err){
            res.send(rows);
          }    
          else
          console.log(err);
          })
});


//Create Employee Details
app.post('/add-employeeDetails', (req, res) => {
              var dataToSet = {
                "id":req.body.id,
                "full_name":req.body.full_name,
                "mail":req.body.mail,
                "designation":req.body.designation,                
                "performanceDetailId": req.body.performanceDetailId,
                "leadEmployeeId": 1,
               }
              dbConfig.getDB().query('INSERT INTO employeedetail set ?', dataToSet, (err, rows, fields) => {
                if (!err){
                  res.send(rows);
                }    
                else
                console.log(err);
                })
});


//Create Registration for user 
app.post('/add-userDetail', (req, res) => {
                var dataToSet = {
                  "fullName":req.body.fullName,
                  "mail":req.body.mail,
                  "pass":req.body.pass,                
                  "userType": req.body.userType
                 }
                dbConfig.getDB().query('INSERT INTO userDetail set ?', dataToSet, (err, rows, fields) => {
                  if (!err){
                    res.send(rows);
                  }    
                  else
                  console.log(err);
                  })
                });
              app.put('/delete-employeeDetails', (req, res) => {
                let nextCondition ='';
                console.log(req.body);
                req.body.id ? nextCondition = `id = ${req.body.id}` : '';
                dbConfig.getDB().query(`delete from employeedetail where ${nextCondition}`,(err, rows, fields) => {
                  if (!err){
                    res.send(rows);
                  }    
                  else
                  console.log(err);
                  })
})


//Get User Details - Login Authentication
app.get('/get-userDetails', (req, res) => {
                  console.log(req.query.mail);
                  let conditon = `mail= '${req.query.mail}'`
                  dbConfig.getDB().query(`select * from userDetail where ${conditon}`, (err, rows, fields) => {
                    if (!err){
                      res.send(rows);
                    }    
                    else
                    console.log(err);
                    })
});

app.listen(PORT, function() {
    console.log('Server is running on PORT:',PORT);
});