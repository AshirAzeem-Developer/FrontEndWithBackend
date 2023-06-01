import React from 'react'
import AddStudent from './StudentDetailsForm'
import StudentDetails from './StudentDetailsForm'

const EditStudent = () => {
    return (
        <>
            <div className="container align-items-center py-5 ">
                <div className="row justify-content-center">

                    <h1 className='mx-5 p-3 '>Edit Student Data</h1>
                    <StudentDetails myClass="w-50" />

                </div>
            </div>
        </>
    )
}

export default EditStudent