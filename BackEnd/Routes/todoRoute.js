const express = require( 'express' )


const todo = express.Router();

todo.get( '/', ( req, res ) => {
    res.send( "Get All todo Data" )
    console.log( "Get All todo Data " );
} )
todo.get( '/:id', ( req, res ) => { console.log( "Get Individual todo Data " ); } )
todo.post( '/', ( req, res ) => { console.log( "POST  todos Data " ); } )
todo.post( '/:id', ( req, res ) => { console.log( "POST todo Data By Id " ); } )
todo.get( '/:id', ( req, res ) => { console.log( "Delete Teacher Data " ); } )

module.exports = todo
