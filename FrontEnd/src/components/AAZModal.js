import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import AAZButton from './AAZButton';
import AAZInput from './AAZInput';
import { Post } from '../config/apibasemethods';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "40%",
    bgcolor: 'background.paper',
    border: 'none',
    boxShadow: 24,
    p: 4,
};

export default function AAZModal() {
    const [ open, setOpen ] = React.useState( false );
    const handleOpen = () => setOpen( true );
    const handleClose = () => setOpen( false );


    const [ data, setData ] = React.useState( "" );

    const addStudent = () => {
        console.log( data );
        Post( 'student', data ).then( ( res ) => {
            console.log( res )
            setOpen( false );
        } ).catch( ( err ) => {
            console.log( err )
        } )
    }
    return (
        <div>
            <AAZButton onClick={ handleOpen } label="Add" />
            <Modal
                open={ open }
                onClose={ handleClose }
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={ style }>
                    <Typography id="modal-modal-title" variant="h6" className='fs-4 fw-bold' component="h2">
                        Student Details
                    </Typography>
                    <div id="modal-modal-description" >
                        <div className='container align-items-center'>
                            <div className='row justify-content-center'>
                                <div className='col-md-10 mx-auto m-2 p-3'>
                                    <div className='m-3 w-100'>
                                        <AAZInput color="primary" myClass="w-100 " label="FirstName*" onChange={ ( e ) => { setData( { ...data, firstName: e.target.value } ) } } />
                                    </div>
                                    <div className='m-3 w-100'>
                                        <AAZInput color="primary" myClass="w-100 " label="LastName*" onChange={ ( e ) => { setData( { ...data, lastName: e.target.value } ) } } />

                                    </div>
                                    <div className='m-3 w-100'>
                                        <AAZInput color="primary" myClass="w-100 " type="email" label="Email*" onChange={ ( e ) => { setData( { ...data, email: e.target.value } ) } } />

                                    </div>
                                    <div className='m-3 w-100'>
                                        <AAZInput color="primary" myClass="w-100 " type="password" label="Password*"
                                            onChange={ ( e ) => { setData( { ...data, password: e.target.value } ) } }
                                        />

                                    </div>
                                    <div className='m-3 w-100'>
                                        <AAZInput color="primary" myClass="w-100 " type="number" label="Contact"
                                            onChange={ ( e ) => { setData( { ...data, contact: e.target.value } ) } }
                                        />

                                    </div>
                                    <div className='m-3 w-100 py-2'>
                                        <AAZButton label="Confirm" color="primary" onClick={ addStudent } />

                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>
                </Box>
            </Modal>
        </div>
    );
}