import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios';
import { RiEdit2Fill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import { ToastContainer, toast } from 'react-toastify';

function StudentPage() {

    const [data, setData] = useState();

    const handleFetchData = async () => {
        try {
            const response = await axios.get('http://localhost:3500/studentdata');
            console.log(response.data);
            setData(response.data);
        } catch (err) {
            console.log(err);
        }
    };

    const deleteData = async (rollno) => {
        try {
            const response = await axios.delete(`http://localhost:3500/deletedata/${rollno}`);
            console.log(response.data);
            toast.success(response.data.message);
            handleFetchData();
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        handleFetchData();
    }, []);

    return (
        <Fragment>
            <div className='container-fluid'>
                <h1>student page</h1>
                <div className='row'>
                    <table class="table table-striped-columns">
                        <thead>
                            <tr>
                                <td>roll no</td>
                                <td>name</td>
                                <td>course</td>
                                <td>section</td>
                                <td>actions</td>
                            </tr>
                        </thead>

                        {
                            data ?

                                data.map((item) => (
                                    <tr>
                                        <td>{item.rollno}</td>
                                        <td>{item.name}</td>
                                        <td>{item.course}</td>
                                        <td>{item.section}</td>
                                        <td>
                                            <button className='me-3'><RiEdit2Fill /></button>
                                            <button onClick={()=>deleteData(item.rollno)}><MdDelete /></button>
                                        </td>
                                    </tr>
                                ))

                                : <label>no data</label>
                        }
                    </table>
                </div>
            </div>
            <ToastContainer/>
        </Fragment>
    )
}

export default StudentPage