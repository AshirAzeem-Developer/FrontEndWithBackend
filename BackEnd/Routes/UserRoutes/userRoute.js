const express = require( 'express' );
const route = express.Router();
const { sendResponse } = require( '../../helper/helper' );
const userModel = require( '../../Models/userModel' );

const bcrypt = require( 'bcrypt' )


route.post( '/signup', async ( req, res ) => {
    const { userName, email, password } = req.body;
    const obj = { userName, email, password };

    let requiredArr = [ "userName", "email", "password" ];

    let errArr = []
    requiredArr.forEach( ( x ) => {
        if ( !obj[ x ] ) {
            errArr.push( x );
        }
    } );


    if ( errArr.lenght > 0 ) {
        res.send( sendResponse( false, null, "Some Fields are Missing" ) ).status( 400 )
        return;
    }
    else {

        let hashPassword = await bcrypt.hash( obj.password, 10 );
        obj.password = hashPassword;
        const existingUser = await userModel.findOne( { email } )
        if ( existingUser ) {
            res.send( sendResponse( false, null, "This Email is Already Exist" ) )
                .status( 403 );
        }
        else {
            userModel.create( obj ).then( ( result ) => {
                res.send( sendResponse( true, result, "User Saved Successfully" ) )
            } ).catch( ( err ) => {
                res.send( sendResponse( false, err, "Internal Server Error" ) ).status( 400 )
            } )
        }
    }

} )

route.post( '/login', async ( req, res ) => {

    const { email, password } = req.body;
    const obj = { email, password };
    let requiredArr = [ "email", "password" ];
    let errArr = []
    requiredArr.forEach( ( x ) => {
        if ( !obj[ x ] ) {
            errArr.push( x );
        }
    } );
    if ( errArr.lenght > 0 ) {
        res.send( sendResponse( false, errArr, "Some Fields are Missing" ) ).status( 400 )
        return;
    } else {
        userModel.findOne( { email } ).then( async ( user ) => {
            let isConfirm = await bcrypt.compare( obj.password, user.password )
            console.log( isConfirm );

            if ( isConfirm ) {
                res.send( sendResponse( true, user, "Login Scuccessfully" ) )
            }
            else {
                res.send( sendResponse( false, null, "Credential Error" ) )
            }
        } ).catch( ( err ) => {
            res.send( sendResponse( false, errArr, "Fields Are Missing or User Doesnt Exist" ) )

        } )
    }








} )


module.exports = route