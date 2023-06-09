const mongoose = require( 'mongoose' )

const CourseSchema = new mongoose.Schema( {
    name: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    fee: {
        type: String,
        required: true
    },

    shortName: {
        type: String,
        required: true
    }
} )

const courseModel = mongoose.model( 'COURSE', CourseSchema )

module.exports = courseModel
