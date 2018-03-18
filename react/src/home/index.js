import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

export default function Home() {

    

    return (
        <div>
            <button style={{margin: '50px'}}>
                <Link to="/login">Login</Link>
            </button>
            <button>
                <Link to="/signup">Signup</Link>                          
            </button>
        </div>
    )
}