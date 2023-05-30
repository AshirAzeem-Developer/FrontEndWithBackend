import React, { useEffect, useState } from 'react'
import AAZScreenHeader from '../../components/AAZScreenHeader'
import { Add } from '@mui/icons-material'
import { Get } from '../../config/apibasemethods'
import AAZShowData from '../../components/AAZShowData'
import XosX from '../../Images/XOsX.gif'
const Student = () => {
    const [ data, setData ] = useState( [] );
    const [ loader, setLoader ] = useState( false )
    const dataKeys = [
        {
            displayName: "First Name"
        },
        {
            displayName: "Last Name"
        },
        {
            displayName: "Contact"
        },
        {
            displayName: "Email"
        },
        {
            displayName: "Edit / Delete "
        },
    ]
    // Screen Header Button List 
    const buttonList = [ { displayField: <Add version='contained' /> } ]



    useEffect( () => {
        setLoader( true )
        Get( 'student' ).then( ( res ) => {
            setLoader( false )
            // console.log( res.data.data );
            setData( res.data.data );
        } ).catch( ( err ) => {
            setLoader( false )
            console.log( err );
        } )
    }, [ data ] )



    return (
        <>
            <AAZScreenHeader screenTitle="Student" buttonList={ buttonList } />

            <div className="container-fluid align-items-center">
                <div className="row justify-content-center p-3 mx-auto">
                    <AAZShowData dataSource={ data } keys={ dataKeys } />
                </div>
            </div>
        </>

    )
}

export default Student

// { loader ? <img src={ XosX } alt="" width=" 20%" height="auto" className='w-25' /> : <AAZShowData dataSource={ data } keys={ dataKeys } /> }