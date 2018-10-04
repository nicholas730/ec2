var AWS = require('aws-sdk');
AWS.config.region = 'eu-west-2';

exports.myDateTime = function () {
    return Date();
};

exports.getRigs = function(req, res){
    var s3 = new AWS.S3();
    var params = {Bucket: "offsite.axis", Key: "rigs.json"};
    s3.getObject(params, function(err, data) {
        if (err){
            res.send(err);
        }
        else{
            var dataBody = data.Body.toString('utf-8');
            res.send(dataBody);
        }
    });
};

exports.getContacts = function(req, res){
    var s3 = new AWS.S3();
    var params = {Bucket: "offsite.axis", Key: "contacts.json"};
    s3.getObject(params, function(err, data) {
        if (err){
            res.send(err);
        }
        else{
            var dataBody = data.Body.toString('utf-8');
            res.send(dataBody);
        }
    });
};