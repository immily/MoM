'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MinuteSchema = new Schema({
    createdDate: {
        type: Date,
        default: Date.now
    },
    project: {
        type: String,
        required: 'Kindly enter the project of the meeting.'
    },
    purpose: String,
    date: String,
    startTime: String,
    endTime: String,
    noteTaker: String,
    location: String,
    attendees:[String],
    agendas:[String],
    minutes: [String],
    actionItems:{
        type: [{
            action: String,
            responsibility: String,
            dueDate: String
        }]
    },
    nextMeeting:{
        type: [{
            date: String,
            time: String,
            duration: String
        }]
    }
});

module.exports = mongoose.model('Minutes', MinuteSchema);