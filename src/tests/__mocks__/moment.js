const moment = require('moment');

export default (timezone = 0) => {
    return moment(timezone);
};