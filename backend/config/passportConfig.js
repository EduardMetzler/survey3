const passport = require('passport')
const localStrategy = require('passport-local').Strategy
const mongoose = require('mongoose')

var User = mongoose.model('User')

passport.use(
    new localStrategy({usernameField:'email'},
    (username,password,done)=>{
        User.findOne({email:username},
            (err,user)=>{
                if (err)
                return done(err)
                else if (!user)
                return done(null, false, {massage:'email not registrirt'})
                else if (!user.verifyPassword(password))
                return done (null, false, {message:'Wrong Password'})
                else
                return done(null,user)
            })
    })
)


// onfig/passportConfig.js
// const passport = require('passport');
// const localStrategy = require('passport-local').Strategy;
// const mongoose = require('mongoose');

// var User = mongoose.model('User');

// passport.use(
//     new localStrategy({ usernameField: 'email' },
//         (username, password, done) => {
//             User.findOne({ email: username },
//                 (err, user) => {
//                     if (err)
//                         return done(err);
//                     // unknown user
//                     else if (!user)
//                         return done(null, false, { message: 'Email is not registered' });
//                     // wrong password
//                     else if (!user.verifyPassword(password))
//                         return done(null, false, { message: 'Wrong password.' });
//                     // authentication succeeded
//                     else
//                         return done(null, user);
//                 });
//         })
// );
// 1
// 2
// 3

2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
// 25
// const passport = require('passport');
// const localStrategy = require('passport-local').Strategy;
// const mongoose = require('mongoose');
 
// var User = mongoose.model('User');
 
// passport.use(
//     new localStrategy({ usernameField: 'email' },
//         (username, password, done) => {
//             User.findOne({ email: username },
//                 (err, user) => {
//                     if (err)
//                         return done(err);
//                     // unknown user
//                     else if (!user)
//                         return done(null, false, { message: 'Email is not registered' });
//                     // wrong password
//                     else if (!user.verifyPassword(password))
//                         return done(null, false, { message: 'Wrong password.' });
//                     // authentication succeeded
//                     else
//                         return done(null, user);
//                 });
//         })
// );