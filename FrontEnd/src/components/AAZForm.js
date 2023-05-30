import * as React from 'react';
import AAZInput from './AAZInput';
import AAZRadio from './AAZRadio';

function AAZForm() {
    let StudentName = (e) => {
        console.log(e.target.value);
    }
    let FathertName = (e) => {
        console.log(e.target.value);
    }
    return (
        <>
            <div>
                <h1 className='p-2 d-flex justify-content-center'>My Form</h1>
                <div className='p-2 d-flex justify-content-center'><AAZInput onChange={StudentName} label={"StudentName"} /></div>
                <div className='p-2 d-flex justify-content-center'><AAZInput onChange={FathertName} label={"FatherName"} /></div>
                <div className='p-2 d-flex justify-content-center'><AAZInput label={"Contact"} /></div>
                <div className='p-2 d-flex justify-content-center'><AAZInput label={"CNIC"} /></div>
                <div className='p-2 d-flex justify-content-center'><AAZInput label={"Last qualification"} /></div>
                <div className='p-2 d-flex justify-content-center'><AAZInput label={"Course"} /></div>
                <div className='p-2 d-flex justify-content-center'><AAZInput label={"Intitute"} /></div>
                <div className='p-2 d-flex justify-content-center'><AAZInput label={"Section"} /></div>
                <div className='p-2 d-flex justify-content-center'><AAZInput label={"Email"} /></div>
                <div className='p-2 d-flex justify-content-center'><AAZInput label={"password"} /></div>
                <div className='p-2 d-flex justify-content-center'><AAZInput label={"City"} /></div>
                <div className='p-2 d-flex justify-content-center'><AAZInput label={"Country"} /></div>
                <div className='p-2 d-flex justify-content-center'><p>D.O.B:</p><input type="date" label="D.O.B"></input></div>
                <div className='p-2 d-flex justify-content-center'><AAZRadio label={"Gender"} /></div>
                <div className='p-2 d-flex justify-content-center'><AAZInput label={"Adrees"} /></div>
                <button>Submit</button>
            </div>
        </>
    )

}
export default AAZForm;

