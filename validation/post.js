var util = require('util');

var schema = {
    'title': {
        //in: 'query',
        notEmpty: true,
        optional: true, // won't validate if field is empty
        isLength: {
            options: [{ min: 2, max: 255 }],
            errorMessage: 'Must be between 2 and 255 chars long' // Error message for the validator, takes precedent over parameter message
        },
        //errorMessage: 'notEmpty'
        /*isEmail: {
            errorMessage: 'Invalid Email'
        }*/
    }
   /* 'password': {
        notEmpty: true,
        matches: {
            options: ['example', 'i'] // pass options to the validator with the options property as an array
            // options: [/example/i] // matches also accepts the full expression in the first parameter
        },
        errorMessage: 'Invalid Password' // Error message for the parameter
    }*/
};



var PostValidation = {

    titleValidation: function (req, res, next) {
        req.body.title = req.body.title.trim();
        req.checkBody(schema);

        var errors = req.validationErrors();
        if (errors) {
            res.send('There have been validation errors: ' + util.inspect(errors), 400);
            //res.end();
            return false;
        }
        return true;
    }

};

module.exports = PostValidation;

