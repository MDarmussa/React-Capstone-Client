import { Button } from '@mui/material'
import {Link} from 'react-router-dom'
import React, { useState, setState, useEffect } from "react";
// import axios from 'axios';
 

function Home() {

    
    return (
        <>
            <div>
                <h1>Spence</h1>
                <h3>Manage you Wallet with just a few clicks</h3>
                <Button href='register' variant="outlined">get balanced</Button>
            </div>
        </>
    )
}

export default Home
