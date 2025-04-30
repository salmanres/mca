import axios from 'axios';
import React, { Fragment, useState } from 'react'

function AddDataPage() {

    const [stdata, setstdata] = useState({
        rollno: "",
        name: "",
        course: "",
        section:""
    });

    const getdata = (event) => {
        setstdata({
            ...stdata,
            [event.target.name] : event.target.value
        });
        console.log(stdata);
    };

    const register = async () => {
        try{
            const response = await axios.post('http://localhost:3500/addstudent', stdata);
            console.log(response.data);
            alert(response.data.message);
        }catch(e){
            console.log(e);
        }
    };

  return (
    <Fragment>
        <h1>add data</h1>
        <input type='number' placeholder='enter roll no' name='rollno' onInput={getdata}/>
        <input type='text' placeholder='enter name' name='name' onInput={getdata}/>
        <input type='text' placeholder='enter course' name='course' onInput={getdata}/>
        <input type='text' placeholder='enter section' name='sectiom' onInput={getdata}/>
        <button onClick={register}>ADD DATA</button>
    </Fragment>
  )
}

export default AddDataPage