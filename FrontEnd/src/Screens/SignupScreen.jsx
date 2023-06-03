import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import { Typography } from '@mui/material';
import AAZInputWithIcon from '../components/AAZInputWithIcon';
import { Email, SecurityOutlined } from '@mui/icons-material';

const SignUpScreen = () => {
    return (
        <>
            <div className='container-fluid ' style=
                {
                    {
                        backgroundImage: 'url("https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&w=800")',
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPositionY: 'center',
                        width: '100vw',
                        height: '100vh'
                    }
                }
            >
                <div className="container align-items-center">
                    <div className="row justify-content-center d-flex flex-column align-items-center mx-auto  py-5 ">
                        <div className="col-md-6 text-center pt-5 mt-5">
                            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="" class="bi bi-person-circle" viewBox="0 0 16 16">
                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                            </svg>
                            <Typography variant='h4' className='pt-3 fw-bold' style={ { fontFamily: "serif" } }>
                                Signup
                            </Typography>
                        </div>
                        <div className="col-md-6 text-center d-flex flex-column align-items-center p-3 mx-auto">
                            <div className="col-md-8 mx-auto m-2">
                                <AAZInputWithIcon type="text" inputHeading="UserName * " myIcon={ <PersonIcon fontSize='large' /> } />

                            </div>
                            <div className="col-md-8 mx-auto m-2">
                                <AAZInputWithIcon type='email' inputHeading="Email * " myIcon={ <Email fontSize='large' /> } />

                            </div>
                            <div className="col-md-8 mx-auto m-2">
                                <AAZInputWithIcon type='password' inputHeading="Password * " myIcon={ <SecurityOutlined fontSize='large' /> } />
                            </div>

                            <div className="col-md-8 mx-auto m-2 w-75 fs-5 " >
                                <button className='rounded-pill w-75  p-3 border-0 shadow-lg ' style={ {
                                    backgroundColor: 'black',
                                    color: 'white',
                                    letterSpacing: '1px',
                                    fontFamily: "serif"

                                } }>
                                    Signup
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div >
        </>
    )
}

export default SignUpScreen