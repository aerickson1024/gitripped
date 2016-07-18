var mongoose = require('mongoose'),
    bcrypt = require('bcrypt');

// Schema for the user object
var userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        lowercase: true,
        require: true
    },
    lastName: {
        type: String,
        lowercase: true,
        require: true
    },
    email: {
        type: String,
        lowercase: true,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
});

// Before a 'save' is done on the password, the password needs
// to be salted and hashed which will prevent
// the password from being hacked easily.
userSchema.pre('save', function(next) {
    var user = this;

    if (this.isModified('password') || this.isNew) {
        bcrypt.genSalt(10, function(err, salt) {
            if (err) {
                return next(err);
            }

            bcrypt.hash(user.password, salt, function(err, hash) {
                if (err) {
                    return next(err);
                }

                user.password = hash;
                next();
            });
        });
    } else {
        return next();
    }
});

// Compares two passwords
userSchema.methods.comparePassword = function(password, callback) {
    bcrypt.compare(password, this.password, function(err, isMatch) {
        if (err) {
            return callback(err);
        }

        callback(null, isMatch);
    });
}

module.exports = mongoose.model('user', userSchema);
