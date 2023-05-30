const mongoose = require( 'mongoose' )

const instituteSchema = new mongoose.Schema( {
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    shortName: {
        type: String,
        required: true
    },
    tel: {
        type: String
    }


} )


const instituteModel = mongoose.model( "INSTUTUTE", instituteSchema )


module.exports = instituteModel