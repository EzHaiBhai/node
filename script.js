const copyToClipboard = async () => {
  try {
    const element = document.querySelector(".user-select-all");
    await navigator.clipboard.writeText(element.textContent);
  } catch (error) {
    console.error("Failed to copy to clipboard:", error);
  }
};

const copyNSQL = async () => {
  try {
    await navigator.clipboard.writeText(NSQL);
  } catch (error) {
    console.error("Failed to copy to clipboard:", error);
  }
};

const copySTRDEC = async () => {
  try {
    await navigator.clipboard.writeText(STRDEC);
  } catch (error) {
    console.error("Failed to copy to clipboard:", error);
  }
};

const copyQRYSTR = async () => {
  try {
    await navigator.clipboard.writeText(QRYSTR);
  } catch (error) {
    console.error("Failed to copy to clipboard:", error);
  }
};

const copyEVENT = async () => {
  try {
    await navigator.clipboard.writeText(EVENT);
  } catch (error) {
    console.error("Failed to copy to clipboard:", error);
  }
};

const EVENT = `
/ Import events module 
var events = require('events'); 
// Create an eventEmitter object 
var eventEmitter = new events.EventEmitter(); 
 
// Create an event handler as follows 
var connectHandler = function connected() { 
  console.log('connection succesful.'); 
 
 // Fire the data_received event 
  eventEmitter.emit('data_received'); 
} 
 
// Bind the connection event with the handler 
eventEmitter.on('connection', connectHandler); 
// Bind the data_received event with the anonymous function 
eventEmitter.on('data_received', function(){ 
 console.log('data received succesfully.'); 
}); 
// Fire the connection event 
eventEmitter.emit('connection'); 
console.log("Program Ended."); 
`;

const QRYSTR = `
querystring = require('querystring'); 
const obj1=querystring.parse('name=Ajay&company=XyzLtd'); 
console.log(obj1); 

const qs1=querystring.stringify({name:'Ajay',company:'XyzLtd'}); 
console.log(qs1); 
`;

const STRDEC = `
const StringDecoder = require('string_decoder').StringDecoder; 
const decoder = new StringDecoder('utf8'); 
 
const buf1 = new Buffer('this is a test'); 
console.log(decoder.write(buf1));//prints: this is a test

const buf2 = new Buffer('7468697320697320612074c3a97374', 'hex'); 
console.log(decoder.write(buf2));//prints: this is a test 
 
const buf3 = Buffer.from([0x62,0x75,0x66,0x66,0x65,0x72]); 
console.log(decoder.write(buf3));//prints: buffer 
`;

const NSQL = `
cmd: npm install mysql

//Create Connection:
var mysql = require('mysql'); 
var con = mysql.createConnection({ 
  host: "localhost", 
  port:"3306",
  user: "root", 
  password: "root" 
}); 
con.connect(function(err) { 
  if (err) throw err; 
  console.log("Connected!"); 
});

//Create DB:
con.connect(function(err) { 
  if (err) throw err; 
  console.log("Connected!");
  con.query("CREATE DATABASE Employee", function (err, result) { 
    if (err) throw err; 
    console.log("Database created"); 
  }); 
});


//Create Table:
con.connect(function(err) { 
  if (err) throw err; 
  console.log("Connected!"); 
  var sql = "CREATE TABLE employees (id INT, name VARCHAR(255), age INT(3), city VARCHAR(255))"; 
  con.query(sql, function (err, result) { 
    if (err) throw err; 
    console.log("Table created"); 
  }); 
}); 


//Insert Record:
con.connect(function(err) { 
  if (err) throw err; 
  console.log("Connected!"); 
  var sql = "INSERT INTO employees (id, name, age, city) VALUES ('1', 'Ajeet Kumar', 
  '27', 'Allahabad')"; 
  con.query(sql, function (err, result) { 
    if (err) throw err; 
    console.log("1 record inserted"); 
  });
});

//InsertMultiple Records
con.connect(function(err) { 
  if (err) throw err; 
  console.log("Connected!"); 
  var sql = "INSERT INTO employees (id, name, age, city) VALUES ?"; 
  var values = [ 
    ['2', 'Bharat Kumar', '25', 'Mumbai'], 
    ['3', 'John Cena', '35', 'Las Vegas'], 
    ['4', 'Ryan Cook', '15', 'CA'] 
  ]; 
  con.query(sql, [values], function (err, result) { 
    if (err) throw err; 
    console.log("Number of records inserted: " + result.affectedRows); 
  }); 
}); 

//SELECT :
con.connect(function(err) { 
  if (err) throw err; 
  con.query("SELECT * FROM employees", function (err, result) { 
    if (err) throw err; 
    console.log(result); 
  }); 
}); 

`;