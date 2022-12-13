var express = require('express');
var emp = require('request');
//const fetch = require('node-fetch');
var router = express.Router();
var cred ={
  "username":"bdpamked",
 "password":"U;qibKs[2KC607"

  //"username":"root",
  //"password":"bdpA!2o22"
       }
       //const restapi =  'localhost:8085';
       console.log("RESTAPI IP being used ", process.env.restapi)
       global.db_token_ip = process.env.restapi.trim()
   console.log('token ipx', global.db_token_ip)


var methods = {
  db_sign_in: function() {

   




        console.log('before');
        const fetch = require('node-fetch');
        console.log('hit it', cred);  
        
        //var dbtoken ='http://bdpamkedev.com:8085/ api/v3/token';
        var dbtoken ='http://' + global.db_token_ip +'/api/v3/token';
        //var bearer = 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyRGF0YSI6eyJ1c2VyIjoicm9vdCJ9LCJpYXQiOjE2NjQ0MTIxNDgsImV4cCI6MTY2NDQ0ODE0OH0.kSIhD1wreJ32HdhFcBdBwyWZ_47hl8mvc0j1JFDsnXY';
        //var holdres = res;
        console.log('dbtokenhere',dbtoken);
        const result =  fetch(dbtoken,(
        dbtoken,{
        method: 'POST',
        mode: 'cors', // no-cors, *cors, same-origin
        //withCredentials: false,
        //credentials: 'include',
        headers: {
          //  'Authorization': bearer,
            //'X-FP-API-KEY': 'iphone', //it can be iPhone or your any other attribute
            'Content-Type': 'application/json' },

            body:JSON.stringify(cred)
}))
.then((response) => response.json())
.then((data) => {
 console.log('Success:', data);
  global.DB_token = data.access_token;
  console.log('golbal:',  global.DB_token);
})
.catch((error) => {
  console.error('Error:', error);
})
}};       
 
//global.DB_token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyRGF0YSI6eyJ1c2VyIjoiYmRwYW1rZWQifSwiaWF0IjoxNjcwOTU3MjQ5LCJleHAiOjE2NzA5OTMyNDl9.7uIhihCzVg1fsPtK3UalPhRMtWI6azuxKFKR6ISqQTc'  
exports.data = methods;

