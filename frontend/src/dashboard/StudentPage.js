import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios';

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

    useEffect(() => {
        handleFetchData();
    }, []);

    return (
        <Fragment>
            <h1>student page</h1>
            {
                data ? 
                
                data.map((item)=>(
                    <h2>{item.name}</h2>
                ))
                
                : <label>no data</label>
            }
        </Fragment>
    )
}

export default StudentPage