const express = require('express')
const app = express()
var AWS = require('aws-sdk');
AWS.config.region = 'eu-west-2';

// Create a bucket using bound parameters and put something in it.

// var s3bucket = new AWS.S3({params: {Bucket: 'node.nicholas730'}});

// // IMPORTANT: Make sure to change the bucket name from "myBucket" above to something unique.

// s3bucket.createBucket(function() {
//   var params = {Key: 'myKey2', Body: 'Helloooo!'};
//   s3bucket.upload(params, function(err, data) {
//     if (err) {
//       console.log("Error uploading data: ", err);
//     } else {
//       console.log("Successfully uploaded data to myBucket/myKey");
//     }
//   });
// });


app.get('/', (req, res) => {
  res.send('HEY!')
})

app.get('/rigs', (req, res) => {
  res.send('[{"id":1,"name":"Beretta T4400"},{"id":2,"name":"Geotool GTR 78000"},{"id":3,"name":"Big Rigs"},{"id":4,"name":"Little Rigs"}]')
})

app.get('/contacts', (req, res) => {
  res.send('[{"id":1,"company_description":"DV8 Development","name":"Stuart H","is_active":true},{"id":2,"company_description":"DV8 Development","name":"Nick","is_active":true},{"id":3,"company_description":"DV8 Development","name":"Lots","is_active":true},{"id":4,"company_description":"DV8 Development","name":"of","is_active":true},{"id":5,"company_description":"DV8 Development","name":"others","is_active":true}]')
})

app.listen(3000, () => console.log('Server running on port 3000'))
