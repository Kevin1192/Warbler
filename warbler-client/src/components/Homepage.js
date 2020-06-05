import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => {
    return (
        <div className="home-hero">
            <h1>What's happing</h1>
            <h1>New to Warbler</h1>
            <Link to ='/signup' className='btn'>
                Sign up here
            </Link>
        </div>
    )
}

export default Homepage