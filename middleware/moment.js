const moment = require('moment')
const moment2 = (req,res,next) => {
    console.log(moment().format('LLL'))
    next();
    };
    
module.exports = moment2

