const express = require( 'express' )
const studentModel = require( '../../Models/studentModel' )
const { sendResponse } = require( '../../helper/helper' )


const student = express.Router();

student.get( '/', async ( req, res ) => {

    try {

        let page = Number( req.query.page ) || 1;
        let limit = Number( req.query.limit ) || 2;

        let skip = ( page - 1 ) * limit

        const result = await studentModel.find().skip( skip ).limit( limit );
        // const result = await studentModel.find()

        if ( !result ) {
            res.send( sendResponse( false, null, "No Data Found" ) ).status( 404 )

        } else {
            res.send( sendResponse( true, result ) ).status( 200 )

        }
    } catch ( error ) {
        console.log( error );
        res.send( sendResponse( false, null, "Internal Server Error" ) ).status( 400 );
    }
} )
student.get( '/:id', async ( req, res ) => {
    try {
        let idRecieved = req.params.id
        if ( idRecieved ) {
            let result = await studentModel.findById( idRecieved )
            if ( !result ) {
                res.send( sendResponse( false, null, "No Data Found On this Id" ) ).status( 404 )
            }
            else {
                res.send( sendResponse( true, result ) ).status( 200 )
            }
        }
    } catch ( error ) {
        res.send( sendResponse( false, null, "Error" ) ).status( 400 )
    }

} )

student.post( '/', async ( req, res ) => {
    let { firstName, lastName, email, password, contact } = req.body
    try {
        let errArr = []
        if ( !firstName ) {
            errArr.push( "Required : firstName " )
        }
        if ( !lastName ) {
            errArr.push( "Required : lastName " )
        }
        if ( !email ) {
            errArr.push( "Required : email " )
        }
        if ( !password ) {
            errArr.push( "Required : password " )
        }
        if ( !contact ) {
            errArr.push( "Required : contact " )
        }
        if ( errArr.length > 0 ) {
            res.send( sendResponse( false, errArr, null, "Required All Fields" ) ).status( 404 );
            return

        }
        else {
            let obj = { firstName, lastName, email, password, contact }
            let student = new studentModel( obj )
            await student.save();
            if ( !student ) {
                res.send( sendResponse( false, null, "Internal Server Error" ) ).status( 400 );
            } else {
                res.send( sendResponse( true, student, "Saved Successfully" ) ).status( 200 );
            }
        }
    }
    catch ( error ) {
        console.log( error );
        res.send( sendResponse( false, null, "Internal Server Error" ) );
    }

} )

student.put( '/:id', async ( req, res ) => {
    try {
        let id = req.params.id
        let result = await studentModel.findById( id );
        if ( !result ) {
            res.send( sendResponse( false, null, "No Data Found" ) ).status( 400 )
        } else {
            let updateResult = await studentModel.findByIdAndUpdate( id, req.body, { new: true } );
            if ( !updateResult ) {
                res.send( sendResponse( false, null, "Error" ) ).status( 400 )

            } else {
                res.send( sendResponse( true, updateResult, "Updated Successfully" ) ).status( 200 )

            }

        }
    } catch ( error ) {
        res.send( sendResponse( false, null, "Error" ) ).status( 400 )
    }
} )

student.delete( '/:id', async ( req, res ) => {
    try {
        let id = req.params.id
        let result = await studentModel.findById( id )
        if ( !result ) {
            res.send( sendResponse( false, null, "No Data On this Id " ) ).status( 404 )

        } else {
            let delResult = await studentModel.findByIdAndDelete( id )
            if ( !delResult ) {
                res.send( sendResponse( true, null, "Error " ) ).status( 404 )

            }
            else {
                res.send( sendResponse( true, null, "Deleted Successfully " ) ).status( 200 )

            }
        }
    } catch ( error ) {
        res.send( sendResponse( false, null, "Error" ) ).status( 400 )

    }
} )

student.get( '/search', async ( req, res ) => {
    try {
        let { firstName } = req.body
        if ( firstName ) {
            let result = await studentModel.find( { firstName: firstName } )
            if ( !result ) {
                res.send( sendResponse( false, null, "No Data Found" ) ).status( 404 )
            }
            else {
                res.send( sendResponse( true, result ) ).status( 200 )
            }
        }
    } catch ( error ) {
        res.send( sendResponse( false, null, "Error" ) ).status( 400 )

    }
} )

module.exports = student