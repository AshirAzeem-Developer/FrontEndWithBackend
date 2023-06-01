import React, { useEffect } from 'react'
import AAZInput from '../../../components/AAZInput'
import AAZButton from '../../../components/AAZButton'
import { useParams } from 'react-router-dom';
import { GetById, Put } from '../../../config/apibasemethods';

const StudentDetails = ( params ) => {
    const { myClass } = params
    const [ data, setData ] = React.useState( "" );

    let { id } = useParams()


    useEffect( () => {
        GetById( 'student', id ).then( ( res ) => {
            // console.log( res.data.data );
            setData( res.data.data )

        } ).catch( ( err ) => { console.log( err ) } )
        console.log( id )
    }, [] )
    const addData = () => {
        Put( 'student', id, data ).then( ( res ) => {
            console.log( res );
            window.history.back();
        } ).catch( ( err ) => {
            console.log( err )
        } )
    }
    return (
        <>
            <div className='container align-items-center'>
                <div className='row justify-content-center'>
                    <div className='col-md-10 mx-auto m-2 p-3'>
                        <div className='m-3 w-100'>
                            <AAZInput value={ data.firstName } color="primary" myClass={ myClass }
                                onChange={ ( e ) => { setData( { ...data, firstName: e.target.value } ) } } />
                        </div>
                        <div className='m-3 w-100'>
                            <AAZInput value={ data.lastName } color="primary" myClass={ myClass } onChange={ ( e ) => { setData( { ...data, lastName: e.target.value } ) } } />

                        </div>
                        <div className='m-3 w-100'>
                            <AAZInput value={ data.email } color="primary" myClass={ myClass } type="email" onChange={ ( e ) => { setData( { ...data, email: e.target.value } ) } } />

                        </div>
                        <div className='m-3 w-100'>
                            <AAZInput value={ data.password } color="primary" myClass={ myClass } type="password"
                                onChange={ ( e ) => { setData( { ...data, password: e.target.value } ) } }
                            />

                        </div>
                        <div className='m-3 w-100'>
                            <AAZInput value={ data.contact } color="primary" myClass={ myClass } type="number"
                                onChange={ ( e ) => { setData( { ...data, contact: e.target.value } ) } }
                            />

                        </div>
                        <div className='m-3 w-100 py-2'>
                            <AAZButton label="Confirm" color="primary" onClick={ addData } />

                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default StudentDetails