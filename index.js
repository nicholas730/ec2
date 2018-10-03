const express = require('express')
const app = express()
var AWS = require('aws-sdk');
AWS.config.region = 'us-west-2';

// Create a bucket using bound parameters and put something in it.

var s3bucket = new AWS.S3({params: {Bucket: 'myBucket'}});

// IMPORTANT: Make sure to change the bucket name from "myBucket" above to something unique.

s3bucket.createBucket(function() {
  var params = {Key: 'myKey', Body: 'Hello!'};
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

app.listen(3000, () => console.log('Server running on port 3000'))
