const express = require( 'express' );
const courseModel = require( '../../Models/courseModel' )
const { sendResponse } = require( '../../helper/helper' );
const { findByIdAndUpdate } = require( '../../Models/courseModel' );
const course = express.Router();

course.get( '/', async ( req, res ) => {
    try {
        const result = await courseModel.find();

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
course.get( '/:id', ( req, res ) => {
    console.log( "Get Single course Data" );

} )
course.post( '/', async ( req, res ) => {
    let { name, duration, fee, shortName } = req.body
    try {
        let errArr = []
        if ( !name ) {
            errArr.push( "Required : name " )
        }
        if ( !duration ) {
            errArr.push( "Required : duration " )
        }
        if ( !fee ) {
            errArr.push( "Required : fee " )
        }
        if ( !shortName ) {
            errArr.push( "Required : shortName " )
        }
        if ( errArr.length > 0 ) {
            res.send( sendResponse( false, errArr, null, "Required All Fields" ) ).status( 400 );
            return

        }
        else {
            let obj = { name, duration, fee, shortName };
            let course = new courseModel( obj )
            await course.save();
            if ( !course ) {
                res.send( sendResponse( false, null, "Internal Server Error" ) ).status( 400 );
            } else {
                res.send( sendResponse( true, course, "Saved Successfully" ) ).status( 200 );
            }
        }
    }
    catch ( error ) {
        console.log( error );
        res.send( sendResponse( false, null, "Internal Server Error" ) );
    }

} )
course.put( '/:id', async ( req, res ) => {
    try {
        let id = req.params.id
        const result = await courseModel.findById( id )
        if ( !result ) {
            res.send( sendResponse( false, null, "No Data Found " ) ).status( 400 )


        } else {
            let updateResult = await findByIdAndUpdate( id, req.body, { new: true } )
            if ( !updateResult ) {
                res.send( sendResponse( false, null, "Error" ) ).status( 404 )

            }
            else {

                res.send( sendResponse( true, updateResult, "Updated Successflly" ) ).status( 200 )
            }

        }

    } catch ( error ) {
        res.send( sendResponse( false, null, "Error" ) ).status( 400 )
    }
} )
course.delete( '/:id', async ( req, res ) => {
    try {
        let id = req.params.id
        let result = await courseModel.findById( id )
        if ( !result ) {
            res.send( sendResponse( false, null, "No Data On this Id " ) ).status( 404 )

        } else {
            let delResult = await courseModel.findByIdAndDelete( id )
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
course.get( '/search', async ( req, res ) => {
    try {
        let { shortName } = req.body
        if ( shortName ) {
            let result = await courseModel.find( { shortName: shortName } )
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

module.exports = course