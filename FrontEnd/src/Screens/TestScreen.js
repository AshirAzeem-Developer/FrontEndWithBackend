import React, { useEffect, useState } from 'react'
import { Get } from '../config/apibasemethods'
import AAZGrid from '../components/AAZGrid';
import AAZShowData from '../components/AAZShowData';
// import { getFBData, postFBData } from '../config/firebaseconfig/firbasemethods'
// import { Select } from '@mui/material';
// import AAZSelect from '../components/AAZSelect';

const TestScreen = () => {
    // const rand = Math.floor( Math.random() * 100 );
    // console.log( rand );
    // const [ options, setOptions ] = useState( [] );
    // const DropDownOptions = [
    //     { id: 1, option: "Ashir" },
    //     { id: 2, option: "Kabeer" },
    //     { id: 3, option: "huzaifa" },

    // ]
    const [ data, setData ] = useState( [] );
    useEffect( () => {
        // postFBData( "DropDownOptions", { DropDownOptions }, `${ "DRP-OPT_" + rand }` )
        //     .then( ( res ) => { console.log( res + "Data Sent Successfully" ); } )
        //     .catch( ( err ) => { console.log( err ); } )


        // getFBData( "DropDownOptions", `${ "DRP-OPT_" + 25 }` )
        //     .then( ( res ) => {
        //         setOptions( res.DropDownOptions )
        //         console.log( res.DropDownOptions );
        //     }
        //     ).catch( ( err ) => {
        //         console.log( err );
        //     }
        //     )

        Get( 'teacher' ).then( ( res => {
            console.log( res.data.data );
            setData( res.data.data )
        } ) ).catch( ( err ) => {
            console.log( err );
        } )



    }, [] )
    return (
        <>

            {/* <div>
                <AAZSelect dropDownHeading="Names" dropDownOptions={ options } />
            </div> */}

            <div>



                <AAZShowData dataSource={ data } keys={ [
                    { displayName: "Firstname" },
                    { displayName: "LastName" },
                    { displayName: "Contact" },
                    { displayName: "Email" },
                ] } />



            </div>




        </>
    )
}

export default TestScreen