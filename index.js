const express = require('express')
const app = express()
var AWS = require('aws-sdk');
AWS.config.region = 'eu-west-2';

// Create a bucket using bound parameters and put something in it.

var s3bucket = new AWS.S3({params: {Bucket: 'node.nicholas730'}});

// IMPORTANT: Make sure to change the bucket name from "myBucket" above to something unique.

s3bucket.createBucket(function() {
  var params = {Key: 'myKey2', Body: 'Helloooo!'};
  s3bucket.upload(params, function(err, data) {
    if (err) {
      console.log("Error uploading data: ", err);
    } else {
      console.log("Successfully uploaded data to myBucket/myKey");
    }
  });
});


app.get('/', (req, res) => {
  res.send('HEY!')
})

app.get('/rigs', (req, res) => {
  res.send('[{"id":1,"name":"Beretta T4400"},{"id":2,"name":"Geotool GTR 78000"}]')
})

app.get('/contacts', (req, res) => {
  res.send('[{"id":1,"company_description":"DV8 Development","name":"Stuart H","is_active":true}]')
})

app.listen(3000, () => console.log('Server running on port 3000'))
