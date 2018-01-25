'use strict';
module.exports = function(app){
    var minuteList = require('../controllers/minuteController');

    //minute routes
    app.route('/minutes')
    .get(minuteList.list_all_minutes)
    .post(minuteList.create_a_minute);

    app.route('minutes/:minuteId')
    .get(minuteList.read_a_minute)
    .put(minuteList.update_a_minute)
    .delete(minuteList.delete_a_minute);
}