// const fs = require( 'fs' )
// const http = require( 'http' )

// let courses = [
//     {
//         id: 1,
//         name: "DSA"
//     },
//     {
//         id: 2,
//         name: "cc"
//     },
//     {
//         id: 3,
//         name: "oop"
//     },
//     {
//         id: 4,
//         name: "LA"
//     },

// ]

// fs.readdir( './', ( err, file ) => {
//     if ( err ) {
//         console.log( err );

//     }
//     else {
//         console.log( file );
//     }
// } )

// fs.readFile( 'abc.txt', "utf-8", ( err, file ) => {
//     if ( err ) {
//         console.log( err );

//     } else {
//         console.log( file );
//     }
// } )


// fs.writeFile( 'abc.txt', "I am Writing in to ABC text File", ( err ) => {
//     if ( !err ) {
//         console.log( "Done" );

//     } else {
//         console.log( err );
//     }
// } )


// fs.appendFile( 'abc.txt', " \t This is appended Text", ( err ) => {
//     if ( !err ) {
//         console.log( "File Appended Successfully" );

//     } else {
//         console.log( err );
//     }
// } )

// const server = http.createServer( ( req, res ) => {
//     if ( req.url == "/courses" ) {
//         // res.write("Courses Route is working");
//         if ( req.method == "GET" ) {
//             res.write( JSON.stringify( courses ) )
//         }
//         if ( req.method == "POST" ) {
//             // req.body
//             res.write( JSON.stringify( courses ) )
//         }
//         res.end()
//     }

//     if ( req.url == "/users" ) {
//         res.write( "Users Route is working" )
//         res.end();
//     }
// } )

// server.listen( 5000, () => {
//     console.log( "Server is listening to port 5000 Yes i am Changing" );
// } )

// ============== >>>> EXPRESS JS AND MONGO DB <<<===============



const express = require( 'express' )
const mongoose = require( 'mongoose' )
require( 'dotenv' ).config();
const app = express();
const cors = require( 'cors' )

app.use( express.json() );
app.use( cors() );

const teacher = require( './Routes/SchoolRoutes/teacherRoute' )
const course = require( './Routes/SchoolRoutes/courseRoute' )
const student = require( './Routes/SchoolRoutes/studentRoute' )
const institute = require( './Routes/SchoolRoutes/instituteRoute' )
const user = require( './Routes/UserRoutes/userRoute' )

app.use( '/api/teacher', teacher )
app.use( '/api/courses', course )
app.use( '/api/student', student )
app.use( '/api/institute', institute )
app.use( '/api/user', user )

mongoose.connect( process.env.MONGO_URI ).then( () => {

    app.listen( process.env.PORT, () => {
        console.log( "Database connected Successfully And Server is listening on this port " );
    } )
} ).catch( ( err ) => { console.log( "Failed" + "\t " + err ); } )