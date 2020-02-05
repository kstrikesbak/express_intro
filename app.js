const express = require('express');
const app = express();
const path = require('path');
const uuid = require('uuid/v4')

const users = require('./models/Users.js')
const port = process.env.PORT || '8000';

const userRoutes = require('./routes/userRoutes')
app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use('/api/users', userRoutes)


// const {logMe} = require('./middleware/logger');

// const moment2 =require('./middleware/moment')

// app.use(logMe);
// app.use(moment2)




// const logger = (req, res, next) => {
//     console.log('Hello logger');
//     next();
// };

// app.use(logger);



// create middleware
// middleware is just a function 
// app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req,res) => {
    return res.send('Hello Express')
});

// '__dirname' folder we're in and public is the folder its pointing to 
// app. + followed by http method
// req and res created immediately when request handler performed
// app.get('/', (req, res) => {
//     res.send(path.join(__dirname, 'public'));
// });
//get all users 
app.get('/api/users', (req,res) => {
    res.json(users);
});

//get a single user
// app.get('/api/users/:id', (req,res) => {
//     // res.send(req.params.id);
//     const userExists = users.filter(user => user.id === parseInt(req.params.id));

//     if (userExists.length !== 0) {
//         return res.status(200).json(userExists[0]);
//     } else {
//         return res
//             .status(400)
//             .json({message:`User with id: ${req.params.id} does not exist`})
//     }
    
//     // const userExists = users.filter(user => user.id === parseInt(req.params.id));
//     // if (userExists.length === 0) {
//     //     console.log('not found')
//     // } else {
//     //     console.log(userExists)
//     // }
// });

//create user
// app.post('/', (req,res) => {
//     if(!req.body.name || !req.body.email) {
//         return res
//             .status(400)
//             .json({message: 'Please enter both a name and an email'});
//     }
//     const newUser = {};
//     newUser.id = uuid();
//     newUser.name = req.body.name;
//     newUser.email = req.body.email;
//     users.push(newUser);
//     return res.json(req.body);
// });

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});






