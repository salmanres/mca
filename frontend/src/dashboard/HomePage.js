import React, { Fragment, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function HomePage() {

    const [count, setCount] = useState(0);
    const navigate = useNavigate();

    const increment = () => {
        setCount(count+1);
    };

    const decrement = () => {
        setCount(count-1);
    };

    const welcomemsg = () => {
        alert('welcome');
    };

    const register = () => {
        alert('registration successful');
        navigate(`/contactus/${count}`);
    }

    useEffect(()=>{
        welcomemsg();
    }, [count]);

    return (
        <Fragment>
            <h1>{count}</h1>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={register}>register</button>
        </Fragment>
    )
}

export default HomePage